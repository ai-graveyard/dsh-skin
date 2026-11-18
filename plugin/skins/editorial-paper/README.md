# Editorial Paper · 纸上编辑

A reading-first surface with serif headings, paper tones and newspaper-red details.

DSH Skin 官方推荐系列 / editorial。这里的“官方”指 DSH Skin 项目，与 DeepSeek 及参考设计品牌无隶属或授权关系。

安装 [DSH Skin](../../../README.md#安装)，在「插件 → DSH Skin」中选择这款主题。

## 设计与维护

- 设计模式：editorial；底色 #FAF7F0，文字 #141414，标志色 #C8102E。
- 可操作控件使用 #C8102E / #FFFFFF 配对；文字、边框、禁用态分别处理。
- `skin.css` 为作用域内的结构样式；`tokens.json` 为完整明暗模式 token 覆盖。
- 修改后在仓库根目录运行 `pnpm run build:plugin`，并提交生成的 `plugin/client.js`。
- `preview.html` 为离线设计样张，不作为客户端实测证据。

验证记录见仓库 [DESKTOP-QA.md](../../../DESKTOP-QA.md)；贡献和发布步骤见 [CONTRIBUTING.md](../../../CONTRIBUTING.md) 与 [RELEASING.md](../../../RELEASING.md)。仅声明实际通过的客户端版本与状态。
