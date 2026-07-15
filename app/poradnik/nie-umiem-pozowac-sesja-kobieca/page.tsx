// app/poradnik/nie-umiem-pozowac-sesja-kobieca/page.tsx

import type { Metadata } from "next";
import Image from "next/image";

import gallery01 from "../../../public/images/gallery/gallery-01.webp";
import gallery03 from "../../../public/images/gallery/gallery-03.webp";
import gallery04 from "../../../public/images/gallery/gallery-04.webp";
import gallery06 from "../../../public/images/gallery/gallery-06.webp";
import gallery08 from "../../../public/images/gallery/gallery-08.webp";
import gallery10 from "../../../public/images/gallery/gallery-10.webp";

const SITE_URL = "https://www.odkryjkobiecosc.pl";

const pageTitle =
  "Nie umiem pozować do sesji kobiecej | Czy sesja jest dla mnie?";

const pageDescription =
  "Nie umiesz pozować, stresujesz się przed aparatem albo myślisz, że nie jesteś fotogeniczna? Sprawdź, jak wygląda sesja kobieca z prowadzeniem krok po kroku w Gdańsku.";

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, chciałabym zapytać o sesję kobiecą, ale obawiam się, że nie umiem pozować."
);

const whatsappLink = `https://wa.me/48666091909?text=${whatsappMessage}`;

const imageCoverStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
} as const;

const commonFears = [
  "nie umiem pozować",
  "nie wiem, co zrobić z rękami",
  "boję się, że wyjdę sztucznie",
  "nie lubię siebie na zdjęciach",
  "nie jestem fotogeniczna",
  "stresuję się przed aparatem",
  "nie wiem, czy to dla mnie",
  "boję się oceny",
];

const whatHelps = [
  "prowadzenie krok po kroku podczas całej sesji",
  "proste ustawienia sylwetki zamiast trudnych póz",
  "spokojne tempo i rozmowa w trakcie zdjęć",
  "dobór stylizacji, w których czujesz się swobodnie",
  "praca ze światłem, kadrem i ruchem",
  "brak presji, że od pierwszej minuty masz być pewna siebie",
];

const sections = [
  {
    title: "1. Nie musisz umieć pozować przed sesją kobiecą",
    text: "To jedna z najczęstszych obaw przed sesją. Wiele kobiet myśli, że powinny wcześniej znać pozy, układ dłoni, spojrzenie i mimikę. W rzeczywistości dobra sesja kobieca nie wymaga doświadczenia. To fotograf prowadzi Cię przez cały proces.",
  },
  {
    title: "2. Pozowanie nie polega na udawaniu kogoś innego",
    text: "Najlepsze zdjęcia nie powstają wtedy, kiedy próbujesz kopiować cudze pozy. Powstają wtedy, kiedy ciało, światło, stylizacja i emocja zaczynają pracować razem. Dlatego sesja powinna być dopasowana do Ciebie, a nie do przypadkowej inspiracji z internetu.",
  },
  {
    title: "3. Co zrobić z rękami, twarzą i spojrzeniem?",
    text: "Nie musisz tego wiedzieć. Podczas sesji Marta podpowiada, jak ustawić dłonie, gdzie spojrzeć, jak delikatnie zmienić pozycję ciała i jak rozluźnić twarz. Małe korekty robią dużą różnicę.",
  },
  {
    title: "4. Stres przed aparatem jest normalny",
    text: "To normalne, że na początku możesz czuć napięcie. Często po kilku minutach, kiedy wiesz już, że nie musisz niczego zgadywać, stres zaczyna opadać. Dlatego ważne jest spokojne prowadzenie i atmosfera bez presji.",
  },
  {
    title: "5. „Nie jestem fotogeniczna” zwykle oznacza złe doświadczenia",
    text: "Bardzo często kobiety mówią, że nie są fotogeniczne, bo widziały siebie na przypadkowych zdjęciach, w złym świetle, z niekorzystnej perspektywy albo bez prowadzenia. Profesjonalna sesja działa inaczej.",
  },
  {
    title: "6. Sesja kobieca może zacząć się od niepewności",
    text: "Nie musisz przyjść od razu pewna siebie. Możesz przyjść z obawami, stresem i dystansem. Celem sesji jest stworzenie przestrzeni, w której stopniowo zobaczysz siebie inaczej.",
  },
];

