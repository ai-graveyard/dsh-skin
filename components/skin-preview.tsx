"use client";
import { useSitePreferences } from "@/components/site-preferences";
import type { Skin } from "@/lib/skins";
type SkinPreviewProps = {
  skin: Skin;
  compact?: boolean;
};
export function SkinPreview({ skin, compact = false }: SkinPreviewProps) {
  const { t } = useSitePreferences();
  return (
    <div className="skin-preview-frame">
      <div
        className={`skin-preview skin-preview-${skin.slug}${compact ? " skin-preview-compact" : ""}`}
        style={
          {
            "--preview-bg": skin.colors[0],
            "--preview-ink": skin.colors[1],
            "--preview-accent": skin.colors[2],
            "--preview-surface": skin.preview.surface,
            "--preview-layer": skin.preview.layer,
            "--preview-line": skin.preview.line,
            "--preview-muted": skin.preview.muted,
            "--preview-radius": `${skin.preview.radius ?? 3}px`,
            "--preview-card-radius": `${skin.preview.cardRadius ?? 4}px`,
            "--preview-on-accent": skin.preview.onAccent ?? "#FFFFFF",
          } as React.CSSProperties
        }
        role="img"
        aria-label={`${skin.name} ${t("界面设计示意")}`}
      >
        <div className="preview-rail">
          <div className="preview-brand">
            <span>DSH</span>
            <b>HARNESS</b>
          </div>
          <div className="preview-new">{t("+ 新建会话")}</div>
          <p>{t("最近会话")}</p>
          <div className="preview-session preview-session-active">
            <span>{t("设计一个好用的界面")}</span>
            <small>09:42</small>
          </div>
          <div className="preview-session">
            <span>{t("整理今天的灵感")}</span>
            <small>YEST.</small>
          </div>
          <div className="preview-settings">
            <span>⌁</span>
            {t("设置")}
          </div>
        </div>

        <div className="preview-main">
          <div className="preview-topbar">
            <div>
              <strong>dsh-skin</strong>
              <small>/ workspace</small>
            </div>
            <div className="preview-model">
              <i /> DEEPSEEK
            </div>
          </div>
          <div className="preview-content">
            <div className="preview-heading">
              <span>{String(skin.order).padStart(2, "0")}</span>
              <div>
                <p>MAKE SOMETHING GOOD</p>
                <h3>{t("让好想法，慢慢发生。")}</h3>
              </div>
            </div>
            <div className="preview-message">
              <b>YOU</b>
              <p>{t("帮我把这个想法，变成一个简洁好用的界面。")}</p>
            </div>
            <div className="preview-message">
              <b>DSH</b>
              <div className="preview-lines">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
          <div className="preview-composer">
            <span>{t("从一个新想法开始…")}</span>
            <span className="preview-send" aria-hidden="true">
              ↑
            </span>
          </div>
        </div>

        <div className="preview-active">{skin.preview.label}</div>
      </div>
    </div>
  );
}
