// pages/index6/index6.js
Page({
  data: {
    url: 'https://pics.images.ac.cn/image/5efc52c8c6757.html'
  },
  // 设置图片固定宽高
  onShow: function() {
    var that = this;
    var query = wx.createSelectorQuery();
    query.select('#image').boundingClientRect(function(res) {
      that.setData({
        height: res.width * 0.7 + 'px'
      })
    }).exec()
  },
  // 转发
  onShareAppMessage: function(res) {
    return {
      title: '相识满天下，知心能几人',
      path: 'pages/index6/index6',
      imageUrl: 'https://pics.images.ac.cn/image/5efc52c8c6757.html'
    }
  }
})