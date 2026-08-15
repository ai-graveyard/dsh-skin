# DSH Skin

[English](./README.en.md) | 简体中文

DeepSeek Harness Web UI 的独立皮肤集合，也是 [dshskin.com](https://dshskin.com) 的 Next.js 静态站点源码。每款皮肤都是可单独安装、卸载和打包的 Harness bundle，不修改 Harness 源码或应用文件。

> 这是非官方社区项目，与 DeepSeek、Braun 或 Dieter Rams 没有隶属或授权关系。项目只借鉴工业设计语言，不包含 Braun 的商标、产品图或专有素材。

## 当前皮肤

| 皮肤 | 风格 | 版本 | 状态 |
| --- | --- | --- | --- |
| [Braun Control](./skins/braun-control) | 暖灰网格、低圆角、单一焦橙功能色 | `0.1.1` | 可安装 |

Braun Control 已在本机的 `@deepseek-ai/dsh 0.1.0-rc.6` 上验证。DeepSeek Harness 仍处于 Developer Preview，后续版本可能调整插件接口或 CSS 模块结构。

## 安装

需要 Node.js `^22.19.0 || >=24.0.0`。下载或克隆仓库后，在仓库根目录运行：

```bash
npx @deepseek-ai/dsh plugin --profile web add ./skins/braun-control
npx @deepseek-ai/dsh --profile web --dump-config
npx @deepseek-ai/dsh web
```

第一条命令会把本地目录链接进 DSH profile。移动或删除仓库会使链接失效。需要固定安装时，先打包再安装 tarball：

```bash
npm pack ./skins/braun-control
npx @deepseek-ai/dsh plugin --profile web add ./dsh-skin-braun-control-0.1.1.tgz
```

页面加载后会出现 `BRAUN CONTROL / ACTIVE` 标签、黑色新会话按钮和焦橙发送键。若页面已打开，请刷新标签页。

如果本机已有全局 `dsh` 命令，可以把以上命令中的 `npx @deepseek-ai/dsh` 替换为 `dsh`。

## 卸载

```bash
npx @deepseek-ai/dsh plugin --profile web remove dsh-skin-braun-control
```

卸载会撤销主题 token、结构样式和 `data-dsh-skin` 标记。它不会删除 DSH 会话、模型配置或凭证。

## 开发与检查

首次开发先安装依赖：

```bash
pnpm install
```

启动站点开发服务器：

```bash
pnpm dev
```

修改 `skin.css` 或 `build.mjs` 后，重新生成浏览器 bundle 并构建静态站点：

```bash
pnpm run build
pnpm run check
```

静态文件输出到 `out/`，可直接部署到任意静态托管平台。`client.js` 是提交到仓库的生成文件。贡献者需要同时提交源文件和重新生成后的 bundle。CI 会在 Node.js 22.19 与 24 上检查站点构建、生成结果、插件生命周期和发布包清单。

## 仓库结构

```text
app/                    Next.js 页面和全局样式
components/             站点 UI 组件与皮肤预览
lib/skins.ts            构建时读取皮肤元数据
skins/
  braun-control/   完整的可发布皮肤 bundle
scripts/
  validate.mjs     manifest、CSS、token 和卸载生命周期检查
.github/           CI、Issue 与 Pull Request 模板
```

新增皮肤时，每个目录都要保留独立的 `skin.json`、manifest、Cordis patch、浏览器 bundle、CSS、预览、说明和许可证。首页和详情页会在静态构建时扫描 `skins/*/skin.json`。不要复用 package id、skin id 或 style id。

## 参与项目

提交修改前请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)。安全问题请按 [SECURITY.md](./SECURITY.md) 私下报告。版本变化记录在 [CHANGELOG.md](./CHANGELOG.md)。

## 许可证

代码采用 [MIT License](./LICENSE)。DeepSeek、Harness、Braun 与 Dieter Rams 等名称和标识的权利归各自权利人所有。
