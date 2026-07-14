// app/polityka-cookies/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka cookies | Odkryj Kobiecość",
  description:
    "Polityka cookies serwisu Odkryj Kobiecość dotycząca plików cookies, localStorage, zgód użytkownika oraz narzędzi Google Ads.",
  alternates: {
    canonical: "/polityka-cookies",
  },
};

export default function CookiePolicyPage() {
  return (
    <main className="legalPage">
      <section className="legalHero section light">
        <p className="eyebrow">Dokumenty prawne</p>
        <h1>Polityka cookies</h1>
        <p className="legalLead">
          Ten dokument wyjaśnia, w jaki sposób strona Odkryj Kobiecość korzysta
          z cookies, localStorage oraz narzędzi służących do pomiaru skuteczności
          reklam i działania strony.
        </p>
      </section>

      <section className="legalContent section">
        <article className="legalBlock">
          <h2>1. Czym są cookies i localStorage?</h2>
          <p>
            Cookies to niewielkie pliki zapisywane na urządzeniu użytkownika
            przez przeglądarkę internetową. LocalStorage to mechanizm
            przeglądarki pozwalający stronie zapisać wybrane informacje lokalnie
            na urządzeniu użytkownika.
          </p>
          <p>
            Na tej stronie localStorage może być wykorzystywany przede wszystkim
            do zapisania informacji o wyborze użytkownika w zakresie zgód
            cookies.
          </p>
        </article>

        <article className="legalBlock">
          <h2>2. Jakie mechanizmy są używane na stronie?</h2>
          <p>Strona może korzystać z następujących kategorii mechanizmów:</p>
          <ul>
            <li>
              <strong>Niezbędne</strong> — wymagane do podstawowego działania
              strony i zapisania decyzji dotyczącej zgód.
            </li>
            <li>
              <strong>Analityczne</strong> — przeznaczone do analizy ruchu i
              skuteczności strony, jeżeli zostanie wdrożone narzędzie
              analityczne i użytkownik wyrazi zgodę.
            </li>
            <li>
              <strong>Marketingowe</strong> — wykorzystywane do pomiaru
              skuteczności reklam, konwersji i działań marketingowych, jeżeli
              użytkownik wyrazi zgodę.
            </li>
          </ul>
        </article>

        <article className="legalBlock">
          <h2>3. Niezbędne przechowywanie informacji</h2>
          <p>
            Strona zapisuje wybór użytkownika dotyczący zgód w localStorage pod
            kluczem:
          </p>
          <code>odkryj_cookie_consent_v1</code>
          <p>
            Zapis ten pozwala zapamiętać, czy użytkownik zaakceptował, odrzucił
            lub skonfigurował zgody, aby baner cookies nie pojawiał się przy
            każdym odświeżeniu strony.
          </p>
        </article>

        <article className="legalBlock">
          <h2>4. Google Ads i pomiar konwersji</h2>
          <p>
            Strona może korzystać z Google tag / Google Ads w celu mierzenia
            skuteczności reklam oraz konwersji, np. kliknięcia w przycisk
            prowadzący do WhatsApp.
          </p>
          <p>
            Pomiar marketingowy jest powiązany ze zgodą marketingową
            użytkownika. Jeżeli użytkownik nie wyrazi zgody marketingowej, linki
            kontaktowe nadal działają, ale zdarzenie konwersji nie powinno być
            wysyłane przez stronę.
          </p>
        </article>

        <article className="legalBlock">
          <h2>5. Google Consent Mode</h2>
          <p>
            Strona korzysta z ustawień zgód zgodnych z Google Consent Mode. Przed
            decyzją użytkownika zgody reklamowe i analityczne są domyślnie
            ustawione jako odmówione.
          </p>
          <p>Wykorzystywane kategorie zgód Google obejmują m.in.:</p>
          <ul>
            <li>
              <code>ad_storage</code> — przechowywanie danych związanych z reklamami,
            </li>
            <li>
              <code>analytics_storage</code> — przechowywanie danych związanych z analityką,
            </li>
            <li>
              <code>ad_user_data</code> — zgoda na przesyłanie danych użytkownika do celów reklamowych,
            </li>
            <li>
              <code>ad_personalization</code> — zgoda na personalizację reklam.
            </li>
          </ul>
        </article>

        <article className="legalBlock">
          <h2>6. Zgoda użytkownika</h2>
          <p>
            Przy pierwszej wizycie użytkownik może zaakceptować wszystkie zgody,
            odrzucić zgody opcjonalne albo wybrać ustawienia. Zgody opcjonalne
            obejmują kategorie analityczne i marketingowe.
          </p>
          <p>
            Niezbędne mechanizmy techniczne mogą być wykorzystywane bez zgody,
            ponieważ są potrzebne do prawidłowego działania strony lub zapisania
            decyzji użytkownika.
          </p>
        </article>

        <article className="legalBlock">
          <h2>7. Jak wycofać lub zmienić zgodę?</h2>
          <p>
            Użytkownik może zmienić lub wycofać zgodę poprzez usunięcie danych
            strony w ustawieniach przeglądarki. Po usunięciu danych lokalnych
            baner cookies powinien pojawić się ponownie przy kolejnej wizycie.
          </p>
          <p>
            W przeglądarce można także zablokować cookies lub localStorage, ale
            może to wpłynąć na działanie niektórych elementów strony.
          </p>
        </article>

        <article className="legalBlock">
          <h2>8. Jak długo przechowywana jest zgoda?</h2>
          <p>
            Informacja o wyborze użytkownika jest przechowywana lokalnie w
            przeglądarce do czasu jej usunięcia przez użytkownika, zmiany wersji
            mechanizmu zgód albo wyczyszczenia danych strony.
          </p>
        </article>

        <article className="legalBlock">
          <h2>9. Dostawcy zewnętrzni</h2>
          <p>
            W związku z pomiarem skuteczności reklam strona może korzystać z
            usług Google. Dane przetwarzane przez Google podlegają również
            zasadom prywatności i cookies tego dostawcy.
          </p>
          <p>
            Jeżeli w przyszłości zostaną dodane inne narzędzia analityczne lub
            marketingowe, niniejsza polityka cookies powinna zostać
            zaktualizowana.
          </p>
        </article>

        <article className="legalBlock">
          <h2>10. Kontakt</h2>
          <p>
            W sprawach dotyczących cookies i prywatności możesz skontaktować się
            pod adresem:
          </p>
          <p>
            <a href="mailto:krajewskaphoto@gmail.com">
              krajewskaphoto@gmail.com
            </a>
          </p>
        </article>

        <article className="legalBlock">
          <h2>11. Data aktualizacji</h2>
          <p>Data ostatniej aktualizacji: 14 lipca 2026 r.</p>
        </article>

        <div className="legalBack">
          <a className="button secondary" href="/">
            Wróć na stronę główną
          </a>
          <a className="button secondary" href="/polityka-prywatnosci">
            Polityka prywatności
          </a>
        </div>
      </section>
    </main>
  );
}
