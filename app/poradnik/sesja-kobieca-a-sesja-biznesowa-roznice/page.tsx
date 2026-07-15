// app/poradnik/sesja-kobieca-a-sesja-biznesowa-roznice/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

import gallery01 from "../../../public/images/gallery/gallery-01.webp";
import gallery03 from "../../../public/images/gallery/gallery-03.webp";
import gallery04 from "../../../public/images/gallery/gallery-04.webp";
import gallery05 from "../../../public/images/gallery/gallery-05.webp";
import gallery09 from "../../../public/images/gallery/gallery-09.webp";
import gallery10 from "../../../public/images/gallery/gallery-10.webp";

const SITE_URL = "https://www.odkryjkobiecosc.pl";

const pageTitle =
  "Sesja kobieca a sesja biznesowa | Czym się różnią i co wybrać?";

const pageDescription =
  "Czym różni się sesja kobieca od sesji biznesowej i wizerunkowej? Sprawdź, kiedy wybrać sesję kobiecą, kiedy biznesową, a kiedy połączyć oba kierunki.";

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, chciałabym zapytać, czy lepsza będzie dla mnie sesja kobieca czy biznesowa."
);

const whatsappLink = `https://wa.me/48666091909?text=${whatsappMessage}`;

const imageCoverStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
} as const;

const feminineSession = [
  "większy nacisk na emocję, kobiecość i doświadczenie",
  "kadry bardziej osobiste, eleganckie lub sensualne",
  "czas tylko dla siebie, bez celu zawodowego",
  "pomoc w zobaczeniu siebie inaczej",
  "stylizacja dopasowana do kobiecego klimatu",
  "większa swoboda w nastroju, świetle i charakterze zdjęć",
];

const businessSession = [
  "większy nacisk na profesjonalny wizerunek",
  "zdjęcia do LinkedIn, strony internetowej i social mediów",
  "kadry budujące zaufanie i wiarygodność",
  "styl dopasowany do branży, marki i klienta",
  "możliwość wykorzystania zdjęć w ofercie i komunikacji",
  "połączenie kompetencji, osobowości i estetyki premium",
];

const combinedSession = [
  "chcesz zdjęcia do marki osobistej, ale nie chcesz wyglądać sztywno",
  "potrzebujesz kadrów na LinkedIn i bardziej kobiecych portretów",
  "prowadzisz usługi premium i chcesz pokazać osobowość",
  "budujesz ekspercki wizerunek, ale zależy Ci na naturalności",
  "chcesz jeden materiał do strony, social mediów i komunikacji osobistej",
  "zależy Ci na profesjonalnym efekcie bez utraty kobiecości",
];

const sections = [
  {
    title: "1. Sesja kobieca jest bardziej osobista",
    text: "Sesja kobieca najczęściej nie zaczyna się od pytania: gdzie wykorzystasz zdjęcia? Zaczyna się raczej od tego, jak chcesz siebie zobaczyć. Może być prezentem dla siebie, momentem po zmianie życiowej albo sposobem na odzyskanie kontaktu z kobiecością.",
  },
  {
    title: "2. Sesja biznesowa ma konkretny cel wizerunkowy",
    text: "Sesja biznesowa lub wizerunkowa jest bardziej zadaniowa. Zdjęcia mają pracować na Twoją markę: w profilu LinkedIn, na stronie www, w ofercie, social mediach, prezentacjach albo komunikacji eksperckiej.",
  },
  {
    title: "3. Sesja wizerunkowa może być kobieca",
    text: "Profesjonalny wizerunek nie musi być sztywny. Dla wielu kobiet najlepszym rozwiązaniem jest sesja, która łączy kompetencje z kobiecością, spokojem, elegancją i naturalnością.",
  },
  {
    title: "4. Różnica jest w intencji, nie tylko w pozowaniu",
    text: "W sesji kobiecej intencją jest często emocja i doświadczenie. W sesji biznesowej — komunikacja i wiarygodność. Pozowanie, światło i stylizacja mogą być podobne, ale cel zdjęć jest inny.",
  },
  {
    title: "5. Można połączyć oba kierunki w jednej sesji",
    text: "To bardzo dobre rozwiązanie dla kobiet prowadzących marki osobiste, gabinety, usługi premium albo działalność ekspercką. Część zdjęć może być bardziej biznesowa, a część bardziej kobieca i osobista.",
  },
  {
    title: "6. Najlepszy wybór zależy od tego, gdzie zdjęcia mają pracować",
    text: "Jeśli zdjęcia są tylko dla Ciebie — wybierz sesję kobiecą. Jeśli mają wspierać markę — wybierz biznesową. Jeśli chcesz połączyć profesjonalizm z kobiecą energią, najlepsza będzie sesja kobieco-wizerunkowa.",
  },
];

