// app/sesja-kobieca-gdansk/page.tsx

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
  "Sesja kobieca Gdańsk | Profesjonalna sesja kobieca w Trójmieście";

const pageDescription =
  "Sesja kobieca w Gdańsku dla kobiet, które chcą zobaczyć siebie w pewnej, kobiecej i eleganckiej odsłonie. Marta Krajewska Photo — sesje kobiece, wizerunkowe i premium w Trójmieście.";

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, chciałabym zapytać o sesję kobiecą w Gdańsku."
);

const whatsappLink = `https://wa.me/48666091909?text=${whatsappMessage}`;

const imageCoverStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
} as const;

const forWho = [
  "chcesz zrobić coś tylko dla siebie",
  "od dawna odkładasz siebie na później",
  "nie czujesz się pewnie przed aparatem",
  "potrzebujesz kobiecych lub wizerunkowych zdjęć",
  "chcesz poczuć się atrakcyjnie, spokojnie i naturalnie",
];

const fears = [
  "Nie umiem pozować",
  "Nie wiem, co założyć",
  "Nie jestem fotogeniczna",
  "Stresuję się przed aparatem",
];

const steps = [
  ["01", "Krótka rozmowa i ustalenie celu sesji"],
  ["02", "Dobór klimatu, stylu i kierunku zdjęć"],
  ["03", "Przygotowanie, makijaż i spokojne wejście w sesję"],
  ["04", "Prowadzenie krok po kroku podczas zdjęć"],
  ["05", "Wybór ujęć, retusz i prywatna galeria online"],
];

const packages = [
  {
    name: "ESSENCE",
    price: "550 zł",
    text: "Dla kobiet, które chcą spokojnie wejść w doświadczenie sesji kobiecej i zobaczyć siebie w eleganckiej odsłonie.",
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
    text: "Najbardziej uniwersalny pakiet dla kobiet, które chcą więcej ujęć, więcej przestrzeni i bardziej kompletne doświadczenie.",
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
    text: "Sesja premium dla kobiet, które chcą stworzyć mocny, elegancki i świadomy wizerunek.",
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
    question: "Czy sesja kobieca w Gdańsku jest dla mnie, jeśli nie umiem pozować?",
    answer:
      "Tak. Nie musisz mieć doświadczenia przed aparatem. Podczas sesji Marta prowadzi Cię krok po kroku — od ustawienia sylwetki, przez dłonie, spojrzenie i mimikę.",
  },
  {
    question: "Czy sesja kobieca jest tylko dla bardzo pewnych siebie kobiet?",
    answer:
      "Nie. Bardzo wiele kobiet przychodzi z obawą, że nie są fotogeniczne albo nie będą wiedziały, co robić. Sesja jest zaplanowana tak, żebyś mogła stopniowo poczuć się swobodnie.",
  },
  {
    question: "Gdzie odbywa się sesja kobieca?",
    answer:
      "Sesje realizowane są w Trójmieście, głównie w Gdańsku. Szczegóły miejsca, klimatu i stylu najlepiej ustalić podczas krótkiej rozmowy przed sesją.",
  },
  {
    question: "Co ubrać na sesję kobiecą?",
    answer:
      "Nie musisz decydować sama. Przed sesją omawiany jest klimat zdjęć i stylizacje. Możesz zabrać kilka propozycji, a Marta pomoże dobrać te, które najlepiej pasują do celu sesji.",
  },
  {
    question: "Czy mogę połączyć sesję kobiecą z biznesową?",
    answer:
      "Tak. Sesja może mieć charakter kobiecy, biznesowy lub łączyć oba kierunki — np. elegancki portret, zdjęcia do marki osobistej i bardziej kobiece kadry.",
  },
  {
    question: "Jak zapytać o termin sesji kobiecej w Gdańsku?",
    answer:
      "Najprościej napisać na WhatsApp. W wiadomości możesz podać, że interesuje Cię sesja kobieca w Gdańsku, a Marta odpowie z informacją o dostępnych terminach i pakietach.",
  },
];

