import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Clayton Tyler · Design leader who runs AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#f5efe6",
          color: "#1d1a16",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 22,
              textTransform: "uppercase",
              letterSpacing: 6,
              color: "#b5531f",
              fontFamily: "Inter",
            }}
          >
            Clayton Tyler
          </div>
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: -2,
              color: "#1d1a16",
              maxWidth: 900,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            Design leader who{" "}
            <span style={{ fontStyle: "italic", color: "#b5531f", marginLeft: 16 }}>runs AI</span>{" "}
            in healthcare.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            fontFamily: "Inter",
            fontSize: 18,
            color: "#6b6559",
            borderTop: "1px solid #d9cfbd",
            paddingTop: 24,
          }}
        >
          <div>claytontyler.com</div>
          <div>Head of AI, Specialty · Artera</div>
        </div>
      </div>
    ),
    size
  );
}
