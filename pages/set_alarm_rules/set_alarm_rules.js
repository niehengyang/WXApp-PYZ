// pages/set_alarm_rules/set_alarm_rules.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    alarm_style: ['温度', '湿度', '风压', 'PM2.5'],
    alarm_condition:['大于','小于','区间'],
    //模拟服务器获取数据
    index: [ { alarm_style_index: 1, alarm_condition_index: 2}],
    alarm_name:'xerseef33455',
    items: [
      { name: 'alerts', value: '消息通知' },
      { name: 'SMS', value: '短信通知', checked: 'true' },
    ]
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
  additem:function(e){//添加告警条件
    this.data.index =(this.data.index).concat({ alarm_style_index: 0, alarm_condition_index: 0 })
    this.setData({
      index: this.data.index
    })
  },
  del_item:function(e){//删除告警条件
    this.data.index = (this.data.index).splice((this.data.index)[this.data.index.length-1])
    this.setData({
      index: this.data.index
    })
  },
  add_alarm_btn:function(){//点击添加按钮
wx.showModal({
  title: '温馨提示:',
  content: '是否确定？',
  success: function(res){
    if (res.confirm) {
      wx.redirectTo({
        url: '/pages/alarm_rules/alarm_rules',
      })
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
})
  },
  cancel_alarm_btn:function(){//点击取消按钮
    wx.showModal({
      title: '温馨提示:',
      content: '是否取消？',
      success: function (res) {
        if (res.confirm) {
          wx.redirectTo({
            url: '/pages/alarm_rules/alarm_rules',
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