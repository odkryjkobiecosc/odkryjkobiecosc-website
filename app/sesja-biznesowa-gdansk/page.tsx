// app/sesja-biznesowa-gdansk/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

import Header from "../../components/Header";

import gallery01 from "../../public/images/gallery/gallery-01.webp";
import gallery02 from "../../public/images/gallery/gallery-02.webp";
import gallery05 from "../../public/images/gallery/gallery-05.webp";
import gallery07 from "../../public/images/gallery/gallery-07.webp";
import gallery09 from "../../public/images/gallery/gallery-09.webp";
import gallery10 from "../../public/images/gallery/gallery-10.webp";

const SITE_URL = "https://www.odkryjkobiecosc.pl";

const pageTitle =
  "Sesja biznesowa Gdańsk | Sesja wizerunkowa i zdjęcia do marki osobistej";

const pageDescription =
  "Profesjonalna sesja biznesowa i wizerunkowa w Gdańsku dla kobiet, ekspertek, właścicielek firm i marek osobistych. Zdjęcia do LinkedIn, strony internetowej, social media i komunikacji premium.";

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, chciałabym zapytać o sesję biznesową lub wizerunkową w Gdańsku."
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
  "potrzebujesz zdjęć na LinkedIn, stronę www lub social media",
  "chcesz wyglądać profesjonalnie, ale nie sztywno",
  "prowadzisz firmę, gabinet, studio lub usługi premium",
  "chcesz połączyć kobiecość, elegancję i wiarygodność",
];

const useCases = [
  "LinkedIn i profil zawodowy",
  "strona internetowa",
  "social media",
  "oferta i materiały sprzedażowe",
  "marka osobista",
  "zdjęcia eksperckie",
];

const fears = [
  "Nie chcę wyglądać sztucznie",
  "Nie wiem, jak pozować",
  "Nie lubię zdjęć biznesowych",
  "Nie wiem, jaki styl będzie pasował",
];

const steps = [
  ["01", "Rozmowa o Twojej marce, branży i celu zdjęć"],
  ["02", "Ustalenie klimatu sesji: biznesowy, kobiecy lub premium"],
  ["03", "Dobór stylizacji, kolorów i kierunku wizualnego"],
  ["04", "Sesja z prowadzeniem krok po kroku"],
  ["05", "Wybór zdjęć, retusz i gotowe kadry do użycia online"],
];

const packages = [
  {
    name: "ESSENCE",
    price: "550 zł",
    text: "Dla kobiet, które potrzebują podstawowego zestawu profesjonalnych zdjęć do profilu, komunikacji online lub pierwszej odsłony marki.",
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
    text: "Najlepszy wybór dla marki osobistej — więcej kadrów, kilka wariantów wizerunku i materiał do wykorzystania w wielu kanałach.",
    features: [
      "pełna konsultacja i plan sesji",
      "2–3 stylizacje",
      "sesja biznesowa lub kobieco-wizerunkowa",
      "20 wyretuszowanych zdjęć w wersji kolorowej i czarno-białej",
      "prywatna galeria online",
      "możliwość dokupienia ujęć",
    ],
  },
  {
    name: "PRESTIGE",
    price: "950 zł",
    text: "Rozbudowana sesja premium dla kobiet, które chcą stworzyć mocny, spójny i elegancki wizerunek swojej marki.",
    features: [
      "rozbudowany plan sesji",
      "kilka scen lub klimatów",
      "sesja biznesowa + kobieca",
      "profesjonalne prowadzenie",
      "30 wyretuszowanych zdjęć w wersji kolorowej i czarno-białej",
      "prywatna galeria online",
    ],
  },
];

const faqs = [
  {
    question:
      "Czy sesja biznesowa w Gdańsku może wyglądać kobieco i naturalnie?",
    answer:
      "Tak. Sesja biznesowa nie musi oznaczać sztywnego portretu na białym tle. Może być elegancka, kobieca, spokojna i nadal profesjonalna.",
  },
  {
    question: "Czy zdjęcia nadają się na LinkedIn?",
    answer:
      "Tak. Sesja może być zaplanowana tak, aby przygotować zdjęcia na LinkedIn, stronę internetową, social media, ofertę, bio eksperckie i materiały sprzedażowe.",
  },
  {
    question: "Czy muszę wiedzieć, jak pozować do zdjęć biznesowych?",
    answer:
      "Nie. Marta prowadzi Cię krok po kroku. Pomaga w ustawieniu sylwetki, dłoni, spojrzenia i mimiki, żeby zdjęcia wyglądały profesjonalnie, ale naturalnie.",
  },
  {
    question: "Czy mogę połączyć sesję biznesową z kobiecą?",
    answer:
      "Tak. To bardzo dobry kierunek dla kobiet, które chcą pokazać kompetencje, ale też osobowość, kobiecość i indywidualny styl.",
  },
  {
    question: "Dla jakich branż sprawdzi się sesja wizerunkowa?",
    answer:
      "Dla ekspertek, trenerek, psycholożek, kosmetolożek, fotografek, właścicielek marek, konsultantek, specjalistek usług premium i kobiet budujących markę osobistą.",
  },
  {
    question: "Jak zapytać o termin sesji biznesowej?",
    answer:
      "Najprościej napisać na WhatsApp i krótko opisać, do czego potrzebujesz zdjęć: LinkedIn, strona internetowa, marka osobista, social media albo materiały firmowe.",
  },
];

