export const repositoryUrl = "https://github.com/ai-graveyard/dsh-skin";
const configuredOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN?.trim();
const cleanedOrigin = configuredOrigin ? configuredOrigin.replace(/\/+$/, "") : "";
export const siteOrigin = cleanedOrigin.length > 0 ? cleanedOrigin : "https://dshskin.com";
export const contributingUrl = `${repositoryUrl}/blob/main/CONTRIBUTING.md`;
export const skinsTreeUrl = `${repositoryUrl}/tree/main/skins`;

export function toAbsoluteUrl(pathname = "/"): string {
  return `${siteOrigin}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}
