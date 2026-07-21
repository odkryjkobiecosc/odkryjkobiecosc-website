// app/poradnik/sesja-kobieca-po-ciazy/page.tsx

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

const pageTitle = "Sesja kobieca po ciąży | Sesja dla mamy w Gdańsku";

const pageDescription =
  "Sesja kobieca po ciąży i macierzyństwie dla kobiet, które chcą odzyskać kontakt ze sobą, kobiecością i pewnością siebie. Profesjonalna sesja dla mamy w Gdańsku i Trójmieście.";

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, chciałabym zapytać o sesję kobiecą po ciąży lub po macierzyństwie."
);

const whatsappLink = `https://wa.me/48666091909?text=${whatsappMessage}`;

const imageCoverStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
} as const;

const commonThoughts = [
  "od dawna nie zrobiłam nic tylko dla siebie",
  "po ciąży trudno mi patrzeć na swoje ciało z łagodnością",
  "ciągle jestem mamą, partnerką i organizatorką domu",
  "nie wiem, czy jeszcze potrafię poczuć się kobieco",
  "boję się, że nie będę dobrze wyglądać na zdjęciach",
  "czuję, że potrzebuję chwili tylko dla siebie",
  "chcę zobaczyć siebie inaczej niż w codziennym pośpiechu",
  "chcę odzyskać kontakt z własną kobiecością",
];

const whatMatters = [
  "spokojna atmosfera bez oceniania",
  "prowadzenie krok po kroku podczas zdjęć",
  "stylizacja dopasowana do tego, jak chcesz się poczuć",
  "światło i kadry, które pracują na elegancki efekt",
  "czas tylko dla Ciebie, bez pośpiechu",
  "możliwość połączenia sesji kobiecej z wizerunkową",
];

const sections = [
  {
    title: "1. Sesja kobieca po ciąży nie jest testem wyglądu",
    text: "Po ciąży i po wejściu w macierzyństwo wiele kobiet patrzy na siebie bardziej krytycznie. Sesja kobieca nie ma sprawdzać, czy wróciłaś do jakiejś wersji sprzed lat. Ma pomóc zobaczyć siebie tu i teraz — z większą łagodnością, spokojem i kobiecością.",
  },
  {
    title: "2. Macierzyństwo często przesuwa kobietę na dalszy plan",
    text: "Przez wiele miesięcy najważniejsze są potrzeby dziecka, domu i codzienności. To naturalne, ale po czasie łatwo poczuć, że gdzieś po drodze zniknęła przestrzeń dla Ciebie. Sesja może być symbolicznym momentem powrotu do siebie.",
  },
  {
    title: "3. Nie musisz lubić każdej części swojego ciała",
    text: "Nie musisz przychodzić z pełną akceptacją ciała. Możesz przyjść z niepewnością, dystansem i obawami. Dobra sesja uwzględnia to, co jest dla Ciebie komfortowe, i pokazuje Cię w sposób elegancki, spokojny i bez presji.",
  },
  {
    title: "4. Nie musisz umieć pozować",
    text: "Jeśli od dawna nie byłaś przed aparatem, stres jest normalny. Podczas sesji Marta prowadzi Cię krok po kroku: sylwetka, ręce, spojrzenie, mimika i drobne korekty, które pomagają poczuć się swobodniej.",
  },
  {
    title: "5. Stylizacja ma wspierać Ciebie, nie udawać kogoś innego",
    text: "Sesja po ciąży nie musi być odważna ani mocno sensualna. Może być elegancka, delikatna, kobieca, naturalna albo bardziej wizerunkowa. Najważniejsze, żeby styl był zgodny z Tobą i Twoim komfortem.",
  },
  {
    title: "6. To może być prezent dla samej siebie",
    text: "Nie każda sesja musi mieć praktyczny cel. Czasem wystarczy, że jest decyzją: robię coś dla siebie. Dla wielu kobiet to pierwszy taki moment od dawna.",
  },
];

