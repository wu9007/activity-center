var util = require('../../utils/util.js');
Page({
  data: {
    activityRecords: [],
    page: 1,
    loading: false,
    noMore: false,
    loadingFailed: false,
    goTopHidden: true
  },

  onLoad: function (options) {
    this.refresh();
  },

  onPullDownRefresh: function () {
    this.refresh();
  },

  onReachBottom: function () {
    this.loadMore();
  },

  onPageScroll: function (e) {
    if (e.scrollTop > 200) {
      this.setData({
        goTopHidden: false
      });
    } else {
      this.setData({
        goTopHidden: true
      });
    }
  },

  goTop: function (e) {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    });
  },

  refresh: function () {
    var that = this;
    if (!that.data.loading) {
      wx.showNavigationBarLoading();
      that.setData({
        loading: true
      });
      setTimeout(function () {
        that.setData({
          activityRecords: util.getNews(),
          page: 1,
          loading: false
        });
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
      }, 100);
    }

    // wx.request({
    //   url: 'https://www.wetest.com/home/list_record?page=1',
    //   method: "GET",
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (response) {
    //     that.setData({
    //       activityRecords: response.data.object,
    //       page: 1
    //     });
    //     console.log(that.data.activityRecords);
    //   }
    // });
  },

  loadMore: function () {
    var that = this,
      news = [];
    if (!that.data.loading) {
      wx.showLoading({
        title: '玩命加载中',
      });
      setTimeout(function () {
        news = util.getNews();
        if (news.length === 0) {
          that.setData({
            noMore: true,
            loading: false
          });
        } else {
          that.setData({
            activityRecords: that.data.activityRecords.concat(news),
            page: that.data.page + 1,
            loading: false
          });
        }
        wx.hideLoading();
      }, 300);
    }

    //   wx.request({
    //     url: 'https://www.wetest.com/home/list_record?page=' + this.data.page + 1,
    //     method: "GET",
    //     header: {
    //       'content-type': 'application/json'
    //     },
    //     success: function(response) {
    //       const oldData = that.data.activityRecords;
    //       that.setData({
    //         activityRecords: oldData.concat(response.data.object),
    //         page: that.data.page + 1
    //       })
    //       console.log(that.data.activityRecords);
    //     }
    //   });
  },

  bindDetail: function (e) {
    wx.navigateTo({
      url: '/pages/detail/detail?uuid=' + e.currentTarget.dataset.uuid
    })
  }
})