// app/poradnik/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

import gallery01 from "../../public/images/gallery/gallery-01.webp";
import gallery03 from "../../public/images/gallery/gallery-03.webp";
import gallery04 from "../../public/images/gallery/gallery-04.webp";
import gallery08 from "../../public/images/gallery/gallery-08.webp";

const SITE_URL = "https://www.odkryjkobiecosc.pl";

const pageTitle =
  "Poradnik przed sesją kobiecą | Odkryj Kobiecość Gdańsk";

const pageDescription =
  "Poradnik dla kobiet przed sesją kobiecą, biznesową i wizerunkową. Jak się przygotować, co ubrać, jak poradzić sobie ze stresem i jak wybrać odpowiednią sesję w Gdańsku.";

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, chciałabym zapytać o sesję kobiecą i dobrać najlepszy kierunek dla siebie."
);

const whatsappLink = `https://wa.me/48666091909?text=${whatsappMessage}`;

const imageCoverStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
} as const;

const guidePages = [
  {
    title: "Jak przygotować się do sesji kobiecej?",
    description:
      "Praktyczna checklista przed sesją: przygotowanie, stres, stylizacje, pielęgnacja i organizacja.",
    href: "/poradnik/jak-przygotowac-sie-do-sesji-kobiecej",
    category: "Przygotowanie",
  },
  {
    title: "Co ubrać na sesję kobiecą?",
    description:
      "Poradnik o stylizacjach, kolorach, ubraniach i rzeczach, których lepiej unikać przed zdjęciami.",
    href: "/poradnik/co-ubrac-na-sesje-kobieca",
    category: "Stylizacje",
  },
  {
    title: "Sesja kobieca cena Gdańsk",
    description:
      "Ile kosztuje sesja kobieca, co obejmuje cena i czym różnią się pakiety.",
    href: "/poradnik/sesja-kobieca-cena-gdansk",
    category: "Cena",
  },
  {
    title: "Nie umiem pozować do sesji kobiecej",
    description:
      "Dla kobiet, które stresują się przed aparatem, nie czują się fotogeniczne albo boją się pozowania.",
    href: "/poradnik/nie-umiem-pozowac-sesja-kobieca",
    category: "Obawy",
  },
  {
    title: "Sesja kobieca po ciąży",
    description:
      "Poradnik dla kobiet po ciąży i macierzyństwie, które chcą wrócić do siebie i swojej kobiecości.",
    href: "/poradnik/sesja-kobieca-po-ciazy",
    category: "Macierzyństwo",
  },
  {
    title: "Sesja kobieca 40 plus",
    description:
      "Sesja kobieca dla dojrzałych kobiet — elegancko, spokojnie, kobieco i bez presji.",
    href: "/poradnik/sesja-kobieca-40-plus",
    category: "40 plus",
  },
  {
    title: "Sesja kobieca — czy warto?",
    description:
      "Kiedy sesja kobieca ma sens, co daje i dlaczego nie chodzi tylko o zdjęcia.",
    href: "/poradnik/sesja-kobieca-czy-warto",
    category: "Decyzja",
  },
  {
    title: "Sesja kobieca a sesja biznesowa",
    description:
      "Czym różni się sesja kobieca od biznesowej i kiedy najlepiej połączyć oba kierunki.",
    href: "/poradnik/sesja-kobieca-a-sesja-biznesowa-roznice",
    category: "Porównanie",
  },
];

const servicePages = [
  {
    title: "Sesja kobieca Gdańsk",
    text: "Główna strona usługi: proces, pakiety, portfolio, FAQ i kontakt.",
    href: "/sesja-kobieca-gdansk",
  },
  {
    title: "Sesja kobieca Trójmiasto",
    text: "Lokalna strona dla kobiet z Gdańska, Gdyni, Sopotu i okolic.",
    href: "/sesja-kobieca-trojmiasto",
  },
  {
    title: "Sesja biznesowa Gdańsk",
    text: "Dla kobiet, ekspertek i właścicielek marek, które potrzebują profesjonalnego wizerunku.",
    href: "/sesja-biznesowa-gdansk",
  },
];

