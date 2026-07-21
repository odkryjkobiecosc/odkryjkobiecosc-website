// app/sesja-wizerunkowa-gdansk/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

import Header from "../../components/Header";

import gallery01 from "../../public/images/gallery/gallery-01.webp";
import gallery03 from "../../public/images/gallery/gallery-03.webp";
import gallery04 from "../../public/images/gallery/gallery-04.webp";
import gallery05 from "../../public/images/gallery/gallery-05.webp";
import gallery09 from "../../public/images/gallery/gallery-09.webp";
import gallery10 from "../../public/images/gallery/gallery-10.webp";

const SITE_URL = "https://www.odkryjkobiecosc.pl";

const pageTitle =
  "Sesja wizerunkowa Gdańsk | Profesjonalna sesja dla kobiet i marek osobistych";

const pageDescription =
  "Profesjonalna sesja wizerunkowa w Gdańsku dla kobiet, ekspertek, właścicielek firm i marek osobistych. Zdjęcia do strony www, LinkedIn, social media i komunikacji premium.";

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, chciałabym zapytać o sesję wizerunkową w Gdańsku."
);

const whatsappLink = `https://wa.me/48666091909?text=${whatsappMessage}`;

const imageCoverStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
} as const;

const forWho = [
  "budujesz markę osobistą lub ekspercką",
  "potrzebujesz zdjęć na stronę internetową, LinkedIn lub social media",
  "chcesz wyglądać profesjonalnie, ale naturalnie",
  "prowadzisz usługi premium i chcesz spójnego wizerunku",
  "potrzebujesz zdjęć do oferty, bio, prezentacji lub kampanii",
  "chcesz połączyć kobiecość, zaufanie i profesjonalizm",
];

const useCases = [
  "strona internetowa",
  "LinkedIn",
  "Instagram i Facebook",
  "oferta sprzedażowa",
  "bio eksperckie",
  "materiały reklamowe",
  "Google Business Profile",
  "marka osobista",
];

const steps = [
  ["01", "Rozmowa o Twojej marce, branży i celu zdjęć"],
  ["02", "Dobór klimatu: ekspercki, kobiecy, premium lub naturalny"],
  ["03", "Plan stylizacji, kadrów i zastosowania zdjęć"],
  ["04", "Sesja z prowadzeniem krok po kroku"],
  ["05", "Wybór zdjęć, retusz i gotowe materiały do publikacji"],
];

const packages = [
  {
    name: "ESSENCE",
    price: "550 zł",
    text: "Dla kobiet, które potrzebują podstawowego zestawu profesjonalnych zdjęć wizerunkowych.",
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
    text: "Najlepszy wybór dla marki osobistej — więcej kadrów i kilka wariantów wizerunku.",
    features: [
      "pełna konsultacja i plan sesji",
      "2–3 stylizacje",
      "sesja wizerunkowa lub kobieco-biznesowa",
      "20 wyretuszowanych zdjęć w wersji kolorowej i czarno-białej",
      "prywatna galeria online",
      "możliwość dokupienia dodatkowych ujęć",
    ],
  },
  {
    name: "PRESTIGE",
    price: "950 zł",
    text: "Rozbudowana sesja premium dla kobiet, które chcą stworzyć mocny i spójny wizerunek.",
    features: [
      "rozbudowany plan sesji",
      "kilka scen lub klimatów",
      "sesja wizerunkowa + kobieca",
      "profesjonalne prowadzenie",
      "30 wyretuszowanych zdjęć w wersji kolorowej i czarno-białej",
      "prywatna galeria online",
    ],
  },
];

