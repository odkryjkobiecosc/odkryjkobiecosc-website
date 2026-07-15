// app/sesja-kobieca-trojmiasto/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

import gallery01 from "../../public/images/gallery/gallery-01.webp";
import gallery03 from "../../public/images/gallery/gallery-03.webp";
import gallery04 from "../../public/images/gallery/gallery-04.webp";
import gallery06 from "../../public/images/gallery/gallery-06.webp";
import gallery08 from "../../public/images/gallery/gallery-08.webp";
import gallery10 from "../../public/images/gallery/gallery-10.webp";

const SITE_URL = "https://www.odkryjkobiecosc.pl";

const pageTitle =
  "Sesja kobieca Trójmiasto | Profesjonalna sesja kobieca Gdańsk, Gdynia, Sopot";

const pageDescription =
  "Profesjonalna sesja kobieca w Trójmieście — Gdańsk, Gdynia, Sopot. Sesje kobiece, biznesowe i wizerunkowe dla kobiet, które chcą zobaczyć siebie pewnie, kobieco i elegancko.";

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, chciałabym zapytać o sesję kobiecą w Trójmieście."
);

const whatsappLink = `https://wa.me/48666091909?text=${whatsappMessage}`;

const imageCoverStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
} as const;

const cities = [
  "Gdańsk",
  "Gdynia",
  "Sopot",
  "Wrzeszcz",
  "Oliwa",
  "Jasień",
  "Morena",
  "Przymorze",
];

const forWho = [
  "chcesz zrobić coś tylko dla siebie",
  "szukasz sesji kobiecej w Gdańsku, Gdyni lub Sopocie",
  "nie czujesz się pewnie przed aparatem",
  "potrzebujesz zdjęć kobiecych, biznesowych lub wizerunkowych",
  "chcesz przeżyć spokojne, premium doświadczenie",
  "chcesz zobaczyć siebie inaczej niż na codziennych zdjęciach",
];

const sessionTypes = [
  "sesja kobieca",
  "sesja biznesowa",
  "sesja wizerunkowa",
  "portret kobiecy",
  "zdjęcia do marki osobistej",
  "sesja premium dla kobiet",
];

const steps = [
  ["01", "Rozmowa i określenie kierunku sesji"],
  ["02", "Dobór klimatu, stylizacji i charakteru zdjęć"],
  ["03", "Przygotowanie do sesji i spokojne wejście w proces"],
  ["04", "Sesja z prowadzeniem krok po kroku"],
  ["05", "Wybór zdjęć, retusz i prywatna galeria online"],
];

