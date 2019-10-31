// pages/activity_form/activity_form.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        typeArray: ['中国', '俄罗斯'],
        typeObjectArray: [{
                typeId: '001',
                name: '中国'
            },
            {
                typeId: '002',
                name: '俄罗斯'
            }
        ],
        typeIndex: 0,
    },

    selectType: function(e) {
        var that = this;
        this.setData({
            typeIndex: e.detail.value,
            activityTypeId: that.data.typeObjectArray[e.detail.value].typeId
        })
        console.log(this.data.activityTypeId);
    },

    selectTime: function(e) {
        this.setData({
            activityTime: e.detail
        })
        console.log(this.data.activityTime);
    }
})