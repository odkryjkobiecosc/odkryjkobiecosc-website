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

    gtag?: (
      command: "event",
      eventName: string,
      parameters?: {
        send_to?: string;
        event_callback?: () => void;
        event_timeout?: number;
        [key: string]: unknown;
      }
    ) => void;
  }
}

const STORAGE_KEY = "odkryj_cookie_consent_v1";

const GOOGLE_ADS_WHATSAPP_CONVERSION_ID =
  "AW-17974081291/VWGYCLKqqtIcEIvu2vpC";

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
    const savedConsent = localStorage.getItem(STORAGE_KEY);

    if (!savedConsent) {
      return null;
    }

    const parsedConsent = JSON.parse(savedConsent) as ConsentChoice;

    if (
      parsedConsent?.necessary !== true ||
      typeof parsedConsent.analytics !== "boolean" ||
      typeof parsedConsent.marketing !== "boolean"
    ) {
      return null;
    }

    return parsedConsent;
  } catch {
    return null;
  }
}

function sendWhatsAppConversion(): void {
  const consent = readConsent();

  // Konwersję reklamową wysyłamy dopiero po zgodzie marketingowej.
  if (!consent?.marketing) {
    return;
  }

  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_WHATSAPP_CONVERSION_ID,
    event_timeout: 2000,
  });
}

export default function GoogleAdsWhatsAppTracker() {
  const lastTrackedClickRef = useRef<{
    href: string;
    timestamp: number;
  } | null>(null);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
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

      /*
        Ochrona przed podwójnym wysłaniem tego samego kliknięcia,
        np. przy podwójnej obsłudze zdarzeń przez przeglądarkę.
      */
      const now = Date.now();
      const previousClick = lastTrackedClickRef.current;

      if (
        previousClick &&
        previousClick.href === link.href &&
        now - previousClick.timestamp < 1000
      ) {
        return;
      }

      lastTrackedClickRef.current = {
        href: link.href,
        timestamp: now,
      };

      sendWhatsAppConversion();
    };

    document.addEventListener("click", handleDocumentClick, {
      capture: true,
    });

    return () => {
      document.removeEventListener("click", handleDocumentClick, {
        capture: true,
      });
    };
  }, []);

  return null;
}
