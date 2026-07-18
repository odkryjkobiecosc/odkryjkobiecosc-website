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
    const savedConsent = window.localStorage.getItem(STORAGE_KEY);

    if (!savedConsent) {
      return null;
    }

    const parsedConsent = JSON.parse(savedConsent) as Partial<ConsentChoice>;

    if (
      parsedConsent.necessary !== true ||
      typeof parsedConsent.analytics !== "boolean" ||
      typeof parsedConsent.marketing !== "boolean"
    ) {
      return null;
    }

    return parsedConsent as ConsentChoice;
  } catch {
    return null;
  }
}

function sendWhatsAppConversion(): void {
  if (typeof window === "undefined") {
    return;
  }

  const consent = readConsent();

  // Konwersję Google Ads wysyłamy wyłącznie po zgodzie marketingowej.
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

      const now = Date.now();
      const previousClick = lastTrackedClickRef.current;

      // Ochrona przed podwójnym naliczeniem tego samego kliknięcia.
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

    document.addEventListener("click", handleDocumentClick, true);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
    };
  }, []);

  return null;
}
