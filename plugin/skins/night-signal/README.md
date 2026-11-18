# Night Signal · 夜航信号

A professional dark workspace with graphite layers and crisp mint controls.

DSH Skin 官方推荐系列 / terminal。这里的“官方”指 DSH Skin 项目，与 DeepSeek 及参考设计品牌无隶属或授权关系。

安装 [DSH Skin](../../../README.md#安装)，在「插件 → DSH Skin」中选择这款主题。

## 设计与维护

- 设计模式：terminal；底色 #0C0F14，文字 #E8EDF2，标志色 #5EE1B3。
- 可操作控件使用 #5EE1B3 / #0C0F14 配对；文字、边框、禁用态分别处理。
- `skin.css` 为作用域内的结构样式；`tokens.json` 为完整明暗模式 token 覆盖。
- 修改后在仓库根目录运行 `pnpm run build:plugin`，并提交生成的 `plugin/client.js`。
- `preview.html` 为离线设计样张，不作为客户端实测证据。

验证记录见仓库 [DESKTOP-QA.md](../../../DESKTOP-QA.md)；贡献和发布步骤见 [CONTRIBUTING.md](../../../CONTRIBUTING.md) 与 [RELEASING.md](../../../RELEASING.md)。仅声明实际通过的客户端版本与状态。
