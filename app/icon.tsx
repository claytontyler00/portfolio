import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          background: "#ecebe5",
          fontFamily: "serif",
          fontSize: 26,
          fontWeight: 600,
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        <span style={{ color: "#1a2330" }}>c</span>
        <span style={{ color: "#1f5f6b", fontStyle: "italic", fontWeight: 500 }}>t</span>
      </div>
    ),
    { ...size }
  );
}
