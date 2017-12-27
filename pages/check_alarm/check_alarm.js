// pages/check_alarm/check_alarm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    alarm_style: ['温度', '湿度', '风压', 'PM2.5'],
    alarm_condition: ['大于', '小于', '区间'],
    //模拟服务器获取数据
    index: [{ alarm_style_index: 1, alarm_condition_index: 0 }, { alarm_style_index: 0, alarm_condition_index: 1 }],
    alarm_name: 'xerseef33455',
    items: [
      { name: 'alerts', value: '消息通知' },
      { name: 'SMS', value: '短信通知', checked: 'true' },
    ],
    btn_value:'编辑',
  },
  checkboxChange: function (e) {//通知方式
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  bind_alarm_style: function (e) {//选择告警类型
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      alarm_style_index: e.detail.value
    })
  },
  bind_alarm_condition: function (e) {//选择告警区间
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      alarm_condition_index: e.detail.value
    })
  },
  editor_btn: function (e) {//点击编辑按钮
    if (this.data.btn_value == '编辑') {
      this.setData({
        btn_value:'保存',
      })
    } else if (this.data.btn_value=='保存'){
    wx.showModal({
      title: '温馨提示:',
      content: '确定保存？',
      success: function (res) {
        if (res.confirm) {
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    this.setData({
      btn_value: '编辑',
    })
    }
  },
  del_btn: function () {//点击删除按钮
    wx.showModal({
      title: '温馨提示:',
      content: '确定删除？',
      success: function (res) {
        if (res.confirm) {
          wx.redirectTo({
            url: '/pages/alarm/alarm',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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