const faqs = [
  {
    question: "Czym różni się sesja kobieca od sesji biznesowej?",
    answer:
      "Sesja kobieca jest bardziej osobista i emocjonalna, a sesja biznesowa jest bardziej nastawiona na profesjonalny wizerunek, markę osobistą i wykorzystanie zdjęć w komunikacji zawodowej.",
  },
  {
    question: "Czy sesja biznesowa może być kobieca?",
    answer:
      "Tak. Sesja biznesowa nie musi być sztywna. Może być elegancka, kobieca, naturalna i nadal profesjonalna.",
  },
  {
    question: "Czy mogę zrobić jedną sesję kobiecą i biznesową?",
    answer:
      "Tak. Można zaplanować sesję tak, aby część zdjęć była bardziej wizerunkowa, a część bardziej kobieca i osobista.",
  },
  {
    question: "Co wybrać, jeśli potrzebuję zdjęć na LinkedIn?",
    answer:
      "Najlepiej wybrać sesję biznesową lub kobieco-wizerunkową. Dzięki temu zdjęcia będą profesjonalne, ale nadal naturalne i spójne z Tobą.",
  },
  {
    question: "Co wybrać, jeśli chcę zrobić coś tylko dla siebie?",
    answer:
      "Wtedy najlepszym wyborem będzie sesja kobieca. Jej celem jest doświadczenie, emocja i zobaczenie siebie w innej odsłonie.",
  },
  {
    question: "Jak zdecydować, która sesja będzie lepsza?",
    answer:
      "Najprościej napisać do Marty na WhatsApp i opisać, do czego potrzebujesz zdjęć. Na tej podstawie można dobrać kierunek sesji.",
  },
];

const relatedLinks = [
  {
    title: "Sesja kobieca Gdańsk",
    text: "Dla kobiet, które chcą zrobić coś dla siebie i zobaczyć siebie w pewnej, kobiecej odsłonie.",
    href: "/sesja-kobieca-gdansk",
  },
  {
    title: "Sesja biznesowa Gdańsk",
    text: "Dla kobiet, ekspertek i właścicielek marek, które potrzebują profesjonalnego wizerunku.",
    href: "/sesja-biznesowa-gdansk",
  },
  {
    title: "Sesja kobieca — czy warto?",
    text: "Poradnik dla kobiet, które zastanawiają się, czy sesja kobieca jest dla nich.",
    href: "/poradnik/sesja-kobieca-czy-warto",
  },
];

const galleryImages = [
  {
    image: gallery09,
    alt: "Sesja biznesowa dla kobiet w Gdańsku",
    className: "photoCard portrait galleryTall",
  },
  {
    image: gallery01,
    alt: "Sesja kobieca a sesja biznesowa - elegancki portret",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery03,
    alt: "Sesja kobieca w Gdańsku - kobiecy portret",
    className: "photoCard portrait galleryTall",
  },
  {
    image: gallery04,
    alt: "Sesja kobieca i wizerunkowa z prowadzeniem",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery05,
    alt: "Sesja wizerunkowa w eleganckim klimacie",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery10,
    alt: "Portret kobiecy premium i biznesowy",
    className: "photoCard portrait galleryTall",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/poradnik/sesja-kobieca-a-sesja-biznesowa-roznice#article`,
      headline: pageTitle,
      description: pageDescription,
      url: `${SITE_URL}/poradnik/sesja-kobieca-a-sesja-biznesowa-roznice`,
      image: `${SITE_URL}/opengraph-image`,
      author: {
        "@type": "Organization",
        name: "Marta Krajewska Photo",
        url: SITE_URL,
      },
      publisher: {
        "@type": "Organization",
        name: "Odkryj Kobiecość",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/icon`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/poradnik/sesja-kobieca-a-sesja-biznesowa-roznice`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/poradnik/sesja-kobieca-a-sesja-biznesowa-roznice#faq`,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: "/poradnik/sesja-kobieca-a-sesja-biznesowa-roznice",
  },
  keywords: [
    "sesja kobieca a sesja biznesowa",
    "sesja kobieca czy biznesowa",
    "sesja wizerunkowa a kobieca",
    "sesja biznesowa dla kobiet Gdańsk",
    "sesja kobieca i biznesowa Gdańsk",
    "sesja wizerunkowa Gdańsk",
    "fotograf kobiecy Gdańsk",
  ],
  openGraph: {
    type: "article",
    locale: "pl_PL",
    url: "/poradnik/sesja-kobieca-a-sesja-biznesowa-roznice",
    siteName: "Odkryj Kobiecość",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sesja kobieca a sesja biznesowa — Odkryj Kobiecość",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/opengraph-image"],
  },
};

