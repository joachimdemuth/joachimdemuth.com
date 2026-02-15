import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Music - Joachim Demuth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 500,
            color: "#e5e5e5",
            letterSpacing: "-0.02em",
          }}
        >
          Music
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#737373",
            marginTop: 20,
          }}
        >
          What I&apos;ve been listening to
        </div>
      </div>
    ),
    { ...size },
  );
}
