"use client";
import { useSitePreferences } from "@/components/site-preferences";
import { useState } from "react";
import type { Skin } from "@/lib/skins";
import { CopyCommand } from "@/components/copy-command";
import { repositoryUrl } from "@/lib/site";
import plugin from "@/plugin/package.json";

const archive = `${plugin.name}-${plugin.version}.tgz`;
const downloadUrl = `${repositoryUrl}/releases/download/v${plugin.version}/${archive}`;
const themePickerScreenshot = "/install/theme-picker-macos.png";

export function InstallGuide({ skin }: { skin?: Skin }) {
  const { t, skinName } = useSitePreferences();
  const [platform, setPlatform] = useState("mac");
  const cli =
    platform === "mac"
      ? '"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh"'
      : "dsh";
  return (
    <div className="install-guide glass">
      <div className="install-options">
        <p className="install-selected">
          <strong>DSH Skin</strong> · v{plugin.version}
        </p>
        <div
          className="segmented platform-switch"
          role="group"
          aria-label={t("安装系统")}
        >
          {[
            { id: "mac", label: "macOS" },
            { id: "other", label: "Windows / Linux" },
          ].map((p) => (
            <button
              key={p.id}
              type="button"
              aria-pressed={platform === p.id}
              onClick={() => setPlatform(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>
      <div className="install-prerequisites">
        <span className="info-symbol" aria-hidden="true">
          i
        </span>
        <p>
          <strong>{t("开始前")}</strong>
          {t(
            "首次打开 DeepSeek Harness 桌面客户端后，请完全退出。",
          )}
          {platform === "mac"
            ? t(
                "以下命令使用默认 /Applications 安装路径；自定义路径请相应替换。",
              )
            : t(
                "先在客户端菜单「管理 dsh 命令…」中配置 dsh 命令。Windows 请使用 PowerShell。",
              )}
        </p>
      </div>
      <ol className="install-steps">
        <li>
          <div className="step-copy">
            <h3>{t("下载 DSH Skin")}</h3>
            <p>{t("一个安装包包含全部主题。")}</p>
          </div>
          <div>
            <a className="button button-primary" href={downloadUrl}>
              {t("下载安装包")} · v{plugin.version}
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </li>
        <li>
          <div className="step-copy">
            <h3>{t("安装 DSH Skin")}</h3>
            <p>{t("在安装包所在的目录打开终端，运行以下命令。")}</p>
          </div>
          <div>
            <CopyCommand
              command={`${cli} plugin --profile desktop add ./${archive}`}
            />
          </div>
        </li>
        <li>
          <div className="step-copy">
            <h3>{t("在客户端选择主题")}</h3>
            <p>{t("重新打开 DeepSeek Harness，在插件列表中启用并打开 DSH Skin。")}</p>
            <p>
              {skin
                ? t("点击「{theme}」的预览卡片。").replace("{theme}", skinName(skin))
                : t("点击主题预览卡片，切换立即生效。")}
            </p>
          </div>
          <div className="enable-path">
            <span>{t("插件")}</span>
            <span aria-hidden="true">→</span>
            <span>DSH Skin</span>
            <span aria-hidden="true">→</span>
            <span className="enabled-pill">{t("主题")}</span>
          </div>
          <figure className="install-preview">
            <img
              src={themePickerScreenshot}
              alt={t("DSH Skin 主题卡片，原生外观已勾选。")}
              width={899}
              height={294}
              loading="lazy"
            />
            <figcaption>
              {t("macOS 客户端实拍。带勾的是当前主题。")}
              <a href={themePickerScreenshot} target="_blank" rel="noreferrer">
                {t("查看大图")}
              </a>
            </figcaption>
          </figure>
        </li>
      </ol>
      <details className="install-troubleshooting">
        <summary>
          {t("安装检查、卸载与常见问题")}
          <span aria-hidden="true">＋</span>
        </summary>
        <div>
          <p>
            {t(
              "用过旧版单主题插件时，请先在插件列表中停用旧插件。完全退出客户端后，可用以下命令查看安装列表。",
            )}
          </p>
          <CopyCommand command={`${cli} plugin --profile desktop list --depth 0`} />
          <p>
            {t(
              "选「原生外观」即可恢复默认样式。要卸载 DSH Skin，可运行：",
            )}
          </p>
          <CopyCommand
            command={`${cli} plugin --profile desktop remove ${plugin.name}`}
          />
          <p>
            {t(
              "提示 dsh 命令不存在？请在客户端菜单「管理 dsh 命令…」中配置命令，或在 macOS 使用上方默认安装路径。",
            )}
          </p>
        </div>
      </details>
    </div>
  );
}