const faqs = [
  {
    question:
      "Czy sesja kobieca po ciąży jest dla mnie, jeśli nie czuję się pewnie?",
    answer:
      "Tak. Nie musisz przychodzić pewna siebie. Sesja jest prowadzona spokojnie i krok po kroku, tak żebyś mogła stopniowo poczuć się swobodniej.",
  },
  {
    question: "Czy muszę mieć idealną sylwetkę po ciąży?",
    answer:
      "Nie. Sesja kobieca nie wymaga idealnej sylwetki. Ważne jest światło, ustawienie, stylizacja, atmosfera i sposób prowadzenia.",
  },
  {
    question: "Czy mogę powiedzieć, czego nie chcę pokazywać?",
    answer:
      "Tak. Przed sesją warto powiedzieć, co jest dla Ciebie komfortowe, a czego wolisz unikać. Sesja powinna być dopasowana do Twoich granic.",
  },
  {
    question:
      "Czy sesja dla mamy może być elegancka, a nie typowo rodzinna?",
    answer:
      "Tak. Ta sesja jest o Tobie jako kobiecie, nie tylko o roli mamy. Może być elegancka, kobieca, spokojna albo wizerunkowa.",
  },
  {
    question: "Czy mogę połączyć sesję kobiecą z biznesową?",
    answer:
      "Tak. Jeśli wracasz do pracy, rozwijasz markę osobistą albo potrzebujesz nowych zdjęć do komunikacji online, można połączyć kadry kobiece z wizerunkowymi.",
  },
  {
    question: "Jak zapytać o sesję kobiecą po ciąży?",
    answer:
      "Najprościej napisać na WhatsApp i krótko opisać, że interesuje Cię sesja kobieca po ciąży lub po macierzyństwie. Marta pomoże dobrać kierunek i pakiet.",
  },
];

const relatedLinks = [
  {
    title: "Sesja kobieca Gdańsk",
    text: "Główna strona usługi z opisem procesu, pakietami, portfolio i odpowiedziami na obawy.",
    href: "/sesja-kobieca-gdansk",
  },
  {
    title: "Nie umiem pozować do sesji kobiecej",
    text: "Poradnik dla kobiet, które stresują się przed aparatem albo myślą, że nie są fotogeniczne.",
    href: "/poradnik/nie-umiem-pozowac-sesja-kobieca",
  },
  {
    title: "Jak przygotować się do sesji kobiecej?",
    text: "Praktyczna checklista przed sesją: stylizacje, przygotowanie, stres i organizacja.",
    href: "/poradnik/jak-przygotowac-sie-do-sesji-kobiecej",
  },
];

