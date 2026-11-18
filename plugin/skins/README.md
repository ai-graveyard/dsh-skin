# 主题源文件

这里的所有主题由 `dsh-skin` 一个插件加载。每个目录保存对应的 `skin.json`、`skin.css`、`tokens.json`、配色预览、图标和双语说明。

`skin.json` 提供主题顺序和站点元数据。选择主题时，插件加载对应的作用域 CSS，并将 `tokens.json` 的固定配色应用到 Harness 的浅色和深色模式。

新增或修改主题后，在仓库根目录运行 `pnpm run build:plugin` 生成 `plugin/client.js`，再运行 `pnpm run check`。安装步骤和贡献指南见[项目说明](../../README.md)和[贡献指南](../../CONTRIBUTING.md)。