export default function SesjaKobiecaABiznesowaRoznicePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <nav className="nav">
        <a className="brand" href="/" aria-label="Odkryj Kobiecość">
          <span>Odkryj</span>
          <strong>Kobiecość</strong>
        </a>

        <div className="navLinks">
          <a href="/sesja-kobieca-gdansk">Kobieca</a>
          <a href="/sesja-biznesowa-gdansk">Biznesowa</a>
          <a href="#roznice">Różnice</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="mobileAnchorNav" aria-label="Szybka nawigacja">
          <a href="#roznice">Różnice</a>
          <a href="#polaczenie">Połączenie</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>

        <div className="heroCopy">
          <p className="eyebrow">Poradnik • sesja kobieca i biznesowa</p>
          <h1>Sesja kobieca a sesja biznesowa — czym się różnią?</h1>
          <p className="lead">
            Obie mogą być eleganckie, profesjonalne i kobiece. Różnica jest w
            celu: jedna bardziej opowiada o Tobie jako kobiecie, druga o Twoim
            wizerunku, marce i zaufaniu.
          </p>

          <div className="heroActions">
            <a
              className="button primary"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Zapytaj, co wybrać
            </a>

            <a className="button secondary" href="/sesja-biznesowa-gdansk">
              Zobacz sesję biznesową
            </a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="portraitPlaceholder tall">
            <Image
              src="/images/hero/hero-main.webp"
              alt="Sesja kobieca a sesja biznesowa"
              width={1800}
              height={2400}
              priority
              sizes="(max-width: 768px) 92vw, 48vw"
              style={imageCoverStyle}
            />
            <span>kobiece + biznesowe</span>
          </div>

          <div className="floatingCard topCard">wizerunek</div>
          <div className="floatingCard bottomCard">kobiecość</div>
        </div>
      </section>

      <section className="problem section light">
        <div className="sectionNumber">01</div>

        <div>
          <p className="eyebrow">Najkrócej</p>
          <h2>Sesja kobieca jest bardziej osobista. Sesja biznesowa bardziej strategiczna.</h2>
        </div>

        <p className="sectionText">
          W praktyce oba kierunki mogą się przenikać. Kobieca sesja może mieć
          element wizerunkowy, a biznesowa może być naturalna, miękka i kobieca.
          Najważniejsze jest to, gdzie zdjęcia mają później pracować.
        </p>
      </section>

      <section id="roznice" className="experience section light">
        <div>
          <p className="eyebrow">Sesja kobieca</p>
          <h2>Kiedy wybrać sesję kobiecą?</h2>
        </div>

        <ul className="premiumList">
          {feminineSession.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="experience section light">
        <div>
          <p className="eyebrow">Sesja biznesowa</p>
          <h2>Kiedy wybrać sesję biznesową lub wizerunkową?</h2>
        </div>

        <ul className="premiumList">
          {businessSession.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="polaczenie" className="fears section">
        <div className="splitHeader">
          <div>
            <p className="eyebrow">Połączenie</p>
            <h2>Najlepszym wyborem często jest sesja kobieco-wizerunkowa.</h2>
          </div>

          <p>
            To dobre rozwiązanie, jeśli prowadzisz markę osobistą, ale nie
            chcesz wyglądać chłodno, sztywno albo korporacyjnie. Można stworzyć
            zdjęcia, które są profesjonalne i kobiece jednocześnie.
          </p>
        </div>

        <div className="fearGrid">
          {combinedSession.map((item) => (
            <div className="fearCard" key={item}>
              {item}
            </div>
          ))}
        </div>

        <p className="signatureLine">
          Profesjonalny wizerunek nie musi odbierać kobiecości.
        </p>
      </section>

      <section id="poradnik" className="faq section light">
        <p className="eyebrow">Poradnik</p>
        <h2>Jak zdecydować, który typ sesji wybrać?</h2>

        <div className="faqGrid">
          {sections.map((item) => (
            <article className="faqItem" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dream section dark">
        <div className="dreamText">
          <p className="eyebrow lightText">Efekt</p>
          <h2>
            Możesz mieć zdjęcia, które pokazują kompetencje, ale nadal są
            kobiece, spokojne i zgodne z Tobą.
          </h2>
        </div>

        <div className="imageFrame wide">
          <Image
            src="/images/sections/transformation.webp"
            alt="Sesja kobieca i biznesowa w Gdańsku"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 52vw"
            style={imageCoverStyle}
          />
          <span>kobiece i profesjonalne</span>
        </div>
      </section>

      <section id="portfolio" className="gallery section">
        <p className="eyebrow">Portfolio</p>
        <h2>Kadry kobiece, biznesowe i wizerunkowe</h2>

        <div className="galleryGrid">
          {galleryImages.map((item) => (
            <div className={item.className} key={item.image.src}>
              <Image
                src={item.image}
                alt={item.alt}
                sizes="(max-width: 560px) 92vw, (max-width: 980px) 45vw, (max-width: 1280px) 31vw, 24vw"
                className="galleryImage"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="faq" className="faq section light">
        <p className="eyebrow">FAQ</p>
        <h2>Najczęstsze pytania o sesję kobiecą i biznesową</h2>

        <div className="faqGrid">
          {faqs.map((item) => (
            <article className="faqItem" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stories section light">
        <p className="eyebrow">Dalej</p>
        <h2>Powiązane strony</h2>

        <div className="storyGrid">
          {relatedLinks.map((item) => (
            <article className="storyCard" key={item.href}>
              <p>{item.text}</p>
              <strong>
                <a href={item.href}>{item.title}</a>
              </strong>
              <span className="storySource">Powiązana strona</span>
            </article>
          ))}
        </div>
      </section>

      <section id="kontakt" className="finalCta section dark">
        <div className="finalCtaVisual">
          <Image
            src="/images/sections/final-cta.webp"
            alt="Sesja kobieca i biznesowa w Gdańsku"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 80vw"
            style={imageCoverStyle}
          />
        </div>

        <p className="eyebrow lightText">Sesja kobieca czy biznesowa?</p>
        <h2>
          Jeśli nie wiesz, który kierunek będzie lepszy, napisz do Marty i
          zacznij od krótkiej rozmowy.
        </h2>

        <div className="heroActions center">
          <a
            className="button primary lightButton"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Napisz na WhatsApp
          </a>

          <a
            className="button secondary darkSecondary"
            href="mailto:krajewskaphoto@gmail.com"
          >
            Napisz e-mail
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="footerMain">
          <div className="footerBrandBlock">
            <a className="footerBrand" href="/" aria-label="Odkryj Kobiecość">
              <span>Odkryj</span>
              <strong>Kobiecość</strong>
            </a>

            <p className="footerMeta">
              Marta Krajewska Photo • Trójmiasto / Gdańsk
            </p>

            <p className="footerStatement">
              Poradnik o różnicy między sesją kobiecą, biznesową i wizerunkową.
            </p>
          </div>

          <nav className="footerNav" aria-label="Nawigacja w stopce">
            <a href="/">Strona główna</a>
            <a href="/sesja-kobieca-gdansk">Sesja kobieca Gdańsk</a>
            <a href="/sesja-biznesowa-gdansk">Sesja biznesowa Gdańsk</a>
            <a href="/poradnik/sesja-kobieca-czy-warto">
              Czy warto?
            </a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>

        <div className="footerBottom">
          <p>© 2026 Odkryj Kobiecość / Marta Krajewska Photo</p>

          <div className="footerLegal">
            <a href="/polityka-prywatnosci">Polityka prywatności</a>
            <a href="/polityka-cookies">Polityka cookies</a>

            <button
              type="button"
              className="footerCookieButton"
              data-cookie-settings
            >
              Zmień ustawienia cookies
            </button>

            <a href="mailto:krajewskaphoto@gmail.com">
              krajewskaphoto@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
