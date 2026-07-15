// app/poradnik/sesja-kobieca-cena-gdansk/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

import gallery01 from "../../../public/images/gallery/gallery-01.webp";
import gallery03 from "../../../public/images/gallery/gallery-03.webp";
import gallery04 from "../../../public/images/gallery/gallery-04.webp";
import gallery06 from "../../../public/images/gallery/gallery-06.webp";
import gallery09 from "../../../public/images/gallery/gallery-09.webp";
import gallery10 from "../../../public/images/gallery/gallery-10.webp";

const SITE_URL = "https://www.odkryjkobiecosc.pl";

const pageTitle =
  "Sesja kobieca cena Gdańsk | Ile kosztuje profesjonalna sesja kobieca?";

const pageDescription =
  "Ile kosztuje sesja kobieca w Gdańsku, co obejmuje cena, czym różnią się pakiety i na co zwrócić uwagę przy wyborze fotografa kobiecego w Trójmieście.";

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, chciałabym zapytać o cenę i dostępne pakiety sesji kobiecej w Gdańsku."
);

const whatsappLink = `https://wa.me/48666091909?text=${whatsappMessage}`;

const imageCoverStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
} as const;

const packages = [
  {
    name: "ESSENCE",
    price: "550 zł",
    lead: "Dla kobiet, które chcą wejść w sesję spokojnie i zobaczyć siebie w eleganckiej, kobiecej odsłonie.",
    features: [
      "konsultacja przed sesją",
      "dobór klimatu i stylizacji",
      "prowadzenie krok po kroku",
      "12 wyretuszowanych zdjęć w wersji kolorowej i czarno-białej",
      "prywatna galeria online",
      "możliwość dokupienia dodatkowych ujęć",
    ],
  },
  {
    name: "SIGNATURE",
    price: "800 zł",
    lead: "Najbardziej uniwersalny wybór — więcej zdjęć, więcej przestrzeni i bardziej kompletne doświadczenie.",
    features: [
      "pełna konsultacja i plan sesji",
      "2–3 stylizacje",
      "sesja kobieca lub biznesowa",
      "20 wyretuszowanych zdjęć w wersji kolorowej i czarno-białej",
      "prywatna galeria online",
      "możliwość dokupienia dodatkowych ujęć",
    ],
  },
  {
    name: "PRESTIGE",
    price: "950 zł",
    lead: "Sesja premium dla kobiet, które chcą stworzyć mocniejszy, bardziej rozbudowany i świadomy wizerunek.",
    features: [
      "rozbudowany plan sesji",
      "kilka scen lub klimatów",
      "sesja kobieca + wizerunkowa",
      "profesjonalne prowadzenie",
      "30 wyretuszowanych zdjęć w wersji kolorowej i czarno-białej",
      "prywatna galeria online",
    ],
  },
];

const whatAffectsPrice = [
  "liczba wyretuszowanych zdjęć",
  "czas i zakres sesji",
  "liczba stylizacji",
  "poziom przygotowania przed sesją",
  "prowadzenie podczas zdjęć",
  "charakter sesji: kobieca, biznesowa, wizerunkowa lub premium",
  "czas pracy przy selekcji i retuszu",
  "doświadczenie fotografa i jakość całego procesu",
];

const priceMistakes = [
  "wybieranie sesji wyłącznie po najniższej cenie",
  "porównywanie liczby zdjęć bez sprawdzenia jakości retuszu",
  "brak informacji, czy fotograf prowadzi podczas pozowania",
  "brak konsultacji przed sesją",
  "niewiedza, czy cena obejmuje galerię i obróbkę",
  "brak jasności, ile kosztują dodatkowe ujęcia",
];

