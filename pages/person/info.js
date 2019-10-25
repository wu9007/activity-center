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
    },

    scanToRegister: function(e) {
        var that = this;
        wx.scanCode({
            success(res) {
                console.log(res)
                that.getLocalData();
            }
        })
    },

    getLocalData: function(e) {
        var document = document;
        var that = this;
        var w = wx;
        wx.getLocation({
            type: 'gcj02',
            success(res) {
                console.log(res);
            },
            fail() {
                w.showActionSheet({
                    itemList: ['去授权'],
                    success: function(res) {
                        that.openSetting();
                    }
                })
            }
        });
    },

    openSetting: function() {
        wx.openSetting()
    }
})