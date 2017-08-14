Page({
    data: {
        title: '关于我',
        userInfo: {
            nickName: '琪琪酱',
            gender:"2",
            avatarUrl: '../../images/wechat.jpg'
        }
    },
    getUserInfo :function() {
        const that = this;
        wx.getUserInfo({
            success :function(res) {
                console.log(res);
                that.setData({ userInfo: res.userInfo })
            }
        })
    },
    onLoad: function() {
        wx.login({
            success: function(res) {
                if (res.code) {
                    console.log('登录成功！' + res.code)
                } else {
                    console.log('获取用户登录态失败！' + res.errMsg)
                }
            }
        });
    }
});

