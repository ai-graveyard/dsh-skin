import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSkin, getSkins } from "@/lib/skins";
import { skinDisplay } from "@/lib/skin-display";
import { toAbsoluteUrl } from "@/lib/site";
import { SkinDetail } from "@/components/skin-detail";

type PageProps = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export async function generateStaticParams() {
  return (await getSkins()).map((skin) => ({ slug: skin.slug }));
}
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const skin = await getSkin((await params).slug);
  if (!skin) return {};
  return {
    title: `${skin.nameZh} ${skin.name}`,
    description: skinDisplay(skin).description,
    alternates: { canonical: toAbsoluteUrl(`/skins/${skin.slug}`) },
    openGraph: {
      title: `${skin.nameZh} · ${skin.name}`,
      description: skinDisplay(skin).description,
      url: toAbsoluteUrl(`/skins/${skin.slug}`),
      type: "website",
    },
  };
}
export default async function SkinPage({ params }: PageProps) {
  const skin = await getSkin((await params).slug);
  if (!skin) notFound();
  const related = (await getSkins())
    .filter((s) => s.slug !== skin.slug)
    .slice(0, 3);
  return <SkinDetail skin={skin} related={related} />;
}
