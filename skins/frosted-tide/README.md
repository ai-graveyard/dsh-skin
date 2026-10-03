# Frosted Tide · 雾潮

Frosted navy panels, a quiet indigo glow and a clear teal focal point.

DSH Skin 官方推荐系列 / glassmorphism。这里的“官方”指 DSH Skin 项目，与 DeepSeek 及参考设计品牌无隶属或授权关系。

## 桌面客户端安装

首次打开客户端后完全退出。在仓库根目录运行：

```sh
npm pack ./skins/frosted-tide
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop add ./dsh-skin-frosted-tide-0.3.1.tgz
```

重新打开 DeepSeek Harness，在「插件 → 已安装」中启用本皮肤，停用其他皮肤。Windows/Linux 使用客户端提供的 `dsh` 命令替换上述 macOS 路径。

配色固定，不随系统明暗主题改变。所有字体来自系统，不加载远程字体或素材。卸载或停用后清理 token、样式及皮肤标记，不修改会话数据。

```sh
dsh plugin --profile desktop remove dsh-skin-frosted-tide
```

## 设计与维护

- 设计模式：glassmorphism；底色 #0D0F26，文字 #F4F5FF，标志色 #4ECDC4。
- 可操作控件使用 #4ECDC4 / #0D0F26 配对；文字、边框、禁用态分别处理。
- `skin.css` 为作用域内的结构样式；`tokens.json` 为完整明暗模式 token 覆盖。
- 修改后在本皮肤目录运行 `node build.mjs`，或在仓库根目录运行 `pnpm run build:skins`，提交生成的 `client.js`。
- `preview.html` 为离线设计样张，不作为客户端实测证据。

验证记录见仓库 [DESKTOP-QA.md](../../DESKTOP-QA.md)；贡献和发布步骤见 [CONTRIBUTING.md](../../CONTRIBUTING.md) 与 [RELEASING.md](../../RELEASING.md)。仅声明实际通过的客户端版本与状态。
