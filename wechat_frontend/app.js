import * as config from '/config/config.js'
import YeApis from '/apis/YeApis.js'

//app.js
App({
  YeApis: new YeApis(config.BASE_URL),
  onLaunch: function () {
  },
  globalData: {
    config:config
  },
})