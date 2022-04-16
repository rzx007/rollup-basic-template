import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const devConfig = [
  serve({
    contentBase: '',  //服务器启动的文件夹，默认是项目根目录，需要在该文件下创建index.html
    port: 8020   //端口号，默认10001
  }),
  livereload('dist')   //watch dist目录，当目录中的文件发生变化时，刷新页面  
]

export { devConfig }