import type { MetadataRoute } from "next";
import { getSkins } from "@/lib/skins";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const skins = await getSkins();
  const latestVerification = skins
    .map((skin) => skin.verifiedAt)
    .sort()
    .at(-1);
  const lastModified = latestVerification ? new Date(`${latestVerification}T00:00:00Z`) : new Date();

  return [
    {
      url: "https://dshskin.com",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...skins.map((skin) => ({
      url: `https://dshskin.com/skins/${skin.slug}`,
      lastModified: new Date(`${skin.verifiedAt}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: skin.featured ? 0.9 : 0.8,
    })),
  ];
}
