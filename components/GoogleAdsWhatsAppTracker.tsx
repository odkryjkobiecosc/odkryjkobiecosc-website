// components/GoogleAdsWhatsAppTracker.tsx

"use client";

import { useEffect, useRef } from "react";

type ConsentChoice = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  date: string;
  version: "1.0";
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const STORAGE_KEY = "odkryj_cookie_consent_v1";

const GOOGLE_ADS_CONVERSION_ID = "AW-17974081291/hsCZCLLV-5IcEIvu2vpC";

function isWhatsAppLink(link: HTMLAnchorElement): boolean {
  try {
    const url = new URL(link.href, window.location.origin);

    return (
      url.hostname === "wa.me" ||
      url.hostname === "api.whatsapp.com" ||
      url.hostname === "web.whatsapp.com"
    );
  } catch {
    return false;
  }
}

function readMarketingConsent(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const savedConsent = localStorage.getItem(STORAGE_KEY);

    if (!savedConsent) {
      return false;
    }

    const parsed = JSON.parse(savedConsent) as ConsentChoice;

    return parsed.version === "1.0" && parsed.marketing === true;
  } catch {
    return false;
  }
}

export default function GoogleAdsWhatsAppTracker() {
  const marketingConsentRef = useRef(false);

  useEffect(() => {
    marketingConsentRef.current = readMarketingConsent();

    const handleConsentUpdated = (event: Event) => {
      const customEvent = event as CustomEvent<ConsentChoice>;

      marketingConsentRef.current =
        customEvent.detail?.version === "1.0" &&
        customEvent.detail?.marketing === true;
    };

    const handleWhatsAppClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a");

      if (!(link instanceof HTMLAnchorElement)) {
        return;
      }

      if (!isWhatsAppLink(link)) {
        return;
      }

      const destinationUrl = link.href;
      const shouldOpenNewTab =
        link.target === "_blank" ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey;

      /*
       * Jeśli użytkownik nie wyraził zgody marketingowej,
       * nie wysyłamy konwersji Google Ads.
       * Link WhatsApp działa normalnie.
       */
      if (!marketingConsentRef.current) {
        return;
      }

      event.preventDefault();

      /*
       * Otwieramy pustą kartę natychmiast, aby przeglądarka
       * nie zablokowała jej jako wyskakującego okna.
       */
      const openedWindow = shouldOpenNewTab
        ? window.open("", "_blank", "noopener,noreferrer")
        : null;

      let redirected = false;

      const continueToWhatsApp = () => {
        if (redirected) {
          return;
        }

        redirected = true;

        if (openedWindow) {
          openedWindow.location.href = destinationUrl;
          return;
        }

        window.location.href = destinationUrl;
      };

      /*
       * Jeżeli Google tag nie został jeszcze załadowany,
       * nie blokujemy użytkownika i otwieramy WhatsApp.
       */
      if (typeof window.gtag !== "function") {
        continueToWhatsApp();
        return;
      }

      window.gtag("event", "conversion", {
        send_to: GOOGLE_ADS_CONVERSION_ID,
        event_callback: continueToWhatsApp,
        event_timeout: 1200,
      });

      /*
       * Awaryjne przekierowanie, gdy callback Google
       * z jakiegoś powodu nie zostanie wykonany.
       */
      window.setTimeout(continueToWhatsApp, 1300);
    };

    window.addEventListener("odkryjConsentUpdated", handleConsentUpdated);
    document.addEventListener("click", handleWhatsAppClick, true);

    return () => {
      window.removeEventListener("odkryjConsentUpdated", handleConsentUpdated);
      document.removeEventListener("click", handleWhatsAppClick, true);
    };
  }, []);

  return null;
}
