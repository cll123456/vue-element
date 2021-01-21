const path = require('path');
module.exports = {
	  publicPath: process.env.NODE_ENV === "production" ? "/vue-element/" : "/",
   // 相对于打包路径index.html的路径
  indexPath: 'index.html',
  // 'dist', 生产环境构建文件的目录
  outputDir: 'docs',
  // 相对于outputDir的静态资源(js、css、img、fonts)目录
  assetsDir: 'static',
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias.set('@', path.resolve('src'))
      .set('@element', path.resolve('src/components/element'))
      .set('@fonts', path.resolve('src/assets/css/theme-chalk/fonts/webfonts'));
  },

}