const faqs = [
  {
    question: "Czym jest sesja wizerunkowa?",
    answer:
      "Sesja wizerunkowa to profesjonalne zdjęcia, które mają wspierać Twój wizerunek zawodowy, markę osobistą lub komunikację online. Zdjęcia mogą być wykorzystane na stronie internetowej, LinkedIn, w social mediach, ofercie lub materiałach eksperckich.",
  },
  {
    question: "Czy sesja wizerunkowa różni się od biznesowej?",
    answer:
      "Sesja biznesowa zwykle mocniej skupia się na profesjonalnym portrecie. Sesja wizerunkowa może być szersza: pokazuje nie tylko kompetencje, ale też osobowość, styl, energię marki i sposób komunikacji.",
  },
  {
    question: "Czy sesja wizerunkowa może być kobieca?",
    answer:
      "Tak. Wizerunek profesjonalny nie musi być sztywny. Sesja może być elegancka, kobieca, naturalna i nadal bardzo profesjonalna.",
  },
  {
    question: "Czy muszę wiedzieć, jak pozować?",
    answer:
      "Nie. Marta prowadzi Cię krok po kroku, pomaga ustawić sylwetkę, dłonie, spojrzenie i mimikę.",
  },
  {
    question: "Dla jakich branż sprawdzi się sesja wizerunkowa?",
    answer:
      "Dla ekspertek, psycholożek, kosmetolożek, trenerek, konsultantek, właścicielek firm, usługodawczyń premium i kobiet budujących markę osobistą.",
  },
  {
    question: "Jak zapytać o termin sesji wizerunkowej?",
    answer:
      "Najprościej napisać na WhatsApp i krótko opisać, gdzie chcesz wykorzystać zdjęcia: strona www, LinkedIn, social media, oferta lub marka osobista.",
  },
];

const relatedLinks = [
  {
    title: "Sesja biznesowa Gdańsk",
    text: "Dla kobiet, które potrzebują profesjonalnego portretu biznesowego i zdjęć do komunikacji zawodowej.",
    href: "/sesja-biznesowa-gdansk",
  },
  {
    title: "Sesja kobieca Gdańsk",
    text: "Dla kobiet, które chcą zobaczyć siebie w bardziej kobiecej, spokojnej i pewnej odsłonie.",
    href: "/sesja-kobieca-gdansk",
  },
  {
    title: "Sesja kobieca a biznesowa",
    text: "Poradnik o tym, kiedy wybrać sesję kobiecą, biznesową lub wizerunkową.",
    href: "/poradnik/sesja-kobieca-a-sesja-biznesowa-roznice",
  },
];

