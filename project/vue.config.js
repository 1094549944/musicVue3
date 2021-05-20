module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {

    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        //target: 'http://192.168.95.131:60000',
        pathRewrite: {
          '^/api': ''
        }
      },
    },
    //before: require('./mock/mock-server.js')
  },
}