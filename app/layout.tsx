// app/layout.tsx

import type { Metadata, Viewport } from "next";
import Script from "next/script";

import CookieConsent from "../components/CookieConsent";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import GoogleAdsWhatsAppTracker from "../components/GoogleAdsWhatsAppTracker";

import "./globals.css";

const GOOGLE_ADS_ID = "AW-17974081291";
const GA4_ID = "G-HRM14LHKYT";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.odkryjkobiecosc.pl"),

  title: "Odkryj Kobiecość | Profesjonalne sesje kobiece Trójmiasto",

  description:
    "Profesjonalna sesja kobieca, biznesowa i premium w Trójmieście. Doświadczenie, które pozwala zobaczyć siebie w bardziej pewnej, kobiecej i świadomej odsłonie.",

  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>
        {children}

        <FloatingWhatsApp />

        {/* Baner zgód cookies */}
        <CookieConsent />

        {/* Rejestruje każde kliknięcie w link WhatsApp jako konwersję Google Ads */}
        <GoogleAdsWhatsAppTracker />

        {/* Consent Mode: domyślnie blokujemy zgody reklamowe/analityczne do czasu decyzji użytkownika */}
        <Script
          id="google-consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];

              window.gtag = window.gtag || function() {
                window.dataLayer.push(arguments);
              };

              window.gtag('consent', 'default', {
                ad_storage: 'denied',
                analytics_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                functionality_storage: 'granted',
                security_storage: 'granted',
                wait_for_update: 500
              });
            `,
          }}
        />

        {/* Jeden Google tag dla Google Ads + GA4 */}
        <Script
          id="google-tag"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />

        <Script
          id="google-tag-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];

              window.gtag = window.gtag || function() {
                window.dataLayer.push(arguments);
              };

              window.gtag('js', new Date());

              window.gtag('config', '${GOOGLE_ADS_ID}');
              window.gtag('config', '${GA4_ID}');
            `,
          }}
        />
      </body>
    </html>
  );
}
