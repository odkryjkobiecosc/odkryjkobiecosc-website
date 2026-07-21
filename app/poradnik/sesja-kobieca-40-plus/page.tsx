// app/poradnik/sesja-kobieca-40-plus/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

import Header from "../../../components/Header";

import gallery01 from "../../../public/images/gallery/gallery-01.webp";
import gallery03 from "../../../public/images/gallery/gallery-03.webp";
import gallery04 from "../../../public/images/gallery/gallery-04.webp";
import gallery06 from "../../../public/images/gallery/gallery-06.webp";
import gallery08 from "../../../public/images/gallery/gallery-08.webp";
import gallery10 from "../../../public/images/gallery/gallery-10.webp";

const SITE_URL = "https://www.odkryjkobiecosc.pl";

const pageTitle =
  "Sesja kobieca 40 plus | Sesja kobieca dla dojrzałych kobiet";

const pageDescription =
  "Sesja kobieca 40 plus i 50 plus w Gdańsku dla kobiet, które chcą zobaczyć siebie dojrzale, elegancko, kobieco i bez presji. Profesjonalna sesja kobieca w Trójmieście.";

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, chciałabym zapytać o sesję kobiecą 40 plus w Gdańsku."
);

const whatsappLink = `https://wa.me/48666091909?text=${whatsappMessage}`;

const imageCoverStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
} as const;

const commonThoughts = [
  "czy w moim wieku wypada zrobić sesję kobiecą?",
  "nie wiem, czy to jeszcze dla mnie",
  "nie czuję się już tak pewnie przed aparatem",
  "mam zmarszczki, cellulit albo ciało po zmianach",
  "chcę wyglądać kobieco, ale nie sztucznie",
  "potrzebuję zdjęć, które pokażą mnie dojrzale i z klasą",
  "chcę zrobić coś tylko dla siebie",
  "chcę zobaczyć siebie inaczej niż na codziennych zdjęciach",
];

const whatMatters = [
  "elegancki, spokojny klimat sesji",
  "światło dobrane do twarzy, skóry i charakteru zdjęć",
  "prowadzenie krok po kroku bez trudnego pozowania",
  "stylizacja dopasowana do kobiety, nie do trendu",
  "retusz z wyczuciem, bez sztucznego odmładzania",
  "atmosfera bez oceniania i presji",
];

const sections = [
  {
    title: "1. Sesja kobieca po 40 nie jest „za późno”",
    text: "Wiele kobiet po 40. roku życia zaczyna myśleć, że sesja kobieca jest dla młodszych, odważniejszych albo bardziej pewnych siebie kobiet. To nieprawda. Dojrzałość może wyglądać bardzo kobieco, elegancko i mocno — tylko wymaga innego podejścia niż przypadkowa sesja zdjęciowa.",
  },
  {
    title: "2. Nie chodzi o udawanie młodszej wersji siebie",
    text: "Dobra sesja kobieca 40 plus nie polega na wymazywaniu wieku. Chodzi o pokazanie Ciebie z klasą, spokojem i charakterem. Zdjęcia mają podkreślić kobiecość, nie tworzyć sztuczną wersję osoby, którą nie jesteś.",
  },
  {
    title: "3. Ciało po zmianach też może wyglądać pięknie",
    text: "Zmiany w ciele są naturalne. Po macierzyństwie, po latach pracy, po życiowych zmianach ciało wygląda inaczej. Sesja kobieca może pomóc spojrzeć na siebie z większą łagodnością, bez presji idealności.",
  },
  {
    title: "4. Nie musisz umieć pozować",
    text: "W sesji 40 plus szczególnie ważne jest prowadzenie. Marta podpowiada, jak ustawić sylwetkę, dłonie, twarz i spojrzenie, żeby efekt był naturalny, elegancki i korzystny. Nie musisz wcześniej ćwiczyć póz.",
  },
  {
    title: "5. Stylizacja powinna być zgodna z Tobą",
    text: "Dla dojrzałych kobiet świetnie sprawdzają się proste, eleganckie formy: koszula, marynarka, sukienka, sweter, body, neutralne kolory, dobre tkaniny i dodatki, które nie dominują kadru. Najważniejsze, żebyś nie czuła się przebrana.",
  },
  {
    title: "6. To może być moment powrotu do siebie",
    text: "Sesja kobieca po 40 może być prezentem dla siebie, symbolem zmiany albo po prostu decyzją, że nie odkładasz siebie na później. Nie musi mieć praktycznego celu. Czasem wystarczy, że jest Twoim momentem.",
  },
];