const faqs = [
  {
    question: "Czy muszę umieć pozować do sesji kobiecej?",
    answer:
      "Nie. Podczas sesji Marta prowadzi Cię krok po kroku. Pomaga w ustawieniu sylwetki, dłoni, spojrzenia i mimiki, więc nie musisz mieć żadnego doświadczenia.",
  },
  {
    question: "Co jeśli stresuję się przed aparatem?",
    answer:
      "Stres jest normalny. Sesja jest prowadzona spokojnie, bez presji i bez oczekiwania, że od razu będziesz czuła się pewnie. Zwykle napięcie spada po kilku pierwszych minutach.",
  },
  {
    question: "Czy sesja kobieca jest dla kobiet, które nie lubią siebie na zdjęciach?",
    answer:
      "Tak. Właśnie dlatego tak ważne jest prowadzenie, światło, kadrowanie i atmosfera. Profesjonalna sesja różni się od przypadkowych zdjęć robionych telefonem.",
  },
  {
    question: "Czy mogę powiedzieć Marcie, czego się obawiam?",
    answer:
      "Tak. Warto powiedzieć o swoich obawach przed sesją. Dzięki temu Marta może lepiej dopasować tempo, styl i sposób prowadzenia.",
  },
  {
    question: "Czy pozy będą sztuczne?",
    answer:
      "Nie chodzi o sztywne pozy. Chodzi o delikatne ustawienie ciała, światła i ruchu tak, żeby efekt wyglądał naturalnie, kobieco i elegancko.",
  },
  {
    question: "Jak zapytać o sesję, jeśli mam obawy?",
    answer:
      "Najprościej napisać na WhatsApp i wprost powiedzieć, że interesuje Cię sesja kobieca, ale stresujesz się pozowaniem. To bardzo częsta sytuacja.",
  },
];

const relatedLinks = [
  {
    title: "Sesja kobieca Gdańsk",
    text: "Główna strona usługi z opisem procesu, pakietami, portfolio i odpowiedziami na obawy.",
    href: "/sesja-kobieca-gdansk",
  },
  {
    title: "Jak przygotować się do sesji kobiecej?",
    text: "Praktyczny poradnik o przygotowaniu, stylizacjach, stresie i tym, co zabrać na zdjęcia.",
    href: "/poradnik/jak-przygotowac-sie-do-sesji-kobiecej",
  },
  {
    title: "Co ubrać na sesję kobiecą?",
    text: "Poradnik o stylizacjach, kolorach i ubraniach, które dobrze pracują w kadrze.",
    href: "/poradnik/co-ubrac-na-sesje-kobieca",
  },
];

