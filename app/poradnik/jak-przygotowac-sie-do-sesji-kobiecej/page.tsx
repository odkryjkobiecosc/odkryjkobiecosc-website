// app/poradnik/jak-przygotowac-sie-do-sesji-kobiecej/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

import Header from "../../../components/Header";

import gallery01 from "../../../public/images/gallery/gallery-01.webp";
import gallery03 from "../../../public/images/gallery/gallery-03.webp";
import gallery04 from "../../../public/images/gallery/gallery-04.webp";
import gallery08 from "../../../public/images/gallery/gallery-08.webp";

const SITE_URL = "https://www.odkryjkobiecosc.pl";

const pageTitle =
  "Jak przygotować się do sesji kobiecej? | Poradnik przed sesją";

const pageDescription =
  "Jak przygotować się do sesji kobiecej, co zabrać, jak dobrać stylizacje i jak poradzić sobie ze stresem przed aparatem. Praktyczny poradnik dla kobiet przed sesją w Gdańsku i Trójmieście.";

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, chciałabym zapytać o sesję kobiecą i przygotowanie do zdjęć."
);

const whatsappLink = `https://wa.me/48666091909?text=${whatsappMessage}`;

const imageCoverStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
} as const;

const checklist = [
  "przemyśl, jaki efekt chcesz uzyskać: kobiecy, elegancki, zmysłowy, biznesowy lub naturalny",
  "przygotuj 2–4 stylizacje, nawet jeśli ostatecznie wykorzystasz mniej",
  "zabierz ubrania, w których czujesz się dobrze, a nie tylko takie, które „powinny dobrze wyglądać”",
  "unikaj testowania nowych kosmetyków tuż przed sesją",
  "zadbaj o spokojny sen i nie planuj sesji w dzień pełen pośpiechu",
  "nie ucz się pozowania z internetu — od prowadzenia jest fotograf",
];

const sections = [
  {
    title: "1. Nie musisz przychodzić gotowa i pewna siebie",
    text: "Największy błąd to myślenie, że na sesję kobiecą trzeba przyjść już pewną siebie. W praktyce wiele kobiet przychodzi ze stresem, niepewnością i obawą, że nie będą wiedziały, co robić przed aparatem. Dobra sesja jest zaplanowana tak, żeby wejść w nią spokojnie.",
  },
  {
    title: "2. Zastanów się, po co robisz tę sesję",
    text: "Inaczej planuje się sesję jako prezent dla siebie, inaczej sesję po dużej zmianie życiowej, a inaczej zdjęcia do marki osobistej. Przed sesją warto odpowiedzieć sobie na proste pytanie: co chciałabym poczuć, kiedy zobaczę gotowe zdjęcia?",
  },
  {
    title: "3. Przygotuj kilka stylizacji, ale nie przesadzaj",
    text: "Nie musisz mieć idealnie zaplanowanej garderoby. Lepiej przygotować kilka rzeczy i wspólnie wybrać te, które najlepiej pasują do klimatu sesji. Dobrze sprawdzają się proste kroje, neutralne kolory, faktury, marynarki, koszule, sukienki, body, swetry lub elementy bardziej eleganckie.",
  },
  {
    title: "4. Zadbaj o skórę, włosy i dłonie",
    text: "Przed sesją warto zadbać o podstawową pielęgnację, ale bez radykalnych eksperymentów. Nie testuj nowych zabiegów ani kosmetyków dzień przed zdjęciami. Dłonie często pojawiają się w kadrach, dlatego warto zadbać o paznokcie i skórę dłoni.",
  },
  {
    title: "5. Nie ucz się pozowania na siłę",
    text: "Nie musisz zapamiętywać póz z Instagrama. Podczas sesji Marta prowadzi Cię krok po kroku: sylwetka, ręce, spojrzenie, mimika, ruch. To pozwala uniknąć sztuczności i napięcia.",
  },
  {
    title: "6. Przyjdź z nastawieniem na doświadczenie, nie egzamin",
    text: "Sesja kobieca nie jest sprawdzianem z wyglądu. To przestrzeń, w której możesz zobaczyć siebie inaczej. Dlatego najważniejsze przygotowanie nie dotyczy ubrań, tylko decyzji, że dajesz sobie ten czas.",
  },
];

