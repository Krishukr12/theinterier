import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { brand } from "@/content/site";

export const alt = `${brand.name} — ${brand.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/brand/the-interier-logo.svg"),
  );
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F8F6F2",
          color: "#171A1F",
          padding: 72,
        }}
      >
        <img src={logoSrc} width={420} height={146} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 56, lineHeight: 1.08, letterSpacing: -1.2, maxWidth: 920 }}>
            {brand.tagline}
          </div>
          <div style={{ fontSize: 24, color: "#5F646D" }}>
            Interior professionals and the people they serve. India, starting in Bengaluru.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
