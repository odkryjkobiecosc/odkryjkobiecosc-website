// components/Header.tsx

import { Allura } from "next/font/google";

const signatureFont = Allura({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-signature",
});

type HeaderProps = {
  poradnikiHref?: string;
  faqHref?: string;
  kontaktHref?: string;
};

export default function Header({
  poradnikiHref = "/poradnik",
  faqHref = "/#faq",
  kontaktHref = "/#kontakt",
}: HeaderProps) {
  return (
    <nav
      className={`nav ${signatureFont.variable}`}
      aria-label="Nawigacja główna"
    >
      <a
        className="brand"
        href="/"
        aria-label="Odkryj Kobiecość — Marta Krajewska Photography"
      >
        <span className="brandTitle">
          <span>Odkryj</span>
          <strong>Kobiecość</strong>
        </span>

        <span
          className="brandSignature brandSignatureDesktop"
          aria-hidden="true"
        >
          by Marta Krajewska Photography
        </span>

        <span
          className="brandSignature brandSignatureMobile"
          aria-hidden="true"
        >
          by Marta Krajewska Photography
        </span>

        <span
          className="brandSignature brandSignatureCompact"
          aria-hidden="true"
        >
          by Marta Krajewska Photo
        </span>
      </a>

      <div className="navLinks">
        <a href="/sesja-kobieca-gdansk">Sesja kobieca</a>
        <a href="/sesja-biznesowa-gdansk">Biznesowa</a>
        <a href={poradnikiHref}>Poradniki</a>
        <a href={faqHref}>FAQ</a>
        <a href={kontaktHref}>Kontakt</a>
      </div>
    </nav>
  );
}
