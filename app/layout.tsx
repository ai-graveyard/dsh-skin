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
  keywords: ["DeepSeek Harness", "DSH", "themes", "skins", "open source"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DSH Skin",
    description: "A community collection of skins for DeepSeek Harness.",
    url: "https://dshskin.com",
    siteName: "DSH Skin",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DSH Skin",
    description: "Independent, installable skins for the DeepSeek Harness Web UI.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "DSH Skin",
    url: "https://dshskin.com",
    description: "Independent, community-made skins for the DeepSeek Harness Web UI.",
    isAccessibleForFree: true,
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