const faqs = [
  {
    question:
      "Czy sesja kobieca 40 plus jest dla mnie, jeśli nie czuję się pewnie?",
    answer:
      "Tak. Nie musisz przychodzić pewna siebie. Sesja jest prowadzona spokojnie, krok po kroku, bez presji i bez oczekiwania, że od razu będziesz wiedziała, jak pozować.",
  },
  {
    question:
      "Czy sesja kobieca po 40 może wyglądać elegancko, a nie przesadnie?",
    answer:
      "Tak. Sesja może być bardzo subtelna, klasyczna, kobieca i elegancka. Nie musi być odważna ani sztucznie zmysłowa.",
  },
  {
    question: "Czy retusz będzie naturalny?",
    answer:
      "Celem retuszu jest elegancki, dopracowany efekt, ale bez tworzenia sztucznej osoby. Chodzi o jakość zdjęcia, nie o wymazanie wieku.",
  },
  {
    question: "Czy muszę umieć pozować?",
    answer:
      "Nie. Marta prowadzi podczas sesji: podpowiada, jak ustawić sylwetkę, dłonie, spojrzenie i mimikę.",
  },
  {
    question: "Czy sesja 40 plus może być połączona z biznesową?",
    answer:
      "Tak. Można połączyć kobiece portrety z kadrami wizerunkowymi do LinkedIn, strony internetowej, marki osobistej albo komunikacji zawodowej.",
  },
  {
    question: "Jak zapytać o sesję kobiecą 40 plus?",
    answer:
      "Najprościej napisać na WhatsApp i krótko opisać, że interesuje Cię sesja kobieca 40 plus lub sesja dla dojrzałej kobiety w Gdańsku.",
  },
];

const relatedLinks = [
  {
    title: "Sesja kobieca Gdańsk",
    text: "Główna strona usługi z opisem procesu, pakietami, portfolio i FAQ.",
    href: "/sesja-kobieca-gdansk",
  },
  {
    title: "Nie umiem pozować do sesji kobiecej",
    text: "Poradnik dla kobiet, które stresują się przed aparatem albo myślą, że nie są fotogeniczne.",
    href: "/poradnik/nie-umiem-pozowac-sesja-kobieca",
  },
  {
    title: "Co ubrać na sesję kobiecą?",
    text: "Poradnik o stylizacjach, kolorach i ubraniach, które dobrze pracują w kadrze.",
    href: "/poradnik/co-ubrac-na-sesje-kobieca",
  },
];

