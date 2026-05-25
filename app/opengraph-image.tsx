import { ImageResponse } from "next/og";

export const alt = "Clayton Tyler — Head of AI, Specialty at Artera";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          background: "#ecebe5",
          fontFamily: "serif",
          color: "#1a2330",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 32,
            fontWeight: 600,
            letterSpacing: "-0.018em",
          }}
        >
          <span>Clayton</span>
          <span
            style={{
              marginLeft: 12,
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Tyler
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontFamily: "monospace",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#1f5f6b",
            }}
          >
            Head of AI · Specialty · Artera
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 600,
              letterSpacing: "-0.028em",
              lineHeight: 1.04,
              maxWidth: 1000,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>I build AI that&nbsp;</span>
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "#2a7d8c",
              }}
            >
              patients
            </span>
            <span>&nbsp;actually use.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 18,
            fontFamily: "monospace",
            letterSpacing: "0.06em",
            color: "#5d6573",
          }}
        >
          <span>claytontyler.com</span>
          <span>Selected work · 2022 – 2026</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
