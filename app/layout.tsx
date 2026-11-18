import type { Metadata } from "next";
import "./globals.css";
import { SitePreferences, SkipLink } from "@/components/site-preferences";
import { toAbsoluteUrl, siteOrigin } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: "DSH Skin — DeepSeek Harness 桌面皮肤库",
    template: "%s — DSH Skin",
  },
  description:
    "为 DeepSeek Harness 桌面客户端挑选免费开源皮肤。预览不同风格，跟随安装指南，打造自己的工作区。",
  keywords: ["DeepSeek Harness", "DSH", "themes", "skins", "open source"],
  alternates: {
    canonical: toAbsoluteUrl("/"),
  },
  openGraph: {
    title: "DSH Skin",
    description:
      "DeepSeek Harness 桌面皮肤库：预览风格、挑选皮肤、查看安装指南。",
    url: toAbsoluteUrl("/"),
    siteName: "DSH Skin",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DSH Skin",
    description: "为 DeepSeek Harness 桌面客户端换一款好看的皮肤。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "DSH Skin",
    url: siteOrigin,
    description:
      "Independent, community-made skins for the DeepSeek Harness Desktop.",
    isAccessibleForFree: true,
  };

  return (
    <html
      lang="zh-CN"
      data-theme="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("dsh-theme");document.documentElement.dataset.theme=t==="light"||t==="dark"?t:matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{document.documentElement.dataset.theme=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}`,
          }}
        />
      </head>
      <body>
        <SitePreferences>
          <SkipLink />
          <div className="ambient" aria-hidden="true">
            <i className="orb orb-blue" />
            <i className="orb orb-purple" />
            <i className="orb orb-amber" />
          </div>
          {children}
        </SitePreferences>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
