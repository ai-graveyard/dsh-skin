import { ImageResponse } from "next/og";

export const alt = "DSH Skin — community skins for DeepSeek Harness";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 64,
        background: "#F7F7F7",
        color: "#1A1A1A",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid #1A1A1A", paddingBottom: 22, fontSize: 22 }}>
        <span>DSH SKIN</span>
        <span>COMMUNITY ARCHIVE / 2026</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ fontSize: 86, fontWeight: 700, letterSpacing: "-4px", lineHeight: 1 }}>Change the surface.</div>
        <div style={{ fontSize: 86, color: "#808080", letterSpacing: "-4px", lineHeight: 1 }}>Keep the machine.</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24 }}>
        <span>Independent skins for DeepSeek Harness.</span>
        <span style={{ width: 28, height: 28, borderRadius: 999, background: "#E8500A" }} />
      </div>
    </div>,
    size,
  );
}
