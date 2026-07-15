// app/icon.tsx

import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 68% 18%, #d8b987 0%, #3a332b 30%, #151313 68%)",
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: "50%",
            border: "2px solid #d8b987",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#f6f1ea",
            fontFamily: "Georgia, serif",
            fontSize: 28,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.08em",
          }}
        >
          K
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
