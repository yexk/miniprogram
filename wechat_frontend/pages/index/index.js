//index.js
//获取应用实例
const app = getApp()
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
const { $Message } = require('../../components/iview/base/index');

Page({
  data: {
    spinStatus: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      '/assets/imgs/home.png',
      '/assets/imgs/cate.png',
      '/assets/imgs/user.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    tabs: ["选项一", "选项二", "选项三"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // setTimeout(()=>{
    //   this.setData({
    //     spinStatus: false
    //   })
    //   $Message({
    //     content: '什么鬼？？？'
    //   });
    // },3000)

    // app.YeApis.getInit().then(res => {
    //   console.log('res:',res)
    // },err => {
    //   console.log('error',err)
    // });

    // app.YeApis.GET('/api/index/index').then(res=>{
    //   console.log('res1:', res)
    // })

    var that = this;
    // wx.getSystemInfo({
    //   success: function (res) {
    //     console.log('systeminfo:', res)
    //   }
    // })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady:function(){
    console.log('onready')
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onGotUserInfo: (data) => {
    console.log(data);
  },
  addParamsAA: function(){
    this.setData({
      aa: 'aa'
    })
  },
})
