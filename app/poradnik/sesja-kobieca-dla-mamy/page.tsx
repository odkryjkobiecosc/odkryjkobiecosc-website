// app/poradnik/sesja-kobieca-dla-mamy/page.tsx

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
  "Sesja kobieca dla mamy | Sesja po macierzyństwie Gdańsk";

const pageDescription =
  "Sesja kobieca dla mamy w Gdańsku — spokojne doświadczenie dla kobiet, które po macierzyństwie chcą zrobić coś dla siebie, odzyskać kontakt z kobiecością i zobaczyć siebie inaczej.";

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, chciałabym zapytać o sesję kobiecą dla mamy w Gdańsku."
);

const whatsappLink = `https://wa.me/48666091909?text=${whatsappMessage}`;

const imageCoverStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
} as const;

const commonThoughts = [
  "od miesięcy jestem przede wszystkim mamą",
  "ciągle dbam o wszystkich dookoła, a siebie odkładam na później",
  "po ciąży moje ciało wygląda inaczej",
  "nie czuję się już tak kobieco jak wcześniej",
  "nie mam czasu na przygotowania i skomplikowane stylizacje",
  "nie umiem pozować i stresuję się przed aparatem",
  "chcę zrobić coś tylko dla siebie",
  "chcę mieć zdjęcia, na których zobaczę nie tylko mamę, ale też kobietę",
];

const whatHelps = [
  "spokojna rozmowa przed sesją",
  "prowadzenie krok po kroku podczas zdjęć",
  "pomoc w wyborze stylizacji",
  "tempo dopasowane do Ciebie",
  "brak presji na idealną sylwetkę",
  "światło i kadrowanie dopasowane do Twojej urody",
  "naturalny retusz bez tworzenia sztucznej osoby",
  "atmosfera bez oceniania",
];

const reasons = [
  "chcesz zatrzymać moment po ważnej zmianie życiowej",
  "potrzebujesz chwili tylko dla siebie",
  "chcesz odzyskać kontakt z własną kobiecością",
  "chcesz zobaczyć swoje ciało z większą łagodnością",
  "potrzebujesz przypomnienia, że nadal jesteś kobietą, nie tylko mamą",
  "chcesz zrobić sobie prezent o emocjonalnej wartości",
];

const sections = [
  {
    title: "1. Po macierzyństwie łatwo zacząć odkładać siebie na później",
    text: "Codzienność mamy jest pełna obowiązków, pośpiechu i dbania o innych. Dzieci, dom, praca i organizacja dnia często sprawiają, że własne potrzeby schodzą na dalszy plan. Sesja kobieca może być momentem, w którym na chwilę przestajesz być odpowiedzialna za wszystko dookoła i skupiasz się na sobie.",
  },
  {
    title: "2. Nie musisz wracać do sylwetki sprzed ciąży",
    text: "Sesja kobieca dla mamy nie jest nagrodą za powrót do dawnej figury. Nie musisz czekać, aż schudniesz, zmienisz ciało albo poczujesz się idealnie. Profesjonalne światło, kadrowanie, stylizacja i prowadzenie pomagają stworzyć zdjęcia dopasowane do Ciebie takiej, jaka jesteś teraz.",
  },
  {
    title: "3. Możesz przyjść bez pewności siebie",
    text: "Wiele kobiet myśli, że przed sesją powinny już czuć się kobieco i swobodnie. W praktyce pewność siebie może pojawić się dopiero podczas zdjęć. Nie musisz przychodzić gotowa. Wystarczy, że pozwolisz sobie rozpocząć ten proces.",
  },
  {
    title: "4. Nie musisz umieć pozować",
    text: "Marta prowadzi Cię krok po kroku. Podpowiada, jak ustawić sylwetkę, dłonie, spojrzenie i mimikę. Nie musisz ćwiczyć póz z internetu ani wiedzieć, co zrobić przed aparatem. Od tego jest fotograf.",
  },
  {
    title: "5. Sesja nie musi być odważna ani przesadzona",
    text: "Kobiecość może być spokojna, subtelna, elegancka, naturalna albo bardziej zmysłowa. Nie ma jednego poprawnego stylu sesji. Najważniejsze jest to, żeby zdjęcia były zgodne z Tobą, Twoim charakterem i tym, jak chcesz siebie zobaczyć.",
  },
  {
    title: "6. Zdjęcia mogą przypomnieć Ci, że nadal jesteś sobą",
    text: "Macierzyństwo zmienia życie, ciało i codzienność, ale nie odbiera Ci kobiecości. Sesja może stać się symbolem powrotu do siebie — nie do dawnej wersji, ale do kobiety, którą jesteś teraz.",
  },
];

