Page({
    data: {
        imgUrls: [],
        indicatorDots: true,
        autoplay: true,
        interval: 5000,
        duration: 1000
    },
    //事件处理
    click: function() {
        // 页面跳转方式1
        wx.switchTab({ url: '../index/index' });
        //页面跳转方式2
        // wx.navigateTo({
        //     url: '../index/index'
        // })
    },
    onLoad:function(){
        var that =this;
        // 页面加载成功之后，请求数据
        wx.request({
            url:"https://api.douban.com/v2/movie/coming_soon",
            data:{},
            header:{"Content-Type":"json"},
            success:function(res){
                // 随机获取数组中的4个
                var result = getRandomArrayElements(res.data.subjects, 4);
                var resultImage=[];
                for(var i=0;i<result.length;i++){
                    resultImage.push(result[i].images.large);
                }
                // 随机获取数组中的count个
                function getRandomArrayElements(arr, count) {
                    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
                    while (i-- > min) {
                        index = Math.floor((i + 1) * Math.random());
                        temp = shuffled[index];
                        shuffled[index] = shuffled[i];
                        shuffled[i] = temp;
                    }
                    return shuffled.slice(min);
                }
                that.setData({imgUrls:resultImage});
            },
            fail:function(){

            }
        })
    }
});