# Night Signal

Night Signal 是为 DeepSeek Harness Web UI 设计的非官方深色皮肤。它使用接近黑色的分层背景、较紧凑的控件和单一薄荷绿信号色，适合长时间夜间工作。

This package is an unofficial high-contrast dark skin for the DeepSeek Harness Web UI. It uses Harness theme token overrides and scoped structural CSS without modifying Harness source files.

## 设计边界

- 深色层级使用 `#0C0F14`、`#10151C` 和 `#141922`。
- `#5EE1B3` 只用于主要操作、焦点和活动状态。
- 缩短列表项和主要控件高度，提高会话密度。
- 错误、警告和成功状态继续使用 Harness 的语义色。
- 不加载远程脚本、字体、图片或遥测。

## 桌面客户端安装

适用于官方 DeepSeek Harness Desktop。先启动一次客户端完成初始化，再从应用菜单完全退出。使用客户端菜单「管理 dsh 命令…」安装命令后，在仓库根目录执行：

```bash
npm pack ./skins/night-signal
dsh plugin --profile desktop add ./dsh-skin-night-signal-0.2.0.tgz
```

macOS 未注册命令时，也可使用客户端内置路径：

```bash
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop add ./dsh-skin-night-signal-0.2.0.tgz
```

重新打开客户端，在「插件 → 已安装」中切换皮肤开关。推荐同时只启用一款；全部停用即可恢复原生外观。皮肤使用固定配色，DSH 的浅色／深色选项不会改变皮肤自身配色。客户端插件必须使用 `desktop` profile 和客户端自带的命令，不能使用 npm 安装的 `npx @deepseek-ai/dsh` 修改桌面 profile。

## Web 安装

需要 Node.js `^22.19.0 || >=24.0.0`。在仓库根目录运行：

```bash
npx @deepseek-ai/dsh plugin --profile web add ./skins/night-signal
npx @deepseek-ai/dsh --profile web --dump-config
npx @deepseek-ai/dsh web
```

页面会显示薄荷绿新会话边框和主要操作按钮。

## 卸载

桌面端：完全退出客户端后，使用客户端自带命令执行：

```bash
dsh plugin --profile desktop remove dsh-skin-night-signal
```

Web 端：

```bash
npx @deepseek-ai/dsh plugin --profile web remove dsh-skin-night-signal
```

卸载会撤销 token 覆盖、结构样式和 `data-dsh-skin` 标记，不删除会话、配置或凭证。

## 开发

```bash
node build.mjs
node build.mjs --check
```

提交时必须包含生成后的 `client.js`。版本 `0.1.0` 已在隔离的 `@deepseek-ai/dsh 0.1.0-rc.6` profile 中验证空会话、工作区会话、设置、刷新和 390px 窄屏。验证没有写入 API Key，也没有发起模型请求。

## License

MIT.

## 0.2.0 更新

- 适配桌面富文本输入框和插件启停；优化字体、焦点、菜单、设置页与禁用按钮。
- 移除输入框上方的 ACTIVE 浮动标签和发送按钮位移动画。
- 代码高亮跟随皮肤配色，避免系统深浅模式造成低对比度。
- 限定 CSS 变量作用域，支持多皮肤按不同顺序停用后正确恢复。

## 桌面验证

`0.2.0` 已在 macOS 官方客户端 `0.2.0-rc.2` 检查启动、空会话、现有会话、富文本输入、发送按钮启用／禁用、代码高亮、通用设置与插件启停。未发送模型请求。旧版 Web 截图仅为历史展示；本轮未重新验证 Web 和 390px 窄屏。
