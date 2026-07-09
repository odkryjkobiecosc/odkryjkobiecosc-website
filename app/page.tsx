// app/page.tsx
import Image from "next/image";

import gallery01 from "../public/images/gallery/gallery-01.webp";
import gallery02 from "../public/images/gallery/gallery-02.webp";
import gallery03 from "../public/images/gallery/gallery-03.webp";
import gallery04 from "../public/images/gallery/gallery-04.webp";
import gallery05 from "../public/images/gallery/gallery-05.webp";
import gallery06 from "../public/images/gallery/gallery-06.webp";
import gallery07 from "../public/images/gallery/gallery-07.webp";
import gallery08 from "../public/images/gallery/gallery-08.webp";
import gallery09 from "../public/images/gallery/gallery-09.webp";
import gallery10 from "../public/images/gallery/gallery-10.webp";

const fears = [
  "Nie umiem pozować",
  "Nie wiem, co założyć",
  "Nie jestem fotogeniczna",
  "To nie dla mnie",
];

const experienceFor = [
  "zbyt długo odkładałaś siebie na później",
  "chcesz poczuć się pięknie, pewnie i kobieco",
  "budujesz swoją markę i potrzebujesz profesjonalnego wizerunku",
  "szukasz czegoś więcej niż tylko zdjęć",
  "chcesz przeżyć moment tylko dla siebie",
];

const steps = [
  ["01", "Rozmowa i plan sesji"],
  ["02", "Dobór klimatu i stylizacji"],
  ["03", "Makijaż i przygotowanie"],
  ["04", "Sesja z prowadzeniem krok po kroku"],
  ["05", "Odbiór zdjęć i prywatna galeria"],
];

const packages = [
  {
    name: "ESSENCE",
    price: "1200 zł",
    text: "Dla kobiet, które chcą zrobić coś dla siebie — spokojnie, elegancko i bez presji.",
    features: [
      "konsultacja przed sesją",
      "dobór klimatu i stylizacji",
      "profesjonalny makijaż",
      "prowadzenie krok po kroku",
      "10 wyretuszowanych zdjęć",
      "prywatna galeria online",
    ],
  },
  {
    name: "SIGNATURE",
    price: "1700 zł",
    text: "Najbardziej kompletne doświadczenie kobiece — więcej czasu, więcej stylizacji, więcej przestrzeni.",
    features: [
      "pełna konsultacja i plan sesji",
      "2–3 stylizacje",
      "makijaż i przygotowanie",
      "sesja kobieca lub biznesowa",
      "15 wyretuszowanych zdjęć",
      "możliwość dokupienia ujęć",
    ],
  },
  {
    name: "PRESTIGE",
    price: "2500 zł",
    text: "Sesja premium dla kobiet, które chcą stworzyć mocny, elegancki i świadomy wizerunek.",
    features: [
      "rozbudowany plan sesji",
      "kilka scen / klimatów",
      "sesja kobieca + wizerunkowa",
      "profesjonalne prowadzenie",
      "25 wyretuszowanych zdjęć",
      "galeria premium",
    ],
  },
];

const stories = [
  {
    name: "Anna",
    text: "Przyszłam zestresowana. Po kilku minutach zapomniałam o aparacie. Gdy zobaczyłam zdjęcia, pierwszy raz od dawna poczułam się naprawdę piękna.",
    source: "Opinia klientki",
  },
  {
    name: "Wiktoria",
    text: "Myślałam, że nie będę wiedziała co robić. Marta poprowadziła mnie krok po kroku. To była chwila tylko dla mnie.",
    source: "Opinia klientki",
  },
  {
    name: "Klaudia",
    text: "Potrzebowałam zdjęć do marki osobistej, ale dostałam coś więcej — poczucie, że mogę pokazać siebie pewnie i kobieco.",
    source: "Opinia klientki",
  },
];

