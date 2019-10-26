const app = getApp();
Page({

    data: {
        banners: ['../images/banners-1.jpg', '../images/banners-2.jpg', '../images/banners-3.jpg'],
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
                        // 开发使用，快速定位到正在开发的页面
                        this.goToIndex();
                    }
                }
            });
        }
    },

    goToIndex: function() {
        var that = this;
        wx.getUserInfo({
            lang: "zh_CN",
            success: res => {
                app.globalData.userInfo = res.userInfo;
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
        // TODO 将直接访问微信登录接口替换为在后台访问微信接口获取openId执行登录操作👳‍♂️
        wx.login({
            success: res => {
                app.globalData.userInfo.uuid = '0037';
                wx.reLaunch({
                    url: '/pages/index/index',
                });
            }
        });
    },

    swiperChange: function(e) {
        this.setData({
            swiperCurrent: e.detail.current
        })
    }
})