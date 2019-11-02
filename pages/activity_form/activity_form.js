Page({

    /**
     * 页面的初始数据
     */
    data: {
        typeArray: ['政府组织型', '个人组织型'],
        typeObjectArray: [{
            typeId: '001',
            name: '个人组织型'
        },
        {
            typeId: '002',
            name: '政府组织型'
        }
        ],
        typeIndex: 0,
        images: []
    },

    selectType: function (e) {
        var that = this;
        this.setData({
            typeIndex: e.detail.value,
            activityTypeId: that.data.typeObjectArray[e.detail.value].typeId
        })
        console.log(this.data.activityTypeId);
    },

    selectTime: function (e) {
        this.setData({
            activityTime: e.detail
        })
        console.log(this.data.activityTime);
    },

    chooseActivityLocation: function () {
        var that = this
        wx.chooseLocation({
            success: function (res) {
                // success
                if (res.name !== '') {
                    that.setData({
                        address: res.name,
                        latitude: res.latitude,
                        longitude: res.longitude
                    })
                }
            },
            fail: function () {
            },
            complete: function () {
            }
        })
    },

    chooseImage(e) {
        var that = this;
        wx.chooseImage({
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: res => {
                const images = this.data.images.concat(res.tempFilePaths)
                this.data.images = images.length <= 9 ? images : images.slice(0, 9)
                that.setData({ images: images })
            }
        })
    },

    removeImage(e) {
        var that = this;
        const idx = e.target.dataset.idx
        that.data.images.splice(idx, 1)
        that.setData({ images: that.data.images })
    },

    handleImagePreview(e) {
        const idx = e.target.dataset.idx
        const images = this.data.images
        wx.previewImage({
            current: images[idx],  //当前预览的图片
            urls: images,  //所有要预览的图片
        })
    },

    saveActivity: function (e) {
        console.log(e);
    }
})