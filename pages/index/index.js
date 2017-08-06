//index.js
//获取应用实例
var app = getApp()
//page用来创建页面对象
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    //加载数据并呈现在页面上
    //this.data.message = xxx 不可以,因为小程序平台捕获不到,可以使用下面这张方式
    //this.setData({
    //  message:Data.now()
    //})
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    //获取一个API中的数据，不要使用Ajax API因为AJAX的API是BOM
    //使用微信官方API
    wx.request({
      url:'https"//api.douban.com/v2/move/in_theaters',
      data:{},
      header:{
        'Content-Type':'application/json'
      },
      success:function(res){
        that.setData({
          list:res.data.subjects
        })
      }
    })
  }
})
