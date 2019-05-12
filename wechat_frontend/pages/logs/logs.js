//logs.js
import YeUtils from '../../utils/YeUtils.js'

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return YeUtils.formatTime(new Date(log))
      })
    })
  }
})
