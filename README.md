## rollup
> rollup（下一代ES模块捆绑器）是什么请查看官网介绍[rollupjs.org/guide/en/](rollupjs.org/guide/en/)

### rollup通用工程模板, 集成比较常见基础的工具,基于此模板快速拓展

- babel编译, 兼容处理  `rollup-plugin-babel ` `@babel/core` `@babel/preset-env`
- typescript, 生成声明文件 `rollup-plugin-typescript2`
- 支持CommonJS模块 `rollup-plugin-commonjs`
- 代码压缩 `rollup-plugin-terser`
- 热更新 `rollup-plugin-serve` `rollup-plugin-livereload`

### 快速启动

```bash
# 安装依赖
npm install

# 开发
npm run dev

# 打包
npm run build

# 打包 typescript 声明文件
npm run build:types
```

### 其他常用的插件
[@rollup/plugin-image](https://github.com/rollup/plugins/tree/master/packages/image)
> 可导入JPG，PNG，GIF，SVG和WebP文件。

[@rollup/plugin-json](https://github.com/rollup/plugins/tree/master/packages/json)

>可将.json文件转换为ES6模块。

[rollup-plugin-copy](https://github.com/vladshcherbin/rollup-plugin-copy)
>复制文件和文件夹，并具有glob支持。

[rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer)
>可视化并分析您的Rollup捆绑包，以查看哪些模块占用了空间