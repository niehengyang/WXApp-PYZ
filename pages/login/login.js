//login.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '',
    userInfo: {},
    userName: '',
    userPassword: '',
    id_token: '',
    focus : false,
    responseData: '',
    username_img_path: '/images/login/mobile-nor.svg',
    password_img_path:'/images/login/lock-nor.svg',
    boo: false
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },
  userPasswordInput: function (e) {
    this.setData({
      userPassword: e.detail.value
    })
    console.log(e.detail.value)
  },
 //以下是帐号输入框聚焦触发
  username_focus_on: function () {
    this.setData({
      username_img_path: '/images/login/mobile-sel.svg'

    })
  },
  username_focus_off: function () {
    this.setData({
      username_img_path: '/images/login/mobile-nor.svg'

    })
  },
  //以下是密码输入框聚焦触发
  password_focus_on: function () {
    this.setData({
      password_img_path: '/images/login/lock-sel.svg'

    })
  },
  password_focus_off : function() {
    this.setData({
      password_img_path: '/images/login/lock-nor.svg'

    })
  },
  //以下是点击登录触发
  logIn_free: function () {
    wx.navigateTo({
      url: '/pages/home/home',
      //接口调用成功的回调方法
      fuccess: function () { },
      //接口调用失败的回调方法
      fail: function () { },
      //接口调用无论成功或者失败的回调方法
      complete: function () { }
    })
  },
 /** logIn: function () {
    var that = this
    wx.request({
      //url: 'http://localhost:8000/index/ajax_dict',
      data: {
      username: this.data.userName,
      password: this.data.userPassword,
      },
      method: 'GET',
      success: function (res) {
        that.setData({
          responseData: res.data.result[0].body
        });
        wx.setStorage({
          key: "responseData",
          data: that.data.responseData
        });
        try {
          wx.setStorageSync('id_token', res.data.id_token)
        } catch (e) {
          console.log('there is no id_token')
        }

        wx.navigateTo({
          url: '/pages/home/home'
        })
        console.log(res.data);
      },
      fail: function (res) {
        console.log(res.data);
        console.log('is failed')
      }
    })
  },**/
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onShow: function () {
    console.log('index is show')
  },
  shuaxin: function () {
    wx.redirectTo({
      url: '/pages/login/login'
    })
  },
  onReady: function () {
    console.log('indx is on ready')
  },
  onHide: function () {
    console.log('index is on hide')
  },
  onUnload: function () {
    console.log('indx is on unload')
  },
  boo: function () {
    this.setData({
      boo: !this.data.boo
    });
  },
  
onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