const packages = [
  {
    name: "ESSENCE",
    price: "550 zł",
    text: "Dla mamy, która chce zrobić pierwszy krok i zobaczyć siebie w spokojnej, kobiecej odsłonie.",
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
    text: "Najbardziej uniwersalny pakiet dla kobiet, które chcą pełniejszego doświadczenia i większej liczby zdjęć.",
    features: [
      "pełna konsultacja i plan sesji",
      "2–3 stylizacje",
      "sesja kobieca lub kobieco-wizerunkowa",
      "20 wyretuszowanych zdjęć w wersji kolorowej i czarno-białej",
      "prywatna galeria online",
      "możliwość dokupienia dodatkowych ujęć",
    ],
  },
  {
    name: "PRESTIGE",
    price: "950 zł",
    text: "Rozbudowana sesja premium dla mamy, która chce stworzyć mocniejszą i bardziej różnorodną opowieść o sobie.",
    features: [
      "rozbudowany plan sesji",
      "kilka scen lub klimatów",
      "sesja kobieca i wizerunkowa",
      "profesjonalne prowadzenie",
      "30 wyretuszowanych zdjęć w wersji kolorowej i czarno-białej",
      "prywatna galeria online",
    ],
  },
];

const faqs = [
  {
    question:
      "Czy sesja kobieca dla mamy ma sens, jeśli moje ciało zmieniło się po ciąży?",
    answer:
      "Tak. Nie musisz wracać do sylwetki sprzed ciąży. Sesja jest dopasowana do Ciebie takiej, jaka jesteś teraz. Znaczenie mają światło, kadrowanie, stylizacja i spokojne prowadzenie.",
  },
  {
    question:
      "Czy muszę czuć się pewnie przed zapisaniem się na sesję?",
    answer:
      "Nie. Możesz przyjść ze stresem, niepewnością i obawą. Wiele kobiet zaczyna sesję właśnie w taki sposób. Pewność siebie może pojawić się stopniowo podczas zdjęć.",
  },
  {
    question: "Czy muszę umieć pozować?",
    answer:
      "Nie. Marta prowadzi Cię krok po kroku i podpowiada, jak ustawić sylwetkę, dłonie, twarz oraz spojrzenie.",
  },
  {
    question: "Co ubrać na sesję kobiecą dla mamy?",
    answer:
      "Dobrze sprawdzają się proste, eleganckie i wygodne rzeczy: koszula, marynarka, sukienka, sweter, body, top albo spodnie z wysokim stanem. Przed sesją można omówić stylizacje z Martą.",
  },
  {
    question: "Czy sesja musi być zmysłowa?",
    answer:
      "Nie. Sesja może być subtelna, naturalna, elegancka, spokojna, biznesowa albo bardziej kobieca. Klimat jest dobierany do Ciebie.",
  },
  {
    question: "Czy mogę zrobić sesję niedługo po porodzie?",
    answer:
      "Termin sesji powinien być dopasowany do Twojego samopoczucia, regeneracji i sytuacji rodzinnej. Nie ma jednego obowiązkowego momentu. Najważniejsze jest to, żebyś czuła się gotowa na spokojne doświadczenie.",
  },
  {
    question: "Czy sesja kobieca może być prezentem dla młodej mamy?",
    answer:
      "Tak. Może być prezentem od partnera, bliskiej osoby albo prezentem, który mama daje sama sobie. Najlepiej wcześniej upewnić się, że taka forma prezentu jest zgodna z jej potrzebami.",
  },
  {
    question: "Jak zapytać o termin sesji kobiecej dla mamy?",
    answer:
      "Najprościej napisać do Marty na WhatsApp i krótko opisać, że interesuje Cię sesja kobieca po macierzyństwie. Możesz też napisać, czego się obawiasz i jaki klimat zdjęć Ci odpowiada.",
  },
];

