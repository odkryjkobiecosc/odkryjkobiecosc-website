// app/polityka-prywatnosci/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności | Odkryj Kobiecość",
  description:
    "Polityka prywatności serwisu Odkryj Kobiecość dotycząca przetwarzania danych osobowych, kontaktu, cookies oraz narzędzi reklamowych.",
  alternates: {
    canonical: "/polityka-prywatnosci",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="legalPage">
      <section className="legalHero section light">
        <p className="eyebrow">Dokumenty prawne</p>
        <h1>Polityka prywatności</h1>
        <p className="legalLead">
          Poniżej znajdziesz informacje o tym, w jaki sposób przetwarzamy dane
          osobowe użytkowników strony Odkryj Kobiecość oraz osób kontaktujących
          się w sprawie sesji fotograficznych.
        </p>
      </section>

      <section className="legalContent section">
        <article className="legalBlock">
          <h2>1. Administrator danych</h2>
          <p>
            Administratorem danych osobowych jest:
            <br />
            <strong>[Uzupełnij pełną nazwę działalności / firmy]</strong>
            <br />
            <span>[Uzupełnij adres działalności]</span>
            <br />
            <span>NIP: [uzupełnij]</span>
            <br />
            <span>REGON: [uzupełnij, jeżeli dotyczy]</span>
          </p>
          <p>
            Kontakt w sprawach związanych z ochroną danych osobowych:
            <br />
            <a href="mailto:krajewskaphoto@gmail.com">
              krajewskaphoto@gmail.com
            </a>
          </p>
        </article>

        <article className="legalBlock">
          <h2>2. Zakres przetwarzanych danych</h2>
          <p>
            W zależności od sposobu korzystania ze strony możemy przetwarzać
            następujące dane:
          </p>
          <ul>
            <li>imię i nazwisko, jeżeli zostanie podane w korespondencji,</li>
            <li>adres e-mail,</li>
            <li>numer telefonu,</li>
            <li>treść wiadomości wysłanej przez e-mail lub WhatsApp,</li>
            <li>informacje dotyczące zainteresowania sesją fotograficzną,</li>
            <li>informacje techniczne, takie jak adres IP, typ przeglądarki, urządzenie, data i godzina wizyty,</li>
            <li>informacje o zgodach cookies zapisane lokalnie w przeglądarce.</li>
          </ul>
        </article>

        <article className="legalBlock">
          <h2>3. Cele przetwarzania danych</h2>
          <p>Dane osobowe mogą być przetwarzane w celu:</p>
          <ul>
            <li>udzielenia odpowiedzi na zapytanie,</li>
            <li>kontaktu w sprawie sesji fotograficznej,</li>
            <li>ustalenia szczegółów sesji, terminu i zakresu usługi,</li>
            <li>prowadzenia korespondencji przed i po sesji,</li>
            <li>obsługi działań marketingowych, jeżeli użytkownik wyrazi odpowiednią zgodę,</li>
            <li>pomiaru skuteczności reklam Google Ads, jeżeli użytkownik wyrazi zgodę marketingową,</li>
            <li>zapewnienia bezpieczeństwa i prawidłowego działania strony.</li>
          </ul>
        </article>

        <article className="legalBlock">
          <h2>4. Podstawy prawne przetwarzania</h2>
          <p>Dane mogą być przetwarzane na podstawie:</p>
          <ul>
            <li>
              art. 6 ust. 1 lit. b RODO — gdy przetwarzanie jest niezbędne do
              podjęcia działań przed zawarciem umowy lub do wykonania umowy,
            </li>
            <li>
              art. 6 ust. 1 lit. f RODO — prawnie uzasadniony interes
              administratora, np. obsługa korespondencji, obrona przed
              roszczeniami, zapewnienie bezpieczeństwa strony,
            </li>
            <li>
              art. 6 ust. 1 lit. a RODO — zgoda użytkownika, np. w zakresie
              cookies analitycznych lub marketingowych,
            </li>
            <li>
              art. 6 ust. 1 lit. c RODO — obowiązek prawny, jeżeli wynika z
              przepisów prawa.
            </li>
          </ul>
        </article>

        <article className="legalBlock">
          <h2>5. Kontakt przez WhatsApp i e-mail</h2>
          <p>
            Kliknięcie przycisku WhatsApp lub wysłanie wiadomości e-mail oznacza
            przekazanie danych dobrowolnie w celu kontaktu i obsługi zapytania.
            Zakres danych zależy od tego, jakie informacje użytkownik poda w
            wiadomości.
          </p>
          <p>
            W przypadku kontaktu przez WhatsApp dane mogą być przetwarzane także
            przez operatora tej usługi zgodnie z jego własnymi zasadami
            prywatności.
          </p>
        </article>

        <article className="legalBlock">
          <h2>6. Cookies, localStorage i narzędzia reklamowe</h2>
          <p>
            Strona korzysta z mechanizmu zgód cookies. Decyzja użytkownika może
            być zapisywana w localStorage przeglądarki pod technicznym kluczem:
          </p>
          <code>odkryj_cookie_consent_v1</code>
          <p>
            Na stronie może być wykorzystywany Google tag / Google Ads w celu
            pomiaru skuteczności reklam i konwersji, np. kliknięcia w link
            WhatsApp. Tego typu pomiar marketingowy jest uruchamiany zgodnie z
            ustawieniami zgody użytkownika.
          </p>
          <p>
            Szczegółowe informacje znajdują się w dokumencie{" "}
            <a href="/polityka-cookies">Polityka cookies</a>.
          </p>
        </article>

        <article className="legalBlock">
          <h2>7. Odbiorcy danych</h2>
          <p>Dane mogą być przekazywane następującym kategoriom odbiorców:</p>
          <ul>
            <li>dostawcom hostingu i infrastruktury technicznej strony,</li>
            <li>dostawcom poczty elektronicznej,</li>
            <li>dostawcom narzędzi reklamowych i analitycznych, jeżeli użytkownik wyrazi odpowiednią zgodę,</li>
            <li>podmiotom świadczącym obsługę prawną, księgową lub techniczną, jeżeli będzie to konieczne,</li>
            <li>organom publicznym, jeżeli obowiązek przekazania danych wynika z przepisów prawa.</li>
          </ul>
        </article>

        <article className="legalBlock">
          <h2>8. Przekazywanie danych poza Europejski Obszar Gospodarczy</h2>
          <p>
            Niektóre narzędzia zewnętrzne, np. usługi Google lub WhatsApp, mogą
            wiązać się z przekazywaniem danych poza Europejski Obszar
            Gospodarczy. W takim przypadku dane są przetwarzane zgodnie z
            zasadami danego dostawcy oraz odpowiednimi mechanizmami prawnymi
            przewidzianymi w przepisach o ochronie danych osobowych.
          </p>
        </article>

        <article className="legalBlock">
          <h2>9. Okres przechowywania danych</h2>
          <p>
            Dane z korespondencji są przechowywane przez czas potrzebny do
            obsługi zapytania, realizacji usługi, dalszego kontaktu lub obrony
            przed ewentualnymi roszczeniami.
          </p>
          <p>
            Informacja o zgodzie cookies zapisana w localStorage pozostaje w
            przeglądarce do czasu jej usunięcia przez użytkownika albo zmiany
            ustawień przeglądarki.
          </p>
        </article>

        <article className="legalBlock">
          <h2>10. Prawa użytkownika</h2>
          <p>Osoba, której dane dotyczą, ma prawo do:</p>
          <ul>
            <li>dostępu do swoich danych,</li>
            <li>sprostowania danych,</li>
            <li>usunięcia danych,</li>
            <li>ograniczenia przetwarzania,</li>
            <li>przenoszenia danych,</li>
            <li>sprzeciwu wobec przetwarzania,</li>
            <li>wycofania zgody w dowolnym momencie, jeżeli przetwarzanie odbywa się na podstawie zgody,</li>
            <li>wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.</li>
          </ul>
        </article>

        <article className="legalBlock">
          <h2>11. Dobrowolność podania danych</h2>
          <p>
            Podanie danych jest dobrowolne, ale może być niezbędne do
            udzielenia odpowiedzi, ustalenia szczegółów sesji lub realizacji
            usługi fotograficznej.
          </p>
        </article>

        <article className="legalBlock">
          <h2>12. Zmiany polityki prywatności</h2>
          <p>
            Polityka prywatności może być aktualizowana, szczególnie w przypadku
            zmiany narzędzi wykorzystywanych na stronie, przepisów prawa albo
            sposobu przetwarzania danych.
          </p>
          <p>Data ostatniej aktualizacji: 14 lipca 2026 r.</p>
        </article>

        <div className="legalBack">
          <a className="button secondary" href="/">
            Wróć na stronę główną
          </a>
        </div>
      </section>
    </main>
  );
}
