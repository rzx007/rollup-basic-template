import rollupTypescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'
import alias from '@rollup/plugin-alias'
import copy from 'rollup-plugin-copy'
import babel from 'rollup-plugin-babel'
import { DEFAULT_EXTENSIONS } from '@babel/core'

import { devConfig } from './build/roolup.config.dev'
import { proConfig } from './build/roolup.config.pro'

const env = process.env.NODE_ENV // umd 模式的编译结果文件输出的全局变量名称 
console.log(env);
import path from 'path'
const resolveDir = dir => path.join(__dirname, dir)

let config = {
  input: "./src/main.js",
  output: [
    {
      file: './dist/index.umd.js',
      format: 'umd',
      name: 'zth-canvas'
      //当入口文件有export时，'umd'格式必须指定name
      //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
    },
    {
      file: './dist/index.esm.js',
      format: 'es'
    },
    {
      file: './dist/index.cjs.js',
      format: 'cjs'
    }
  ],
  plugins: [
    commonjs(),
    rollupTypescript(),
    copy({
      targets: [{ src: 'types/', dest: 'dist/' }] // 将声明文件复制到dist中
    }),
    alias({
      entries: [
        { find: '@', replacement: resolveDir('src') }
      ]
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: [ // 添加.ts 文件拓展
        ...DEFAULT_EXTENSIONS,
        '.ts'
      ]
    }),
  ]
}
config.plugins = [...config.plugins, ...(env === 'development' ? devConfig : proConfig)]
export default config

