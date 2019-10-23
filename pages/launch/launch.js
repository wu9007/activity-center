const app = getApp();
Page({

  data: {
    showDialog: false,
    banners: ['', '', ''],
    swiperMaxNumber: 3,
    swiperCurrent: 0
  },

  onLoad: function(options) {

  },

  onGotUserInfo: function(e) {
    var that = this;
    that.setData({
      showDialog: false
    });
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo
      wx.reLaunch({
        url: '/pages/index/index',
      });
    }
  },

  swiperchange: function(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  goToIndex: function() {
    var that = this;
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              app.globalData.userInfo = res.userInfo
              console.log(res);

              // 登录
              wx.login({
                success: res => {
                  // 发送 res.code 到后台换取 openId, sessionKey, unionId
                  wx.reLaunch({
                    url: '/pages/index/index',
                  });
                }
              })

              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else {
          that.setData({
            showDialog: true
          });
        }
      }
    })
  },

  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });
  }
})