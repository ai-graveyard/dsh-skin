# Braun Control

DeepSeek Harness Web UI 的非官方 Braun 风格皮肤。它使用 Harness 的主题 token 覆盖层和带作用域的结构 CSS，不修改 Harness 源码或应用文件。

This package is an unofficial Braun-inspired skin for the DeepSeek Harness Web UI. It uses the Harness theme token layer and scoped structural CSS without modifying Harness source or application files.

本项目与 DeepSeek、Braun 或 Dieter Rams 没有隶属或授权关系。包内不包含 Braun 的商标、产品图或专有素材。

## 设计边界

- 使用 8px 基础网格和暖灰背景：`#F7F7F7`、`#EFEFEF`、`#ECECEC`。
- 正文使用系统无衬线字体，技术标签和代码使用系统等宽字体，按钮使用系统无衬线字体。
- 常规控件使用低圆角；发送键保留圆形功能拨盘。
- `#E8500A` 只用于发送、焦点和功能状态标记。
- 错误、成功和警告保留 Harness 的语义色。
- 不加载远程脚本、字体、图片或遥测。

## 桌面客户端安装

适用于官方 DeepSeek Harness Desktop。先启动一次客户端完成初始化，再从应用菜单完全退出。使用客户端菜单「管理 dsh 命令…」安装命令后，在仓库根目录执行：

```bash
npm pack ./skins/braun-control
dsh plugin --profile desktop add ./dsh-skin-braun-control-0.2.0.tgz
```

macOS 未注册命令时，也可使用客户端内置路径：

```bash
"/Applications/DeepSeek Harness.app/Contents/Resources/runtime/cli/bin/dsh" plugin --profile desktop add ./dsh-skin-braun-control-0.2.0.tgz
```

重新打开客户端，在「插件 → 已安装」中切换皮肤开关。推荐同时只启用一款；全部停用即可恢复原生外观。皮肤使用固定配色，DSH 的浅色／深色选项不会改变皮肤自身配色。客户端插件必须使用 `desktop` profile 和客户端自带的命令，不能使用 npm 安装的 `npx @deepseek-ai/dsh` 修改桌面 profile。

## Web 安装

需要 Node.js `^22.19.0 || >=24.0.0`。在仓库根目录运行：

```bash
npx @deepseek-ai/dsh plugin --profile web add ./skins/braun-control
npx @deepseek-ai/dsh --profile web --dump-config
npx @deepseek-ai/dsh web
```

本地目录安装使用符号链接。移动或删除仓库会使链接失效。需要固定安装时，先在仓库根目录生成 tarball：

```bash
npm pack ./skins/braun-control
npx @deepseek-ai/dsh plugin --profile web add ./dsh-skin-braun-control-0.2.0.tgz
```

`--dump-config` 输出中应出现 `dsh-skin-braun-control`。页面会显示黑色新会话按钮和焦橙发送键。

## 卸载

桌面端：完全退出客户端后，使用客户端自带命令执行：

```bash
dsh plugin --profile desktop remove dsh-skin-braun-control
```

Web 端：

```bash
npx @deepseek-ai/dsh plugin --profile web remove dsh-skin-braun-control
```

卸载会撤销 token 覆盖、结构样式和 `data-dsh-skin` 标记。它不会删除 Harness 安装文件、会话、模型配置或凭证。

## 预览

用浏览器打开 [`preview.html`](./preview.html)。预览不连接模型，也不读取工作区。

## 开发

修改 `skin.css` 或 `build.mjs` 后重新生成预构建浏览器 bundle：

```bash
node build.mjs
node build.mjs --check
```

仓库提交 `client.js`，用户从本地路径、tarball 或 npm 安装时不需要执行构建脚本。包的 `prepack` 检查会阻止发布过期的 `client.js`。

## Compatibility

Version `0.1.1` has been tested locally with `@deepseek-ai/dsh 0.1.0-rc.6`. Harness is a Developer Preview. Later releases may require selector or plugin lifecycle updates.

## License

MIT. DeepSeek, Harness, Braun, Dieter Rams, and related marks belong to their respective owners.

## 0.2.0 更新

- 适配桌面富文本输入框和插件启停；优化字体、焦点、菜单、设置页与禁用按钮。
- 移除输入框上方的 ACTIVE 浮动标签和发送按钮位移动画。
- 代码高亮跟随皮肤配色，避免系统深浅模式造成低对比度。
- 限定 CSS 变量作用域，支持多皮肤按不同顺序停用后正确恢复。

## 桌面验证

`0.2.0` 已在 macOS 官方客户端 `0.2.0-rc.2` 检查启动、空会话、现有会话、富文本输入、发送按钮启用／禁用、代码高亮、通用设置与插件启停。未发送模型请求。旧版 Web 截图仅为历史展示；本轮未重新验证 Web 和 390px 窄屏。
