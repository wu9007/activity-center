var util = require('../../utils/util.js');
const app = getApp()
Page({
    data: {
        detail: null,
        praised: false,
        joined: false
    },

    onLoad: function(options) {
        const detail = util.getDetailByUuid(options.uuid),
            userUuid = app.globalData.userInfo.uuid;
        this.setData({
            detail: detail,
            praised: detail.approvers.indexOf(userUuid) > -1,
            joined: detail.participants.indexOf(userUuid) > -1
        });
    },

    onThumUp: function(e) {
        var that = this,
            praised = !that.data.praised;
        util.thumUp(that.data.detail.uuid, app.globalData.userInfo.uuid, praised);
        this.setData({ praised: praised });
    },

    onJoin: function() {
        var that = this,
            joined = !that.data.joined;
        util.join(that.data.detail.uuid, app.globalData.userInfo.uuid, joined);
        this.setData({ joined: joined });
    },

    onUnload: function() {
        var pages = getCurrentPages()
        var prevPage = pages[pages.length - 2]
        prevPage.setData({ activityRecords: prevPage.data.activityRecords });
    },

    onShareAppMessage: function(res) {
        var that = this;
        if (res.from === 'button') {

        }
        return {
            title: '转发',
            path: '/pages/detail/detail?uuid=' + that.data.detail.uuid,
            success: function(res) {
                console.log('成功', res)
            }
        }
    }
});