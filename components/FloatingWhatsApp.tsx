// components/FloatingWhatsApp.tsx

"use client";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: "conversion",
      parameters: {
        send_to: string;
        event_callback?: () => void;
        event_timeout?: number;
      }
    ) => void;
  }
}

const GOOGLE_ADS_WHATSAPP_CONVERSION_ID =
  "AW-17974081291/VWGYCLKqqtIcEIvu2vpC";

export default function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Dzień dobry, chciałabym umówić konsultację w sprawie sesji kobiecej."
  );

  const whatsappUrl = `https://wa.me/48666091909?text=${message}`;

  const handleWhatsAppClick = () => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }

    window.gtag("event", "conversion", {
      send_to: GOOGLE_ADS_WHATSAPP_CONVERSION_ID,
      event_callback: () => {
        // Link otwiera się w nowej karcie, więc nie wykonujemy tutaj przekierowania.
      },
      event_timeout: 2000,
    });
  };

  return (
    <a
      className="floatingWhatsApp"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Napisz do Marty na WhatsApp"
      onClick={handleWhatsAppClick}
    >
      <span className="floatingWhatsAppPulse" />

      <span className="floatingWhatsAppIcon" aria-hidden="true">
        <svg viewBox="0 0 32 32" focusable="false">
          <path
            fill="currentColor"
            d="M16.03 3.2c-7.04 0-12.77 5.62-12.77 12.54 0 2.28.63 4.51 1.83 6.45L3.2 28.8l6.83-1.78a12.93 12.93 0 0 0 6 1.5c7.04 0 12.77-5.62 12.77-12.54S23.07 3.2 16.03 3.2Zm0 23.18c-1.94 0-3.83-.52-5.48-1.49l-.39-.23-4.05 1.06 1.08-3.86-.26-.4a10.36 10.36 0 0 1-1.57-5.47c0-5.74 4.78-10.41 10.66-10.41 5.87 0 10.65 4.67 10.65 10.41s-4.78 10.39-10.64 10.39Zm5.84-7.77c-.32-.16-1.89-.91-2.18-1.02-.29-.1-.5-.16-.72.16-.21.31-.82 1.02-1.01 1.23-.18.21-.37.23-.69.08-.32-.16-1.35-.49-2.57-1.55-.95-.83-1.59-1.86-1.78-2.17-.19-.31-.02-.48.14-.64.15-.14.32-.36.48-.54.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.54-.08-.16-.72-1.7-.98-2.33-.26-.61-.52-.53-.72-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.05-1.1 2.56s1.13 2.98 1.29 3.18c.16.21 2.23 3.34 5.4 4.68.75.32 1.34.51 1.8.65.76.24 1.45.21 2 .13.61-.09 1.89-.76 2.16-1.49.27-.73.27-1.36.19-1.49-.08-.13-.29-.21-.61-.36Z"
          />
        </svg>
      </span>

      <span className="floatingWhatsAppText">WhatsApp</span>
    </a>
  );
}
