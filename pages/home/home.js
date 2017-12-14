// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    
  },
  real_time_data: function () {
    wx.navigateTo({
      url: '/pages/real_time_data/real_time_data',
      //接口调用成功的回调方法
       fuccess: function () { },
       //接口调用失败的回调方法
       fail:function () { },
      //接口调用无论成功或者失败的回调方法
       complete:function () { }
    })
  },
  real_time_monitoring:function(){
    wx.navigateTo({
      url: '/pages/real_time_monitoring/real_time_monitoring',
      //接口调用成功的回调方法
      fuccess: function () { },
      //接口调用失败的回调方法
      fail: function () { },
      //接口调用无论成功或者失败的回调方法
      complete: function () { }
    })
  },
  early_warning:function(){
    wx.navigateTo({
      url: '/pages/early_warning/early_warning',
      //接口调用成功的回调方法
      fuccess: function () { },
      //接口调用失败的回调方法
      fail: function () { },
      //接口调用无论成功或者失败的回调方法
      complete: function () { }
    })
  },

  task:function(){
    wx.navigateTo({
      url: '/pages/task/task',
      //接口调用成功的回调方法
      fuccess: function () { },
      //接口调用失败的回调方法
      fail: function () { },
      //接口调用无论成功或者失败的回调方法
      complete: function () { }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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