import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "SmartEdgeTools — Free Online Tools for Everyday Tasks";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#f7faf9",
          color: "#10231b",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 700,
            marginBottom: 28,
          }}
        >
          SmartEdgeTools
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 66,
            lineHeight: 1.05,
            fontWeight: 800,
            maxWidth: 1000,
          }}
        >
          Free online tools for everyday tasks.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            lineHeight: 1.35,
            color: "#52635b",
            maxWidth: 950,
          }}
        >
          Calculators, converters, generators, text, image, PDF, and productivity tools.
        </div>
      </div>
    ),
    size
  );
}
