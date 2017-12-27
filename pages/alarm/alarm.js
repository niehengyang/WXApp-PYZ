// pages/alarm/alarm.js

Page({
  /**
   * 页面的初始数据
   */ 
  data: {
    tabs: ["已处理", "未处理"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 10,
    //模拟从服务器获取数据
    array: [{ time_value: "2017/12/27", task_name: "任务名称888888", alarm_size: "213", alarm_reason: "实时温度23℃，超出13℃-17℃", task_time:"2017-07-10 12：30"},
      { time_value: "2017/12/28", task_name: "任务名称888888", alarm_size: "213", alarm_reason: "实时温度23℃，超出13℃-17℃", task_time: "2017-07-10 12：30" }, 
      { time_value: "2017/12/29", task_name: "任务名称888888", alarm_size: "213", alarm_reason: "实时温度23℃，超出13℃-17℃", task_time: "2017-07-10 12：30" }],
    inputShowed: false,
    inputVal: ""
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  alarm_rule_page:function(){
wx.navigateTo({
  url: '/pages/alarm_rules/alarm_rules',
})
  },
  chack_alarm:function(){
wx.navigateTo({
  url: '/pages/check_alarm/check_alarm',
})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    //以下是导航切换
    /** 
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });**/
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
    
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //以下是获取系统时间
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    //console.log("当前时间戳为：" + timestamp);
    var n = timestamp * 1000;
    var date = new Date(n);
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    //时  
    var h = date.getHours();
    //分  
    var m = date.getMinutes();
    //秒  
    var s = date.getSeconds();
    console.log("当前时间：" + Y + M + D + h + ":" + m + ":" + s);
    console.log(date.toLocaleDateString());
    var time = date.toLocaleDateString();
    this.setData({ time_value: time })
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