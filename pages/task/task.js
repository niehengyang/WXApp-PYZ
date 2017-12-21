// pages/task/task.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    numberArray:[],
    task_name:'任务名称',
    add_time:'2017-07-10  12：30',
  },
  add_task_page: function (e) {
    wx.navigateTo({
      url: '/pages/addtask/addtask'
    })
    },
  task_details01: function () {
    wx.navigateTo({
      url: '/pages/task_details/task_details',
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
    console.log("接收到的是str=" + options);  //模拟从服务器获取数据   

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