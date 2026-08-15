import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export type Skin = {
  slug: string;
  name: string;
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
  style: string[];
  colors: string[];
  featured?: boolean;
};

const skinsDirectory = path.join(process.cwd(), "skins");

export async function getSkins(): Promise<Skin[]> {
  const entries = await readdir(skinsDirectory, { withFileTypes: true });
  const skins = await Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map(async (entry) => {
        const file = path.join(skinsDirectory, entry.name, "skin.json");

        try {
          return JSON.parse(await readFile(file, "utf8")) as Skin;
        } catch (error) {
          if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
          throw error;
        }
      }),
  );

  return skins
    .filter((skin): skin is Skin => skin !== null)
    .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
}

export async function getSkin(slug: string): Promise<Skin | undefined> {
  return (await getSkins()).find((skin) => skin.slug === slug);
}
