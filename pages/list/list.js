Page({

  /**
   * 页面的初始数据
   */
  data: {
    Title:"",
    movieData:{},
    result:[],
    loading:true,
    load:"Loading"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //onLoad默认有一个Object类型的参数options,options指其他页面打开当前页面所调用的 query 参数
  onLoad: function (options) {
    // options为上一个页面
    var that = this;
    wx.request({
      url:"https://api.douban.com/v2/movie/"+options.type,
      data:{},
      header:{"Content-Type":"json"},
      success:function(res){
        if(res.data.title == "豆瓣电影北美票房榜"){
          var re=[];
          for(var i=0;i<res.data.subjects.length;i++){
            re.push(res.data.subjects[i].subject);
          }
          that.setData({movieData:res.data,Title:res.data.title,result:re,loading:false})
        }else{
          that.setData({movieData:res.data,Title:res.data.title,result:res.data.subjects,loading:false})
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({ title:  ' 石榴  >> 电影' })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})