// components/GoogleAdsWhatsAppTracker.tsx

"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      parameters?: {
        send_to?: string;
        event_callback?: () => void;
        event_timeout?: number;
      }
    ) => void;
  }
}

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

export default function GoogleAdsWhatsAppTracker() {
  useEffect(() => {
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

    document.addEventListener("click", handleWhatsAppClick, true);

    return () => {
      document.removeEventListener("click", handleWhatsAppClick, true);
    };
  }, []);

  return null;
}
