"use client";
import { PageTitle, useSitePreferences } from "@/components/site-preferences";
import Link from "next/link";
import plugin from "@/plugin/package.json";
import { InstallGuide } from "@/components/install-guide";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkinPreview } from "@/components/skin-preview";
import { SkinIcon } from "@/components/skin-icon";
import type { Skin } from "@/lib/skins";
import { defaultPreviewPalette, skinDisplay, isDarkSkin } from "@/lib/skin-display";
import { repositoryUrl, skinsTreeUrl } from "@/lib/site";
export function SkinDetail({ skin, related }: { skin: Skin; related: Skin[] }) {
  const { t, skinName, locale } = useSitePreferences();
  return (
    <div className="shell">
      <PageTitle skin={skin} />
      <SiteHeader />
      <main id="main-content">
        <Link className="back-link" href="/#collection">
          {t("← 浏览全部皮肤")}
        </Link>
        <article>
          <header className="detail-hero">
            <div>
              <p className="eyebrow">
                {skinDisplay(skin, locale).style} /{" "}
                {skin.dark ? t("明暗双模式") : isDarkSkin(skin) ? t("深色皮肤") : t("浅色皮肤")}
              </p>
              <h1>
                {skinName(skin)}
                <span>
                  {locale === "zh"
                    ? skin.name
                    : skinDisplay(skin, locale).style}
                </span>
              </h1>
              <p className="detail-description">
                {skinDisplay(skin, locale).description}
              </p>
              <div className="detail-tags">
                <span>{t("免费开源")}</span>
                <span>{t("皮肤大全")} v{plugin.version}</span>
                <span>{t("DeepSeek Harness 桌面端")}</span>
              </div>
            </div>
            <div className="detail-actions">
              <a className="button button-primary" href="#install">
                {t("安装皮肤大全")}
                <span aria-hidden="true">↓</span>
              </a>
              <a className="text-link" href={`${skinsTreeUrl}/${skin.slug}`}>
                {t("查看皮肤源码 ↗")}
              </a>
            </div>
          </header>
          <figure className="detail-preview glass">
            <div className="window-chrome">
              <span className="window-dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
              <span>{skin.name} / Desktop</span>
              <span className="preview-badge">{t("外观预览")}</span>
            </div>
            <SkinPreview skin={skin} />
            <figcaption>
              <span>{t("界面设计示意 · 实际效果以客户端为准")}</span>
              <span className="skin-colors">
                {defaultPreviewPalette(skin).colors.map((c) => (
                  <i key={c} title={c} style={{ background: c }} />
                ))}
              </span>
            </figcaption>
          </figure>
          <div className="detail-facts">
            <div>
              <span>{t("单主题历史验收")}</span>
              <strong>{skin.compatibility}</strong>
            </div>
            <div>
              <span>{t("验收记录")}</span>
              <a href={`${repositoryUrl}/blob/main/DESKTOP-QA.md`}>
                {skin.verifiedAt} · macOS ↗
              </a>
            </div>
            <div>
              <span>{t("作者 / 许可")}</span>
              <strong>
                {skin.author.name} / {skin.license}
              </strong>
            </div>
          </div>
          {skin.screenshots?.length ? (
            <section className="page-section">
              <div className="section-heading">
                <h2>{t("客户端实拍")}</h2>
              </div>
              <div className="screenshot-grid">
                {skin.screenshots.map((shot) => (
                  <figure key={shot.src}>
                    <img
                      src={shot.src}
                      alt={shot.alt}
                      width={shot.width}
                      height={shot.height}
                      loading="lazy"
                    />
                    <figcaption>{shot.label}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          ) : null}
          <section className="page-section install-section" id="install">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{t("INSTALL / 安装皮肤大全")}</p>
                <h2>
                  {t("让")}
                  {skinName(skin)}
                  <span>{t("成为你的日常。")}</span>
                </h2>
              </div>
              <p>
                {t("皮肤大全已内置这套主题。")}
                <br />
                {t("安装后在插件里切换主题。")}
              </p>
            </div>
            <InstallGuide skin={skin} />
          </section>
        </article>
        <section className="related-section">
          <div className="section-heading">
            <h2>{t("再看看其他风格")}</h2>
            <Link className="text-link" href="/#collection">
              {t("全部皮肤 ↗")}
            </Link>
          </div>
          <div className="related-grid">
            {related.map((s) => (
              <Link
                className="related-card glass"
                href={`/skins/${s.slug}`}
                key={s.slug}
              >
                <SkinIcon skin={s} className="related-icon" />
                <div>
                  <strong>{skinName(s)}</strong>
                  <span>
                    {locale === "zh" ? s.name : skinDisplay(s, locale).style}
                  </span>
                </div>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
