"use client";
import { useSitePreferences } from "@/components/site-preferences";
import { contributingUrl, repositoryUrl } from "@/lib/site";
export function SiteFooter() {
  const { t } = useSitePreferences();
  return (
    <footer className="site-footer">
      <div>
        <a className="footer-brand" href="/">
          DSH Skin
        </a>
        <p>{t("给每天使用的工具，一点自己的风格。")}</p>
      </div>
      <div className="footer-links">
        <a href={repositoryUrl}>GitHub ↗</a>
        <a href={contributingUrl}>{t("贡献皮肤 ↗")}</a>
        <a href="/#install">{t("安装指南")}</a>
      </div>
      <p className="footer-note">
        {t(
          "独立开源社区项目，与 DeepSeek 无隶属关系。皮肤适用于 DeepSeek Harness 桌面客户端。",
        )}
      </p>
      <span className="footer-license">MIT License · 2026</span>
    </footer>
  );
}
