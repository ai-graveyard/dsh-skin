# Night Signal

Night Signal 是为 DeepSeek Harness Web UI 设计的非官方深色皮肤。它使用接近黑色的分层背景、较紧凑的控件和单一薄荷绿信号色，适合长时间夜间工作。

This package is an unofficial high-contrast dark skin for the DeepSeek Harness Web UI. It uses Harness theme token overrides and scoped structural CSS without modifying Harness source files.

## 设计边界

- 深色层级使用 `#0C0F14`、`#10151C` 和 `#141922`。
- `#5EE1B3` 只用于主要操作、焦点和活动状态。
- 缩短列表项和主要控件高度，提高会话密度。
- 错误、警告和成功状态继续使用 Harness 的语义色。
- 不加载远程脚本、字体、图片或遥测。

## 安装

需要 Node.js `^22.19.0 || >=24.0.0`。在仓库根目录运行：

```bash
npx @deepseek-ai/dsh plugin --profile web add ./skins/night-signal
npx @deepseek-ai/dsh --profile web --dump-config
npx @deepseek-ai/dsh web
```

页面会显示 `NIGHT SIGNAL / ACTIVE` 标签、薄荷绿新会话边框和主要操作按钮。

## 卸载

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
