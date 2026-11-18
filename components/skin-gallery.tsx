"use client";
import { useSitePreferences } from "@/components/site-preferences";
import Link from "next/link";
import { useState } from "react";
import type { Skin } from "@/lib/skins";
import { isDarkSkin, skinDisplay } from "@/lib/skin-display";
import { SkinPreview } from "@/components/skin-preview";
export function SkinGallery({ skins }: { skins: Skin[] }) {
  const { t, skinName, locale } = useSitePreferences();
  const [filter, setFilter] = useState("all");
  const visible = skins.filter(
    (skin) =>
      filter === "all" ||
      (filter === "dark" ? isDarkSkin(skin) : !isDarkSkin(skin)),
  );
  return (
    <>
      <div className="collection-toolbar">
        <div
          className="segmented glass"
          role="group"
          aria-label={t("按明暗筛选皮肤")}
        >
          {[
            { key: "all", name: t("全部皮肤") },
            { key: "light", name: t("浅色") },
            { key: "dark", name: t("深色") },
          ].map(({ key, name }) => (
            <button
              key={key}
              type="button"
              aria-pressed={filter === key}
              onClick={() => setFilter(key)}
            >
              {name}
              <span>
                {
                  skins.filter(
                    (s) =>
                      key === "all" ||
                      (key === "dark" ? isDarkSkin(s) : !isDarkSkin(s)),
                  ).length
                }
              </span>
            </button>
          ))}
        </div>
        <p className="collection-count" aria-live="polite">
          {visible.length}
          {t("款皮肤 · 免费开源")}
        </p>
      </div>
      <div className="skin-grid">
        {visible.map((skin) => (
          <Link
            className="skin-card glass"
            key={skin.slug}
            href={`/skins/${skin.slug}`}
            aria-label={`${t("查看并安装")} ${skinName(skin)}`}
          >
            <div
              className={`card-preview ${isDarkSkin(skin) ? "card-preview-dark" : ""}`}
              style={{ "--card-tint": skin.colors[2] } as React.CSSProperties}
            >
              <SkinPreview skin={skin} compact />
              <span className="style-tag">
                {skinDisplay(skin, locale).style}
              </span>
            </div>
            <div className="card-copy">
              <div className="card-title">
                <h3>
                  {skinName(skin)}
                  <span>
                    {locale === "zh"
                      ? skin.name
                      : skinDisplay(skin, locale).style}
                  </span>
                </h3>
                <span className="card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <p>{skinDisplay(skin, locale).description}</p>
              <div className="card-bottom">
                <span className="skin-colors" aria-label={t("皮肤配色")}>
                  {skin.colors.map((c) => (
                    <i key={c} style={{ background: c }} />
                  ))}
                </span>
                <span>
                  {t("查看与安装")}
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