const galleryImages = [
  {
    image: gallery09,
    alt: "Sesja wizerunkowa Gdańsk - profesjonalny portret kobiecy",
    className: "photoCard portrait galleryTall",
  },
  {
    image: gallery01,
    alt: "Sesja wizerunkowa dla marki osobistej Gdańsk",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery03,
    alt: "Profesjonalna sesja wizerunkowa dla kobiet w Trójmieście",
    className: "photoCard portrait galleryTall",
  },
  {
    image: gallery04,
    alt: "Sesja wizerunkowa z prowadzeniem krok po kroku",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery05,
    alt: "Zdjęcia wizerunkowe do strony internetowej i LinkedIn",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery10,
    alt: "Portret wizerunkowy premium Gdańsk",
    className: "photoCard portrait galleryTall",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/sesja-wizerunkowa-gdansk#service`,
      name: "Sesja wizerunkowa Gdańsk",
      serviceType: "Profesjonalna sesja wizerunkowa",
      description: pageDescription,
      url: `${SITE_URL}/sesja-wizerunkowa-gdansk`,
      areaServed: [
        {
          "@type": "City",
          name: "Gdańsk",
        },
        {
          "@type": "AdministrativeArea",
          name: "Trójmiasto",
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
        name: `Sesja wizerunkowa ${item.name}`,
        price: item.price.replace(" zł", ""),
        priceCurrency: "PLN",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/sesja-wizerunkowa-gdansk`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/sesja-wizerunkowa-gdansk#faq`,
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
    canonical: "/sesja-wizerunkowa-gdansk",
  },
  keywords: [
    "sesja wizerunkowa Gdańsk",
    "sesja wizerunkowa Trójmiasto",
    "zdjęcia wizerunkowe Gdańsk",
    "sesja do marki osobistej Gdańsk",
    "sesja biznesowa Gdańsk",
    "fotograf wizerunkowy Gdańsk",
    "zdjęcia do LinkedIn Gdańsk",
  ],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/sesja-wizerunkowa-gdansk",
    siteName: "Odkryj Kobiecość",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sesja wizerunkowa Gdańsk — Odkryj Kobiecość",
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

export default function SesjaWizerunkowaGdanskPage() {
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
          <a href="#dla-kogo">Dla kogo</a>
          <a href="#pakiety">Pakiety</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>

        <div className="heroCopy">
          <p className="eyebrow">Sesja wizerunkowa Gdańsk</p>

          <h1>Sesja wizerunkowa Gdańsk</h1>

          <p className="lead">
            Profesjonalna sesja dla kobiet, które chcą pokazać swoją markę,
            kompetencje i osobowość w spójny, elegancki i naturalny sposób.
          </p>

          <div className="heroActions">
            <a className="button primary" href={whatsappLink}>
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
              alt="Sesja wizerunkowa Gdańsk - portret kobiecy"
              width={1800}
              height={2400}
              priority
              sizes="(max-width: 768px) 92vw, 48vw"
              style={imageCoverStyle}
            />

            <span>wizerunek</span>
          </div>

          <div className="floatingCard topCard">marka osobista</div>
          <div className="floatingCard bottomCard">Gdańsk</div>
        </div>
      </section>

      <section className="problem section light">
        <div className="sectionNumber">01</div>

        <div>
          <p className="eyebrow">Wizerunek</p>

          <h2>
            Zdjęcia wizerunkowe mają budować zaufanie jeszcze przed rozmową.
          </h2>
        </div>

        <p className="sectionText">
          Klient często widzi Twoje zdjęcie zanim przeczyta ofertę. Dlatego
          sesja wizerunkowa powinna pokazywać nie tylko profesjonalizm, ale też
          spokój, styl, osobowość i poziom usług, które oferujesz.
        </p>
      </section>

      <section id="dla-kogo" className="experience section light">
        <div>
          <p className="eyebrow">Dla kogo</p>

          <h2>Dla kobiet, które chcą pokazać swój wizerunek świadomie.</h2>
        </div>

        <ul className="premiumList">
          {forWho.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="zastosowanie" className="fears section">
        <div className="splitHeader">
          <div>
            <p className="eyebrow">Zastosowanie</p>

            <h2>Jedna sesja może dać materiał do wielu miejsc.</h2>
          </div>

          <p>
            Dobre zdjęcia wizerunkowe pracują nie tylko jako portret profilowy.
            Możesz wykorzystać je na stronie, w social mediach, ofertach,
            prezentacjach i materiałach sprzedażowych.
          </p>
        </div>

        <div className="fearGrid">
          {useCases.map((item) => (
            <div className="fearCard" key={item}>
              {item}
            </div>
          ))}
        </div>

        <p className="signatureLine">Spójny wizerunek zwiększa zaufanie.</p>
      </section>

      <section className="dream section dark">
        <div className="dreamText">
          <p className="eyebrow lightText">Efekt</p>

          <h2>
            Profesjonalnie, ale nie sztywno. Kobieco, ale nadal ekspercko.
            Naturalnie, ale z klasą.
          </h2>
        </div>

        <div className="imageFrame wide">
          <Image
            src="/images/sections/transformation.webp"
            alt="Sesja wizerunkowa dla kobiet w Gdańsku"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 52vw"
            style={imageCoverStyle}
          />

          <span>wizerunek premium</span>
        </div>
      </section>

      <section id="proces" className="process section dark">
        <div>
          <p className="eyebrow lightText">Proces</p>

          <h2>Jak wygląda sesja wizerunkowa?</h2>
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

            <h2>Pakiety sesji wizerunkowej</h2>
          </div>

          <p>
            Zakres można dopasować do tego, czy potrzebujesz kilku zdjęć
            profilowych, czy pełnego materiału do marki osobistej.
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

              <a className="button packageButton" href={whatsappLink}>
                Zapytaj o termin
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="portfolio" className="gallery section">
        <p className="eyebrow">Portfolio</p>

        <h2>Zdjęcia wizerunkowe, kobiece i biznesowe</h2>

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

        <h2>Najczęstsze pytania o sesję wizerunkową w Gdańsku</h2>

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
            alt="Sesja wizerunkowa Gdańsk - kontakt"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 80vw"
            style={imageCoverStyle}
          />
        </div>

        <p className="eyebrow lightText">Sesja wizerunkowa Gdańsk</p>

        <h2>
          Jeśli chcesz, żeby Twój wizerunek pracował razem z Twoją marką,
          napisz do Marty.
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
              Sesja wizerunkowa w Gdańsku dla kobiet, ekspertek i marek
              osobistych.
            </p>
          </div>

          <nav className="footerNav" aria-label="Nawigacja w stopce">
            <a href="/">Strona główna</a>
            <a href="/sesja-kobieca-gdansk">Sesja kobieca Gdańsk</a>
            <a href="/sesja-biznesowa-gdansk">Sesja biznesowa Gdańsk</a>
            <a href="/poradnik">Poradnik</a>
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
