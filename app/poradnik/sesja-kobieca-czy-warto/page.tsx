// app/poradnik/sesja-kobieca-czy-warto/page.tsx

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
  "Sesja kobieca — czy warto? | Profesjonalna sesja kobieca Gdańsk";

const pageDescription =
  "Czy warto zrobić sesję kobiecą? Sprawdź, co daje profesjonalna sesja kobieca, dla kogo jest, kiedy ma sens i dlaczego nie chodzi tylko o zdjęcia.";

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, zastanawiam się nad sesją kobiecą i chciałabym zapytać, czy to dobry wybór dla mnie."
);

const whatsappLink = `https://wa.me/48666091909?text=${whatsappMessage}`;

const imageCoverStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
} as const;

const reasons = [
  "chcesz zrobić coś tylko dla siebie",
  "od dawna odkładasz siebie na później",
  "nie lubisz siebie na przypadkowych zdjęciach",
  "potrzebujesz zobaczyć siebie inaczej",
  "jesteś po zmianie życiowej, ciąży, rozstaniu albo ważnym etapie",
  "budujesz markę osobistą i potrzebujesz pewnego wizerunku",
  "chcesz poczuć się kobieco, spokojnie i atrakcyjnie",
  "szukasz doświadczenia, nie tylko plików ze zdjęciami",
];

const whenItMakesSense = [
  "gdy chcesz zatrzymać ważny moment w swoim życiu",
  "gdy potrzebujesz zdjęć do siebie, nie tylko dla innych",
  "gdy chcesz odzyskać kontakt z kobiecością",
  "gdy potrzebujesz profesjonalnych zdjęć wizerunkowych",
  "gdy chcesz przełamać przekonanie, że nie jesteś fotogeniczna",
  "gdy chcesz zrobić sobie prezent z realną emocjonalną wartością",
];

const doubts = [
  "Nie wiem, czy to dla mnie",
  "Nie umiem pozować",
  "Nie jestem fotogeniczna",
  "Nie mam idealnej sylwetki",
  "Stresuję się przed aparatem",
  "Boję się, że zdjęcia będą sztuczne",
];

const sections = [
  {
    title:
      "1. Sesja kobieca jest warta rozważenia, jeśli od dawna odkładasz siebie na później",
    text: "Wiele kobiet przez lata robi wszystko dla innych: dzieci, partnera, pracy, domu, klientów. Sesja kobieca może być pierwszym od dawna momentem, w którym robisz coś nie dlatego, że musisz, tylko dlatego, że chcesz zobaczyć siebie inaczej.",
  },
  {
    title: "2. Warto, jeśli myślisz, że nie jesteś fotogeniczna",
    text: "Przekonanie „nie jestem fotogeniczna” często bierze się z przypadkowych zdjęć: złe światło, zły kąt, brak prowadzenia, napięcie i brak komfortu. Profesjonalna sesja działa inaczej. Fotograf prowadzi, ustawia światło, podpowiada i wybiera kadry, które pracują na efekt.",
  },
  {
    title: "3. Warto, jeśli chcesz poczuć się kobieco, ale bez presji",
    text: "Sesja kobieca nie musi być odważna, przesadzona ani zmysłowa na siłę. Może być subtelna, spokojna, elegancka, biznesowa, naturalna albo bardziej premium. Najważniejsze jest to, żeby styl był zgodny z Tobą.",
  },
  {
    title: "4. Warto, jeśli potrzebujesz zdjęć do marki osobistej",
    text: "Sesja kobieca może łączyć się z wizerunkową. To dobry wybór dla kobiet, które chcą wyglądać profesjonalnie, ale nie chłodno. Zdjęcia mogą pracować na LinkedIn, stronie internetowej, social mediach, ofercie i materiałach eksperckich.",
  },
  {
    title:
      "5. Warto, jeśli chcesz przeżyć doświadczenie, a nie tylko odebrać pliki",
    text: "Dobra sesja kobieca to nie tylko moment robienia zdjęć. To rozmowa, przygotowanie, wybór stylu, spokojne prowadzenie, atmosfera i późniejszy moment, w którym widzisz gotowe kadry. Wartość jest często większa niż sama liczba zdjęć.",
  },
  {
    title: "6. Nie warto, jeśli szukasz tylko najtańszej usługi",
    text: "Jeśli patrzysz wyłącznie na cenę i liczbę zdjęć, możesz pominąć najważniejsze elementy: zaufanie, prowadzenie, styl, retusz i komfort. Przy sesji kobiecej bardzo ważne jest, jak czujesz się w trakcie procesu.",
  },
];

