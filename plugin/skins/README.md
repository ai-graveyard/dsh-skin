# 主题源文件

这里的所有主题由 `dsh-skin` 一个插件加载。每个目录保存对应的 `skin.json`、`skin.css`、`tokens.json`、配色预览、图标和双语说明。

`skin.json` 提供主题顺序和明暗预览元数据。`tokens.json` 与 `tokens.dark.json` 分别提供浅色和深色配色，`skin.css` 随 Harness 的实际明暗状态切换。单独打开的 `preview.html` 展示原始设计所用的明暗配色。

新增或修改主题后，在仓库根目录运行 `pnpm run build:plugin` 生成 `plugin/client.js`，再运行 `pnpm run check`。安装步骤和贡献指南见[项目说明](../../README.md)和[贡献指南](../../CONTRIBUTING.md)。
