// app/layout.tsx

import type { Metadata, Viewport } from "next";
import Script from "next/script";

import CookieConsent from "../components/CookieConsent";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import GoogleAdsWhatsAppTracker from "../components/GoogleAdsWhatsAppTracker";

import "./globals.css";

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

        {/* Rejestruje każde kliknięcie w link WhatsApp */}
        <GoogleAdsWhatsAppTracker />

        {/* Domyślnie blokujemy zgody reklamowe/analityczne do czasu decyzji użytkownika */}
        <Script
          id="google-consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];

              function gtag() {
                window.dataLayer.push(arguments);
              }

              gtag('consent', 'default', {
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

        {/* Podstawowy Google tag - Google Ads */}
        <Script
          id="google-ads-gtag"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17974081291"
          strategy="afterInteractive"
        />

        <Script
          id="google-ads-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('js', new Date());

              gtag('config', 'AW-17974081291');
            `,
          }}
        />
      </body>
    </html>
  );
}
