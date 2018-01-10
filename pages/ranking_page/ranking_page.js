// pages/ranking_page/ranking_page.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput: true,
    List: [{ data_id: 1, group_name: 'xxx', user_logo: '/images/mine/mine_logo.svg', appearance: 90, ranking: 1, user_name: 'vvv', pho_path: '/images/addpage/my_pho1.jpg' },
    { data_id: 2, group_name: 'xxx', user_logo: '/images/home/tu1.svg', appearance: 80, ranking: 2, user_name: 'lll', pho_path: '/images/addpage/my_pho.jpg' },
    { data_id: 3, group_name: 'xxx', user_logo: '/images/home/tu1.svg', appearance: 70, ranking: 3, user_name: 'lll', pho_path: '/images/addpage/my_pho2.jpg' },
    { data_id: 4, group_name: 'xxx', user_logo: '/images/home/tu1.svg', appearance: 75, ranking: 4, user_name: 'lll', pho_path: '/images/addpage/my_pho3.jpg' },
    { data_id: 5, group_name: 'xxx', user_logo: '/images/home/tu1.svg', appearance: 60, ranking: 5, user_name: 'lll', pho_path: '/images/addpage/my_pho4.jpg' }, { data_id: 5, group_name: 'xxx', user_logo: '/images/home/tu1.svg', appearance: 60, ranking: 5, user_name: 'lll', pho_path: '/images/addpage/my_pho4.jpg' }, { data_id: 5, group_name: 'xxx', user_logo: '/images/home/tu1.svg', appearance: 60, ranking: 5, user_name: 'lll', pho_path: '/images/addpage/my_pho4.jpg' }, { data_id: 5, group_name: 'xxx', user_logo: '/images/home/tu1.svg', appearance: 60, ranking: 5, user_name: 'lll', pho_path: '/images/addpage/my_pho4.jpg' }, { data_id: 5, group_name: 'xxx', user_logo: '/images/home/tu1.svg', appearance: 60, ranking: 5, user_name: 'lll', pho_path: '/images/addpage/my_pho4.jpg' }, { data_id: 5, group_name: 'xxx', user_logo: '/images/home/tu1.svg', appearance: 60, ranking: 5, user_name: 'lll', pho_path: '/images/addpage/my_pho4.jpg' }, { data_id: 5, group_name: 'xxx', user_logo: '/images/home/tu1.svg', appearance: 60, ranking: 5, user_name: 'lll', pho_path: '/images/addpage/my_pho4.jpg' }, { data_id: 5, group_name: 'xxx', user_logo: '/images/home/tu1.svg', appearance: 60, ranking: 5, user_name: 'lll', pho_path: '/images/addpage/my_pho4.jpg' }, { data_id: 5, group_name: 'xxx', user_logo: '/images/home/tu1.svg', appearance: 60, ranking: 5, user_name: 'lll', pho_path: '/images/addpage/my_pho4.jpg' }, { data_id: 5, group_name: 'xxx', user_logo: '/images/home/tu1.svg', appearance: 60, ranking: 5, user_name: 'lll', pho_path: '/images/addpage/my_pho4.jpg' }
    ],
    index: 0,
    my_ifo: { ranking: 111, appearance: 50 },
    hiddenmodalput: true,
  },
  join_ranking: function () {
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
  },
  show_pho_modal: function (e) {
    wx.showLoading({
      title: '正在加载...',
      mask: true
    })
    var id = e.currentTarget.dataset.id;
    //console.log(id);
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
    for (var i = 0; i < this.data.List.length; i++) {
      if (this.data.List[i].data_id == id) {
        this.setData({
          pho_path: this.data.List[i].pho_path
        })
      }
    }
    wx.hideLoading()
  },
  confirm: function () {
    console.log('点击确定')
    this.setData({
      hiddenmodalput: true
    })
  },
  cancel: function () {
    console.log('点击取消')
    this.setData({
      hiddenmodalput: true
    })
  },
  /**
  update_ranking: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
    
  },**/
  //再试一次
  tri_again: function () {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    for (var i = 0; i < this.data.List.length; i++) {
      if (this.data.List[i].ranking == 1) {
        var logo = this.data.List[i].user_logo;
        var group_name = this.data.List[i].group_name;
        var user_name = this.data.List[i].user_name;
        var id = this.data.List[i].data_id;
        this.setData({
          user_logo: logo,
          group_name: group_name,
          user_name: user_name,
          data_id: id
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