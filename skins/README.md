# Skins

这里的每个一级文件夹都是完整、独立的 DeepSeek Harness bundle。皮肤必须把 manifest、Cordis patch、浏览器 bundle、CSS、预览和说明放在自己的目录中，避免新增皮肤时产生隐式耦合。

根目录的构建、检查和打包命令会自动扫描这里的一级目录。每款皮肤必须拥有唯一的 `slug`、npm package name 和 `order`，并保持 `skin.json` 与 `package.json` 版本一致。
