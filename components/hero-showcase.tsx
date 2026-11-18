"use client";
import { useSitePreferences } from "@/components/site-preferences";
import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import type { Skin } from "@/lib/skins";
import { SkinPreview } from "@/components/skin-preview";
import { SkinIcon } from "@/components/skin-icon";
export function HeroShowcase({ skins }: { skins: Skin[] }) {
  const { t, skinName } = useSitePreferences();
  const [selected, setSelected] = useState(skins[0]);
  const frameRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  function resetTilt() {
    if (animationRef.current !== null)
      cancelAnimationFrame(animationRef.current);
    animationRef.current = null;
    const frame = frameRef.current;
    if (!frame) return;
    delete frame.dataset.tilting;
    frame.style.removeProperty("--tilt-x");
    frame.style.removeProperty("--tilt-y");
    frame.style.removeProperty("--tilt-depth");
  }

  function tiltCard(event: PointerEvent<HTMLDivElement>) {
    if (
      event.pointerType !== "mouse" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    // Measure the stationary wrapper so tilting never shifts the pointer origin.
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = Math.max(
      -1,
      Math.min(1, ((event.clientX - bounds.left) / bounds.width) * 2 - 1),
    );
    const y = Math.max(
      -1,
      Math.min(1, ((event.clientY - bounds.top) / bounds.height) * 2 - 1),
    );
    if (animationRef.current !== null)
      cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(() => {
      const frame = frameRef.current;
      if (frame) {
        frame.dataset.tilting = "true";
        // The edge nearest the pointer recedes into the screen.
        frame.style.setProperty("--tilt-x", `${-y * 6}deg`);
        frame.style.setProperty("--tilt-y", `${x * 7}deg`);
        frame.style.setProperty("--tilt-depth", "-8px");
      }
      animationRef.current = null;
    });
  }

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.addEventListener("change", resetTilt);
    window.addEventListener("blur", resetTilt);
    return () => {
      if (animationRef.current !== null)
        cancelAnimationFrame(animationRef.current);
      reducedMotion.removeEventListener("change", resetTilt);
      window.removeEventListener("blur", resetTilt);
    };
  }, []);

  if (!selected) return null;
  return (
    <div className="hero-showcase">
      <div
        className="showcase-stage"
        onPointerMove={tiltCard}
        onPointerLeave={resetTilt}
        onPointerCancel={resetTilt}
      >
        <div className="showcase-frame glass" ref={frameRef}>
          <div className="window-chrome">
            <span className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>
              DeepSeek Harness <span className="chrome-desktop">/ Desktop</span>
            </span>
            <span className="preview-badge">{t("外观预览")}</span>
          </div>
          <SkinPreview skin={selected} />
          <div className="showcase-caption">
            <span>
              <span className="live-dot" />
              {t("正在预览")}
              <strong>{skinName(selected)}</strong>
            </span>
            <Link href={`/skins/${selected.slug}`}>
              {t("查看并安装")}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="theme-dock" role="group" aria-label={t("切换皮肤预览")}>
        {skins.map((skin) => (
          <button
            type="button"
            key={skin.slug}
            title={skinName(skin)}
            aria-label={`${t("预览")}${skinName(skin)}`}
            aria-pressed={selected.slug === skin.slug}
            onClick={() => setSelected(skin)}
          >
            <SkinIcon skin={skin} className="theme-icon" />
            <span>{skinName(skin)}</span>
          </button>
        ))}
      </div>
      <p className="showcase-note">{t("配色示意，实际效果以客户端为准")}</p>
    </div>
  );
}