const galleryImages = [
  {
    image: gallery01,
    alt: "Sesja kobieca po ciąży Gdańsk - elegancki portret",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery03,
    alt: "Sesja kobieca dla mamy w Trójmieście",
    className: "photoCard portrait galleryTall",
  },
  {
    image: gallery04,
    alt: "Sesja kobieca po macierzyństwie z prowadzeniem krok po kroku",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery06,
    alt: "Kobiecy portret po ciąży w eleganckim klimacie",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery08,
    alt: "Profesjonalna sesja dla mamy Gdańsk",
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
      "@id": `${SITE_URL}/poradnik/sesja-kobieca-po-ciazy#article`,
      headline: pageTitle,
      description: pageDescription,
      url: `${SITE_URL}/poradnik/sesja-kobieca-po-ciazy`,
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
        "@id": `${SITE_URL}/poradnik/sesja-kobieca-po-ciazy`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/poradnik/sesja-kobieca-po-ciazy#faq`,
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
    canonical: "/poradnik/sesja-kobieca-po-ciazy",
  },
  keywords: [
    "sesja kobieca po ciąży",
    "sesja kobieca po porodzie",
    "sesja kobieca dla mamy",
    "sesja kobieca po macierzyństwie",
    "sesja kobieca Gdańsk mama",
    "sesja zdjęciowa dla mamy Gdańsk",
    "fotograf kobiecy Gdańsk",
  ],
  openGraph: {
    type: "article",
    locale: "pl_PL",
    url: "/poradnik/sesja-kobieca-po-ciazy",
    siteName: "Odkryj Kobiecość",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sesja kobieca po ciąży — Odkryj Kobiecość",
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

export default function SesjaKobiecaPoCiazyPage() {
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
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>

        <div className="heroCopy">
          <p className="eyebrow">Sesja kobieca po ciąży • dla mamy</p>

          <h1>Sesja kobieca po ciąży</h1>

          <p className="lead">
            Dla kobiet, które po ciąży i macierzyństwie chcą na chwilę wrócić
            do siebie — nie tylko jako mamy, ale jako kobiety.
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
              alt="Sesja kobieca po ciąży w Gdańsku"
              width={1800}
              height={2400}
              priority
              sizes="(max-width: 768px) 92vw, 48vw"
              style={imageCoverStyle}
            />

            <span>dla mamy</span>
          </div>

          <div className="floatingCard topCard">po ciąży</div>
          <div className="floatingCard bottomCard">dla siebie</div>
        </div>
      </section>

      <section className="problem section light">
        <div className="sectionNumber">01</div>

        <div>
          <p className="eyebrow">Po macierzyństwie</p>

          <h2>Macierzyństwo zmienia wiele. Ale nie zabiera Ci kobiecości.</h2>
        </div>

        <p className="sectionText">
          Po ciąży łatwo patrzeć na siebie przez zmęczenie, obowiązki i zmiany w
          ciele. Sesja kobieca może być momentem, w którym przez chwilę nie
          jesteś tylko dla wszystkich — jesteś też dla siebie.
        </p>
      </section>

      <section id="dla-mamy" className="experience section light">
        <div>
          <p className="eyebrow">Najczęstsze myśli</p>

          <h2>Jeśli to brzmi znajomo, ta sesja może być dla Ciebie.</h2>
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

            <h2>
              Sesja po ciąży powinna być spokojna, bezpieczna i bez presji.
            </h2>
          </div>

          <p>
            Nie chodzi o udawanie, że nic się nie zmieniło. Chodzi o pokazanie
            Ciebie w taki sposób, żebyś mogła spojrzeć na siebie z większą
            łagodnością.
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
          Nie musisz wracać do siebie sprzed ciąży. Możesz odkryć siebie na
          nowo.
        </p>
      </section>

      <section id="poradnik" className="faq section light">
        <p className="eyebrow">Poradnik</p>

        <h2>Sesja kobieca po ciąży — jak o niej myśleć?</h2>

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
            Chodzi o moment, w którym patrzysz na zdjęcia i myślisz: nadal
            jestem kobietą. Nadal mogę zobaczyć siebie pięknie.
          </h2>
        </div>

        <div className="imageFrame wide">
          <Image
            src="/images/sections/transformation.webp"
            alt="Sesja kobieca dla mamy w Gdańsku"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 52vw"
            style={imageCoverStyle}
          />

          <span>powrót do siebie</span>
        </div>
      </section>

      <section id="portfolio" className="gallery section">
        <p className="eyebrow">Klimat sesji</p>

        <h2>Kobieco, spokojnie, z łagodnością</h2>

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

        <h2>Najczęstsze pytania o sesję kobiecą po ciąży</h2>

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
            alt="Sesja kobieca po macierzyństwie w Gdańsku"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 80vw"
            style={imageCoverStyle}
          />
        </div>

        <p className="eyebrow lightText">Sesja kobieca dla mamy</p>

        <h2>
          Jeśli od dawna jesteś dla wszystkich, możesz zrobić też coś dla
          siebie.
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
              Sesja kobieca po ciąży i macierzyństwie — dla kobiet, które chcą
              wrócić do siebie.
            </p>
          </div>

          <nav className="footerNav" aria-label="Nawigacja w stopce">
            <a href="/">Strona główna</a>
            <a href="/sesja-kobieca-gdansk">Sesja kobieca Gdańsk</a>

            <a href="/poradnik/nie-umiem-pozowac-sesja-kobieca">
              Nie umiem pozować
            </a>

            <a href="/poradnik/jak-przygotowac-sie-do-sesji-kobiecej">
              Przygotowanie do sesji
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
