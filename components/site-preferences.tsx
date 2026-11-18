"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Skin } from "@/lib/skins";
import { english } from "@/lib/translations";

type Locale = "zh" | "en";
type Theme = "light" | "dark";
type Preferences = {
  locale: Locale;
  theme: Theme;
  setLocale: (locale: Locale) => void;
  setTheme: (theme: Theme) => void;
  t: (source: string) => string;
  skinName: (skin: Skin) => string;
};
const Context = createContext<Preferences | null>(null);
export function SitePreferences({ children }: { children: React.ReactNode }) {
  const [locale, updateLocale] = useState<Locale>("zh");
  const [ready, setReady] = useState(false);
  const [theme, updateTheme] = useState<Theme>("dark");
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    function sync() {
      let savedTheme: string | null = null;
      let savedLocale: string | null = null;
      try {
        savedTheme = localStorage.getItem("dsh-theme");
        savedLocale = localStorage.getItem("dsh-locale");
      } catch {
        /* Storage can be unavailable in private browsing. */
      }
      updateTheme(
        savedTheme === "light" || savedTheme === "dark"
          ? savedTheme
          : media.matches
            ? "dark"
            : "light",
      );
      updateLocale(savedLocale === "en" ? "en" : "zh");
    }
    sync();
    setReady(true);
    window.addEventListener("storage", sync);
    media.addEventListener("change", sync);
    return () => {
      window.removeEventListener("storage", sync);
      media.removeEventListener("change", sync);
    };
  }, []);
  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.locale = locale;
  }, [locale]);
  useEffect(() => {
    if (ready) document.documentElement.dataset.theme = theme;
  }, [theme, ready]);
  const value = useMemo<Preferences>(
    () => ({
      locale,
      theme,
      setLocale(next) {
        updateLocale(next);
        try {
          localStorage.setItem("dsh-locale", next);
        } catch {}
      },
      setTheme(next) {
        updateTheme(next);
        try {
          localStorage.setItem("dsh-theme", next);
        } catch {}
      },
      t(source) {
        return locale === "en"
          ? (english[source.replace(/\s+/g, " ").trim()] ?? source)
          : source;
      },
      skinName(skin) {
        return locale === "zh" ? (skin.nameZh ?? skin.name) : skin.name;
      },
    }),
    [locale, theme],
  );
  return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useSitePreferences() {
  const value = useContext(Context);
  if (!value) throw new Error("Site preferences require SitePreferences");
  return value;
}
export function SkipLink() {
  const { t } = useSitePreferences();
  return (
    <a className="skip-link" href="#main-content">
      {t("跳转到正文")}
    </a>
  );
}
export function PageTitle({ skin }: { skin?: Skin }) {
  const { locale, skinName } = useSitePreferences();
  useEffect(() => {
    document.title = skin
      ? `${skinName(skin)} — DSH Skin`
      : locale === "en"
        ? "DSH Skin — Skins for DeepSeek Harness Desktop"
        : "DSH Skin — DeepSeek Harness 桌面皮肤库";
    const description = document.querySelector('meta[name="description"]');
    if (description)
      description.setAttribute(
        "content",
        skin
          ? locale === "en"
            ? skin.description
            : `${skinName(skin)}，DeepSeek Harness 桌面皮肤。查看预览与安装步骤。`
          : locale === "en"
            ? "Explore free, open-source skins for DeepSeek Harness Desktop. Preview styles and follow the installation guide."
            : "为 DeepSeek Harness 桌面客户端挑选免费开源皮肤。预览不同风格，跟随安装指南，打造自己的工作区。",
      );
  }, [locale, skin, skinName]);
  return null;
}
export function PreferenceControls() {
  const { locale, theme, setLocale, setTheme } = useSitePreferences();
  const themeLabel =
    locale === "zh"
      ? theme === "dark"
        ? "切换到白天模式"
        : "切换到黑夜模式"
      : theme === "dark"
        ? "Switch to light mode"
        : "Switch to dark mode";
  return (
    <div
      className="preference-controls"
      role="group"
      aria-label={locale === "zh" ? "外观与语言" : "Appearance and language"}
    >
      <button
        type="button"
        className="theme-toggle"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        title={themeLabel}
        aria-label={themeLabel}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {theme === "dark" ? (
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
            </>
          ) : (
            <path d="M20.8 13A9 9 0 0 1 11 3.2 9 9 0 1 0 20.8 13Z" />
          )}
        </svg>
      </button>
      <button
        type="button"
        className="language-toggle"
        onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
        title={locale === "zh" ? "Switch to English" : "切换到中文"}
        aria-label={locale === "zh" ? "Switch to English" : "切换到中文"}
        lang={locale === "zh" ? "en" : "zh-CN"}
      >
        {locale === "zh" ? "EN" : "中文"}
      </button>
    </div>
  );
}
