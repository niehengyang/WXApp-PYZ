// pages/alarm_rules/alarm_rules.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //模拟从服务器获取数据
    array: [{ alarm_style: "高温警报", alarm_time: "2017-07-10  12：30", alarm_rule: "温度大于20℃", inform_way: "APP通知" }, 
    { alarm_style: "高温警报", alarm_time: "2017-07-10  12：30", alarm_rule: "温度大于20℃", inform_way: "APP通知" }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  add_alarm_rules:function(){
    wx.navigateTo({
      url: '/pages/set_alarm_rules/set_alarm_rules',
    })
  },
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
  
  }
})