// app/opengraph-image.tsx

import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Odkryj Kobiecość — profesjonalne sesje kobiece, biznesowe i premium w Trójmieście";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const SITE_URL = "https://www.odkryjkobiecosc.pl";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#151313",
          color: "#f6f1ea",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Zdjęcie Marty */}
        <img
          src={`${SITE_URL}/images/og/marta-profile.jpeg`}
          alt="Marta Krajewska Photo"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: 560,
            height: 630,
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />

        {/* Gradient przyciemniający zdjęcie i poprawiający czytelność */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, #151313 0%, rgba(21,19,19,0.96) 34%, rgba(21,19,19,0.62) 58%, rgba(21,19,19,0.18) 100%)",
          }}
        />

        {/* Subtelne światło premium */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 72% 18%, rgba(216,185,135,0.18), transparent 34%), radial-gradient(circle at 10% 82%, rgba(216,185,135,0.14), transparent 30%)",
          }}
        />

        {/* Tekst */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "68%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "78px",
          }}
        >
          <div
            style={{
              marginBottom: 34,
              fontFamily: "Arial, sans-serif",
              fontSize: 22,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#d8b987",
            }}
          >
            Sesje kobiece • biznesowe • premium
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 92,
              lineHeight: 0.92,
              letterSpacing: "-0.055em",
            }}
          >
            <span>Nie odkładaj</span>
            <span>siebie na później.</span>
          </div>

          <div
            style={{
              marginTop: 38,
              maxWidth: 690,
              fontSize: 31,
              lineHeight: 1.25,
              color: "rgba(246,241,234,0.78)",
            }}
          >
            Profesjonalna sesja kobieca w Trójmieście, która pozwala zobaczyć
            siebie inaczej.
          </div>

          <div
            style={{
              marginTop: 46,
              fontFamily: "Arial, sans-serif",
              fontSize: 20,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#d8b987",
            }}
          >
            Marta Krajewska Photo • odkryjkobiecosc.pl
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