const rawGalleryImages = [
  {
    image: gallery01,
    alt: "Sesja kobieca premium w Gdańsku - portret studyjny",
    featured: true,
  },
  {
    image: gallery02,
    alt: "Elegancka sesja kobieca w Trójmieście",
  },
  {
    image: gallery03,
    alt: "Kobiecy portret beauty",
  },
  {
    image: gallery04,
    alt: "Sesja kobieca z prowadzeniem krok po kroku",
  },
  {
    image: gallery05,
    alt: "Sesja kobieca premium - spokojny editorial",
  },
  {
    image: gallery06,
    alt: "Portret kobiecy w ciemnym klimacie",
  },
  {
    image: gallery07,
    alt: "Profesjonalna sesja kobieca w Gdańsku",
  },
  {
    image: gallery08,
    alt: "Sesja kobieca - kobiecość, siła i spokój",
  },
  {
    image: gallery09,
    alt: "Sesja biznesowa kobieca w Trójmieście",
  },
  {
    image: gallery10,
    alt: "Portret kobiecy premium",
  },
];

const galleryImages = rawGalleryImages.map((item) => {
  const orientation =
    item.image.width > item.image.height ? "landscape" : "portrait";

  return {
    ...item,
    orientation,
    className: item.featured
      ? `photoCard featured ${orientation}`
      : `photoCard ${orientation}`,
  };
});

const imageCoverStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
} as const;

const whatsappMessage = encodeURIComponent(
  "Dzień dobry, chciałabym umówić konsultację w sprawie sesji kobiecej."
);

