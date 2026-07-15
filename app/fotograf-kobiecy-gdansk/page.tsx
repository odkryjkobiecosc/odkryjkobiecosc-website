// app/fotograf-kobiecy-gdansk/page.tsx

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
  "Fotograf kobiecy Gdańsk | Profesjonalne sesje kobiece i wizerunkowe";

const pageDescription =
  "Fotograf kobiecy w Gdańsku — Marta Krajewska Photo. Profesjonalne sesje kobiece, biznesowe i wizerunkowe dla kobiet, które chcą zobaczyć siebie pewnie, kobieco i elegancko.";

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, szukam fotografa kobiecego w Gdańsku i chciałabym zapytać o sesję."
);

const whatsappLink = `https://wa.me/48666091909?text=${whatsappMessage}`;

const imageCoverStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
} as const;

const whyMarta = [
  "prowadzenie krok po kroku podczas sesji",
  "spokojna atmosfera bez presji i oceniania",
  "elegancki, kobiecy i premium styl zdjęć",
  "możliwość połączenia sesji kobiecej z biznesową",
  "pomoc w doborze klimatu i stylizacji",
  "retusz z wyczuciem, bez sztucznego efektu",
];

const sessionTypes = [
  "sesja kobieca",
  "sesja biznesowa",
  "sesja wizerunkowa",
  "portret kobiecy",
  "sesja dla mamy",
  "sesja 40 plus",
  "zdjęcia do marki osobistej",
  "sesja premium dla kobiet",
];

const commonFears = [
  "nie umiem pozować",
  "nie jestem fotogeniczna",
  "nie wiem, co ubrać",
  "stresuję się przed aparatem",
  "nie wiem, czy to dla mnie",
  "boję się sztucznego efektu",
];

const steps = [
  ["01", "Krótka rozmowa i określenie celu sesji"],
  ["02", "Dobór kierunku: kobiecy, biznesowy lub wizerunkowy"],
  ["03", "Omówienie stylizacji, obaw i oczekiwań"],
  ["04", "Sesja z prowadzeniem krok po kroku"],
  ["05", "Galeria online, wybór zdjęć i retusz"],
];

const packages = [
  {
    name: "ESSENCE",
    price: "550 zł",
    text: "Dla kobiet, które chcą spokojnie wejść w sesję i zobaczyć siebie w eleganckiej odsłonie.",
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
    text: "Najbardziej uniwersalny pakiet dla kobiet, które chcą pełniejszego materiału.",
    features: [
      "pełna konsultacja i plan sesji",
      "2–3 stylizacje",
      "sesja kobieca, biznesowa lub wizerunkowa",
      "20 wyretuszowanych zdjęć w wersji kolorowej i czarno-białej",
      "prywatna galeria online",
      "możliwość dokupienia ujęć",
    ],
  },
  {
    name: "PRESTIGE",
    price: "950 zł",
    text: "Sesja premium dla kobiet, które chcą stworzyć mocniejszy i bardziej spójny wizerunek.",
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
    question: "Jaki fotograf kobiecy w Gdańsku będzie dobrym wyborem?",
    answer:
      "Przy sesji kobiecej ważne są nie tylko zdjęcia, ale też atmosfera, prowadzenie, styl i zaufanie. Dobry fotograf kobiecy powinien pomóc Ci poczuć się bezpiecznie przed aparatem.",
  },
  {
    question: "Czy muszę umieć pozować?",
    answer:
      "Nie. Marta prowadzi Cię krok po kroku i podpowiada, jak ustawić sylwetkę, dłonie, spojrzenie oraz mimikę.",
  },
  {
    question: "Czy fotograf pomaga dobrać styl sesji?",
    answer:
      "Tak. Przed sesją można omówić klimat zdjęć, stylizacje, cel sesji i obawy. Dzięki temu sesja jest bardziej dopasowana do Ciebie.",
  },
  {
    question: "Czy można zrobić sesję kobiecą i biznesową u jednej fotografki?",
    answer:
      "Tak. Sesja może łączyć kadry kobiece, biznesowe i wizerunkowe. To dobre rozwiązanie dla kobiet budujących markę osobistą.",
  },
  {
    question: "Czy sesja kobieca jest dla kobiet, które się stresują?",
    answer:
      "Tak. Wiele kobiet przychodzi ze stresem i obawą, że nie są fotogeniczne. Sesja jest prowadzona tak, aby stopniowo wejść w proces bez presji.",
  },
  {
    question: "Jak zapytać o sesję u fotografa kobiecego?",
    answer:
      "Najprościej napisać na WhatsApp i krótko opisać, czego szukasz: sesji kobiecej, biznesowej, wizerunkowej albo prezentu dla siebie.",
  },
];

