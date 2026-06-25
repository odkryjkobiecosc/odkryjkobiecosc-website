import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Odkryj Kobiecość | Profesjonalne sesje kobiece Trójmiasto",
  description:
    "Profesjonalna sesja kobieca, biznesowa i premium w Trójmieście. Doświadczenie, które pozwala zobaczyć siebie w bardziej pewnej, kobiecej i świadomej odsłonie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
