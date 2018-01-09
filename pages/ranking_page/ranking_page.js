// pages/ranking_page/ranking_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput: true, 
    List: [{ group_name: 'xxx', user_logo:'/images/mine/mine_logo.svg', ranking: 1, user_name: 'vvv' },
      { group_name: 'xxx', user_logo: '/images/home/tu1.svg', ranking: 6, user_name: 'lll' },
      { group_name: 'xxx', user_logo: '/images/home/tu1.svg', ranking: 10, user_name: 'lll' }],
    index: 0,
    my_ifo: { ranking: 111, appearance:50 },
    
  },
  join_ranking:function(){
console.log('点击参加')
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      }
    })
  } ,
  update_ranking: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  //取消按钮  
  cancel: function () {
    this.setData({
      hiddenmodalput: true
    });
  },  
  //再试一次
  confirm: function () {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      }
    })
    this.setData({
      hiddenmodalput: true
    })
  } ,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for(var i=0;i<this.data.List.length;i++){
    if(this.data.List[i].ranking==1){
      var logo = this.data.List[i].user_logo;
      var group_name = this.data.List[i].group_name;
      var user_name = this.data.List[i].user_name;
  this.setData({
    user_logo: logo,
    group_name: group_name,
    user_name: user_name
    })
}
}
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