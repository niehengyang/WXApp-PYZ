//login.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    userN: '',
    passW: '',
    id_token: '',
    focus: false,
    responseData: '',
    username_img_path: '/images/login/mobile-nor.svg',
    password_img_path: '/images/login/lock-nor.svg',
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

  password_focus_off: function () {
    this.setData({
      password_img_path: '/images/login/lock-nor.svg'

    })
  },
  //以下是进入试用
  home_page: function () {
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var token = wx.getStorageSync('token')
    var name = wx.getStorageSync('name')
    var pwd = wx.getStorageSync('pwd')
    if (token == '') {
      wx.navigateTo({
        url: '/pages/home/home'
      })
    }
    if (name != '') {
      if (pwd != '') {
        wx.showModal({
          title: '用户名+密码',
          content: 'name=' + name + ' pwd=' + pwd + ''//session中用户名和密码不为空触发
        })
      }
    }
  },
  //用户名和密码输入框事件
  userNameInput: function (e) {
    this.setData({
      userN: e.detail.value
    })
  },
  passWordInput: function (e) {
    this.setData({
      passW: e.detail.value
    })
  },
  //登录按钮点击事件，调用参数要用：this.data.参数；
  //设置参数值，要使用this.setData({}）方法
  loginBtnClick: function (a) {
    var that = this
    if (this.data.userN.length == 0 || this.data.passW.length == 0) {
      wx.showModal({
        title: '温馨提示：',
        content:'用户名或密码不能为空！',
        showCancel:false
      })
    } else {
      wx.request({
        url: '开发者服务器接口地址',
        data: {                                        //将登录信息发送到服务器
          username: this.data.userN,
          password: this.data.passW,
          unique_id: '123456'          
        },
        header: {
          'content-type': 'application/json'
        },
        success : function(res) {
          // console.log(res.data)
          if (res.data.status == -1) {
            userName: '缺少参数'
          } else {
            //保存用户session
            // wx.setStorageSync('token', res.data.result.token)
            // wx.setStorageSync('user_id', res.data.result.user_id)
            // wx.setStorageSync('name', that.data.userN)
            // wx.setStorageSync('pwd', that.data.passW)
            //将登录信息加入缓存
            wx.setStorage({
              key: 'name',
              data: res.data.result.mobile,
            })
            wx.setStorage({
              key: 'token',
              data: res.data.result.token,
            })
            wx.setStorage({
              key: 'pwd',
              data: that.data.passW,
            })
          }
        }
      })
    }
  },
  /**  console.log('onLoad')
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
    });**/

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
