# DSH Skin

[English](./README.en.md) | 简体中文

DeepSeek Harness Desktop 的独立皮肤集合，也是 [dshskin.com](https://dshskin.com) 的 Next.js 静态站点源码。每款皮肤都是可单独安装、卸载和打包的 Harness bundle，不修改 Harness 源码或应用文件。

> 这是非官方社区项目，与 DeepSeek、Braun 或 Dieter Rams 没有隶属或授权关系。项目只借鉴工业设计语言，不包含 Braun 的商标、产品图或专有素材。

## 官方推荐系列

面向 **DeepSeek Harness 桌面客户端** 的 10 款独立皮肤。“官方推荐”指 DSH Skin 项目的推荐系列，不代表 DeepSeek 官方授权。

| 皮肤 | 中文名 | 设计模式 | 版本 |
| --- | --- | --- | --- |
| [Braun Control](./skins/braun-control) | 工业控制 | braun | `0.3.1` |
| [Night Signal](./skins/night-signal) | 夜航信号 | terminal | `0.3.1` |
| [Alpine Light](./skins/alpine-light) | 雪岭 | apple | `0.3.1` |
| [Material Orchid](./skins/material-orchid) | 兰序 | material | `0.3.1` |
| [Swiss Grid](./skins/swiss-grid) | 瑞士网格 | swiss | `0.3.1` |
| [Nordic Linen](./skins/nordic-linen) | 北欧亚麻 | scandinavian | `0.3.1` |
| [Washi Ink](./skins/washi-ink) | 和纸墨 | japanese | `0.3.1` |
| [Editorial Paper](./skins/editorial-paper) | 纸上编辑 | editorial | `0.3.1` |
| [Studio Block](./skins/studio-block) | 积木工作室 | neo-brutalism | `0.3.1` |
| [Frosted Tide](./skins/frosted-tide) | 雾潮 | glassmorphism | `0.3.1` |

10 款均已在 macOS 桌面客户端 0.2.0-rc.2 完成逐款验收。客户端版本与具体检查范围见 [DESKTOP-QA.md](./DESKTOP-QA.md)。每款采用固定明暗配色，保留独立 token、结构样式、卸载清理和减少动态效果支持。

## 桌面客户端安装

官方客户端使用独立的 `desktop` profile。下载或克隆本仓库后，在仓库根目录操作。首次打开客户端后完全退出，使用客户端菜单「管理 dsh 命令…」提供的命令安装：

```bash
npm pack ./skins/night-signal
dsh plugin --profile desktop add ./dsh-skin-night-signal-0.3.1.tgz
```

macOS 也可直接使用 `"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh"` 替换 `dsh`。重新打开客户端，在「插件 → 已安装」中启停皮肤；建议同时只启用一款。更换为浅色皮肤时，将命令中的 `night-signal` 换为 `braun-control`。

皮肤保持自己的固定配色。停用全部皮肤后恢复 DSH 原生外观。安装、验证和卸载均使用桌面客户端自带的 `dsh`。完整步骤见各皮肤 README。

## 卸载

桌面客户端使用其自带的 CLI：

```bash
dsh plugin --profile desktop remove dsh-skin-night-signal
```

卸载会撤销主题 token、结构样式和 `data-dsh-skin` 标记。它不会删除 DSH 会话、模型配置或凭证。

## 开发与检查

需要 Node.js `^22.19.0 || >=24.0.0` 和 pnpm。首次开发先安装依赖：

```bash
pnpm install
```

启动站点开发服务器：

```bash
pnpm dev
```

修改 `skin.css`（结构样式）、`tokens.json`（固定配色）或 `build.mjs`（生命周期）后，重新生成浏览器 bundle 并构建静态站点：

```bash
pnpm run build
pnpm run check
```

`check` 覆盖生成文件一致性、元数据、作用域样式、插件及叠加层生命周期、160 组文字对比度、30 组焦点对比度和 TypeScript。它不包含真实桌面客户端验收。安装全部皮肤后，可单独运行 `node scripts/check-installed.mjs <桌面-profile-目录>`，核对安装文件与源码是否逐字节一致。

`pnpm run pack:skins` 预检所有 npm 包清单；`pnpm run release:assets` 将版本化 tarball、`SHA256SUMS` 和 `release-manifest.json` 写入 `dist/releases/`。打包会保留旧版本 tarball，校验和与 manifest 仅列出本次生成的版本。正式发布步骤见 [RELEASING.md](./RELEASING.md)。

静态文件输出到 `out/`，可直接部署到任意静态托管平台。`client.js` 是提交到仓库的生成文件。贡献者需要同时提交源文件和重新生成后的 bundle。CI 会在 Node.js 22.19 与 24 上检查站点构建、生成结果、插件生命周期和发布包清单。

根目录命令会自动扫描 `skins/*/skin.json`，构建、检查和打包预检每个皮肤，不需要为新皮肤修改脚本。CI 还会生成版本化 tarball、`SHA256SUMS` 和 release manifest，并把它们保存为 `skin-release-assets` artifact。`main` 分支的 CI 全部通过后，会通过 SSH 触发容器化部署；独立的每小时监控会检查首页、详情页和 sitemap。服务器只需要预先克隆本仓库并安装 Docker Engine 与 Docker Compose；Node.js、pnpm、静态构建和 Nginx 都封装在镜像内。

| 配置 | 级别 | 用途 |
| --- | --- | --- |
| `EC2_HOST` / `EC2_PORT` / `EC2_USER` | 组织级 Secrets | 与 WeMatch 共用的 SSH 连接信息；组织设置中需允许本仓库使用 |
| `EC2_SSH_KEY` / `EC2_KNOWN_HOSTS` | 组织级 Secrets | 与 WeMatch 共用的 SSH 私钥与服务器 host key |
| `DEPLOY_PATH` | 仓库级 Secret | 服务器上的本项目 checkout 目录 |
| `SITE_ORIGIN` | 可选仓库 Variable | smoke check 地址，默认 `https://dshskin.com` |

服务器端实际执行 `make deploy`：以 fast-forward 方式拉取 `origin/main`，构建两阶段 Docker 镜像，使用 Compose 重建容器并等待健康检查通过。生产容器默认映射宿主机 `8092` 到容器 Nginx 的 `80`；如需临时覆盖，可在服务器执行 `APP_PORT=<端口> make deploy`。镜像清理使用本项目专属 label，不会全局清理共享服务器上的其他项目镜像。

## 仓库结构

```text
app/                    Next.js 页面和全局样式
components/             站点 UI 组件与皮肤预览
lib/skins.ts            构建时读取皮肤元数据
skins/
  braun-control/        完整的浅色皮肤 bundle
  night-signal/         深色皮肤 bundle
  .../                  其余 8 款官方推荐皮肤
scripts/
  run-skins.mjs         通用构建、检查与打包运行器
  validate.mjs          manifest、CSS、token 和卸载生命周期检查
  check-skin-layers.mjs  叠加皮肤与重复激活检查
  check-contrast.mjs     文字和焦点配色对比度检查
  check-installed.mjs    已安装桌面包与本地源码比对
  package-release.mjs    版本化 tarball、校验和与 manifest
deploy/
  nginx.conf       容器内静态路由、缓存与 404 配置
Dockerfile         Node 构建 + Nginx 运行的两阶段镜像
docker-compose.yml 生产容器与默认 8092 端口映射
Makefile           本地容器操作与服务器部署入口
.github/           CI、Issue 与 Pull Request 模板
```

新增皮肤时，每个目录都要保留独立的 `skin.json`、manifest、Cordis patch、构建脚本、浏览器 bundle、CSS、`tokens.json`、`icon.svg`、中英文 `locale/`、预览、说明和许可证。首页和详情页会在静态构建时扫描 `skins/*/skin.json`。不要复用 package id、skin id 或 style id。

## 参与项目

提交修改前请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)。安全问题请按 [SECURITY.md](./SECURITY.md) 私下报告。版本变化记录在 [CHANGELOG.md](./CHANGELOG.md)。

## 许可证

代码采用 [MIT License](./LICENSE)。DeepSeek、Harness、Braun 与 Dieter Rams 等名称和标识的权利归各自权利人所有。