const relatedLinks = [
  {
    title: "Sesja kobieca Gdańsk",
    text: "Główna strona sesji kobiecej z opisem procesu, pakietami, portfolio i odpowiedziami na najczęstsze obawy.",
    href: "/sesja-kobieca-gdansk",
  },
  {
    title: "Nie umiem pozować do sesji kobiecej",
    text: "Poradnik dla kobiet, które stresują się przed aparatem i nie wiedzą, jak zachować się podczas zdjęć.",
    href: "/poradnik/nie-umiem-pozowac-sesja-kobieca",
  },
  {
    title: "Co ubrać na sesję kobiecą?",
    text: "Praktyczny poradnik o stylizacjach, kolorach i ubraniach, które dobrze wyglądają w kadrze.",
    href: "/poradnik/co-ubrac-na-sesje-kobieca",
  },
];

const galleryImages = [
  {
    image: gallery01,
    alt: "Sesja kobieca dla mamy w Gdańsku - elegancki portret",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery03,
    alt: "Sesja kobieca po macierzyństwie w Trójmieście",
    className: "photoCard portrait galleryTall",
  },
  {
    image: gallery04,
    alt: "Sesja dla mamy z prowadzeniem krok po kroku",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery06,
    alt: "Kobiecy portret mamy w Gdańsku",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery08,
    alt: "Profesjonalna sesja kobieca dla młodej mamy",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery10,
    alt: "Sesja kobieca premium dla mamy",
    className: "photoCard portrait galleryTall",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/poradnik/sesja-kobieca-dla-mamy#article`,
      headline: pageTitle,
      description: pageDescription,
      url: `${SITE_URL}/poradnik/sesja-kobieca-dla-mamy`,
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
        "@id": `${SITE_URL}/poradnik/sesja-kobieca-dla-mamy`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/poradnik/sesja-kobieca-dla-mamy#faq`,
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
    canonical: "/poradnik/sesja-kobieca-dla-mamy",
  },
  keywords: [
    "sesja kobieca dla mamy",
    "sesja kobieca po macierzyństwie",
    "sesja dla młodej mamy",
    "sesja kobieca po ciąży",
    "sesja kobieca Gdańsk",
    "fotograf kobiecy Gdańsk",
    "sesja kobieca Trójmiasto",
  ],
  openGraph: {
    type: "article",
    locale: "pl_PL",
    url: "/poradnik/sesja-kobieca-dla-mamy",
    siteName: "Odkryj Kobiecość",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sesja kobieca dla mamy — Odkryj Kobiecość",
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

export default function SesjaKobiecaDlaMamyPage() {
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
          <a href="#dla-mamy">Dla mamy</a>
          <a href="#poradnik">Poradnik</a>
          <a href="#pakiety">Pakiety</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>

        <div className="heroCopy">
          <p className="eyebrow">Sesja kobieca dla mamy • Gdańsk</p>

          <h1>Sesja kobieca dla mamy</h1>

          <p className="lead">
            Od miesięcy jesteś mamą, partnerką, organizatorką codzienności.
            Sesja kobieca może być chwilą, w której na nowo zobaczysz nie tylko
            mamę, ale też kobietę.
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
              alt="Sesja kobieca dla mamy w Gdańsku"
              width={1800}
              height={2400}
              priority
              sizes="(max-width: 768px) 92vw, 48vw"
              style={imageCoverStyle}
            />

            <span>chwila dla siebie</span>
          </div>

          <div className="floatingCard topCard">kobiecość</div>
          <div className="floatingCard bottomCard">po macierzyństwie</div>
        </div>
      </section>

      <section className="problem section light">
        <div className="sectionNumber">01</div>

        <div>
          <p className="eyebrow">Nie odkładaj siebie</p>

          <h2>
            Jesteś mamą. Ale nadal jesteś też kobietą, która zasługuje na chwilę
            tylko dla siebie.
          </h2>
        </div>

        <p className="sectionText">
          Macierzyństwo zmienia codzienność, ciało i sposób, w jaki patrzysz na
          siebie. Sesja kobieca nie ma cofnąć tych zmian. Ma pomóc Ci zobaczyć
          siebie z większą łagodnością, kobiecością i spokojem.
        </p>
      </section>

      <section id="dla-mamy" className="experience section light">
        <div>
          <p className="eyebrow">Najczęstsze myśli mam</p>

          <h2>Te obawy są częstsze, niż może Ci się wydawać.</h2>
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
            <p className="eyebrow">Co pomaga</p>

            <h2>
              Nie musisz sama wiedzieć, jak przygotować się do takiej sesji.
            </h2>
          </div>

          <p>
            Sesja jest planowana tak, żeby zdjąć z Ciebie obowiązek zgadywania:
            co ubrać, jak stanąć, co zrobić z rękami i jak zachować się przed
            aparatem.
          </p>
        </div>

        <div className="fearGrid">
          {whatHelps.map((item) => (
            <div className="fearCard" key={item}>
              {item}
            </div>
          ))}
        </div>

        <p className="signatureLine">
          Nie musisz wracać do dawnej siebie. Możesz zobaczyć piękno tej wersji,
          którą jesteś teraz.
        </p>
      </section>

      <section id="poradnik" className="faq section light">
        <p className="eyebrow">Poradnik</p>

        <h2>Sesja kobieca po macierzyństwie — jak o niej myśleć?</h2>

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
            Chodzi o moment, w którym patrzysz na zdjęcia i przypominasz sobie,
            że poza wszystkimi rolami nadal jesteś sobą.
          </h2>
        </div>

        <div className="imageFrame wide">
          <Image
            src="/images/sections/transformation.webp"
            alt="Sesja kobieca po macierzyństwie w Gdańsku"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 52vw"
            style={imageCoverStyle}
          />

          <span>powrót do siebie</span>
        </div>
      </section>

      <section className="experience section light">
        <div>
          <p className="eyebrow">Dobry moment</p>

          <h2>Kiedy warto pomyśleć o sesji kobiecej dla mamy?</h2>
        </div>

        <ul className="premiumList">
          {reasons.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="pakiety" className="packages section dark">
        <div className="splitHeader">
          <div>
            <p className="eyebrow lightText">Pakiety</p>

            <h2>Pakiety sesji kobiecej dla mamy</h2>
          </div>

          <p>
            Zakres można dopasować do tego, czy potrzebujesz krótszej sesji,
            pełniejszego doświadczenia czy bardziej rozbudowanej opowieści o
            sobie.
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
        <p className="eyebrow">Klimat sesji</p>

        <h2>Kobieco, spokojnie i bez presji</h2>

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

        <h2>Najczęstsze pytania o sesję kobiecą dla mamy</h2>

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
            alt="Sesja kobieca dla mamy Gdańsk - kontakt"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 80vw"
            style={imageCoverStyle}
          />
        </div>

        <p className="eyebrow lightText">Sesja kobieca dla mamy</p>

        <h2>
          Nie czekaj na idealny moment, sylwetkę ani pewność siebie. Zacznij od
          spokojnej rozmowy.
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
              Sesja kobieca dla mamy — spokojna przestrzeń, w której możesz na
              nowo zobaczyć nie tylko mamę, ale również kobietę.
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