const galleryImages = [
  {
    image: gallery01,
    alt: "Sesja kobieca Gdańsk - elegancki portret kobiecy",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery03,
    alt: "Profesjonalna sesja kobieca w Trójmieście",
    className: "photoCard portrait galleryTall",
  },
  {
    image: gallery04,
    alt: "Sesja kobieca z prowadzeniem krok po kroku",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery06,
    alt: "Kobiecy portret w ciemnym, eleganckim klimacie",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery08,
    alt: "Sesja kobieca Gdańsk - kobiecość i pewność siebie",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery10,
    alt: "Portret kobiecy premium w Trójmieście",
    className: "photoCard portrait galleryTall",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/sesja-kobieca-gdansk#service`,
      name: "Sesja kobieca Gdańsk",
      serviceType: "Profesjonalna sesja kobieca",
      description: pageDescription,
      url: `${SITE_URL}/sesja-kobieca-gdansk`,
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
        name: `Sesja kobieca ${item.name}`,
        price: item.price.replace(" zł", ""),
        priceCurrency: "PLN",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/sesja-kobieca-gdansk`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/sesja-kobieca-gdansk#faq`,
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
    canonical: "/sesja-kobieca-gdansk",
  },
  keywords: [
    "sesja kobieca Gdańsk",
    "sesja kobieca Trójmiasto",
    "fotograf kobiecy Gdańsk",
    "sesja zdjęciowa kobieca Gdańsk",
    "sesja kobieca cena Gdańsk",
    "sesja wizerunkowa Gdańsk",
    "sesja biznesowa Gdańsk",
    "Marta Krajewska Photo",
  ],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/sesja-kobieca-gdansk",
    siteName: "Odkryj Kobiecość",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sesja kobieca Gdańsk — Odkryj Kobiecość",
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

export default function SesjaKobiecaGdanskPage() {
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
          <a href="#dla-kogo">Dla kogo</a>
          <a href="#proces">Proces</a>
          <a href="#pakiety">Pakiety</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="mobileAnchorNav" aria-label="Szybka nawigacja">
          <a href="#dla-kogo">Dla kogo</a>
          <a href="#pakiety">Pakiety</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>

        <div className="heroCopy">
          <p className="eyebrow">Sesja kobieca Gdańsk • Trójmiasto</p>
          <h1>Sesja kobieca Gdańsk</h1>
          <p className="lead">
            Profesjonalna sesja kobieca dla kobiet, które chcą zobaczyć siebie
            w bardziej pewnej, spokojnej i kobiecej odsłonie — bez presji,
            bez doświadczenia przed aparatem, z prowadzeniem krok po kroku.
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
              alt="Sesja kobieca Gdańsk - profesjonalny portret kobiecy"
              width={1800}
              height={2400}
              priority
              sizes="(max-width: 768px) 92vw, 48vw"
              style={imageCoverStyle}
            />
            <span>sesja kobieca Gdańsk</span>
          </div>

          <div className="floatingCard topCard">Gdańsk</div>
          <div className="floatingCard bottomCard">Trójmiasto</div>
        </div>
      </section>

      <section className="problem section light">
        <div className="sectionNumber">01</div>

        <div>
          <p className="eyebrow">Nie tylko zdjęcia</p>
          <h2>Sesja kobieca to moment, w którym nie musisz niczego udowadniać.</h2>
        </div>

        <p className="sectionText">
          Wiele kobiet trafia na sesję z myślą: „nie wiem, czy to dla mnie”.
          Tymczasem właśnie od tego jest spokojne prowadzenie, rozmowa przed
          sesją i atmosfera, w której możesz poczuć się naturalnie.
        </p>
      </section>

      <section id="dla-kogo" className="experience section light">
        <div>
          <p className="eyebrow">Dla kogo</p>
          <h2>Dla kobiet, które za długo odkładały siebie na później.</h2>
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
            <p className="eyebrow">Najczęstsze obawy</p>
            <h2>Nie musisz przyjść pewna siebie. Od tego zaczniemy.</h2>
          </div>

          <p>
            Sesja kobieca w Gdańsku nie wymaga doświadczenia, idealnej sylwetki
            ani gotowości do pozowania. Potrzebujesz tylko decyzji, że chcesz
            zrobić coś dla siebie.
          </p>
        </div>

        <div className="fearGrid">
          {fears.map((fear) => (
            <div className="fearCard" key={fear}>
              {fear}
            </div>
          ))}
        </div>

        <p className="signatureLine">Marta prowadzi Cię krok po kroku.</p>
      </section>

      <section className="dream section dark">
        <div className="dreamText">
          <p className="eyebrow lightText">Efekt</p>
          <h2>
            Chodzi o to, żebyś zobaczyła siebie nie jako „niefotogeniczną”,
            tylko jako kobietę, która może wyglądać właśnie tak.
          </h2>
        </div>

        <div className="imageFrame wide">
          <Image
            src="/images/sections/transformation.webp"
            alt="Transformacja podczas sesji kobiecej w Gdańsku"
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
          <p className="eyebrow lightText">Jak wygląda sesja</p>
          <h2>Proces sesji kobiecej w Gdańsku</h2>
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
            <p className="eyebrow lightText">Cena sesji kobiecej</p>
            <h2>Pakiety sesji kobiecej</h2>
          </div>

          <p>
            Każdy pakiet obejmuje przygotowanie, prowadzenie podczas sesji oraz
            wybrane zdjęcia po profesjonalnej obróbce. Szczegóły i dostępne
            terminy najlepiej ustalić bezpośrednio z Martą.
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
        <h2>Przykładowe kadry z sesji kobiecych</h2>

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
              alt="Marta Krajewska - fotografka sesji kobiecych w Gdańsku"
              width={1600}
              height={2200}
              sizes="(max-width: 768px) 90vw, 34vw"
              style={imageCoverStyle}
            />
            <span>Marta</span>
          </div>
        </div>

        <div className="aboutCopy">
          <p className="eyebrow">Fotograf kobiecy Gdańsk</p>
          <h2>Marta Krajewska Photo</h2>
          <p>
            Marta tworzy sesje kobiece, biznesowe i wizerunkowe w Trójmieście.
            W pracy stawia na spokojną atmosferę, eleganckie kadry i takie
            prowadzenie, żebyś nie musiała wiedzieć, co robić przed aparatem.
          </p>
          <p>
            Celem sesji nie jest tylko ładne zdjęcie. Celem jest doświadczenie,
            po którym możesz spojrzeć na siebie z większą łagodnością,
            pewnością i spokojem.
          </p>
        </div>
      </section>

      <section id="faq" className="faq section light">
        <p className="eyebrow">FAQ</p>
        <h2>Najczęstsze pytania o sesję kobiecą w Gdańsku</h2>

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
        <h2>Więcej o sesjach kobiecych</h2>

        <div className="storyGrid">
          <article className="storyCard">
            <p>
              Zobacz główny landing Odkryj Kobiecość i pełny klimat sesji
              premium.
            </p>
            <strong>
              <a href="/">Odkryj Kobiecość</a>
            </strong>
            <span className="storySource">Strona główna</span>
          </article>

          <article className="storyCard">
            <p>
              Jeśli potrzebujesz zdjęć do marki osobistej, możesz połączyć
              sesję kobiecą z wizerunkową.
            </p>
            <strong>
              <a href="/#pakiety">Sesja kobieca + wizerunkowa</a>
            </strong>
            <span className="storySource">Pakiety</span>
          </article>

          <article className="storyCard">
            <p>
              Najszybsza droga do terminu to wiadomość na WhatsApp z krótką
              informacją, jakiej sesji szukasz.
            </p>
            <strong>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Napisz do Marty
              </a>
            </strong>
            <span className="storySource">Kontakt</span>
          </article>
        </div>
      </section>

      <section id="kontakt" className="finalCta section dark">
        <div className="finalCtaVisual">
          <Image
            src="/images/sections/final-cta.webp"
            alt="Sesja kobieca Gdańsk - Odkryj Kobiecość"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 80vw"
            style={imageCoverStyle}
          />
        </div>

        <p className="eyebrow lightText">Sesja kobieca Gdańsk</p>
        <h2>Jeśli czujesz, że to jest moment dla Ciebie, napisz do Marty.</h2>

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
              Sesja kobieca w Gdańsku dla kobiet, które chcą zobaczyć siebie
              inaczej.
            </p>
          </div>

          <nav className="footerNav" aria-label="Nawigacja w stopce">
            <a href="/">Strona główna</a>
            <a href="#pakiety">Pakiety</a>
            <a href="#portfolio">Portfolio</a>
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