const faqs = [
  {
    question: "Czy muszę wiedzieć, jak pozować przed sesją kobiecą?",
    answer:
      "Nie. Nie musisz umieć pozować ani ćwiczyć póz wcześniej. Podczas sesji fotograf prowadzi Cię krok po kroku.",
  },
  {
    question: "Ile stylizacji zabrać na sesję kobiecą?",
    answer:
      "Najlepiej przygotować 2–4 stylizacje. Ostateczny wybór można dopasować do klimatu sesji, światła i tego, w czym czujesz się najlepiej.",
  },
  {
    question: "Czy mogę zrobić sesję, jeśli stresuję się przed aparatem?",
    answer:
      "Tak. Stres przed sesją jest normalny. Dlatego ważne jest spokojne tempo, rozmowa przed zdjęciami i prowadzenie podczas całej sesji.",
  },
  {
    question: "Co ubrać na sesję kobiecą?",
    answer:
      "Dobrze sprawdzają się rzeczy proste, eleganckie i zgodne z Tobą: sukienka, marynarka, koszula, sweter, body, neutralne kolory lub faktury. Najważniejsze, żeby ubrania wspierały klimat sesji, a nie odciągały uwagę od Ciebie.",
  },
  {
    question: "Czy sesja kobieca może być połączona z biznesową?",
    answer:
      "Tak. Można połączyć portrety kobiece z kadrami wizerunkowymi, np. do LinkedIn, strony internetowej lub marki osobistej.",
  },
];

const relatedLinks = [
  {
    title: "Sesja kobieca Gdańsk",
    text: "Strona z opisem sesji kobiecej, pakietami, procesem i odpowiedziami na najczęstsze obawy.",
    href: "/sesja-kobieca-gdansk",
  },
  {
    title: "Sesja biznesowa Gdańsk",
    text: "Dla kobiet, które chcą połączyć profesjonalny wizerunek z kobiecą, elegancką odsłoną.",
    href: "/sesja-biznesowa-gdansk",
  },
  {
    title: "Odkryj Kobiecość",
    text: "Główny landing premium z klimatem marki, portfolio, pakietami i kontaktem do Marty.",
    href: "/",
  },
];

