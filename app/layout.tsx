// app/layout.tsx

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import "./globals.css";

export const metadata: Metadata = {
  title: "Odkryj Kobiecość | Profesjonalne sesje kobiece Trójmiasto",
  description:
    "Profesjonalna sesja kobieca, biznesowa i premium w Trójmieście. Doświadczenie, które pozwala zobaczyć siebie w bardziej pewnej, kobiecej i świadomej odsłonie.",
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
              window.dataLayer = window.dataLayer || [];

              function gtag() {
                window.dataLayer.push(arguments);
              }

              gtag('js', new Date());
              gtag('config', 'AW-17974081291');
            `,
          }}
        />
      </body>
    </html>
  );
}
