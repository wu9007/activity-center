const app = getApp();
Page({
  data: {
    userInfo: null
  },

  onLoad: function(options) {
    var that = this;
    that.setData({
      userInfo: app.globalData.userInfo
    });
  }
})