const galleryImages = [
  {
    image: gallery01,
    alt: "Sesja kobieca 40 plus Gdańsk - elegancki portret",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery03,
    alt: "Sesja kobieca dla dojrzałych kobiet w Trójmieście",
    className: "photoCard portrait galleryTall",
  },
  {
    image: gallery04,
    alt: "Sesja kobieca po 40 z prowadzeniem krok po kroku",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery06,
    alt: "Kobiecy portret premium dla kobiety po 40",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery08,
    alt: "Profesjonalna sesja kobieca 50 plus Gdańsk",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery10,
    alt: "Sesja kobieca premium dla dojrzałej kobiety",
    className: "photoCard portrait galleryTall",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/poradnik/sesja-kobieca-40-plus#article`,
      headline: pageTitle,
      description: pageDescription,
      url: `${SITE_URL}/poradnik/sesja-kobieca-40-plus`,
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
        "@id": `${SITE_URL}/poradnik/sesja-kobieca-40-plus`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/poradnik/sesja-kobieca-40-plus#faq`,
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
    canonical: "/poradnik/sesja-kobieca-40-plus",
  },
  keywords: [
    "sesja kobieca 40 plus",
    "sesja kobieca po 40",
    "sesja kobieca 50 plus",
    "sesja kobieca dla dojrzałych kobiet",
    "sesja kobieca Gdańsk 40 plus",
    "fotograf kobiecy Gdańsk",
    "sesja kobieca Gdańsk",
  ],
  openGraph: {
    type: "article",
    locale: "pl_PL",
    url: "/poradnik/sesja-kobieca-40-plus",
    siteName: "Odkryj Kobiecość",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sesja kobieca 40 plus — Odkryj Kobiecość",
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

export default function SesjaKobieca40PlusPage() {
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
          <a href="#dojrzalosc">40 plus</a>
          <a href="#poradnik">Poradnik</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>

        <div className="heroCopy">
          <p className="eyebrow">Sesja kobieca 40 plus • Gdańsk</p>

          <h1>Sesja kobieca 40 plus</h1>

          <p className="lead">
            Dla kobiet, które chcą zobaczyć siebie dojrzale, elegancko i
            kobieco — bez udawania młodszej wersji siebie i bez presji, że
            trzeba umieć pozować.
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
              alt="Sesja kobieca 40 plus w Gdańsku"
              width={1800}
              height={2400}
              priority
              sizes="(max-width: 768px) 92vw, 48vw"
              style={imageCoverStyle}
            />

            <span>40 plus</span>
          </div>

          <div className="floatingCard topCard">elegancja</div>
          <div className="floatingCard bottomCard">dojrzałość</div>
        </div>
      </section>

      <section className="problem section light">
        <div className="sectionNumber">01</div>

        <div>
          <p className="eyebrow">Dojrzała kobiecość</p>

          <h2>Po 40. nie musisz znikać z kadru.</h2>
        </div>

        <p className="sectionText">
          Wiele kobiet zaczyna odkładać siebie na później właśnie wtedy, gdy ma
          za sobą najwięcej doświadczeń. Sesja kobieca 40 plus może być
          spokojnym sposobem, żeby zobaczyć siebie z klasą, siłą i łagodnością.
        </p>
      </section>

      <section id="dojrzalosc" className="experience section light">
        <div>
          <p className="eyebrow">Najczęstsze myśli</p>

          <h2>Jeśli te obawy brzmią znajomo, nie jesteś wyjątkiem.</h2>
        </div>

        <ul className="premiumList">
          {commonThoughts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="fears section">
        <div className="splitHeader">
          <div>
            <p className="eyebrow">Co jest ważne</p>

            <h2>Dojrzała sesja kobieca wymaga wyczucia, nie schematu.</h2>
          </div>

          <p>
            Inaczej pracuje się z kobietą, która chce wyglądać subtelnie i
            elegancko, inaczej z kobietą budującą markę osobistą, a jeszcze
            inaczej z kobietą, która po latach chce zrobić coś tylko dla siebie.
          </p>
        </div>

        <div className="fearGrid">
          {whatMatters.map((item) => (
            <div className="fearCard" key={item}>
              {item}
            </div>
          ))}
        </div>

        <p className="signatureLine">
          Nie chodzi o odmładzanie. Chodzi o zobaczenie siebie z klasą.
        </p>
      </section>

      <section id="poradnik" className="faq section light">
        <p className="eyebrow">Poradnik</p>

        <h2>Sesja kobieca po 40 — jak o niej myśleć?</h2>

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
            Chodzi o zdjęcia, na których nie udajesz kogoś innego. Widzisz
            siebie dojrzale, kobieco, spokojnie i z charakterem.
          </h2>
        </div>

        <div className="imageFrame wide">
          <Image
            src="/images/sections/transformation.webp"
            alt="Sesja kobieca 40 plus Gdańsk - dojrzała kobiecość"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 52vw"
            style={imageCoverStyle}
          />

          <span>dojrzała kobiecość</span>
        </div>
      </section>

      <section id="portfolio" className="gallery section">
        <p className="eyebrow">Klimat sesji</p>

        <h2>Elegancko, kobieco, bez sztuczności</h2>

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

        <h2>Najczęstsze pytania o sesję kobiecą 40 plus</h2>

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
            alt="Sesja kobieca dla dojrzałej kobiety w Gdańsku"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 80vw"
            style={imageCoverStyle}
          />
        </div>

        <p className="eyebrow lightText">Sesja kobieca 40 plus</p>

        <h2>
          Jeśli myślisz, że to już nie dla Ciebie, tym bardziej warto zacząć od
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
              Sesja kobieca 40 plus — dla kobiet, które chcą zobaczyć siebie
              dojrzale, spokojnie i z klasą.
            </p>
          </div>

          <nav className="footerNav" aria-label="Nawigacja w stopce">
            <a href="/">Strona główna</a>
            <a href="/sesja-kobieca-gdansk">Sesja kobieca Gdańsk</a>
            <a href="/poradnik/nie-umiem-pozowac-sesja-kobieca">
              Nie umiem pozować
            </a>
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
