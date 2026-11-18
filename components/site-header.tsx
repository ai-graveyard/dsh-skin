"use client";
import {
  PreferenceControls,
  useSitePreferences,
} from "@/components/site-preferences";
import Link from "next/link";
import siteIcon from "@/app/icon.svg";
import { repositoryUrl } from "@/lib/site";
export function SiteHeader() {
  const { t } = useSitePreferences();
  return (
    <header className="site-header glass">
      <Link className="wordmark" href="/" aria-label={t("DSH Skin 首页")}>
        <img src={siteIcon.src} width="36" height="36" alt="" />
        <span>
          DSH<span className="wordmark-light"> Skin</span>
        </span>
      </Link>
      <nav className="site-nav" aria-label={t("主导航")}>
        <Link href="/#collection">{t("探索皮肤")}</Link>
        <Link href="/#install">{t("安装指南")}</Link>
        <a
          className="nav-source"
          href={repositoryUrl}
          aria-label={t("在 GitHub 查看源码")}
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </nav>
      <PreferenceControls />
    </header>
  );
}
