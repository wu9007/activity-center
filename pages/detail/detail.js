var util = require('../../utils/util.js');
Page({
    data: {},

    onLoad: function(options) {
        // 赋值
        this.setData({
            detail: util.getDetailByUuid(options.uuid)
        })
        console.log(this.data.detail.title);
        console.log(this.data.detail.images);
    }
});