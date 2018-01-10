// pages/Appearance_level_contest/Appearance_level_contest.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //模拟数据
    List: [{ group_name: 'xxx', my_ranking: 10, my_pho:'/images/addpage/my_pho.jpg' }, 
    { group_name: 'xxx', my_ranking: 10 }, 
    { group_name: 'xxx', my_ranking: 10 }],
  },
  add_group:function(){
    
  },
  card_details:function(){
    wx.navigateTo({
      url: '/pages/ranking_page/ranking_page',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'test.php', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })

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