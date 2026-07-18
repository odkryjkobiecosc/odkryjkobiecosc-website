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
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const STORAGE_KEY = "odkryj_cookie_consent_v1";

const GOOGLE_ADS_CONVERSION_ID =
  "AW-17974081291/hsCZCLLV-5IcEIvu2vpC";

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

function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const savedConsent = window.localStorage.getItem(STORAGE_KEY);

    if (!savedConsent) {
      return null;
    }

    const parsed = JSON.parse(savedConsent) as ConsentChoice;

    if (parsed.version !== "1.0") {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

function ensureGtag(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
  }
}

export default function GoogleAdsWhatsAppTracker() {
  const analyticsConsentRef = useRef(false);
  const marketingConsentRef = useRef(false);

  useEffect(() => {
    const savedConsent = readConsent();

    analyticsConsentRef.current = savedConsent?.analytics === true;
    marketingConsentRef.current = savedConsent?.marketing === true;

    const handleConsentUpdated = (event: Event) => {
      const customEvent = event as CustomEvent<ConsentChoice>;

      analyticsConsentRef.current =
        customEvent.detail?.version === "1.0" &&
        customEvent.detail.analytics === true;

      marketingConsentRef.current =
        customEvent.detail?.version === "1.0" &&
        customEvent.detail.marketing === true;
    };

    const handleWhatsAppClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) {
        return;
      }

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

      const hasAnalyticsConsent = analyticsConsentRef.current;
      const hasMarketingConsent = marketingConsentRef.current;

      /*
       * Nie zatrzymujemy kliknięcia i nie otwieramy pustej karty.
       * Dzięki temu Safari i iOS mogą od razu przekazać użytkownika
       * do aplikacji WhatsApp bez ryzyka pozostania na about:blank.
       */

      if (!hasAnalyticsConsent && !hasMarketingConsent) {
        return;
      }

      ensureGtag();

      if (typeof window.gtag !== "function") {
        return;
      }

      const destinationUrl = link.href;

      /*
       * Zdarzenie GA4:
       * wysyłamy wyłącznie po zgodzie analitycznej.
       */
      if (hasAnalyticsConsent) {
        window.gtag("event", "whatsapp_click", {
          event_category: "contact",
          event_label: "WhatsApp",
          link_url: destinationUrl,
          page_location: window.location.href,
          page_path: window.location.pathname,
          transport_type: "beacon",
        });
      }

      /*
       * Konwersja Google Ads:
       * wysyłamy wyłącznie po zgodzie marketingowej.
       * Nie używamy event_callback ani opóźnionego przekierowania,
       * ponieważ naturalne otwarcie WhatsApp ma pierwszeństwo.
       */
      if (hasMarketingConsent) {
        window.gtag("event", "conversion", {
          send_to: GOOGLE_ADS_CONVERSION_ID,
          transport_type: "beacon",
        });
      }
    };

    window.addEventListener(
      "odkryjConsentUpdated",
      handleConsentUpdated
    );

    document.addEventListener(
      "click",
      handleWhatsAppClick,
      true
    );

    return () => {
      window.removeEventListener(
        "odkryjConsentUpdated",
        handleConsentUpdated
      );

      document.removeEventListener(
        "click",
        handleWhatsAppClick,
        true
      );
    };
  }, []);

  return null;
}
