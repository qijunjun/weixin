//用于定义整个应用的逻辑
//app.js
//首先app函数是个全局函数
//app函数的作用就是用来创建一个应用程序实例
//每个应用程序都会有他的生命周期
App({
  //当应用程序启动时执行的事件
  onLaunch: function() {
    console.log('hello world');
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
//获取用户信息，这个方法与当前应用程序无关，可以用来定义一些公共方法(用于用于程序内共享)
  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null
  }
})
