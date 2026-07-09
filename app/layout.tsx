// app/layout.tsx
import type { Metadata, Viewport } from "next";
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
      </body>
    </html>
  );
}
