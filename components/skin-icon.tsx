import type { Skin } from "@/lib/skins";
import { defaultPreviewPalette } from "@/lib/skin-display";

/** Small, deliberately simple emblems that stay legible in the theme picker. */
export function SkinIcon({ skin, className = "" }: { skin: Skin; className?: string }) {
  const { colors } = defaultPreviewPalette(skin);
  const accent = colors[2];
  const motifs: Record<string, React.ReactNode> = {
    "alpine-light": (
      <>
        <path d="m14 44 16-25 20 25H14Z" />
        <path d="m24 29 6 5 5-4" />
        <circle cx="45" cy="20" r="4" fill={accent} stroke="none" />
      </>
    ),
    "braun-control": (
      <>
        <path d="M18 17h16M18 22h11" opacity=".4" />
        <circle cx="32" cy="38" r="12" />
        <path d="m32 38 6-6" stroke={accent} strokeWidth="3" />
        <circle cx="46" cy="18" r="3" fill={accent} stroke="none" />
      </>
    ),
    "night-signal": (
      <>
        <path d="m18 24 9 8-9 8" stroke={accent} strokeWidth="3" />
        <path d="M34 41h12" strokeWidth="3" />
      </>
    ),
    "frosted-tide": (
      <>
        <rect x="17" y="15" width="24" height="29" rx="5" opacity=".35" />
        <rect x="25" y="23" width="23" height="27" rx="5" fill={colors[0]} />
        <path d="M29 39c5-7 10 5 15-2" stroke={accent} strokeWidth="2.5" />
      </>
    ),
    "material-orchid": (
      <>
        <path d="M32 33C17 34 16 20 23 18c6-2 9 7 9 15Zm0 0c-1-15 13-17 15-10 2 6-7 10-15 10Zm0 0c15-1 17 13 10 15-6 2-10-7-10-15Zm0 0c1 15-13 17-15 10-2-6 7-10 15-10Z" fill={accent} fillOpacity=".12" stroke={accent} />
        <circle cx="32" cy="33" r="3" fill={accent} stroke="none" />
      </>
    ),
    "swiss-grid": (
      <>
        <path d="M17 17h30v30H17zM29 17v30M29 32h18" />
        <path d="M32 20h12v9H32z" fill={accent} stroke="none" />
      </>
    ),
    "nordic-linen": (
      <>
        <path d="M21 43C15 25 28 17 45 19c2 17-6 29-24 24Z" fill={accent} fillOpacity=".1" stroke={accent} />
        <path d="m18 48 20-22M26 39l-1-9M26 39l10-1" stroke={accent} />
      </>
    ),
    "washi-ink": (
      <>
        <path d="M41 21c-12-9-27 1-24 15 3 13 21 16 29 4" strokeWidth="3" />
        <path d="M22 25c-5 8-2 16 4 19" opacity=".3" />
        <path d="M39 17h9v9h-9z" fill={accent} stroke="none" />
      </>
    ),
    "editorial-paper": (
      <>
        <path d="M18 18h28M18 46h28" opacity=".35" />
        <path d="M24 25h16M32 25v15M28 40h8" />
        <path d="M18 51h12" stroke={accent} />
      </>
    ),
    "whale-courier": (
      <>
        <rect x="15" y="23" width="34" height="23" rx="4" fill="#FFFDF8" />
        <path d="m16 26 16 12 16-12" />
        <path d="M32 23c-6-6-10-3-13-9 5-1 10 0 13 4 3-4 8-5 13-4-3 6-7 3-13 9Z" fill={accent} />
        <circle cx="32" cy="38" r="3" fill="#B9796F" stroke="none" />
      </>
    ),
    "liquid-glass": (
      <>
        <rect x="14" y="16" width="28" height="28" rx="10" opacity=".4" />
        <rect x="22" y="22" width="28" height="26" rx="10" fill={accent} fillOpacity=".2" stroke={accent} />
        <path d="M27 29h12" stroke="#FFFFFF" strokeWidth="2.5" />
      </>
    ),
    "sunset-boulevard": (
      <>
        <circle cx="32" cy="30" r="11" fill={accent} fillOpacity=".22" stroke={accent} />
        <path d="M16 36h32M20 41h24" stroke={accent} />
        <path d="M24 46c2-9 5-15 8-19m0 0c-5-2-9-1-12 2m12-2c5-2 9-1 12 2" />
      </>
    ),
    "night-circuit": (
      <>
        <rect x="16" y="16" width="32" height="32" rx="6" opacity=".35" />
        <path d="m22 26 7 6-7 6" stroke={accent} strokeWidth="2.6" />
        <path d="M33 38h9" stroke={accent} strokeWidth="2.6" />
        <circle cx="43" cy="22" r="2.5" fill="#FF2A85" stroke="none" />
      </>
    ),
    "taiji-ink": (
      <>
        <circle cx="32" cy="32" r="14" />
        <path d="M32 18a7 7 0 0 1 0 14 7 7 0 0 0 0 14" />
        <circle cx="32" cy="25" r="2" fill={colors[1]} stroke="none" />
        <circle cx="32" cy="39" r="2" fill={accent} stroke="none" />
      </>
    ),
    "starlight-conductor": (
      <>
        <circle cx="32" cy="32" r="13" opacity=".35" />
        <path d="M32 16l3.2 12.8L48 32l-12.8 3.2L32 48l-3.2-12.8L16 32l12.8-3.2Z" fill={accent} fillOpacity=".25" stroke={accent} />
      </>
    ),
    "midnight-roaster": (
      <>
        <path d="M18 28h22v12a9 9 0 0 1-9 9h-4a9 9 0 0 1-9-9V28Z" fill={accent} fillOpacity=".16" />
        <path d="M40 31h4a4 4 0 0 1 0 8h-4" />
        <path d="M25 22c0-3 3-3 3-6m6 6c0-3 3-3 3-6" stroke={accent} />
      </>
    ),
    "tabby-desk": (
      <>
        <path d="M19 25v14a13 10 0 0 0 26 0V25l-6 5a16 16 0 0 0-14 0l-6-5Z" fill={accent} fillOpacity=".16" />
        <circle cx="27" cy="35" r="1.8" fill={colors[1]} stroke="none" />
        <circle cx="37" cy="35" r="1.8" fill={colors[1]} stroke="none" />
        <path d="M30 39c1 1.3 3 1.3 4 0" stroke={accent} />
      </>
    ),
    "capy-onsen": (
      <>
        <path d="M16 36h32v5a7 7 0 0 1-7 7H23a7 7 0 0 1-7-7v-5Z" fill={accent} fillOpacity=".18" />
        <circle cx="32" cy="28" r="7" />
        <circle cx="32" cy="19" r="3" fill="#E5A524" stroke="none" />
      </>
    ),
    "dunhuang-melody": (
      <>
        <circle cx="32" cy="26" r="9" stroke={accent} opacity=".45" />
        <path d="M22 42c6-12 14-12 20 0" stroke={accent} />
        <path d="M32 18c4 6 4 12 0 18-4-6-4-12 0-18Z" fill={accent} fillOpacity=".22" />
      </>
    ),
    "jiangnan-rain": (
      <>
        <path d="M16 33a16 14 0 0 1 32 0H16Z" fill={accent} fillOpacity=".18" stroke={accent} />
        <path d="M32 19v24a3 3 0 0 0 6 0" />
        <path d="M21 40l-2 4m25-4-2 4" opacity=".45" />
      </>
    ),
  };

  return (
    <svg
      className={`skin-icon ${className}`}
      viewBox="0 0 64 64"
      width="48"
      height="48"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="1" y="1" width="62" height="62" rx="15" fill={colors[0]} />
      <rect x="1" y="1" width="62" height="62" rx="15" stroke={colors[1]} strokeOpacity=".12" />
      <g stroke={colors[1]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {motifs[skin.slug] ?? <path d="M19 22h26M19 32h18M19 42h22" />}
      </g>
    </svg>
  );
}
