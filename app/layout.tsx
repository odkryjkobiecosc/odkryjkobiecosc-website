// app/layout.tsx

import type { Metadata, Viewport } from "next";
import Script from "next/script";

import CookieConsent from "../components/CookieConsent";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import GoogleAdsWhatsAppTracker from "../components/GoogleAdsWhatsAppTracker";

import "./globals.css";

const SITE_URL = "https://www.odkryjkobiecosc.pl";
const GOOGLE_ADS_ID = "AW-17974081291";
const GA4_ID = "G-HRM14LHKYT";

const pageTitle =
  "Odkryj Kobiecość | Profesjonalne sesje kobiece Trójmiasto";

const pageDescription =
  "Profesjonalna sesja kobieca, biznesowa i premium w Trójmieście. Doświadczenie, które pozwala zobaczyć siebie w bardziej pewnej, kobiecej i świadomej odsłonie.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Odkryj Kobiecość",
  alternateName: "Marta Krajewska Photo",
  description: pageDescription,
  url: SITE_URL,
  logo: `${SITE_URL}/icon`,
  image: `${SITE_URL}/opengraph-image`,
  email: "krajewskaphoto@gmail.com",
  telephone: "+48666091909",
  priceRange: "550-950 PLN",

  areaServed: [
    {
      "@type": "City",
      name: "Gdańsk",
    },
    {
      "@type": "City",
      name: "Gdynia",
    },
    {
      "@type": "City",
      name: "Sopot",
    },
    {
      "@type": "AdministrativeArea",
      name: "Trójmiasto",
    },
  ],

  address: {
    "@type": "PostalAddress",
    addressLocality: "Gdańsk",
    addressRegion: "pomorskie",
    addressCountry: "PL",
  },

  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "krajewskaphoto@gmail.com",
    telephone: "+48666091909",
    availableLanguage: ["pl"],
  },

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Pakiety sesji kobiecych",

    itemListElement: [
      {
        "@type": "Offer",
        name: "ESSENCE",
        price: "550",
        priceCurrency: "PLN",

        itemOffered: {
          "@type": "Service",
          name: "Sesja kobieca ESSENCE",
          serviceType: "Profesjonalna sesja kobieca",
          areaServed: "Trójmiasto",
        },
      },
      {
        "@type": "Offer",
        name: "SIGNATURE",
        price: "800",
        priceCurrency: "PLN",

        itemOffered: {
          "@type": "Service",
          name: "Sesja kobieca SIGNATURE",
          serviceType: "Sesja kobieca lub biznesowa",
          areaServed: "Trójmiasto",
        },
      },
      {
        "@type": "Offer",
        name: "PRESTIGE",
        price: "950",
        priceCurrency: "PLN",

        itemOffered: {
          "@type": "Service",
          name: "Sesja kobieca PRESTIGE",
          serviceType: "Sesja kobieca i wizerunkowa premium",
          areaServed: "Trójmiasto",
        },
      },
    ],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: pageTitle,
  description: pageDescription,

  applicationName: "Odkryj Kobiecość",

  authors: [
    {
      name: "Marta Krajewska Photo",
    },
  ],

  creator: "Marta Krajewska Photo",
  publisher: "Marta Krajewska Photo",

  keywords: [
    "sesja kobieca Gdańsk",
    "sesja kobieca Trójmiasto",
    "fotograf kobiecy Gdańsk",
    "sesja biznesowa Gdańsk",
    "sesja wizerunkowa Gdańsk",
    "sesja premium Trójmiasto",
    "fotograf Gdańsk",
    "Marta Krajewska Photo",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/",
    siteName: "Odkryj Kobiecość",
    title: pageTitle,
    description: pageDescription,

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Odkryj Kobiecość — profesjonalne sesje kobiece, biznesowe i premium w Trójmieście",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/opengraph-image"],
  },

  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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

        {/* Pływający przycisk WhatsApp */}
        <FloatingWhatsApp />

        {/* Baner zgód cookies */}
        <CookieConsent />

        {/*
          Globalnie wykrywa kliknięcia we wszystkie linki WhatsApp:
          wa.me
          api.whatsapp.com
          web.whatsapp.com
        */}
        <GoogleAdsWhatsAppTracker />

        {/* Dane strukturalne dla Google */}
        <Script
          id="structured-data-local-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        {/*
          Consent Mode:
          domyślnie blokujemy analitykę i reklamę
          do czasu decyzji użytkownika.
        */}
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

        {/* Główny Google tag dla Google Ads */}
        <Script
          id="google-tag"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />

        {/* Konfiguracja Google Ads i GA4 */}
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
