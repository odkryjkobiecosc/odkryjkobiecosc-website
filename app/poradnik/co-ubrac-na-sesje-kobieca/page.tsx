// app/poradnik/co-ubrac-na-sesje-kobieca/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

import Header from "../../../components/Header";

import gallery01 from "../../../public/images/gallery/gallery-01.webp";
import gallery03 from "../../../public/images/gallery/gallery-03.webp";
import gallery04 from "../../../public/images/gallery/gallery-04.webp";
import gallery05 from "../../../public/images/gallery/gallery-05.webp";
import gallery08 from "../../../public/images/gallery/gallery-08.webp";
import gallery10 from "../../../public/images/gallery/gallery-10.webp";

const SITE_URL = "https://www.odkryjkobiecosc.pl";

const pageTitle =
  "Co ubrać na sesję kobiecą? | Stylizacje do sesji kobiecej";

const pageDescription =
  "Co ubrać na sesję kobiecą, jakie stylizacje sprawdzają się najlepiej i czego unikać przed zdjęciami. Praktyczny poradnik dla kobiet przed sesją kobiecą w Gdańsku i Trójmieście.";

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, chciałabym zapytać o sesję kobiecą i dobór stylizacji."
);

const whatsappLink = `https://wa.me/48666091909?text=${whatsappMessage}`;

const imageCoverStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
} as const;

const outfitIdeas = [
  "biała lub czarna koszula",
  "marynarka w neutralnym kolorze",
  "prosta sukienka",
  "body lub top o dobrej linii",
  "sweter z ciekawą fakturą",
  "spodnie z wysokim stanem",
  "delikatna bielizna lub element boudoir, jeśli taki klimat jest zgodny z Tobą",
  "biżuteria, która podkreśla styl, ale nie dominuje kadru",
];

const avoidList = [
  "ubrania z dużymi logotypami",
  "bardzo drobne, agresywne wzory",
  "rzeczy, w których ciągle coś poprawiasz",
  "ubrania kupione tylko dlatego, że „powinny dobrze wyglądać”",
  "zbyt wiele przypadkowych stylizacji bez wspólnego kierunku",
  "kolory, w których czujesz się źle lub nienaturalnie",
];

const sections = [
  {
    title: "1. Zacznij od tego, jak chcesz się poczuć",
    text: "Stylizacja na sesję kobiecą nie powinna być przypadkowa. Inaczej ubierzesz się do spokojnego, naturalnego portretu, inaczej do eleganckiej sesji premium, a jeszcze inaczej do zdjęć kobieco-biznesowych. Najpierw wybieramy emocję i klimat, dopiero potem konkretne ubrania.",
  },
  {
    title: "2. Najlepiej działają proste kroje",
    text: "Proste koszule, marynarki, sukienki, body, topy, swetry i klasyczne spodnie często wyglądają na zdjęciach lepiej niż bardzo skomplikowane stylizacje. Dzięki temu uwaga zostaje na Tobie: twarzy, sylwetce, spojrzeniu i emocji.",
  },
  {
    title: "3. Neutralne kolory są bezpieczną bazą",
    text: "Biel, czerń, beż, karmel, grafit, bordo, oliwka, granat i przygaszone odcienie zwykle dobrze pracują w eleganckim portrecie. Nie oznacza to, że kolor jest zakazany. Ważne, żeby wspierał charakter sesji, a nie odciągał uwagę.",
  },
  {
    title: "4. Zabierz więcej rzeczy, niż finalnie wykorzystasz",
    text: "Na sesję warto przygotować kilka opcji. Nie każda musi trafić przed aparat. Czasem dopiero na miejscu widać, która stylizacja najlepiej pasuje do światła, tła i Twojej energii danego dnia.",
  },
  {
    title: "5. Ubranie ma pomagać, a nie przeszkadzać",
    text: "Jeśli coś Cię ściska, odstaje, wymaga ciągłego poprawiania albo sprawia, że czujesz się przebrana, najczęściej będzie to widać na zdjęciach. Lepsza jest stylizacja prostsza, ale zgodna z Tobą.",
  },
  {
    title: "6. Stylizacja może być kobieca, ale nadal subtelna",
    text: "Sesja kobieca nie musi być przesadzona ani sztucznie zmysłowa. Kobiecość może być elegancka, spokojna, mocna, delikatna, biznesowa albo bardziej sensualna. Najważniejsze, żeby była Twoja.",
  },
];

