import type { MetadataRoute } from "next";
import siteIcon from "@/app/icon.svg";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DSH Skin",
    short_name: "DSH Skin",
    description: "DeepSeek Harness 桌面客户端的免费开源皮肤库。",
    start_url: "/",
    display: "standalone",
    background_color: "#05070f",
    theme_color: "#0a1022",
    icons: [
      {
        src: siteIcon.src,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
