const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages:{
    index:{
      //修改项目入口文件
      entry:'examples/main.js',
      template:'public/index.html',
      filename:'index.html'
    }
  },
  chainWebpack:(config)=>{
    config.module
      .rule("js")
      .include.add("/packages")
      .end()
      .use("babel")
      .loader("babel-loader");
  },
})
