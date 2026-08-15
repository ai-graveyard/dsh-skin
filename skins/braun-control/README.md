# Braun Control

DeepSeek Harness Web UI 的非官方 Braun 风格皮肤。它使用 Harness 的主题 token 覆盖层和带作用域的结构 CSS，不修改 Harness 源码或应用文件。

This package is an unofficial Braun-inspired skin for the DeepSeek Harness Web UI. It uses the Harness theme token layer and scoped structural CSS without modifying Harness source or application files.

本项目与 DeepSeek、Braun 或 Dieter Rams 没有隶属或授权关系。包内不包含 Braun 的商标、产品图或专有素材。

## 设计边界

- 使用 8px 基础网格和暖灰背景：`#F7F7F7`、`#EFEFEF`、`#ECECEC`。
- 正文使用系统无衬线字体，技术标签、按钮和代码使用系统等宽字体。
- 常规控件使用低圆角；发送键保留圆形功能拨盘。
- `#E8500A` 只用于发送、焦点和功能状态标记。
- 错误、成功和警告保留 Harness 的语义色。
- 不加载远程脚本、字体、图片或遥测。

## 安装

需要 Node.js `^22.19.0 || >=24.0.0`。在仓库根目录运行：

```bash
npx @deepseek-ai/dsh plugin --profile web add ./skins/braun-control
npx @deepseek-ai/dsh --profile web --dump-config
npx @deepseek-ai/dsh web
```

本地目录安装使用符号链接。移动或删除仓库会使链接失效。需要固定安装时，先在仓库根目录生成 tarball：

```bash
npm pack ./skins/braun-control
npx @deepseek-ai/dsh plugin --profile web add ./dsh-skin-braun-control-0.1.1.tgz
```

`--dump-config` 输出中应出现 `dsh-skin-braun-control`。页面会显示 `BRAUN CONTROL / ACTIVE` 标签、黑色新会话按钮和焦橙发送键。

## 卸载

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