const faqs = [
  {
    question: "Ile stylizacji zabrać na sesję kobiecą?",
    answer:
      "Najlepiej przygotować 2–4 stylizacje. Nie musisz decydować sama, które będą finalnie użyte. Marta pomoże wybrać te, które najlepiej pasują do klimatu zdjęć.",
  },
  {
    question: "Czy muszę kupować nowe ubrania na sesję?",
    answer:
      "Nie. Często najlepsze są rzeczy, które już masz i w których czujesz się dobrze. Nowe ubranie ma sens tylko wtedy, gdy pasuje do Ciebie i nie sprawia, że czujesz się przebrana.",
  },
  {
    question: "Jakie kolory najlepiej wyglądają na sesji kobiecej?",
    answer:
      "Dobrze sprawdzają się neutralne, eleganckie kolory: biel, czerń, beż, karmel, grafit, bordo, granat, oliwka i przygaszone odcienie. Wszystko zależy jednak od typu urody, tła i klimatu sesji.",
  },
  {
    question: "Czy mogę zabrać marynarkę na sesję kobiecą?",
    answer:
      "Tak. Marynarka bardzo dobrze sprawdza się przy sesjach kobiecych i wizerunkowych. Może dodać elegancji, struktury i bardziej biznesowego charakteru.",
  },
  {
    question: "Czego unikać w stylizacjach do sesji?",
    answer:
      "Lepiej unikać dużych logotypów, agresywnych wzorów, zbyt przypadkowych kolorów i ubrań, w których czujesz się niekomfortowo.",
  },
  {
    question: "Czy Marta pomaga dobrać stylizacje?",
    answer:
      "Tak. Przed sesją można omówić klimat zdjęć i przygotować kilka propozycji. Na miejscu Marta pomaga wybrać stylizacje, które najlepiej pracują w kadrze.",
  },
];

const relatedLinks = [
  {
    title: "Sesja kobieca Gdańsk",
    text: "Opis sesji kobiecej, proces, pakiety, portfolio i odpowiedzi na najczęstsze obawy.",
    href: "/sesja-kobieca-gdansk",
  },
  {
    title: "Jak przygotować się do sesji kobiecej?",
    text: "Poradnik o przygotowaniu, stresie przed aparatem, pielęgnacji i tym, co zabrać na sesję.",
    href: "/poradnik/jak-przygotowac-sie-do-sesji-kobiecej",
  },
  {
    title: "Sesja biznesowa Gdańsk",
    text: "Dla kobiet, które chcą połączyć profesjonalny wizerunek z elegancką kobiecą odsłoną.",
    href: "/sesja-biznesowa-gdansk",
  },
];

