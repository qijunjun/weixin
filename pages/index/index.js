//index.js
Page({
  data: {
    imageUrls: [],
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    var Urls =[];
    //加载图片数据
    wx.request({
      url:"https://api.douban.com/v2/movie/in_theaters",
      data:{},
      header:{"Content-Type":"json"},
      success:function(res){
        for(var i=0;i<4;i++){
          Urls.push(res.data.subjects[i].images.large)
        }
        that.setData({imageUrls:Urls});
      }
    })
  },
  tiaoUrl:function(event){
    var type = event.currentTarget.dataset.type;
    // wx.navigateTo(OBJECT)
    // 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
    // wx.switchTab(OBJECT)
    // 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
    // Tip: wx.navigateTo 和 wx.redirectTo 不允许跳转到 tabbar 页面，只能用 wx.switchTab 跳转到 tabbar 页面
    wx.navigateTo({
      url: '../list/list?type='+type
    });
  }
});
