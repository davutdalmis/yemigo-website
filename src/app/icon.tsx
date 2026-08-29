import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Yemigo monogram-Y "Mor Daire" — taze Yemigo moru → pembe gradyan
const SVG = `<svg width="240" height="240" viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="mv7" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7B2FF7"/><stop offset="1" stop-color="#F107A3"/></linearGradient></defs><circle cx="120" cy="120" r="108" fill="url(#mv7)"/><g fill="none" stroke="#FFFFFF" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"><path d="M74 70 L120 124"/><path d="M166 70 L120 124"/><path d="M120 124 L120 178"/></g><circle cx="120" cy="124" r="8" fill="#FFFFFF"/></svg>`;
const SRC = `data:image/svg+xml;base64,${Buffer.from(SVG).toString("base64")}`;

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={SRC} width={size.width} height={size.height} alt="Yemigo" />
      </div>
    ),
    size,
  );
}
