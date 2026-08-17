import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DSH Skin",
    short_name: "DSH Skin",
    description: "Independent skins for the DeepSeek Harness Web UI.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F7F7",
    theme_color: "#1A1A1A",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