const startPoints = [
  "jeśli nie wiesz, od czego zacząć — przeczytaj poradnik o przygotowaniu",
  "jeśli stresujesz się aparatem — zacznij od tekstu o pozowaniu",
  "jeśli zastanawiasz się nad ubraniami — przejdź do poradnika o stylizacjach",
  "jeśli interesuje Cię koszt — sprawdź stronę o cenie sesji kobiecej",
  "jeśli jesteś po ciąży lub macierzyństwie — przeczytaj poradnik dla mam",
  "jeśli budujesz markę osobistą — sprawdź różnicę między sesją kobiecą a biznesową",
];

const faqs = [
  {
    question: "Od którego poradnika zacząć?",
    answer:
      "Najlepiej zacząć od poradnika o przygotowaniu do sesji kobiecej. Jeśli największą obawą jest pozowanie, przejdź od razu do tekstu „Nie umiem pozować do sesji kobiecej”.",
  },
  {
    question: "Czy poradnik zastępuje rozmowę przed sesją?",
    answer:
      "Nie. Poradnik pomaga uporządkować najważniejsze pytania, ale kierunek sesji najlepiej dobrać indywidualnie podczas rozmowy lub wiadomości na WhatsApp.",
  },
  {
    question: "Czy sesja kobieca jest tylko dla pewnych siebie kobiet?",
    answer:
      "Nie. Wiele kobiet przychodzi z obawami, stresem i przekonaniem, że nie są fotogeniczne. Sesja jest prowadzona krok po kroku.",
  },
  {
    question: "Czy mogę połączyć sesję kobiecą z biznesową?",
    answer:
      "Tak. To dobre rozwiązanie dla kobiet, które chcą mieć zdjęcia profesjonalne, ale nadal kobiece, naturalne i zgodne z osobowością.",
  },
];