const faqs = [
  {
    question: "Czy warto zrobić sesję kobiecą, jeśli nie umiem pozować?",
    answer:
      "Tak. Nie musisz umieć pozować. Podczas sesji Marta prowadzi Cię krok po kroku: sylwetka, dłonie, spojrzenie, mimika i delikatne korekty.",
  },
  {
    question: "Czy sesja kobieca jest tylko dla pewnych siebie kobiet?",
    answer:
      "Nie. Bardzo wiele kobiet przychodzi z niepewnością, stresem i obawą. Sesja może właśnie pomóc zobaczyć siebie w bardziej łagodny i pewny sposób.",
  },
  {
    question:
      "Czy sesja kobieca ma sens, jeśli nie lubię siebie na zdjęciach?",
    answer:
      "Tak. Profesjonalna sesja różni się od przypadkowych zdjęć. Znaczenie mają światło, kadrowanie, prowadzenie, stylizacja i atmosfera.",
  },
  {
    question: "Czy sesja kobieca może być prezentem dla siebie?",
    answer:
      "Tak. Dla wielu kobiet sesja jest właśnie prezentem dla siebie — momentem tylko dla siebie i sposobem na zobaczenie swojej kobiecości z innej perspektywy.",
  },
  {
    question: "Czy sesja kobieca może być połączona z biznesową?",
    answer:
      "Tak. Sesja może łączyć portrety kobiece z kadrami wizerunkowymi do LinkedIn, strony internetowej, marki osobistej lub social mediów.",
  },
  {
    question: "Jak sprawdzić, czy sesja kobieca jest dla mnie?",
    answer:
      "Najprościej zacząć od rozmowy. Możesz napisać na WhatsApp i krótko opisać, czego się obawiasz oraz czego szukasz. Marta pomoże dobrać kierunek sesji.",
  },
];

const relatedLinks = [
  {
    title: "Sesja kobieca Gdańsk",
    text: "Główna strona usługi z opisem procesu, pakietami, portfolio i odpowiedziami na najczęstsze pytania.",
    href: "/sesja-kobieca-gdansk",
  },
  {
    title: "Nie umiem pozować do sesji kobiecej",
    text: "Poradnik dla kobiet, które stresują się przed aparatem albo myślą, że nie są fotogeniczne.",
    href: "/poradnik/nie-umiem-pozowac-sesja-kobieca",
  },
  {
    title: "Sesja kobieca cena Gdańsk",
    text: "Opis pakietów, cen i tego, co realnie wpływa na wartość profesjonalnej sesji kobiecej.",
    href: "/poradnik/sesja-kobieca-cena-gdansk",
  },
];