const whatsappLink = `https://wa.me/48666091909?text=${whatsappMessage}`;

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Odkryj Kobiecość">
          <span>Odkryj</span>
          <strong>Kobiecość</strong>
        </a>
        <div className="navLinks">
          <a href="#galeria">Zdjęcia</a>
          <a href="#pakiety">Pakiety</a>
          <a href="#kontakt">Kontakt</a>
        </div>
      </nav>

      <section id="top" className="hero section">
        <div className="heroCopy">
          <p className="eyebrow">Sesje kobiece • biznesowe • premium</p>
          <h1>Nie odkładaj siebie na później.</h1>
          <p className="lead">
            Profesjonalna sesja kobieca w Trójmieście, która pozwala Ci
            zobaczyć siebie w bardziej pewnej, kobiecej i świadomej odsłonie.
          </p>
          <div className="heroActions">
            <a
              className="button primary"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Umów konsultację
            </a>
            <a className="button secondary" href="#galeria">
              Zobacz zdjęcia
            </a>
          </div>
        </div>

        <div className="heroVisual">
          <div className="portraitPlaceholder tall">
            <Image
              src="/images/hero/hero-main.webp"
              alt="Profesjonalna sesja kobieca premium w Trójmieście"
              width={1800}
              height={2400}
              priority
              sizes="(max-width: 768px) 92vw, 48vw"
              style={imageCoverStyle}
            />
            <span>premium portrait</span>
          </div>
          <div className="floatingCard topCard">sesja kobieca</div>
          <div className="floatingCard bottomCard">metamorfoza</div>
        </div>
      </section>

      <section className="problem section light">
        <div className="sectionNumber">01</div>
        <div>
          <p className="eyebrow">Zanim powstanie zdjęcie</p>
          <h2>Od miesięcy jesteś mamą, partnerką, pracownikiem.</h2>
        </div>
        <p className="sectionText">
          Dbasz o wszystkich dookoła. Organizujesz, pamiętasz, ogarniasz. A
          kiedy ostatnio zrobiłaś coś tylko dla siebie?
        </p>
      </section>

      <section className="dream section dark">
        <div className="dreamText">
          <p className="eyebrow lightText">Transformacja</p>
          <h2>
            Chcę, żebyś spojrzała na siebie i pomyślała: mogę wyglądać właśnie
            tak.
          </h2>
        </div>
        <div className="imageFrame wide">
          <Image
            src="/images/sections/transformation.webp"
            alt="Transformacyjna sesja kobieca - zobacz siebie inaczej"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 52vw"
            style={imageCoverStyle}
          />
          <span>Zobacz siebie inaczej</span>
        </div>
      </section>

      <section className="fears section">
        <div className="splitHeader">
          <div>
            <p className="eyebrow">Obawy</p>
            <h2>Nie musisz czuć się pewnie przed aparatem.</h2>
          </div>
          <p>
            Większość kobiet przychodzi z podobnymi myślami. Właśnie dlatego
            prowadzę Cię krok po kroku.
          </p>
        </div>
        <div className="fearGrid">
          {fears.map((fear) => (
            <div className="fearCard" key={fear}>
              {fear}
            </div>
          ))}
        </div>
        <p className="signatureLine">Od tego jestem ja.</p>
      </section>

      <section id="doswiadczenie" className="experience section light">
        <div>
          <p className="eyebrow">Dla Ciebie</p>
          <h2>To doświadczenie jest dla Ciebie, jeśli...</h2>
        </div>
        <ul className="premiumList">
          {experienceFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="process section dark">
        <div>
          <p className="eyebrow lightText">Proces premium</p>
          <h2>Jak wygląda współpraca</h2>
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

      <section id="galeria" className="gallery section">
        <p className="eyebrow">Klimat sesji</p>
        <h2>Kobiecość. Siła. Spokój. Pewność siebie.</h2>

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

      <section id="pakiety" className="packages section dark">
        <div className="splitHeader">
          <div>
            <p className="eyebrow lightText">Pakiety</p>
            <h2>Wybierz doświadczenie dla siebie.</h2>
          </div>
          <p>
            Każdy pakiet obejmuje spokojne prowadzenie, przygotowanie i
            atmosferę, w której możesz poczuć się swobodnie.
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

      <section className="stories section light">
        <p className="eyebrow">Opinie klientek</p>
        <h2>Kobiety, które zobaczyły siebie inaczej.</h2>
        <div className="storyGrid">
          {stories.map((story) => (
            <article className="storyCard" key={story.name}>
              <div className="stars">★★★★★</div>
              <p>„{story.text}”</p>
              <strong>{story.name}</strong>
              <span className="storySource">{story.source}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about section">
        <div className="aboutImage">
          <div className="portraitPlaceholder small">
            <Image
              src="/images/sections/about-marta.webp"
              alt="Marta Krajewska - fotografka sesji kobiecych w Trójmieście"
              width={1600}
              height={2200}
              sizes="(max-width: 768px) 90vw, 34vw"
              style={imageCoverStyle}
            />
            <span>Marta</span>
          </div>
        </div>
        <div className="aboutCopy">
          <p className="eyebrow">O mnie</p>
          <h2>Marta Krajewska</h2>
          <p>
            W swoich sesjach stawiam na eleganckie kadry, spokojną atmosferę i
            prowadzenie krok po kroku, dzięki któremu możesz poczuć się
            swobodnie przed aparatem.
          </p>
          <p>
            Tworzę doświadczenie, dzięki któremu możesz zobaczyć siebie w
            bardziej kobiecej, pewnej i świadomej odsłonie.
          </p>
        </div>
      </section>

      <section id="kontakt" className="finalCta section dark">
        <div className="finalCtaVisual">
          <Image
            src="/images/sections/final-cta.webp"
            alt="Sesja kobieca premium - Odkryj Kobiecość"
            width={2400}
            height={1600}
            sizes="(max-width: 768px) 92vw, 80vw"
            style={imageCoverStyle}
          />
        </div>

        <p className="eyebrow lightText">Odkryj Kobiecość</p>
        <h2>
          Czasem jedna decyzja wystarczy, żeby zacząć patrzeć na siebie inaczej.
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
        <div>
          <strong>Odkryj Kobiecość</strong>
          <p>Marta Krajewska Photo • Trójmiasto / Gdańsk</p>
        </div>
        <div className="footerLinks">
          <a href="#kontakt">Kontakt</a>
          <a href="#">Regulamin</a>
          <a href="#">Polityka prywatności</a>
        </div>
      </footer>
    </main>
  );
}
