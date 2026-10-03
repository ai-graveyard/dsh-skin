import type { Skin } from "@/lib/skins";

type SkinPreviewProps = {
  skin: Skin;
  compact?: boolean;
};

export function SkinPreview({ skin, compact = false }: SkinPreviewProps) {
  return (
    <div
      className={`skin-preview skin-preview-${skin.slug}${compact ? " skin-preview-compact" : ""}`}
      style={{
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
      } as React.CSSProperties}
      role="img"
      aria-label={`${skin.name} interface preview`}
    >
      <div className="preview-rail">
        <div className="preview-brand">
          <span>DSH</span>
          <b>HARNESS</b>
        </div>
        <div className="preview-new">+ NEW SESSION</div>
        <p>RECENT</p>
        <div className="preview-session preview-session-active">
          <span>Design system audit</span>
          <small>09:42</small>
        </div>
        <div className="preview-session">
          <span>Refactor auth flow</span>
          <small>YEST.</small>
        </div>
        <div className="preview-settings">
          <span>⌁</span> Settings
        </div>
      </div>

      <div className="preview-main">
        <div className="preview-topbar">
          <div>
            <strong>dsh-skin</strong>
            <small>/ workspace</small>
          </div>
          <div className="preview-model"><i /> DEEPSEEK</div>
        </div>
        <div className="preview-content">
          <div className="preview-heading">
            <span>{String(skin.order).padStart(2, "0")}</span>
            <div>
              <p>DESIGN TASK</p>
              <h3>Build with less, but better.</h3>
            </div>
          </div>
          <div className="preview-message">
            <b>YOU</b>
            <p>Create a focused interface for the work that matters.</p>
          </div>
          <div className="preview-message">
            <b>DSH</b>
            <div className="preview-lines"><i /><i /><i /></div>
          </div>
        </div>
        <div className="preview-composer">
          <span>Ask DSH to build something…</span>
          <span className="preview-send" aria-hidden="true">↑</span>
        </div>
      </div>

      <div className="preview-active">{skin.preview.label}</div>
    </div>
  );
}