const relatedLinks = [
  {
    title: "Sesja kobieca Gdańsk",
    text: "Opis sesji kobiecej, procesu, pakietów, portfolio i najczęstszych pytań.",
    href: "/sesja-kobieca-gdansk",
  },
  {
    title: "Sesja wizerunkowa Gdańsk",
    text: "Dla kobiet, które chcą stworzyć spójny wizerunek marki osobistej.",
    href: "/sesja-wizerunkowa-gdansk",
  },
  {
    title: "Poradnik przed sesją",
    text: "Praktyczne poradniki o przygotowaniu, stylizacjach, pozowaniu i cenie sesji.",
    href: "/poradnik",
  },
];

const galleryImages = [
  {
    image: gallery01,
    alt: "Fotograf kobiecy Gdańsk - elegancki portret kobiecy",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery03,
    alt: "Profesjonalna sesja kobieca u fotografki w Gdańsku",
    className: "photoCard portrait galleryTall",
  },
  {
    image: gallery04,
    alt: "Fotograf kobiecy Trójmiasto - sesja z prowadzeniem",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery06,
    alt: "Kobiecy portret premium Gdańsk",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery08,
    alt: "Sesja kobieca w Gdańsku u Marty Krajewskiej",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery10,
    alt: "Fotograf kobiecy Gdańsk - sesja premium",
    className: "photoCard portrait galleryTall",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${SITE_URL}/fotograf-kobiecy-gdansk#business`,
      name: "Odkryj Kobiecość / Marta Krajewska Photo",
      description: pageDescription,
      url: `${SITE_URL}/fotograf-kobiecy-gdansk`,
      image: `${SITE_URL}/opengraph-image`,
      email: "krajewskaphoto@gmail.com",
      telephone: "+48666091909",
      priceRange: "550-950 PLN",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gdańsk",
        addressRegion: "pomorskie",
        addressCountry: "PL",
      },
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
      makesOffer: packages.map((item) => ({
        "@type": "Offer",
        name: `Sesja fotograficzna ${item.name}`,
        price: item.price.replace(" zł", ""),
        priceCurrency: "PLN",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/fotograf-kobiecy-gdansk`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/fotograf-kobiecy-gdansk#faq`,
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
    canonical: "/fotograf-kobiecy-gdansk",
  },
  keywords: [
    "fotograf kobiecy Gdańsk",
    "fotograf kobiecy Trójmiasto",
    "sesja kobieca Gdańsk",
    "fotograf dla kobiet Gdańsk",
    "profesjonalna sesja kobieca Gdańsk",
    "Marta Krajewska Photo",
    "sesja wizerunkowa Gdańsk",
  ],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/fotograf-kobiecy-gdansk",
    siteName: "Odkryj Kobiecość",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Fotograf kobiecy Gdańsk — Odkryj Kobiecość",
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

export default function FotografKobiecyGdanskPage() {
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
          <a href="#marta">Marta</a>
          <a href="#sesje">Sesje</a>
          <a href="#proces">Proces</a>
          <a href="#pakiety">Pakiety</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="mobileAnchorNav" aria-label="Szybka nawigacja">
          <a href="#marta">Marta</a>
          <a href="#pakiety">Pakiety</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>

        <div className="heroCopy">
          <p className="eyebrow">Fotograf kobiecy Gdańsk</p>
          <h1>Fotograf kobiecy Gdańsk</h1>
          <p className="lead">
            Sesje kobiece, biznesowe i wizerunkowe dla kobiet, które chcą
            zobaczyć siebie spokojnie, elegancko i bez presji przed aparatem.
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

            <a className="button secondary" href="#pakiety">
              Zobacz pakiety
            </a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="portraitPlaceholder tall">
            <Image
              src="/images/hero/hero-main.webp"
              alt="Fotograf kobiecy Gdańsk - Marta Krajewska Photo"
              width={1800}
              height={2400}
              priority
              sizes="(max-width: 768px) 92vw, 48vw"
              style={imageCoverStyle}
            />
            <span>fotograf kobiecy</span>
          </div>

          <div className="floatingCard topCard">Gdańsk</div>
          <div className="floatingCard bottomCard">Marta Krajewska</div>
        </div>
      </section>

      <section id="marta" className="problem section light">
        <div className="sectionNumber">01</div>

        <div>
          <p className="eyebrow">Marta Krajewska Photo</p>
          <h2>Fotograf kobiecy to nie tylko osoba od zdjęć.</h2>
        </div>

        <p className="sectionText">
          Przy sesji kobiecej ważne jest zaufanie, spokojna atmosfera i sposób
          prowadzenia. Celem nie jest tylko wykonanie portretu, ale stworzenie
          doświadczenia, w którym możesz zobaczyć siebie inaczej.
        </p>
      </section>

      <section className="experience section light">
        <div>
          <p className="eyebrow">Dlaczego Marta</p>
          <h2>Co jest ważne przy wyborze fotografa kobiecego?</h2>
        </div>

        <ul className="premiumList">
          {whyMarta.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="sesje" className="fears section">
        <div className="splitHeader">
          <div>
            <p className="eyebrow">Rodzaje sesji</p>
            <h2>Sesje kobiece, biznesowe i wizerunkowe w jednym miejscu.</h2>
          </div>

          <p>
            Możesz wybrać sesję osobistą, bardziej biznesową albo połączyć oba
            kierunki. Najważniejsze jest to, czego potrzebujesz i jak chcesz
            siebie zobaczyć.
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
          Nie musisz wiedzieć od razu, który rodzaj sesji wybrać.
        </p>
      </section>

      <section className="fears section">
        <div className="splitHeader">
          <div>
            <p className="eyebrow">Obawy</p>
            <h2>Dobry fotograf kobiecy odpowiada na obawy zanim padnie pytanie.</h2>
          </div>

          <p>
            Wiele kobiet myśli, że musi umieć pozować, mieć idealną sylwetkę
            albo być pewna siebie. W praktyce sesja jest właśnie po to, żeby
            przeprowadzić Cię przez ten proces spokojnie.
          </p>
        </div>

        <div className="fearGrid">
          {commonFears.map((item) => (
            <div className="fearCard" key={item}>
              {item}
            </div>
          ))}
        </div>

        <p className="signatureLine">Od prowadzenia jest fotograf.</p>
      </section>

      <section className="dream section dark">
        <div className="dreamText">
          <p className="eyebrow lightText">Efekt</p>
          <h2>
            Chodzi o moment, w którym patrzysz na zdjęcia i myślisz: nie
            wiedziałam, że mogę wyglądać właśnie tak.
          </h2>
        </div>

        <div className="imageFrame wide">
          <Image
            src="/images/sections/transformation.webp"
            alt="Profesjonalna sesja kobieca Gdańsk"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 52vw"
            style={imageCoverStyle}
          />
          <span>zobaczyć siebie inaczej</span>
        </div>
      </section>

      <section id="proces" className="process section dark">
        <div>
          <p className="eyebrow lightText">Proces</p>
          <h2>Jak wygląda współpraca z fotografem kobiecym?</h2>
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
            <h2>Pakiety sesji kobiecych w Gdańsku</h2>
          </div>

          <p>
            Pakiety można dopasować do sesji kobiecej, biznesowej lub
            wizerunkowej. Jeśli nie wiesz, który wybrać, zacznij od wiadomości.
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
        <h2>Kobiecy, spokojny i elegancki styl zdjęć</h2>

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
        <h2>Najczęstsze pytania o fotografa kobiecego w Gdańsku</h2>

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
            alt="Fotograf kobiecy Gdańsk - kontakt"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 80vw"
            style={imageCoverStyle}
          />
        </div>

        <p className="eyebrow lightText">Fotograf kobiecy Gdańsk</p>
        <h2>
          Jeśli szukasz fotografki, która poprowadzi Cię spokojnie przez całą
          sesję, napisz do Marty.
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
              Fotograf kobiecy w Gdańsku — sesje kobiece, biznesowe i
              wizerunkowe dla kobiet.
            </p>
          </div>

          <nav className="footerNav" aria-label="Nawigacja w stopce">
            <a href="/">Strona główna</a>
            <a href="/sesja-kobieca-gdansk">Sesja kobieca Gdańsk</a>
            <a href="/sesja-wizerunkowa-gdansk">Sesja wizerunkowa Gdańsk</a>
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
