import type { Skin } from "@/lib/skins";

type SkinPreviewProps = {
  skin: Skin;
  compact?: boolean;
};

export function SkinPreview({ skin, compact = false }: SkinPreviewProps) {
  return (
    <div
      className={`skin-preview${compact ? " skin-preview-compact" : ""}`}
      style={{
        "--preview-bg": skin.colors[0],
        "--preview-ink": skin.colors[1],
        "--preview-accent": skin.colors[2],
      } as React.CSSProperties}
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
            <span>01</span>
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
          <button aria-label="Send example message">↑</button>
        </div>
      </div>

      <div className="preview-active">BRAUN CONTROL / ACTIVE</div>
    </div>
  );
}
