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
            "linear-gradient(135deg, #151313 0%, #292522 58%, #d8b987 100%)",
          color: "#f6f1ea",
          fontFamily: "Georgia, serif",
          fontSize: 76,
          fontWeight: 700,
          letterSpacing: "-0.1em",
        }}
      >
        OK
      </div>
    ),
    {
      ...size,
    }
  );
}
