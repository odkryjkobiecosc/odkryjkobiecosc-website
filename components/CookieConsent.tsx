// components/CookieConsent.tsx
"use client";

import { useEffect, useState } from "react";

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

function createConsent(analytics: boolean, marketing: boolean): ConsentChoice {
  return {
    necessary: true,
    analytics,
    marketing,
    date: new Date().toISOString(),
    version: "1.0",
  };
}

function ensureGtag() {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  if (!window.gtag) {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
  }
}

function updateGoogleConsent(consent: ConsentChoice) {
  if (typeof window === "undefined") return;

  ensureGtag();

  window.gtag?.("consent", "update", {
    ad_storage: consent.marketing ? "granted" : "denied",
    analytics_storage: consent.analytics ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
  });

  window.dispatchEvent(
    new CustomEvent("odkryjConsentUpdated", {
      detail: consent,
    })
  );
}

function saveConsent(consent: ConsentChoice) {
  if (typeof window === "undefined") return;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  updateGoogleConsent(consent);
}

function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;

  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return null;
    }

    const parsed = JSON.parse(saved) as ConsentChoice;

    if (parsed.version !== "1.0") {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    const savedConsent = readConsent();

    if (savedConsent) {
      updateGoogleConsent(savedConsent);
      return;
    }

    setVisible(true);
  }, []);

  function acceptAll() {
    const consent = createConsent(true, true);
    saveConsent(consent);
    setVisible(false);
  }

  function rejectOptional() {
    const consent = createConsent(false, false);
    saveConsent(consent);
    setVisible(false);
  }

  function saveSettings() {
    const consent = createConsent(analytics, marketing);
    saveConsent(consent);
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="cookieConsent" role="dialog" aria-live="polite">
      <div className="cookieConsentInner">
        <div className="cookieConsentCopy">
          <p className="cookieConsentLabel">Prywatność i cookies</p>
          <h2>Używamy plików cookies</h2>
          <p>
            Korzystamy z cookies, aby mierzyć skuteczność reklam, analizować
            ruch na stronie i poprawiać jej działanie. Możesz zaakceptować
            wszystkie zgody, odrzucić opcjonalne albo wybrać ustawienia.
          </p>
        </div>

        {settingsOpen ? (
          <div className="cookieSettings">
            <label className="cookieOption">
              <input type="checkbox" checked disabled />
              <span>
                <strong>Niezbędne</strong>
                <small>Wymagane do podstawowego działania strony.</small>
              </span>
            </label>

            <label className="cookieOption">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(event) => setAnalytics(event.target.checked)}
              />
              <span>
                <strong>Analityczne</strong>
                <small>Pomagają analizować ruch i skuteczność strony.</small>
              </span>
            </label>

            <label className="cookieOption">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(event) => setMarketing(event.target.checked)}
              />
              <span>
                <strong>Marketingowe</strong>
                <small>
                  Pozwalają mierzyć reklamy, konwersje i działania remarketingowe.
                </small>
              </span>
            </label>
          </div>
        ) : null}

        <div className="cookieConsentActions">
          <button type="button" className="cookieButton primaryCookie" onClick={acceptAll}>
            Akceptuję
          </button>

          <button type="button" className="cookieButton" onClick={rejectOptional}>
            Odrzucam
          </button>

          {settingsOpen ? (
            <button type="button" className="cookieButton" onClick={saveSettings}>
              Zapisz ustawienia
            </button>
          ) : (
            <button
              type="button"
              className="cookieButton"
              onClick={() => setSettingsOpen(true)}
            >
              Ustawienia
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