const galleryImages = [
  {
    image: gallery01,
    alt: "Sesja kobieca bez doświadczenia w pozowaniu",
    className: "photoCard landscape galleryWide",
  },
  {
    image: gallery03,
    alt: "Nie umiem pozować sesja kobieca Gdańsk",
    className: "photoCard portrait galleryTall",
  },
  {
    image: gallery04,
    alt: "Sesja kobieca z prowadzeniem krok po kroku",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery06,
    alt: "Kobiecy portret dla kobiet, które stresują się przed aparatem",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery08,
    alt: "Profesjonalna sesja kobieca w Trójmieście bez umiejętności pozowania",
    className: "photoCard portrait galleryPortrait",
  },
  {
    image: gallery10,
    alt: "Portret kobiecy premium z prowadzeniem podczas sesji",
    className: "photoCard portrait galleryTall",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": `${SITE_URL}/poradnik/nie-umiem-pozowac-sesja-kobieca#article`,
      headline: pageTitle,
      description: pageDescription,
      url: `${SITE_URL}/poradnik/nie-umiem-pozowac-sesja-kobieca`,
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
        "@id": `${SITE_URL}/poradnik/nie-umiem-pozowac-sesja-kobieca`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/poradnik/nie-umiem-pozowac-sesja-kobieca#faq`,
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
    canonical: "/poradnik/nie-umiem-pozowac-sesja-kobieca",
  },
  keywords: [
    "nie umiem pozować sesja kobieca",
    "czy trzeba umieć pozować do sesji kobiecej",
    "boję się sesji zdjęciowej",
    "nie jestem fotogeniczna sesja kobieca",
    "sesja kobieca bez doświadczenia",
    "sesja kobieca Gdańsk",
    "fotograf kobiecy Gdańsk",
  ],
  openGraph: {
    type: "article",
    locale: "pl_PL",
    url: "/poradnik/nie-umiem-pozowac-sesja-kobieca",
    siteName: "Odkryj Kobiecość",
    title: pageTitle,
    description: pageDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Nie umiem pozować do sesji kobiecej — Odkryj Kobiecość",
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

export default function NieUmiemPozowacSesjaKobiecaPage() {
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
          <a href="#obawy">Obawy</a>
          <a href="#poradnik">Poradnik</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="mobileAnchorNav" aria-label="Szybka nawigacja">
          <a href="#obawy">Obawy</a>
          <a href="#poradnik">Poradnik</a>
          <a href="#faq">FAQ</a>
          <a href="#kontakt">Kontakt</a>
        </div>

        <div className="heroCopy">
          <p className="eyebrow">Sesja kobieca bez doświadczenia</p>
          <h1>Nie umiem pozować do sesji kobiecej. Czy to problem?</h1>
          <p className="lead">
            Nie. Właśnie dlatego sesja kobieca powinna być prowadzona krok po
            kroku. Nie musisz wiedzieć, co zrobić z rękami, jak stanąć ani gdzie
            patrzeć. Od tego jest fotograf.
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

            <a className="button secondary" href="/sesja-kobieca-gdansk">
              Zobacz sesję kobiecą
            </a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="portraitPlaceholder tall">
            <Image
              src="/images/hero/hero-main.webp"
              alt="Nie umiem pozować do sesji kobiecej"
              width={1800}
              height={2400}
              priority
              sizes="(max-width: 768px) 92vw, 48vw"
              style={imageCoverStyle}
            />
            <span>bez doświadczenia</span>
          </div>

          <div className="floatingCard topCard">bez stresu</div>
          <div className="floatingCard bottomCard">prowadzenie</div>
        </div>
      </section>

      <section className="problem section light">
        <div className="sectionNumber">01</div>

        <div>
          <p className="eyebrow">Najważniejsze</p>
          <h2>Na sesję nie przychodzisz po to, żeby umieć pozować.</h2>
        </div>

        <p className="sectionText">
          Przychodzisz po doświadczenie, w którym ktoś przeprowadzi Cię przez
          ustawienie sylwetki, dłoni, spojrzenia i mimiki. Nie musisz mieć
          gotowej pewności siebie. Możesz zacząć od stresu.
        </p>
      </section>

      <section id="obawy" className="experience section light">
        <div>
          <p className="eyebrow">Najczęstsze myśli przed sesją</p>
          <h2>Większość kobiet zaczyna od podobnych obaw.</h2>
        </div>

        <ul className="premiumList">
          {commonFears.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="fears section">
        <div className="splitHeader">
          <div>
            <p className="eyebrow">Co pomaga</p>
            <h2>Dobra sesja zdejmuje z Ciebie obowiązek zgadywania.</h2>
          </div>

          <p>
            Nie musisz sama wymyślać póz. Nie musisz kontrolować każdego ruchu.
            Wystarczy, że reagujesz na spokojne wskazówki i pozwalasz sobie
            wejść w proces krok po kroku.
          </p>
        </div>

        <div className="fearGrid">
          {whatHelps.map((item) => (
            <div className="fearCard" key={item}>
              {item}
            </div>
          ))}
        </div>

        <p className="signatureLine">Nie musisz być gotowa. Wystarczy, że przyjdziesz.</p>
      </section>

      <section id="poradnik" className="faq section light">
        <p className="eyebrow">Poradnik</p>
        <h2>Jak wygląda sesja, jeśli nie umiesz pozować?</h2>

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
            To nie Ty masz wiedzieć, jak wyglądać dobrze na zdjęciu. To sesja ma
            być poprowadzona tak, żebyś mogła zobaczyć siebie inaczej.
          </h2>
        </div>

        <div className="imageFrame wide">
          <Image
            src="/images/sections/transformation.webp"
            alt="Sesja kobieca z prowadzeniem krok po kroku"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 52vw"
            style={imageCoverStyle}
          />
          <span>prowadzenie krok po kroku</span>
        </div>
      </section>

      <section id="portfolio" className="gallery section">
        <p className="eyebrow">Klimat sesji</p>
        <h2>Naturalnie, kobieco, bez sztucznego pozowania</h2>

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
        <h2>Najczęstsze pytania kobiet, które boją się pozowania</h2>

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
            alt="Sesja kobieca bez umiejętności pozowania w Gdańsku"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 80vw"
            style={imageCoverStyle}
          />
        </div>

        <p className="eyebrow lightText">Sesja kobieca Gdańsk</p>
        <h2>
          Jeśli jedyne, co Cię zatrzymuje, to myśl „nie umiem pozować” — napisz
          do Marty.
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
              Poradnik dla kobiet, które chcą sesji kobiecej, ale boją się
              pozowania przed aparatem.
            </p>
          </div>

          <nav className="footerNav" aria-label="Nawigacja w stopce">
            <a href="/">Strona główna</a>
            <a href="/sesja-kobieca-gdansk">Sesja kobieca Gdańsk</a>
            <a href="/poradnik/jak-przygotowac-sie-do-sesji-kobiecej">
              Przygotowanie do sesji
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