const galleryImages = [
  {
    image: gallery01,
    alt: "Stylizacja na sesję kobiecą - elegancki kadr",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery03,
    alt: "Co ubrać na sesję kobiecą - kobiecy portret",
    className: "photoCard portrait galleryTall",
  },
  {
    image: gallery04,
    alt: "Sesja kobieca Gdańsk - stylizacja i prowadzenie",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery05,
    alt: "Elegancka stylizacja do sesji kobiecej",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery08,
    alt: "Kobieca sesja zdjęciowa w Trójmieście",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery10,
    alt: "Portret kobiecy premium - stylizacja do sesji",
    className: "photoCard portrait galleryTall",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/poradnik/co-ubrac-na-sesje-kobieca#article`,
      headline: pageTitle,
      description: pageDescription,
      url: `${SITE_URL}/poradnik/co-ubrac-na-sesje-kobieca`,
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
        "@id": `${SITE_URL}/poradnik/co-ubrac-na-sesje-kobieca`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/poradnik/co-ubrac-na-sesje-kobieca#faq`,
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
    canonical: "/poradnik/co-ubrac-na-sesje-kobieca",
  },
  keywords: [
    "co ubrać na sesję kobiecą",
    "stylizacje na sesję kobiecą",
    "jak się ubrać na sesję kobiecą",
    "co zabrać na sesję kobiecą",
    "sesja kobieca stylizacje",
    "sesja kobieca Gdańsk",
    "fotograf kobiecy Gdańsk",
  ],
  openGraph: {
    type: "article",
    locale: "pl_PL",
    url: "/poradnik/co-ubrac-na-sesje-kobieca",
    siteName: "Odkryj Kobiecość",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Co ubrać na sesję kobiecą — Odkryj Kobiecość",
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

export default function CoUbracNaSesjeKobiecaPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <Header
        poradnikiHref="/poradnik"
        faqHref="#faq"
        kontaktHref="#kontakt"
      />

      <section id="top" className="hero section">
        <div className="mobileAnchorNav" aria-label="Szybka nawigacja">
          <a href="#pomysly">Pomysły</a>
          <a href="#poradnik">Poradnik</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>

        <div className="heroCopy">
          <p className="eyebrow">Poradnik • stylizacje do sesji kobiecej</p>

          <h1>Co ubrać na sesję kobiecą?</h1>

          <p className="lead">
            Stylizacja do sesji kobiecej nie ma Cię przebrać. Ma pomóc pokazać
            Ciebie: spokojnie, kobieco, elegancko i w zgodzie z tym, jak chcesz
            się zobaczyć na zdjęciach.
          </p>

          <div className="heroActions">
            <a className="button primary" href={whatsappLink}>
              Zapytaj o sesję
            </a>

            <a className="button secondary" href="/sesja-kobieca-gdansk">
              Zobacz sesję kobiecą
            </a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="portraitPlaceholder tall">
            <Image
              src="/images/hero/hero-main.webp"
              alt="Co ubrać na sesję kobiecą w Gdańsku"
              width={1800}
              height={2400}
              priority
              sizes="(max-width: 768px) 92vw, 48vw"
              style={imageCoverStyle}
            />

            <span>stylizacje</span>
          </div>

          <div className="floatingCard topCard">kobiece</div>
          <div className="floatingCard bottomCard">eleganckie</div>
        </div>
      </section>

      <section className="problem section light">
        <div className="sectionNumber">01</div>

        <div>
          <p className="eyebrow">Najważniejsza zasada</p>

          <h2>Nie wybieraj stylizacji, w której czujesz się przebrana.</h2>
        </div>

        <p className="sectionText">
          Dobre ubranie na sesję kobiecą wspiera klimat zdjęć, ale nie dominuje.
          Najważniejsza nadal jesteś Ty: Twoja twarz, sylwetka, spojrzenie,
          spokój i sposób, w jaki chcesz siebie zobaczyć.
        </p>
      </section>

      <section id="pomysly" className="experience section light">
        <div>
          <p className="eyebrow">Pomysły</p>

          <h2>Co warto zabrać na sesję kobiecą?</h2>
        </div>

        <ul className="premiumList">
          {outfitIdeas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="fears section">
        <div className="splitHeader">
          <div>
            <p className="eyebrow">Czego unikać</p>

            <h2>
              Najczęściej przeszkadzają rzeczy, które zabierają uwagę z Ciebie.
            </h2>
          </div>

          <p>
            Nie chodzi o zakazy. Chodzi o to, żeby stylizacja nie walczyła z
            kadrem. Im bardziej świadomy wybór, tym spokojniejszy efekt na
            zdjęciach.
          </p>
        </div>

        <div className="fearGrid">
          {avoidList.map((item) => (
            <div className="fearCard" key={item}>
              {item}
            </div>
          ))}
        </div>

        <p className="signatureLine">
          Prościej często znaczy bardziej premium.
        </p>
      </section>

      <section id="poradnik" className="faq section light">
        <p className="eyebrow">Poradnik krok po kroku</p>

        <h2>Jak dobrać stylizacje do sesji kobiecej?</h2>

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
            Dobra stylizacja nie ma udawać kogoś innego. Ma pomóc Ci zobaczyć
            siebie w mocniejszej, spokojniejszej albo bardziej kobiecej wersji.
          </h2>
        </div>

        <div className="imageFrame wide">
          <Image
            src="/images/sections/transformation.webp"
            alt="Stylizacja do sesji kobiecej w eleganckim klimacie"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 52vw"
            style={imageCoverStyle}
          />

          <span>spójny klimat</span>
        </div>
      </section>

      <section id="portfolio" className="gallery section">
        <p className="eyebrow">Inspiracje</p>

        <h2>Elegancki, kobiecy klimat sesji</h2>

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

        <h2>Najczęstsze pytania o stylizacje do sesji kobiecej</h2>

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

        <h2>Powiązane strony i poradniki</h2>

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
            alt="Sesja kobieca Gdańsk - dobór stylizacji"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 80vw"
            style={imageCoverStyle}
          />
        </div>

        <p className="eyebrow lightText">Sesja kobieca Gdańsk</p>

        <h2>
          Nie musisz wiedzieć, co ubrać. Wystarczy, że napiszesz i zaczniemy od
          rozmowy.
        </h2>

        <div className="heroActions center">
          <a className="button primary lightButton" href={whatsappLink}>
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
              Poradnik o stylizacjach do sesji kobiecej — spokojnie, praktycznie
              i bez presji.
            </p>
          </div>

          <nav className="footerNav" aria-label="Nawigacja w stopce">
            <a href="/">Strona główna</a>
            <a href="/sesja-kobieca-gdansk">Sesja kobieca Gdańsk</a>
            <a href="/sesja-biznesowa-gdansk">Sesja biznesowa Gdańsk</a>
            <a href="/poradnik/jak-przygotowac-sie-do-sesji-kobiecej">
              Przygotowanie do sesji
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
