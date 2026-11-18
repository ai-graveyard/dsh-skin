import { ImageResponse } from "next/og";

export const alt = "DSH Skin — community skins for DeepSeek Harness";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

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
          padding: 64,
          background: "#0a1022",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "2px solid #ffffff",
            paddingBottom: 22,
            fontSize: 22,
          }}
        >
          <span>DSH SKIN</span>
          <span>OPEN SOURCE / DESKTOP SKINS</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              fontSize: 86,
              fontWeight: 700,
              letterSpacing: "-4px",
              lineHeight: 1,
            }}
          >
            Your workspace.
          </div>
          <div
            style={{
              fontSize: 86,
              color: "#a2dfff",
              letterSpacing: "-4px",
              lineHeight: 1,
            }}
          >
            Your style.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
          }}
        >
          <span>Explore, choose and install your Harness skin.</span>
          <span
            style={{
              width: 28,
              height: 28,
              borderRadius: 999,
              background: "#5ac8fa",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
