const app = getApp();
Page({

  data: {
    banners: ['../images/activity_selected.png', '../images/activity_selected.png', '../images/activity_selected.png'],
    swiperMaxNumber: 3,
    swiperCurrent: 0,
    authorized: false
  },

  onLoad: function(options) {
    var that = this;
    if (!that.data.authorized) {
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            that.setData({
              authorized: true
            });
          }
        }
      });
    }
  },

  goToIndex: function() {
    var that = this;
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        that.loginBackend();
        if (this.userInfoReadyCallback) {
          this.userInfoReadyCallback(res)
        }
      }
    });
  },

  onGotUserInfo: function(e) {
    var that = this;
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo;
      that.loginBackend();
    }
  },

  loginBackend: function() {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.reLaunch({
          url: '/pages/index/index',
        });
      }
    });
  },

  swiperchange: function(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  }
})