const galleryImages = [
  {
    image: gallery01,
    alt: "Sesja kobieca Gdańsk - przygotowanie do zdjęć",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery03,
    alt: "Jak przygotować się do sesji kobiecej - portret kobiecy",
    className: "photoCard portrait galleryTall",
  },
  {
    image: gallery04,
    alt: "Sesja kobieca z prowadzeniem krok po kroku",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery08,
    alt: "Profesjonalna sesja kobieca w Trójmieście",
    className: "photoCard portrait galleryPortrait",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/poradnik/jak-przygotowac-sie-do-sesji-kobiecej#article`,
      headline: pageTitle,
      description: pageDescription,
      url: `${SITE_URL}/poradnik/jak-przygotowac-sie-do-sesji-kobiecej`,
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
        "@id": `${SITE_URL}/poradnik/jak-przygotowac-sie-do-sesji-kobiecej`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/poradnik/jak-przygotowac-sie-do-sesji-kobiecej#faq`,
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
    canonical: "/poradnik/jak-przygotowac-sie-do-sesji-kobiecej",
  },
  keywords: [
    "jak przygotować się do sesji kobiecej",
    "sesja kobieca przygotowanie",
    "co zabrać na sesję kobiecą",
    "co ubrać na sesję kobiecą",
    "sesja kobieca Gdańsk poradnik",
    "sesja kobieca Trójmiasto",
    "fotograf kobiecy Gdańsk",
  ],
  openGraph: {
    type: "article",
    locale: "pl_PL",
    url: "/poradnik/jak-przygotowac-sie-do-sesji-kobiecej",
    siteName: "Odkryj Kobiecość",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jak przygotować się do sesji kobiecej — Odkryj Kobiecość",
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

export default function JakPrzygotowacSieDoSesjiKobiecejPage() {
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
          <a href="#checklista">Checklista</a>
          <a href="#poradnik">Poradnik</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>

        <div className="heroCopy">
          <p className="eyebrow">Poradnik przed sesją kobiecą</p>

          <h1>Jak przygotować się do sesji kobiecej?</h1>

          <p className="lead">
            Praktyczny poradnik dla kobiet, które myślą o sesji kobiecej, ale
            nie wiedzą, co zabrać, jak się ubrać i jak poradzić sobie ze stresem
            przed aparatem.
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
              alt="Jak przygotować się do sesji kobiecej w Gdańsku"
              width={1800}
              height={2400}
              priority
              sizes="(max-width: 768px) 92vw, 48vw"
              style={imageCoverStyle}
            />

            <span>poradnik</span>
          </div>

          <div className="floatingCard topCard">przygotowanie</div>
          <div className="floatingCard bottomCard">bez stresu</div>
        </div>
      </section>

      <section className="problem section light">
        <div className="sectionNumber">01</div>

        <div>
          <p className="eyebrow">Najważniejsze</p>

          <h2>
            Nie musisz przygotować siebie idealnie. Masz przygotować przestrzeń
            na doświadczenie.
          </h2>
        </div>

        <p className="sectionText">
          Sesja kobieca nie jest egzaminem z wyglądu ani pozowania.
          Przygotowanie pomaga poczuć się spokojniej, ale nie musi być
          perfekcyjne. Najważniejsze jest to, żebyś przyszła z gotowością, że
          przez chwilę robisz coś tylko dla siebie.
        </p>
      </section>

      <section id="checklista" className="experience section light">
        <div>
          <p className="eyebrow">Checklista</p>

          <h2>Co zrobić przed sesją kobiecą?</h2>
        </div>

        <ul className="premiumList">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="poradnik" className="faq section light">
        <p className="eyebrow">Poradnik krok po kroku</p>

        <h2>Przygotowanie do sesji kobiecej</h2>

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
          <p className="eyebrow lightText">Stylizacje</p>

          <h2>
            Najlepsza stylizacja to nie ta, która wygląda dobrze na wieszaku.
            Najlepsza jest ta, w której czujesz się sobą.
          </h2>
        </div>

        <div className="imageFrame wide">
          <Image
            src="/images/sections/transformation.webp"
            alt="Stylizacja do sesji kobiecej"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 52vw"
            style={imageCoverStyle}
          />

          <span>styl i spokój</span>
        </div>
      </section>

      <section className="fears section">
        <div className="splitHeader">
          <div>
            <p className="eyebrow">Stres przed aparatem</p>

            <h2>
              Najczęściej stres znika, kiedy nie musisz już zgadywać, co robić.
            </h2>
          </div>

          <p>
            Dlatego podczas sesji ważne jest prowadzenie. Fotograf nie tylko
            naciska spust migawki. Pomaga Ci ustawić ciało, dłonie, twarz i
            spojrzenie tak, żebyś nie musiała analizować każdego ruchu.
          </p>
        </div>

        <div className="fearGrid">
          <div className="fearCard">Nie muszę umieć pozować</div>
          <div className="fearCard">Nie muszę wiedzieć, co zrobić z rękami</div>
          <div className="fearCard">Nie muszę wyglądać idealnie</div>
          <div className="fearCard">Nie muszę być pewna siebie od początku</div>
        </div>

        <p className="signatureLine">Od tego jest spokojne prowadzenie.</p>
      </section>

      <section id="portfolio" className="gallery section">
        <p className="eyebrow">Klimat sesji</p>

        <h2>Kobiecość, spokój i elegancja</h2>

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

        <h2>Najczęstsze pytania przed sesją kobiecą</h2>

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

        <h2>Jeśli chcesz przejść od przygotowań do decyzji</h2>

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
            alt="Przygotowanie do sesji kobiecej w Gdańsku"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 80vw"
            style={imageCoverStyle}
          />
        </div>

        <p className="eyebrow lightText">Sesja kobieca Gdańsk</p>

        <h2>Jeśli czujesz, że to dobry moment, napisz do Marty.</h2>

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
              Poradnik dla kobiet, które chcą przygotować się do sesji spokojnie
              i bez presji.
            </p>
          </div>

          <nav className="footerNav" aria-label="Nawigacja w stopce">
            <a href="/">Strona główna</a>
            <a href="/sesja-kobieca-gdansk">Sesja kobieca Gdańsk</a>
            <a href="/sesja-biznesowa-gdansk">Sesja biznesowa Gdańsk</a>
            <a href="#faq">FAQ</a>
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
