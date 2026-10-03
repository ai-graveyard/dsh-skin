# Skins

这里的每个一级文件夹都是完整、独立的 DeepSeek Harness bundle。皮肤必须把 manifest、Cordis patch、构建脚本、浏览器 bundle、CSS、token、图标、中英文元数据、预览和说明放在自己的目录中，避免新增皮肤时产生隐式耦合。

根目录的构建、检查和打包命令会自动扫描这里的一级目录。每款皮肤必须拥有唯一的 `slug`、npm package name 和 `order`，并保持 `skin.json` 与 `package.json` 版本一致。

`skin.css` 定义作用域内结构，`tokens.json` 定义同时应用于明暗模式的固定配色，`build.mjs` 将两者与生命周期代码生成到 `client.js`。`locale/en.json`、`locale/zh.json` 和 `icon.svg` 提供桌面插件信息；`skin.json` 提供站点目录信息。

当前系列包含 10 款 0.3.1 皮肤。安装入口见[项目说明](../README.md)，新增或修改皮肤见[贡献指南](../CONTRIBUTING.md)，桌面验收范围见[验收记录](../DESKTOP-QA.md)。离线 `preview.html` 只用于设计预览。