const galleryImages = [
  {
    image: gallery01,
    alt: "Poradnik przed sesją kobiecą - elegancki portret",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery03,
    alt: "Sesja kobieca Gdańsk - przygotowanie do sesji",
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
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/poradnik#collection`,
      name: pageTitle,
      description: pageDescription,
      url: `${SITE_URL}/poradnik`,
      isPartOf: {
        "@type": "WebSite",
        name: "Odkryj Kobiecość",
        url: SITE_URL,
      },
      about: {
        "@type": "Thing",
        name: "Sesja kobieca, sesja biznesowa i sesja wizerunkowa",
      },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/poradnik#itemlist`,
      name: "Poradniki przed sesją kobiecą",
      itemListElement: guidePages.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        url: `${SITE_URL}${item.href}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/poradnik#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Odkryj Kobiecość",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Poradnik",
          item: `${SITE_URL}/poradnik`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/poradnik#faq`,
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
    canonical: "/poradnik",
  },
  keywords: [
    "poradnik sesja kobieca",
    "sesja kobieca poradnik",
    "jak przygotować się do sesji kobiecej",
    "co ubrać na sesję kobiecą",
    "sesja kobieca Gdańsk poradnik",
    "sesja biznesowa Gdańsk poradnik",
    "fotograf kobiecy Gdańsk",
  ],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/poradnik",
    siteName: "Odkryj Kobiecość",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Poradnik przed sesją kobiecą — Odkryj Kobiecość",
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

export default function PoradnikPage() {
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
          <a href="/sesja-biznesowa-gdansk">Biznesowa</a>
          <a href="#poradniki">Poradniki</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="mobileAnchorNav" aria-label="Szybka nawigacja">
          <a href="#poradniki">Poradniki</a>
          <a href="#od-czego-zaczac">Od czego zacząć</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>

        <div className="heroCopy">
          <p className="eyebrow">Poradnik • sesja kobieca Gdańsk</p>
          <h1>Poradnik przed sesją kobiecą</h1>
          <p className="lead">
            Wszystko, co warto wiedzieć przed sesją kobiecą, biznesową lub
            wizerunkową: przygotowanie, stylizacje, cena, pozowanie, obawy i
            wybór najlepszego kierunku.
          </p>

          <div className="heroActions">
            <a
              className="button primary"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Zapytaj o sesję
            </a>

            <a className="button secondary" href="#poradniki">
              Zobacz poradniki
            </a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="portraitPlaceholder tall">
            <Image
              src="/images/hero/hero-main.webp"
              alt="Poradnik przed sesją kobiecą w Gdańsku"
              width={1800}
              height={2400}
              priority
              sizes="(max-width: 768px) 92vw, 48vw"
              style={imageCoverStyle}
            />
            <span>poradnik</span>
          </div>

          <div className="floatingCard topCard">przygotowanie</div>
          <div className="floatingCard bottomCard">bez presji</div>
        </div>
      </section>

      <section className="problem section light">
        <div className="sectionNumber">01</div>

        <div>
          <p className="eyebrow">Cel poradnika</p>
          <h2>Masz wejść w sesję spokojniej, bez zgadywania i bez presji.</h2>
        </div>

        <p className="sectionText">
          Dobra sesja kobieca zaczyna się wcześniej niż w dniu zdjęć. Zaczyna
          się od zrozumienia, czego potrzebujesz, czego się obawiasz i jak chcesz
          zobaczyć siebie po drugiej stronie aparatu.
        </p>
      </section>

      <section id="poradniki" className="stories section light">
        <p className="eyebrow">Wszystkie poradniki</p>
        <h2>Wybierz temat, który jest teraz dla Ciebie najważniejszy.</h2>

        <div className="storyGrid">
          {guidePages.map((item) => (
            <article className="storyCard" key={item.href}>
              <span className="storySource">{item.category}</span>
              <p>{item.description}</p>
              <strong>
                <a href={item.href}>{item.title}</a>
              </strong>
            </article>
          ))}
        </div>
      </section>

      <section id="od-czego-zaczac" className="experience section light">
        <div>
          <p className="eyebrow">Od czego zacząć</p>
          <h2>Nie musisz czytać wszystkiego od razu.</h2>
        </div>

        <ul className="premiumList">
          {startPoints.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="dream section dark">
        <div className="dreamText">
          <p className="eyebrow lightText">Najważniejsze</p>
          <h2>
            Nie musisz przyjść na sesję gotowa, pewna siebie i z idealnym planem.
            Od tego jest rozmowa, przygotowanie i prowadzenie.
          </h2>
        </div>

        <div className="imageFrame wide">
          <Image
            src="/images/sections/transformation.webp"
            alt="Przygotowanie do sesji kobiecej"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 52vw"
            style={imageCoverStyle}
          />
          <span>spokojne przygotowanie</span>
        </div>
      </section>

      <section id="uslugi" className="stories section light">
        <p className="eyebrow">Usługi</p>
        <h2>Przejdź do strony sesji, jeśli chcesz zobaczyć ofertę.</h2>

        <div className="storyGrid">
          {servicePages.map((item) => (
            <article className="storyCard" key={item.href}>
              <p>{item.text}</p>
              <strong>
                <a href={item.href}>{item.title}</a>
              </strong>
              <span className="storySource">Strona usługowa</span>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="gallery section">
        <p className="eyebrow">Klimat sesji</p>
        <h2>Kobieco, elegancko, z prowadzeniem krok po kroku</h2>

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
        <h2>Najczęstsze pytania przed przejściem do sesji</h2>

        <div className="faqGrid">
          {faqs.map((item) => (
            <article className="faqItem" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="kontakt" className="finalCta section dark">
        <div className="finalCtaVisual">
          <Image
            src="/images/sections/final-cta.webp"
            alt="Poradnik i kontakt przed sesją kobiecą w Gdańsku"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 80vw"
            style={imageCoverStyle}
          />
        </div>

        <p className="eyebrow lightText">Nie wiesz, od czego zacząć?</p>
        <h2>
          Napisz do Marty i krótko opisz, czego potrzebujesz. Dobierzecie
          kierunek sesji bez presji.
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
              Poradnik przed sesją kobiecą, biznesową i wizerunkową dla kobiet,
              które chcą wejść w zdjęcia spokojniej.
            </p>
          </div>

          <nav className="footerNav" aria-label="Nawigacja w stopce">
            <a href="/">Strona główna</a>
            <a href="/sesja-kobieca-gdansk">Sesja kobieca Gdańsk</a>
            <a href="/sesja-kobieca-trojmiasto">Sesja kobieca Trójmiasto</a>
            <a href="/sesja-biznesowa-gdansk">Sesja biznesowa Gdańsk</a>
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
