import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dshskin.com"),
  title: {
    default: "DSH Skin — Community skins for DeepSeek Harness",
    template: "%s — DSH Skin",
  },
  description:
    "Discover and install independent, community-made skins for the DeepSeek Harness Web UI.",
  openGraph: {
    title: "DSH Skin",
    description: "A community collection of skins for DeepSeek Harness.",
    url: "https://dshskin.com",
    siteName: "DSH Skin",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