const sections = [
  {
    title: "Ile kosztuje sesja kobieca w Gdańsku?",
    text: "Cena sesji kobiecej zależy od zakresu, liczby zdjęć, przygotowania, stylizacji i tego, czy sesja ma mieć charakter bardziej kobiecy, biznesowy czy premium. W Odkryj Kobiecość pakiety zaczynają się od 550 zł.",
  },
  {
    title: "Dlaczego sesja kobieca nie jest tylko ceną za zdjęcia?",
    text: "Klientka nie płaci wyłącznie za naciśnięcie spustu migawki. W cenie jest przygotowanie, rozmowa, prowadzenie, atmosfera, selekcja, retusz i doświadczenie, które ma pomóc zobaczyć siebie inaczej.",
  },
  {
    title: "Co powinno być w cenie sesji kobiecej?",
    text: "Dobrze przygotowana sesja powinna obejmować konsultację, omówienie klimatu zdjęć, pomoc przy stylizacji, prowadzenie podczas pozowania, prywatną galerię i profesjonalnie wyretuszowane zdjęcia.",
  },
  {
    title: "Czy tańsza sesja zawsze oznacza gorszy wybór?",
    text: "Nie zawsze, ale przy sesjach kobiecych bardzo ważne jest zaufanie i sposób pracy fotografa. Jeśli klientka stresuje się przed aparatem, samo niskie wynagrodzenie fotografa nie rozwiąże problemu. Liczy się prowadzenie i bezpieczeństwo podczas sesji.",
  },
  {
    title: "Który pakiet wybrać?",
    text: "Jeśli chcesz spokojnie zacząć, wybierz ESSENCE. Jeśli chcesz więcej zdjęć i bardziej kompletne doświadczenie, najlepszym wyborem będzie SIGNATURE. Jeśli zależy Ci na mocniejszym wizerunku i większej liczbie kadrów, wybierz PRESTIGE.",
  },
  {
    title: "Czy można dokupić dodatkowe zdjęcia?",
    text: "Tak. Po sesji możesz wybrać dodatkowe ujęcia z galerii. To dobre rozwiązanie, jeśli po obejrzeniu materiału chcesz zostawić więcej zdjęć niż obejmuje wybrany pakiet.",
  },
];

const faqs = [
  {
    question: "Jaka jest cena sesji kobiecej w Gdańsku?",
    answer:
      "Pakiety Odkryj Kobiecość zaczynają się od 550 zł. Dostępne są pakiety ESSENCE, SIGNATURE i PRESTIGE, różniące się liczbą zdjęć, zakresem i charakterem sesji.",
  },
  {
    question: "Co obejmuje cena sesji kobiecej?",
    answer:
      "Cena obejmuje konsultację, przygotowanie do sesji, prowadzenie podczas zdjęć, prywatną galerię online oraz wybraną liczbę wyretuszowanych zdjęć.",
  },
  {
    question: "Czy sesja kobieca może być połączona z biznesową?",
    answer:
      "Tak. W zależności od pakietu sesja może mieć charakter kobiecy, biznesowy, wizerunkowy albo łączyć kilka kierunków.",
  },
  {
    question: "Czy mogę dokupić więcej zdjęć po sesji?",
    answer:
      "Tak. Po obejrzeniu galerii możesz wybrać dodatkowe ujęcia do retuszu, jeśli chcesz zostawić więcej zdjęć.",
  },
  {
    question: "Czy cena sesji obejmuje pomoc w pozowaniu?",
    answer:
      "Tak. Podczas sesji Marta prowadzi Cię krok po kroku, więc nie musisz wcześniej umieć pozować.",
  },
  {
    question: "Jak zapytać o dokładną cenę i termin?",
    answer:
      "Najprościej napisać na WhatsApp i podać, że interesuje Cię sesja kobieca w Gdańsku. Marta odpowie z informacją o pakietach i dostępnych terminach.",
  },
];

const relatedLinks = [
  {
    title: "Sesja kobieca Gdańsk",
    text: "Główna strona usługi z opisem procesu, pakietami, portfolio i FAQ.",
    href: "/sesja-kobieca-gdansk",
  },
  {
    title: "Co ubrać na sesję kobiecą?",
    text: "Poradnik o stylizacjach, kolorach i tym, co warto zabrać na zdjęcia.",
    href: "/poradnik/co-ubrac-na-sesje-kobieca",
  },
  {
    title: "Jak przygotować się do sesji kobiecej?",
    text: "Praktyczna checklista przed sesją kobiecą — bez stresu i bez presji.",
    href: "/poradnik/jak-przygotowac-sie-do-sesji-kobiecej",
  },
];

