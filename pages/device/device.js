// pages/device/device.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["设备", "设备组"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 10,
    inputShowed: false,
    sliderWidth:'',
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
  device_details01: function () {
    wx.navigateTo({
      url: '/pages/device_details/device_details',
      //接口调用成功的回调方法
      fuccess: function () { },
      //接口调用失败的回调方法
      fail: function () { },
      //接口调用无论成功或者失败的回调方法
      complete: function () { }
    })
  },
  details_equipment_group01: function () {
    wx.navigateTo({
      url: '/pages/details_equipment_group/details_equipment_group',
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
  onLoad: function () {
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