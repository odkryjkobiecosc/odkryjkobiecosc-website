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

    const parsedConsent = JSON.parse(
      savedConsent
    ) as Partial<ConsentChoice>;

    if (
      parsedConsent.version !== "1.0" ||
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

  const lastTrackedClickRef = useRef<{
    href: string;
    timestamp: number;
  } | null>(null);

  useEffect(() => {
    const savedConsent = readConsent();

    analyticsConsentRef.current = savedConsent?.analytics === true;
    marketingConsentRef.current = savedConsent?.marketing === true;

    const handleConsentUpdated = (event: Event) => {
      const customEvent = event as CustomEvent<ConsentChoice>;
      const consent = customEvent.detail;

      analyticsConsentRef.current =
        consent?.version === "1.0" &&
        consent.analytics === true;

      marketingConsentRef.current =
        consent?.version === "1.0" &&
        consent.marketing === true;
    };

    const handleDocumentClick = (event: MouseEvent) => {
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

      const hasAnalyticsConsent =
        analyticsConsentRef.current;

      const hasMarketingConsent =
        marketingConsentRef.current;

      /*
       * Bez zgód opcjonalnych nie wysyłamy pomiaru.
       * Sam link WhatsApp działa naturalnie.
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
       * GA4:
       * wysyłamy tylko przy zgodzie analitycznej.
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
       * Google Ads:
       * wysyłamy tylko przy zgodzie marketingowej.
       *
       * Nie stosujemy event_callback, preventDefault,
       * window.open ani opóźnionego przekierowania.
       */
      if (hasMarketingConsent) {
        window.gtag("event", "conversion", {
          send_to: GOOGLE_ADS_WHATSAPP_CONVERSION_ID,
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
      handleDocumentClick,
      true
    );

    return () => {
      window.removeEventListener(
        "odkryjConsentUpdated",
        handleConsentUpdated
      );

      document.removeEventListener(
        "click",
        handleDocumentClick,
        true
      );
    };
  }, []);

  return null;
}