const galleryImages = [
  {
    image: gallery01,
    alt: "Sesja kobieca cena Gdańsk - elegancka sesja premium",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery03,
    alt: "Profesjonalna sesja kobieca w Gdańsku - portret",
    className: "photoCard portrait galleryTall",
  },
  {
    image: gallery04,
    alt: "Sesja kobieca z prowadzeniem krok po kroku",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery06,
    alt: "Cena sesji kobiecej w Trójmieście - kobiecy portret",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery09,
    alt: "Sesja kobieca i biznesowa Gdańsk",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery10,
    alt: "Sesja kobieca premium Gdańsk - portret",
    className: "photoCard portrait galleryTall",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/poradnik/sesja-kobieca-cena-gdansk#article`,
      headline: pageTitle,
      description: pageDescription,
      url: `${SITE_URL}/poradnik/sesja-kobieca-cena-gdansk`,
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
        "@id": `${SITE_URL}/poradnik/sesja-kobieca-cena-gdansk`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/poradnik/sesja-kobieca-cena-gdansk#faq`,
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
    canonical: "/poradnik/sesja-kobieca-cena-gdansk",
  },
  keywords: [
    "sesja kobieca cena Gdańsk",
    "ile kosztuje sesja kobieca",
    "cena sesji kobiecej Trójmiasto",
    "sesja kobieca pakiety",
    "fotograf kobiecy Gdańsk cena",
    "sesja kobieca Gdańsk",
    "Marta Krajewska Photo",
  ],
  openGraph: {
    type: "article",
    locale: "pl_PL",
    url: "/poradnik/sesja-kobieca-cena-gdansk",
    siteName: "Odkryj Kobiecość",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sesja kobieca cena Gdańsk — Odkryj Kobiecość",
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

export default function SesjaKobiecaCenaGdanskPage() {
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
          <a href="/sesja-kobieca-gdansk">Sesja kobieca</a>
          <a href="#cennik">Cennik</a>
          <a href="#co-wplywa-na-cene">Cena</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="mobileAnchorNav" aria-label="Szybka nawigacja">
          <a href="#cennik">Cennik</a>
          <a href="#co-wplywa-na-cene">Cena</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>

        <div className="heroCopy">
          <p className="eyebrow">Cena sesji kobiecej • Gdańsk</p>
          <h1>Sesja kobieca cena Gdańsk</h1>
          <p className="lead">
            Ile kosztuje profesjonalna sesja kobieca, co obejmuje cena i jak
            wybrać pakiet, który pasuje do Twojego celu: kobiecego, biznesowego
            albo premium.
          </p>

          <div className="heroActions">
            <a
              className="button primary"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Zapytaj o pakiet
            </a>

            <a className="button secondary" href="#cennik">
              Zobacz ceny
            </a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="portraitPlaceholder tall">
            <Image
              src="/images/hero/hero-main.webp"
              alt="Sesja kobieca cena Gdańsk"
              width={1800}
              height={2400}
              priority
              sizes="(max-width: 768px) 92vw, 48vw"
              style={imageCoverStyle}
            />
            <span>cena sesji</span>
          </div>

          <div className="floatingCard topCard">od 550 zł</div>
          <div className="floatingCard bottomCard">Gdańsk</div>
        </div>
      </section>

      <section className="problem section light">
        <div className="sectionNumber">01</div>

        <div>
          <p className="eyebrow">Nie tylko koszt</p>
          <h2>Cena sesji kobiecej to cena całego doświadczenia, nie samego zdjęcia.</h2>
        </div>

        <p className="sectionText">
          W sesji kobiecej płacisz za przygotowanie, spokojną atmosferę,
          prowadzenie podczas zdjęć, wybór najlepszych ujęć, retusz i efekt,
          który ma pomóc Ci zobaczyć siebie inaczej.
        </p>
      </section>

      <section id="cennik" className="packages section dark">
        <div className="splitHeader">
          <div>
            <p className="eyebrow lightText">Cennik</p>
            <h2>Pakiety sesji kobiecej w Gdańsku</h2>
          </div>

          <p>
            Pakiety różnią się zakresem, liczbą zdjęć i charakterem sesji.
            Jeśli nie wiesz, który wybrać, najprościej napisać do Marty i krótko
            opisać, czego potrzebujesz.
          </p>
        </div>

        <div className="packageGrid">
          {packages.map((item) => (
            <article className="packageCard" key={item.name}>
              <div>
                <p className="packageName">{item.name}</p>
                <h3>{item.price}</h3>
                <p className="packageText">{item.lead}</p>
              </div>

              <ul>
                {item.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <a
                className="button packageButton"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Zapytaj o termin
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="co-wplywa-na-cene" className="experience section light">
        <div>
          <p className="eyebrow">Co wpływa na cenę</p>
          <h2>Dlaczego sesje kobiece mają różne ceny?</h2>
        </div>

        <ul className="premiumList">
          {whatAffectsPrice.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="fears section">
        <div className="splitHeader">
          <div>
            <p className="eyebrow">Na co uważać</p>
            <h2>Nie porównuj tylko ceny. Porównuj cały proces.</h2>
          </div>

          <p>
            Przy sesji kobiecej bardzo ważne jest to, czy fotograf potrafi
            stworzyć bezpieczną atmosferę, poprowadzić Cię przed aparatem i
            przygotować zdjęcia w spójnym, eleganckim stylu.
          </p>
        </div>

        <div className="fearGrid">
          {priceMistakes.map((item) => (
            <div className="fearCard" key={item}>
              {item}
            </div>
          ))}
        </div>

        <p className="signatureLine">Najtańszy wybór nie zawsze jest najbezpieczniejszy.</p>
      </section>

      <section className="faq section light">
        <p className="eyebrow">Wyjaśnienie</p>
        <h2>Ile naprawdę kosztuje dobra sesja kobieca?</h2>

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
          <p className="eyebrow lightText">Wartość</p>
          <h2>
            Dobra sesja kobieca zostaje z Tobą dłużej niż sam dzień zdjęć.
            Przypomina, że możesz zobaczyć siebie inaczej.
          </h2>
        </div>

        <div className="imageFrame wide">
          <Image
            src="/images/sections/transformation.webp"
            alt="Cena sesji kobiecej w Gdańsku - wartość doświadczenia"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 52vw"
            style={imageCoverStyle}
          />
          <span>wartość doświadczenia</span>
        </div>
      </section>

      <section id="portfolio" className="gallery section">
        <p className="eyebrow">Portfolio</p>
        <h2>Kobiecy, elegancki klimat sesji</h2>

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
        <h2>Najczęstsze pytania o cenę sesji kobiecej</h2>

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
            alt="Sesja kobieca Gdańsk cennik i pakiety"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 80vw"
            style={imageCoverStyle}
          />
        </div>

        <p className="eyebrow lightText">Sesja kobieca Gdańsk</p>
        <h2>Jeśli chcesz dobrać pakiet do siebie, napisz do Marty.</h2>

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
              Cennik i pakiety sesji kobiecej w Gdańsku — spokojnie,
              przejrzyście i bez presji.
            </p>
          </div>

          <nav className="footerNav" aria-label="Nawigacja w stopce">
            <a href="/">Strona główna</a>
            <a href="/sesja-kobieca-gdansk">Sesja kobieca Gdańsk</a>
            <a href="/sesja-biznesowa-gdansk">Sesja biznesowa Gdańsk</a>
            <a href="/poradnik/co-ubrac-na-sesje-kobieca">
              Stylizacje do sesji
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
