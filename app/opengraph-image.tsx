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
          background:
            "linear-gradient(135deg, #151313 0%, #292522 48%, #f6f1ea 100%)",
          color: "#f6f1ea",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 76% 24%, rgba(216,185,135,0.38), transparent 32%), radial-gradient(circle at 14% 80%, rgba(246,241,234,0.18), transparent 30%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 70,
            top: 70,
            width: 330,
            height: 490,
            borderRadius: "170px 170px 18px 18px",
            border: "1px solid rgba(246,241,234,0.28)",
            background:
              "linear-gradient(145deg, rgba(216,185,135,0.72), rgba(21,19,19,0.18))",
          }}
        />

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
              fontSize: 96,
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
              maxWidth: 720,
              fontSize: 32,
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
            odkryjkobiecosc.pl
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
