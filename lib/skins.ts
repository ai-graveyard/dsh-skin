import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export type Skin = {
  slug: string;
  packageName: string;
  order: number;
  name: string;
  nameZh?: string;
  official?: boolean;
  designPattern?: string;
  tagline: string;
  description: string;
  author: {
    name: string;
    url?: string;
  };
  version: string;
  status: string;
  license: string;
  compatibility: string;
  verifiedAt: string;
  verifiedStates: string[];
  style: string[];
  colors: string[];
  preview: {
    label: string;
    surface: string;
    layer: string;
    line: string;
    muted: string;
    radius?: number;
    cardRadius?: number;
    onAccent?: string;
  };
  screenshots?: Array<{
    src: string;
    alt: string;
    label: string;
    viewport: "desktop" | "mobile";
    width: number;
    height: number;
  }>;
  featured?: boolean;
};

const skinsDirectory = path.join(process.cwd(), "skins");
let cachedSkins: Skin[] | null = null;

export async function getSkins(): Promise<Skin[]> {
  if (cachedSkins) return cachedSkins;

  const entries = await readdir(skinsDirectory, { withFileTypes: true });
  const skins = await Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map(async (entry) => {
        const file = path.join(skinsDirectory, entry.name, "skin.json");

        try {
          return JSON.parse(await readFile(file, "utf8")) as Skin;
        } catch (error) {
          if ((error as NodeJS.ErrnoException).code === "ENOENT") {
            console.warn(`[skins] Missing skin manifest: ${file}. Skipping "${entry.name}".`);
            return null;
          }

          throw new Error(`[skins] Failed to read ${file}: ${(error as Error).message}`);
        }
      }),
  );

  cachedSkins = skins
    .filter((skin): skin is Skin => skin !== null)
    .sort((a, b) => {
      const featured = Number(Boolean(b.featured)) - Number(Boolean(a.featured));
      if (featured !== 0) return featured;
      return a.order - b.order || a.name.localeCompare(b.name);
    });

  return cachedSkins;
}

export async function getSkin(slug: string): Promise<Skin | undefined> {
  return (await getSkins()).find((skin) => skin.slug === slug);
}
