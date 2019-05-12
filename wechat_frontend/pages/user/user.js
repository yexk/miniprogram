const app = getApp()
// pages/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    userInfo: null,
    visible: false,
    desc: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'userInfo',
      success: res => {
        this.setData({
          userInfo: res.data
        })
      }
    })

    this.setData({
      name: app.globalData.config.APP_NAME
    })

    console.log('options:', options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('分享')
  },

  getUserInfo:function(user_info){
    console.log('user_info:', user_info.detail.userInfo)
    
    wx.setStorage({
      key: 'userInfo',
      data: user_info.detail.userInfo
    })

    this.setData({
      userInfo: user_info.detail.userInfo
    })
  },

  clickDesc(){
    this.setData({
      visible: true
    })
  },

  handleClose(e){
    if (e.type == 'ok') {
      app.YeApis.POST('/api/user/info', { 'name': this.desc}).then(res => {
        console.log('提交成功！')
        this.setData({
          visible: false
        })  
      })
    } else {
      this.setData({
        visible: false
      })
    }
  }
  
})