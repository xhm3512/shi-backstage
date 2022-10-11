const { url, api } = {
  url: 'http://authorapi.test.qijizuopin.com',
  api: '/authorapi'
};
const projectName = 'qiji-studio'; //项目名称
module.exports = {
  title: 'card配置平台',
  projectName,
  distDir: 'dist', //项目打包后文件
  isDark: false, // 开启暗黑模式
  isCompact: false, // 开启紧凑模式
  theme: {
    // 'primary-color': '#F95A58',
    // 'link-color': '#1DA57A',
    // 'border-radius-base': '2px',
  },
  publicPath: '',
  port: 9094,
  // 'postcssPxtorem': { //移动端rem设置
  //   rootValue: 75,                   //750的设计稿
  //   propList: ['*']
  // },
  proxy: {
    '/authorapi': {
      target: url,
      changeOrigin: true,
      bypass: function (req, res, proxyOptions) {
        req.headers['origin'] = url;
        req.headers['host'] = url;
        req.headers['referer'] = url;
      },
    },
    '/upload': {
      target: url,
      changeOrigin: true,
      bypass: function (req, res, proxyOptions) {
        req.headers['origin'] = url;
        req.headers['host'] = url;
        req.headers['referer'] = url;
      },
    },
    '/app_v3': {
      target: url,
      changeOrigin: true,
      bypass: function (req, res, proxyOptions) {
        req.headers['origin'] = url;
        req.headers['host'] = url;
        req.headers['referer'] = url;
      },
    },
  },

};