const galleryImages = [
  {
    image: gallery09,
    alt: "Sesja biznesowa Gdańsk - profesjonalny portret kobiecy",
    className: "photoCard portrait galleryTall",
  },
  {
    image: gallery01,
    alt: "Sesja wizerunkowa Gdańsk - elegancki kadr premium",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery02,
    alt: "Zdjęcia biznesowe dla kobiet w Trójmieście",
    className: "photoCard landscape gallerySmall",
  },
  {
    image: gallery07,
    alt: "Profesjonalna sesja do marki osobistej Gdańsk",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery05,
    alt: "Sesja biznesowa i kobieca w eleganckim klimacie",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery10,
    alt: "Portret wizerunkowy premium dla kobiety",
    className: "photoCard portrait galleryTall",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/sesja-biznesowa-gdansk#service`,
      name: "Sesja biznesowa Gdańsk",
      serviceType: "Profesjonalna sesja biznesowa i wizerunkowa",
      description: pageDescription,
      url: `${SITE_URL}/sesja-biznesowa-gdansk`,
      areaServed: [
        {
          "@type": "City",
          name: "Gdańsk",
        },
        {
          "@type": "AdministrativeArea",
          name: "Trójmiasto",
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
        name: `Sesja biznesowa ${item.name}`,
        price: item.price.replace(" zł", ""),
        priceCurrency: "PLN",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/sesja-biznesowa-gdansk`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/sesja-biznesowa-gdansk#faq`,
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
    canonical: "/sesja-biznesowa-gdansk",
  },
  keywords: [
    "sesja biznesowa Gdańsk",
    "sesja wizerunkowa Gdańsk",
    "fotograf biznesowy Gdańsk",
    "zdjęcia biznesowe Gdańsk",
    "zdjęcia do LinkedIn Gdańsk",
    "sesja do marki osobistej Gdańsk",
    "sesja biznesowa Trójmiasto",
    "Marta Krajewska Photo",
  ],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/sesja-biznesowa-gdansk",
    siteName: "Odkryj Kobiecość",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sesja biznesowa Gdańsk — Odkryj Kobiecość",
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

export default function SesjaBiznesowaGdanskPage() {
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
          <p className="eyebrow">
            Sesja biznesowa Gdańsk • wizerunek premium
          </p>

          <h1>Sesja biznesowa Gdańsk</h1>

          <p className="lead">
            Profesjonalna sesja biznesowa i wizerunkowa dla kobiet, które chcą
            pokazać swoją markę z klasą — kompetentnie, naturalnie i bez
            sztywnego pozowania.
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
              alt="Sesja biznesowa Gdańsk - profesjonalny portret wizerunkowy"
              width={1800}
              height={2400}
              priority
              sizes="(max-width: 768px) 92vw, 48vw"
              style={imageCoverStyle}
            />

            <span>sesja biznesowa</span>
          </div>

          <div className="floatingCard topCard">LinkedIn</div>
          <div className="floatingCard bottomCard">marka osobista</div>
        </div>
      </section>

      <section className="problem section light">
        <div className="sectionNumber">01</div>

        <div>
          <p className="eyebrow">Wizerunek</p>

          <h2>Profesjonalne zdjęcie nie musi być sztywne.</h2>
        </div>

        <p className="sectionText">
          Dobre zdjęcia biznesowe mają pokazać nie tylko kompetencje, ale też
          osobowość, spokój, styl i zaufanie. Dlatego sesja wizerunkowa może być
          elegancka, kobieca i naturalna jednocześnie.
        </p>
      </section>

      <section id="dla-kogo" className="experience section light">
        <div>
          <p className="eyebrow">Dla kogo</p>

          <h2>Dla kobiet, które chcą pokazać swoją markę profesjonalnie.</h2>
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
            <p className="eyebrow">Gdzie wykorzystasz zdjęcia</p>

            <h2>
              Jedna sesja może pracować dla Twojej marki przez wiele miesięcy.
            </h2>
          </div>

          <p>
            Zdjęcia z sesji biznesowej możesz wykorzystać w miejscach, gdzie
            klientka albo klient po raz pierwszy ocenia Twoją wiarygodność: w
            Google, na stronie, w social mediach i w ofercie.
          </p>
        </div>

        <div className="fearGrid">
          {useCases.map((item) => (
            <div className="fearCard" key={item}>
              {item}
            </div>
          ))}
        </div>

        <p className="signatureLine">
          Wizerunek ma budować zaufanie jeszcze przed pierwszą rozmową.
        </p>
      </section>

      <section className="dream section dark">
        <div className="dreamText">
          <p className="eyebrow lightText">Cel sesji</p>

          <h2>
            Masz wyglądać jak ekspertka, ale nadal jak Ty. Profesjonalnie,
            kobieco, spokojnie i z charakterem.
          </h2>
        </div>

        <div className="imageFrame wide">
          <Image
            src="/images/sections/transformation.webp"
            alt="Sesja wizerunkowa Gdańsk - kobiecy portret biznesowy"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 52vw"
            style={imageCoverStyle}
          />

          <span>wizerunek premium</span>
        </div>
      </section>

      <section className="fears section">
        <div className="splitHeader">
          <div>
            <p className="eyebrow">Najczęstsze obawy</p>

            <h2>Nie musisz wiedzieć, jak wyglądać „profesjonalnie”.</h2>
          </div>

          <p>
            Od tego jest plan sesji. Przed zdjęciami ustalamy, jaki efekt ma
            powstać: bardziej ekspercki, kobiecy, premium, naturalny albo
            mocniej sprzedażowy.
          </p>
        </div>

        <div className="fearGrid">
          {fears.map((fear) => (
            <div className="fearCard" key={fear}>
              {fear}
            </div>
          ))}
        </div>

        <p className="signatureLine">
          Marta pomaga dobrać kierunek, styl i sposób pozowania.
        </p>
      </section>

      <section id="proces" className="process section dark">
        <div>
          <p className="eyebrow lightText">Jak wygląda sesja</p>

          <h2>Proces sesji biznesowej w Gdańsku</h2>
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
            <p className="eyebrow lightText">Cena sesji biznesowej</p>

            <h2>Pakiety sesji biznesowej i wizerunkowej</h2>
          </div>

          <p>
            Pakiety można dopasować do celu: zdjęcia do LinkedIn, zdjęcia na
            stronę internetową, materiały do marki osobistej albo bardziej
            kobieca sesja premium.
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

        <h2>Zdjęcia biznesowe, kobiece i wizerunkowe</h2>

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

      <section className="about section light">
        <div className="aboutImage">
          <div className="portraitPlaceholder small">
            <Image
              src="/images/sections/about-marta.webp"
              alt="Marta Krajewska - fotografka sesji biznesowych i kobiecych w Gdańsku"
              width={1600}
              height={2200}
              sizes="(max-width: 768px) 90vw, 34vw"
              style={imageCoverStyle}
            />

            <span>Marta</span>
          </div>
        </div>

        <div className="aboutCopy">
          <p className="eyebrow">Fotograf biznesowy Gdańsk</p>

          <h2>Marta Krajewska Photo</h2>

          <p>
            Marta tworzy sesje kobiece, biznesowe i wizerunkowe w Trójmieście.
            W sesjach dla marek osobistych łączy elegancki portret, spokojną
            atmosferę i prowadzenie krok po kroku.
          </p>

          <p>
            Dzięki temu zdjęcia mogą być profesjonalne, ale nie bezosobowe.
            Mają pokazywać Ciebie, Twoją energię, styl i poziom usług, które
            oferujesz.
          </p>
        </div>
      </section>

      <section id="faq" className="faq section light">
        <p className="eyebrow">FAQ</p>

        <h2>Najczęstsze pytania o sesję biznesową w Gdańsku</h2>

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
        <p className="eyebrow">Powiązane tematy</p>

        <h2>Sesja biznesowa może być częścią większego wizerunku.</h2>

        <div className="storyGrid">
          <article className="storyCard">
            <p>
              Jeśli chcesz bardziej kobiecej odsłony sesji, zobacz stronę
              przygotowaną pod sesję kobiecą w Gdańsku.
            </p>

            <strong>
              <a href="/sesja-kobieca-gdansk">Sesja kobieca Gdańsk</a>
            </strong>

            <span className="storySource">Podstrona SEO</span>
          </article>

          <article className="storyCard">
            <p>
              Zobacz główny landing Odkryj Kobiecość i pełny klimat marki
              stworzonej wokół sesji premium dla kobiet.
            </p>

            <strong>
              <a href="/">Odkryj Kobiecość</a>
            </strong>

            <span className="storySource">Strona główna</span>
          </article>

          <article className="storyCard">
            <p>
              Najszybsza droga do ustalenia terminu to wiadomość na WhatsApp z
              informacją, gdzie chcesz wykorzystać zdjęcia.
            </p>

            <strong>
              <a href={whatsappLink}>Napisz do Marty</a>
            </strong>

            <span className="storySource">Kontakt</span>
          </article>
        </div>
      </section>

      <section id="kontakt" className="finalCta section dark">
        <div className="finalCtaVisual">
          <Image
            src="/images/sections/final-cta.webp"
            alt="Sesja biznesowa Gdańsk - zdjęcia wizerunkowe premium"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 80vw"
            style={imageCoverStyle}
          />
        </div>

        <p className="eyebrow lightText">Sesja biznesowa Gdańsk</p>

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
              Sesja biznesowa i wizerunkowa w Gdańsku dla kobiet, które chcą
              pokazać swoją markę z klasą.
            </p>
          </div>

          <nav className="footerNav" aria-label="Nawigacja w stopce">
            <a href="/">Strona główna</a>
            <a href="/sesja-kobieca-gdansk">Sesja kobieca Gdańsk</a>
            <a href="#pakiety">Pakiety</a>
            <a href="#portfolio">Portfolio</a>
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
