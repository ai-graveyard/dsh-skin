"use client";
import { PageTitle, useSitePreferences } from "@/components/site-preferences";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HeroShowcase } from "@/components/hero-showcase";
import { SkinGallery } from "@/components/skin-gallery";
import { InstallGuide } from "@/components/install-guide";
import type { Skin } from "@/lib/skins";
import { contributingUrl, repositoryUrl } from "@/lib/site";
export function HomeContent({ skins }: { skins: Skin[] }) {
  const { t } = useSitePreferences();
  const showcase = [
    "frosted-tide",
    "alpine-light",
    "night-signal",
    "nordic-linen",
  ].flatMap((slug) => skins.filter((s) => s.slug === slug));
  return (
    <div className="shell">
      <PageTitle />
      <SiteHeader />
      <main id="main-content">
        <section className="home-hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="live-dot" />
              {t("为 DeepSeek Harness 桌面端而作")}
            </p>
            <h1 id="hero-title">
              {t("给 Harness，")}
              <br />
              <span>{t("换一款好皮肤。")}</span>
            </h1>
            <p className="hero-description">
              {t("给")}
              <strong>DeepSeek Harness</strong>
              {t("换一款好看的皮肤。")}
              <br className="desktop-break" />
              {skins.length}
              {t("款免费开源主题，从安静极简到大胆撞色，")}
              <br className="desktop-break" />
              {t("找到让你更想打开它的那一款。")}
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#collection">
                {t("挑选你的皮肤")}
                <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-glass" href="#install">
                {t("如何安装")}
                <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="hero-footnote">
              <span>{t("免费开源")}</span>
              <i />
              {t("随时停用恢复")}
              <i />
              <span>{t("本地安装")}</span>
            </p>
          </div>
          <HeroShowcase skins={showcase} />
        </section>
        <div className="intro-strip">
          <p>
            <strong>{t("DSH Skin 是什么？")}</strong>
            {t("内置全部主题的 DeepSeek Harness 桌面插件。")}
          </p>
          <span>
            {t("安装皮肤大全")}
            <b>→</b>
            {t("打开插件")}
            <b>→</b>
            {t("切换主题")}
          </span>
        </div>
        <section
          className="collection page-section"
          id="collection"
          aria-labelledby="collection-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("THE COLLECTION / 皮肤集")}</p>
              <h2 id="collection-title">
                {t("一样的工具。")}
                <span>{t("不一样的心情。")}</span>
              </h2>
            </div>
            <p>
              {t("先看看哪一款适合你。")}
              <br />
              {t("进入详情，即可查看预览和安装步骤。")}
            </p>
          </div>
          <SkinGallery skins={skins} />
          <p className="section-note">
            {t(
              "预览为基于皮肤配色与样式的设计示意。",
            )}
          </p>
        </section>
        <section
          className="page-section install-section"
          id="install"
          aria-labelledby="install-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t("MAKE IT YOURS / 安装指南")}</p>
              <h2 id="install-title">
                {t("安装一次，")}
                <span>{t("随时换个样子。")}</span>
              </h2>
            </div>
            <p>
              {t("通过客户端自带的插件命令安装。")}
              <br />
              {t("照着下面的步骤，就能开始使用。")}
            </p>
          </div>
          <InstallGuide />
        </section>
        <section
          className="faq-section page-section"
          aria-labelledby="faq-title"
        >
          <div>
            <p className="eyebrow">GOOD TO KNOW</p>
            <h2 id="faq-title">{t("你可能还想知道")}</h2>
            <p>{t("关于兼容、切换和恢复。")}</p>
          </div>
          <div className="faq-list">
            <details>
              <summary>
                {t("这是 DeepSeek 官方网站吗？")}
                <span>＋</span>
              </summary>
              <p>
                {t(
                  "不是。DSH Skin 是独立的开源社区皮肤项目，与 DeepSeek 无隶属关系。这里的皮肤适用于 DeepSeek Harness 桌面客户端，不适用于 DeepSeek 网页聊天。",
                )}
              </p>
            </details>
            <details>
              <summary>
                {t("皮肤会改变我的会话或模型配置吗？")}
                <span>＋</span>
              </summary>
              <p>
                {t(
                  "皮肤修改界面配色和样式，不修改会话、模型配置或凭证。所有字体来自系统，不加载远程字体。源码可在 GitHub 查看。",
                )}
              </p>
            </details>
            <details>
              <summary>
                {t("可以切换皮肤、恢复默认外观吗？")}
                <span>＋</span>
              </summary>
              <p>
                {t(
                  "可以。在「插件 → 皮肤大全」里选择主题，立即生效并记住上次选择。选「原生外观」可恢复默认样式。",
                )}
              </p>
            </details>
            <details>
              <summary>
                {t("支持哪些客户端版本与系统？")}
                <span>＋</span>
              </summary>
              <p>
                {t(
                  "合包版和早期单主题的验证范围均见项目验收记录。",
                )}{" "}
                <a href={`${repositoryUrl}/blob/main/DESKTOP-QA.md`}>{t("验收记录")}</a>
              </p>
            </details>
          </div>
        </section>
        <section className="contribute-banner glass">
          <div>
            <p className="eyebrow">BUILT BY THE COMMUNITY</p>
            <h2>{t("下一种风格，来自你。")}</h2>
            <p>{t("有自己的设计想法？欢迎把它做成一款皮肤。")}</p>
          </div>
          <a className="button button-glass" href={contributingUrl}>
            {t("贡献一款皮肤")}
            <span aria-hidden="true">↗</span>
          </a>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
