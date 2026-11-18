# DSH Skin

[English](./README.en.md) | 简体中文

DeepSeek Harness Desktop 的主题插件。一包内置 10 套主题，安装一次就能在客户端里随时切换。[dshskin.com](https://dshskin.com) 展示每套主题的预览。

> 这是非官方社区项目，与 DeepSeek、Braun 或 Dieter Rams 没有隶属或授权关系。项目只借鉴工业设计语言，不包含 Braun 的商标、产品图或专有素材。

## 官方推荐系列

面向 **DeepSeek Harness 桌面客户端** 的 10 款内置主题。“官方推荐”指 DSH Skin 项目的推荐系列，不代表 DeepSeek 官方授权。

| 皮肤 | 中文名 | 设计模式 |
| --- | --- | --- |
| [Braun Control](./plugin/skins/braun-control) | 工业控制 | braun |
| [Night Signal](./plugin/skins/night-signal) | 夜航信号 | terminal |
| [Alpine Light](./plugin/skins/alpine-light) | 雪岭 | apple |
| [Material Orchid](./plugin/skins/material-orchid) | 兰序 | material |
| [Swiss Grid](./plugin/skins/swiss-grid) | 瑞士网格 | swiss |
| [Nordic Linen](./plugin/skins/nordic-linen) | 北欧亚麻 | scandinavian |
| [Washi Ink](./plugin/skins/washi-ink) | 和纸墨 | japanese |
| [Editorial Paper](./plugin/skins/editorial-paper) | 纸上编辑 | editorial |
| [Studio Block](./plugin/skins/studio-block) | 积木工作室 | neo-brutalism |
| [Frosted Tide](./plugin/skins/frosted-tide) | 雾潮 | glassmorphism |

每套主题使用固定明暗配色。合包版和历史单主题的验证范围见 [DESKTOP-QA.md](./DESKTOP-QA.md)。

## 安装

首次打开 DeepSeek Harness 后完全退出。在客户端菜单「管理 dsh 命令…」中配置 `dsh` 命令。下载 [DSH Skin 0.4.5 安装包](https://github.com/ai-graveyard/dsh-skin/releases/download/v0.4.5/dsh-skin-0.4.5.tgz)，在安装包所在目录运行：

```sh
dsh plugin --profile desktop add ./dsh-skin-0.4.5.tgz
```

macOS 也可直接使用 `"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh"` 替换 `dsh`。重新打开客户端，在「插件」中启用并打开 **DSH Skin**。点击主题预览卡片即可切换外观，当前主题带有勾选标记。客户端重启后会读取这台设备上的上次选择。

使用过旧版单主题插件时，在「插件」里停用那些插件一次，再通过 DSH Skin 选择主题。选择「原生外观」即可恢复默认样式。

## 卸载

```sh
dsh plugin --profile desktop remove dsh-skin
```

## 开发与检查

使用 Node.js `^22.19.0 || >=24.0.0` 和 pnpm。在仓库根目录运行：

```sh
pnpm install
pnpm dev
```

修改主题或插件后，重新生成客户端代码，并检查网站和安装包。

```sh
pnpm run build
pnpm run check
pnpm run pack:plugin
pnpm run release:assets
```

`check` 覆盖生成文件一致性、元数据、作用域 CSS、主题切换和清理、配色对比度与 TypeScript。安装后可运行 `node scripts/check-installed.mjs <桌面-profile-目录>` 比对实际安装的运行代码。

`release:assets` 在 `dist/releases/` 生成一个 `dsh-skin-<version>.tgz`，附校验和和发布清单。清单只包含本次生成的安装包，目录中的历史 tarball 可供旧版安装继续使用。发布步骤见 [RELEASING.md](./RELEASING.md)。

静态文件输出到 `out/`，可直接部署到任意静态托管平台。`plugin/client.js` 是提交到仓库的生成文件。CI 会在 Node.js 22.19 与 24 上检查站点构建、生成结果、插件生命周期和发布包清单。

插件和网站构建时会扫描 `plugin/skins/*/skin.json`。CI 会把本次安装包和校验文件保存为 `dsh-skin-release-assets` artifact。`main` 分支的 CI 全部通过后，会通过 SSH 触发容器化部署；独立的每小时监控会检查首页、详情页和 sitemap。服务器只需要预先克隆本仓库并安装 Docker Engine 与 Docker Compose；Node.js、pnpm、静态构建和 Nginx 都封装在镜像内。

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
plugin/
  package.json          dsh-skin 插件和版本
  client-source.js      主题选择与应用
  client.js             生成的客户端 bundle
  skins/                10 套主题及预览
scripts/                元数据、配色、安装和打包校验
deploy/
  nginx.conf       容器内静态路由、缓存与 404 配置
Dockerfile         Node 构建 + Nginx 运行的两阶段镜像
docker-compose.yml 生产容器与默认 8092 端口映射
Makefile           本地容器操作与服务器部署入口
.github/           CI、Issue 与 Pull Request 模板
```

## 参与项目

提交修改前请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)。安全问题请按 [SECURITY.md](./SECURITY.md) 私下报告。版本变化记录在 [CHANGELOG.md](./CHANGELOG.md)。

## 许可证

代码采用 [MIT License](./LICENSE)。DeepSeek、Harness、Braun 与 Dieter Rams 等名称和标识的权利归各自权利人所有。