const packages = [
  {
    name: "ESSENCE",
    price: "550 zł",
    text: "Dla kobiet, które chcą zacząć spokojnie i zobaczyć siebie w eleganckiej, kobiecej odsłonie.",
    features: [
      "konsultacja przed sesją",
      "dobór klimatu i stylizacji",
      "prowadzenie krok po kroku",
      "12 wyretuszowanych zdjęć w wersji kolorowej i czarno-białej",
      "prywatna galeria online",
      "możliwość dokupienia ujęć",
    ],
  },
  {
    name: "SIGNATURE",
    price: "800 zł",
    text: "Najbardziej uniwersalny pakiet — więcej zdjęć, więcej przestrzeni i bardziej kompletne doświadczenie.",
    features: [
      "pełna konsultacja i plan sesji",
      "2–3 stylizacje",
      "sesja kobieca lub biznesowa",
      "20 wyretuszowanych zdjęć w wersji kolorowej i czarno-białej",
      "prywatna galeria online",
      "możliwość dokupienia ujęć",
    ],
  },
  {
    name: "PRESTIGE",
    price: "950 zł",
    text: "Sesja premium dla kobiet, które chcą stworzyć mocniejszy, bardziej świadomy i spójny wizerunek.",
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

const faqs = [
  {
    question: "Czy sesja kobieca w Trójmieście odbywa się tylko w Gdańsku?",
    answer:
      "Sesje realizowane są głównie w Gdańsku, ale oferta kierowana jest do kobiet z całego Trójmiasta: Gdańska, Gdyni, Sopotu i okolic.",
  },
  {
    question: "Czy muszę umieć pozować do sesji kobiecej?",
    answer:
      "Nie. Marta prowadzi Cię krok po kroku podczas sesji, dlatego nie musisz wcześniej znać póz ani mieć doświadczenia przed aparatem.",
  },
  {
    question: "Czy sesja kobieca może być połączona z biznesową?",
    answer:
      "Tak. Sesja może mieć charakter kobiecy, biznesowy lub wizerunkowy. Można połączyć kadry bardziej osobiste ze zdjęciami do marki osobistej, LinkedIn lub strony internetowej.",
  },
  {
    question: "Ile kosztuje sesja kobieca w Trójmieście?",
    answer:
      "Pakiety zaczynają się od 550 zł. Różnią się liczbą zdjęć, zakresem przygotowania i charakterem sesji.",
  },
  {
    question: "Czy sesja kobieca jest dla kobiet, które nie czują się pewnie?",
    answer:
      "Tak. Wiele kobiet przychodzi z obawami, stresem i przekonaniem, że nie są fotogeniczne. Sesja jest zaplanowana tak, żebyś mogła poczuć się swobodniej.",
  },
  {
    question: "Jak zapytać o termin sesji kobiecej w Trójmieście?",
    answer:
      "Najprościej napisać do Marty na WhatsApp i podać, że interesuje Cię sesja kobieca w Trójmieście. W odpowiedzi otrzymasz informacje o pakietach i terminach.",
  },
];

const relatedLinks = [
  {
    title: "Sesja kobieca Gdańsk",
    text: "Główna strona usługi z procesem, pakietami, portfolio i odpowiedziami na najczęstsze pytania.",
    href: "/sesja-kobieca-gdansk",
  },
  {
    title: "Sesja biznesowa Gdańsk",
    text: "Dla kobiet, ekspertek i właścicielek marek, które potrzebują profesjonalnego wizerunku.",
    href: "/sesja-biznesowa-gdansk",
  },
  {
    title: "Jak przygotować się do sesji kobiecej?",
    text: "Poradnik o przygotowaniu, stylizacjach, stresie i tym, co warto zabrać na sesję.",
    href: "/poradnik/jak-przygotowac-sie-do-sesji-kobiecej",
  },
];

const galleryImages = [
  {
    image: gallery01,
    alt: "Sesja kobieca Trójmiasto - elegancki portret kobiecy",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery03,
    alt: "Profesjonalna sesja kobieca Gdańsk Gdynia Sopot",
    className: "photoCard portrait galleryTall",
  },
  {
    image: gallery04,
    alt: "Sesja kobieca w Trójmieście z prowadzeniem krok po kroku",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery06,
    alt: "Fotograf kobiecy Trójmiasto - portret kobiecy premium",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery08,
    alt: "Kobieca sesja zdjęciowa w Trójmieście",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery10,
    alt: "Sesja kobieca premium Gdańsk Gdynia Sopot",
    className: "photoCard portrait galleryTall",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/sesja-kobieca-trojmiasto#service`,
      name: "Sesja kobieca Trójmiasto",
      serviceType: "Profesjonalna sesja kobieca",
      description: pageDescription,
      url: `${SITE_URL}/sesja-kobieca-trojmiasto`,
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "Trójmiasto",
        },
        {
          "@type": "City",
          name: "Gdańsk",
        },
        {
          "@type": "City",
          name: "Gdynia",
        },
        {
          "@type": "City",
          name: "Sopot",
        },
      ],
      provider: {
        "@type": ["LocalBusiness", "ProfessionalService"],
        name: "Odkryj Kobiecość / Marta Krajewska Photo",
        url: SITE_URL,
        email: "krajewskaphoto@gmail.com",
        telephone: "+48666091909",
        image: `${SITE_URL}/opengraph-image`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Gdańsk",
          addressRegion: "pomorskie",
          addressCountry: "PL",
        },
      },
      offers: packages.map((item) => ({
        "@type": "Offer",
        name: `Sesja kobieca Trójmiasto ${item.name}`,
        price: item.price.replace(" zł", ""),
        priceCurrency: "PLN",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/sesja-kobieca-trojmiasto`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/sesja-kobieca-trojmiasto#faq`,
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
    canonical: "/sesja-kobieca-trojmiasto",
  },
  keywords: [
    "sesja kobieca Trójmiasto",
    "sesja kobieca Gdańsk",
    "sesja kobieca Gdynia",
    "sesja kobieca Sopot",
    "fotograf kobiecy Trójmiasto",
    "sesja zdjęciowa kobieca Trójmiasto",
    "sesja wizerunkowa Trójmiasto",
    "Marta Krajewska Photo",
  ],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/sesja-kobieca-trojmiasto",
    siteName: "Odkryj Kobiecość",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sesja kobieca Trójmiasto — Odkryj Kobiecość",
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

export default function SesjaKobiecaTrojmiastoPage() {
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
          <a href="#trojmiasto">Trójmiasto</a>
          <a href="#dla-kogo">Dla kogo</a>
          <a href="#proces">Proces</a>
          <a href="#pakiety">Pakiety</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="mobileAnchorNav" aria-label="Szybka nawigacja">
          <a href="#trojmiasto">Trójmiasto</a>
          <a href="#pakiety">Pakiety</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>

        <div className="heroCopy">
          <p className="eyebrow">Sesja kobieca • Trójmiasto</p>
          <h1>Sesja kobieca Trójmiasto</h1>
          <p className="lead">
            Profesjonalna sesja kobieca dla kobiet z Gdańska, Gdyni, Sopotu i
            okolic. Spokojne prowadzenie, elegancki klimat i doświadczenie, które
            pozwala zobaczyć siebie inaczej.
          </p>

          <div className="heroActions">
            <a
              className="button primary"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Zapytaj o termin
            </a>

            <a className="button secondary" href="#pakiety">
              Zobacz pakiety
            </a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="portraitPlaceholder tall">
            <Image
              src="/images/hero/hero-main.webp"
              alt="Sesja kobieca Trójmiasto - profesjonalny portret kobiecy"
              width={1800}
              height={2400}
              priority
              sizes="(max-width: 768px) 92vw, 48vw"
              style={imageCoverStyle}
            />
            <span>sesja kobieca Trójmiasto</span>
          </div>

          <div className="floatingCard topCard">Gdańsk</div>
          <div className="floatingCard bottomCard">Gdynia • Sopot</div>
        </div>
      </section>

      <section className="problem section light">
        <div className="sectionNumber">01</div>

        <div>
          <p className="eyebrow">Lokalnie</p>
          <h2>Sesja kobieca w Trójmieście — blisko, spokojnie, bez presji.</h2>
        </div>

        <p className="sectionText">
          Jeśli szukasz sesji kobiecej w Gdańsku, Gdyni lub Sopocie, najważniejsze
          nie jest tylko miejsce. Ważne jest doświadczenie: rozmowa, prowadzenie,
          atmosfera i zdjęcia, w których możesz zobaczyć siebie z większą
          pewnością.
        </p>
      </section>

      <section id="trojmiasto" className="experience section light">
        <div>
          <p className="eyebrow">Obszar</p>
          <h2>Sesje kobiece dla kobiet z całego Trójmiasta.</h2>
        </div>

        <ul className="premiumList">
          {cities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="dla-kogo" className="experience section light">
        <div>
          <p className="eyebrow">Dla kogo</p>
          <h2>Ta sesja jest dla Ciebie, jeśli...</h2>
        </div>

        <ul className="premiumList">
          {forWho.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="fears section">
        <div className="splitHeader">
          <div>
            <p className="eyebrow">Rodzaje sesji</p>
            <h2>Jedna marka, kilka kierunków kobiecego wizerunku.</h2>
          </div>

          <p>
            Sesja może być bardziej osobista, kobieca, biznesowa albo premium.
            Najpierw ustalamy, czego potrzebujesz i jak chcesz siebie zobaczyć,
            a dopiero potem dobieramy klimat zdjęć.
          </p>
        </div>

        <div className="fearGrid">
          {sessionTypes.map((item) => (
            <div className="fearCard" key={item}>
              {item}
            </div>
          ))}
        </div>

        <p className="signatureLine">
          Nie musisz wiedzieć od razu, który kierunek wybrać.
        </p>
      </section>

      <section className="dream section dark">
        <div className="dreamText">
          <p className="eyebrow lightText">Efekt</p>
          <h2>
            Chodzi o zdjęcia, przy których pomyślisz: nie wiedziałam, że mogę
            zobaczyć siebie właśnie tak.
          </h2>
        </div>

        <div className="imageFrame wide">
          <Image
            src="/images/sections/transformation.webp"
            alt="Sesja kobieca w Trójmieście - transformacja i kobiecy portret"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 52vw"
            style={imageCoverStyle}
          />
          <span>zobacz siebie inaczej</span>
        </div>
      </section>

      <section id="proces" className="process section dark">
        <div>
          <p className="eyebrow lightText">Proces</p>
          <h2>Jak wygląda sesja kobieca w Trójmieście?</h2>
        </div>

        <div className="timeline">
          {steps.map(([number, title]) => (
            <div className="timelineItem" key={number}>
              <span>{number}</span>
              <p>{title}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pakiety" className="packages section dark">
        <div className="splitHeader">
          <div>
            <p className="eyebrow lightText">Pakiety</p>
            <h2>Cena sesji kobiecej w Trójmieście</h2>
          </div>

          <p>
            Pakiety różnią się zakresem, liczbą zdjęć i charakterem sesji.
            Jeśli nie wiesz, który będzie najlepszy, zacznij od krótkiej
            wiadomości na WhatsApp.
          </p>
        </div>

        <div className="packageGrid">
          {packages.map((item) => (
            <article className="packageCard" key={item.name}>
              <div>
                <p className="packageName">{item.name}</p>
                <h3>{item.price}</h3>
                <p className="packageText">{item.text}</p>
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

      <section id="portfolio" className="gallery section">
        <p className="eyebrow">Portfolio</p>
        <h2>Kobiecy, elegancki klimat zdjęć</h2>

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
        <h2>Najczęstsze pytania o sesję kobiecą w Trójmieście</h2>

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
        <p className="eyebrow">Powiązane strony</p>
        <h2>Zobacz też</h2>

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
            alt="Sesja kobieca Trójmiasto - Odkryj Kobiecość"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 80vw"
            style={imageCoverStyle}
          />
        </div>

        <p className="eyebrow lightText">Sesja kobieca Trójmiasto</p>
        <h2>Jeśli szukasz sesji kobiecej w Trójmieście, napisz do Marty.</h2>

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
              Sesja kobieca w Trójmieście dla kobiet, które chcą zobaczyć siebie
              inaczej.
            </p>
          </div>

          <nav className="footerNav" aria-label="Nawigacja w stopce">
            <a href="/">Strona główna</a>
            <a href="/sesja-kobieca-gdansk">Sesja kobieca Gdańsk</a>
            <a href="/sesja-biznesowa-gdansk">Sesja biznesowa Gdańsk</a>
            <a href="/poradnik/jak-przygotowac-sie-do-sesji-kobiecej">
              Przygotowanie
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
