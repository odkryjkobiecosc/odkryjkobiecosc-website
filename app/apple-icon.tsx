// app/apple-icon.tsx

import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
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
            "radial-gradient(circle at 72% 18%, #d8b987 0%, #3b342d 32%, #151313 70%)",
        }}
      >
        <div
          style={{
            width: 126,
            height: 126,
            borderRadius: "50%",
            border: "4px solid #d8b987",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#f6f1ea",
            fontFamily: "Georgia, serif",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.08em",
            boxShadow: "0 18px 50px rgba(0,0,0,0.34)",
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
