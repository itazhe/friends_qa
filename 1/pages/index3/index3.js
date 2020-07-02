// pages/index3/index3.js

Page({
  onLoad: function() {
    var _this = this;
    wx.request({
      url: 'http://127.0.0.1:8000/azhe/index3/',
      header: {
        'content-type': 'application.json'
      },
      success(res) {
        console.log('连接成功！')
        var datalist = res.data;
        _this.setData({
          datalist: datalist
        })
      }
    })
  },
  getdata: function(e) {
    var data = e.currentTarget.dataset.name;
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1];   //当前页面
    var prevPage = pages[pages.length - 2];  //上一个页面
    // console.log(currPage)
    // console.log(prevPage)
    prevPage.setData({
      q_name: data
    }) 
    wx.navigateBack()
  }
  // getdata: function(e) {
  //   获取前端的值
  //   console.log(e.currentTarget.dataset.name)
  //   var data = e.currentTarget.dataset.name;
  //   wx.request({
  //     url: 'http://127.0.0.1:8000/azhe/index2/',
  //     data: {
  //       num: 1,
  //       data: data
  //     },
  //     header: {
  //       'content-type': 'application/json' 
  //     },
  //     success(res) {
  //       console.log("连接成功")
  //     }
  //   }),
  //   wx.navigateTo({
  //     url: '../index2/index2',
  //   })

  // }
})