const galleryImages = [
  {
    image: gallery01,
    alt: "Sesja kobieca czy warto - elegancki portret kobiecy",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery03,
    alt: "Profesjonalna sesja kobieca Gdańsk - czy warto",
    className: "photoCard portrait galleryTall",
  },
  {
    image: gallery04,
    alt: "Sesja kobieca z prowadzeniem krok po kroku",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery06,
    alt: "Czy warto zrobić sesję kobiecą w Trójmieście",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery08,
    alt: "Kobieca sesja zdjęciowa Gdańsk - wartość doświadczenia",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery10,
    alt: "Sesja kobieca premium - kobiecy portret",
    className: "photoCard portrait galleryTall",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/poradnik/sesja-kobieca-czy-warto#article`,
      headline: pageTitle,
      description: pageDescription,
      url: `${SITE_URL}/poradnik/sesja-kobieca-czy-warto`,
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
        "@id": `${SITE_URL}/poradnik/sesja-kobieca-czy-warto`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/poradnik/sesja-kobieca-czy-warto#faq`,
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
    canonical: "/poradnik/sesja-kobieca-czy-warto",
  },
  keywords: [
    "sesja kobieca czy warto",
    "czy warto zrobić sesję kobiecą",
    "profesjonalna sesja kobieca czy warto",
    "sesja kobieca opinie",
    "sesja kobieca Gdańsk",
    "fotograf kobiecy Gdańsk",
    "sesja kobieca Trójmiasto",
  ],
  openGraph: {
    type: "article",
    locale: "pl_PL",
    url: "/poradnik/sesja-kobieca-czy-warto",
    siteName: "Odkryj Kobiecość",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sesja kobieca — czy warto? Odkryj Kobiecość",
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

export default function SesjaKobiecaCzyWartoPage() {
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
          <a href="#czy-warto">Czy warto</a>
          <a href="#poradnik">Poradnik</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>

        <div className="heroCopy">
          <p className="eyebrow">Poradnik • sesja kobieca</p>

          <h1>Sesja kobieca — czy warto?</h1>

          <p className="lead">
            Jeśli zastanawiasz się, czy sesja kobieca jest dla Ciebie, zacznij
            od najważniejszego: nie chodzi tylko o zdjęcia. Chodzi o to, jak
            możesz zobaczyć siebie po drugiej stronie tego doświadczenia.
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
              alt="Sesja kobieca czy warto"
              width={1800}
              height={2400}
              priority
              sizes="(max-width: 768px) 92vw, 48vw"
              style={imageCoverStyle}
            />

            <span>czy warto?</span>
          </div>

          <div className="floatingCard topCard">dla siebie</div>
          <div className="floatingCard bottomCard">bez presji</div>
        </div>
      </section>

      <section className="problem section light">
        <div className="sectionNumber">01</div>

        <div>
          <p className="eyebrow">Odpowiedź</p>

          <h2>
            Warto, jeśli chcesz przestać patrzeć na siebie tylko przez
            codzienność.
          </h2>
        </div>

        <p className="sectionText">
          Sesja kobieca ma sens wtedy, gdy potrzebujesz chwili tylko dla siebie,
          nowego spojrzenia na własne ciało, pewniejszego wizerunku albo
          doświadczenia, które zostaje z Tobą dłużej niż sam dzień zdjęć.
        </p>
      </section>

      <section id="czy-warto" className="experience section light">
        <div>
          <p className="eyebrow">Kiedy warto</p>

          <h2>Sesja kobieca może być dobrym wyborem, jeśli...</h2>
        </div>

        <ul className="premiumList">
          {reasons.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="fears section">
        <div className="splitHeader">
          <div>
            <p className="eyebrow">Najczęstsze wątpliwości</p>

            <h2>To normalne, że przed decyzją pojawiają się obawy.</h2>
          </div>

          <p>
            Sesja kobieca jest osobistym doświadczeniem. Dlatego wiele kobiet
            przed zapisaniem się zastanawia się, czy będzie umiało pozować, czy
            dobrze wyjdzie na zdjęciach i czy w ogóle „wypada” zrobić coś
            takiego dla siebie.
          </p>
        </div>

        <div className="fearGrid">
          {doubts.map((item) => (
            <div className="fearCard" key={item}>
              {item}
            </div>
          ))}
        </div>

        <p className="signatureLine">
          Właśnie od tych obaw zaczyna się rozmowa przed sesją.
        </p>
      </section>

      <section id="poradnik" className="faq section light">
        <p className="eyebrow">Poradnik</p>

        <h2>Kiedy sesja kobieca naprawdę ma sens?</h2>

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
            Zdjęcia są efektem. Ale prawdziwa wartość często zaczyna się w
            chwili, kiedy pierwszy raz widzisz siebie inaczej.
          </h2>
        </div>

        <div className="imageFrame wide">
          <Image
            src="/images/sections/transformation.webp"
            alt="Czy warto zrobić sesję kobiecą"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 52vw"
            style={imageCoverStyle}
          />

          <span>zobaczyć siebie inaczej</span>
        </div>
      </section>

      <section id="kiedy" className="experience section light">
        <div>
          <p className="eyebrow">Dobry moment</p>

          <h2>Kiedy szczególnie warto zrobić sesję kobiecą?</h2>
        </div>

        <ul className="premiumList">
          {whenItMakesSense.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="portfolio" className="gallery section">
        <p className="eyebrow">Klimat sesji</p>

        <h2>Kobieco, elegancko, z prowadzeniem</h2>

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

        <h2>Najczęstsze pytania przed decyzją o sesji kobiecej</h2>

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
            alt="Profesjonalna sesja kobieca w Gdańsku - czy warto"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 80vw"
            style={imageCoverStyle}
          />
        </div>

        <p className="eyebrow lightText">Sesja kobieca Gdańsk</p>

        <h2>
          Jeśli pytasz „czy warto?”, zacznij od rozmowy. Bez zobowiązań i bez
          presji.
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
              Poradnik dla kobiet, które zastanawiają się, czy sesja kobieca
              jest dla nich.
            </p>
          </div>

          <nav className="footerNav" aria-label="Nawigacja w stopce">
            <a href="/">Strona główna</a>
            <a href="/sesja-kobieca-gdansk">Sesja kobieca Gdańsk</a>

            <a href="/poradnik/nie-umiem-pozowac-sesja-kobieca">
              Nie umiem pozować
            </a>

            <a href="/poradnik/sesja-kobieca-cena-gdansk">
              Cena sesji kobiecej
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
