const app = getApp();
Page({
    data: {
        userInfo: null
    },

    onLoad: function (options) {
        var that = this;
        that.setData({
            userInfo: app.globalData.userInfo
        });
    },

    scanToRegister: function (e) {
        var that = this,
            document = document,
            weChat = wx;
        wx.getLocation({
            type: 'gcj02',
            success(res) {
                weChat.scanCode({
                    success(res) {
                        console.log(res)
                        that.getLocalData();
                    }
                })
            },
            fail() {
                weChat.showActionSheet({
                    itemList: ['去授权'],
                    success: function (res) {
                        that.openSetting();
                    }
                })
            }
        });
    },

    openSetting: function () {
        wx.openSetting()
    },

    createActivity: function () {
        wx.navigateTo({
            url: '/pages/activity_form/activity_form'
        })
    }
})