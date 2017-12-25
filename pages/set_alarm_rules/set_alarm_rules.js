// pages/set_alarm_rules/set_alarm_rules.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    alarm_style: ['温度', '湿度', '风压', 'PM2.5'],
    alarm_condition:['大于','小于','区间'],
    alarm_style_index: 0,
    alarm_condition_index:0,
    index:[1,2],
    alarm_name:'xerseef33455',
  },

  bind_alarm_style:function(e){
   // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      alarm_style_index:e.detail.value
    })
  },
  bind_alarm_condition: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      alarm_condition_index: e.detail.value
    })
  },
  additem:function(e){
    this.data.index = [this.data.index.length + 1].concat(this.data.index)
    this.setData({
      index: this.data.index
    })
  },
  del_item:function(e){
    this.data.index = (this.data.index).splice((this.data.index)[this.data.index.length-1])
    this.setData({
      index: this.data.index
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
  
  }
})