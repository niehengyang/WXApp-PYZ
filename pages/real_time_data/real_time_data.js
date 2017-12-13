//index.js  
//获取应用实例测试 
var app = getApp()
var wxCharts = require('dist/wxcharts.js')
Page({
  data: {
    /** 
        * 页面配置 
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
  },
  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  onReady: function () {
    // 屏幕适配
    let windowWidth = 320;
    try {
      let res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      // do something when get system info failed
    }
    new wxCharts({
      canvasId: 'lineCanvas1',
      type: 'line',
      categories: ['12PM','','','13PM','' , '', '14PM','' , '','15PM','' ,'' ,'16PM'],
      series: [{
        name: '实时温度',
        data: [6,13, 15, 16, 17, 15, 14,19, 20, 24, 26, 25, 15],
        format: function (val) {
          return val.toFixed(0) + '℃';
        }
      }],
      yAxis: {
        //title: '温度 (℃)',
        format: function (val) {
          return val.toFixed(0);//小数位个数设置
        },
        min: 0
      },
      width: windowWidth - 15,// 屏幕超出15px
      height: windowWidth / 2
    });

    new wxCharts({
      canvasId: 'lineCanvas2',
      type: 'line',
      categories: ['12PM', '', '', '13PM', '', '', '14PM', '', '', '15PM', '', '', '16PM'],
      series: [{
        name: '实时湿度',
        data: [15, 31, 35, 38, 40, 31, 33, 45, 47, 81, 87, 84, 51],
        format: function (val) {
          return val.toFixed(0) + '%';
        }
      }],
      yAxis: {
        //title: '湿度 (%)',
        format: function (val) {
          return val.toFixed(0);//小数位个数设置
        },
        min: 0
      },
      width: windowWidth - 15,// 屏幕超出15px
      height: windowWidth / 2
    });

    new wxCharts({
      canvasId: 'lineCanvas3',
      type: 'line',
      categories: ['12PM', '', '', '13PM', '', '', '14PM', '', '', '15PM', '', '', '16PM'],
      series: [{
        name: '实时PM2.5',
        data: [18, 39, 45, 48, 51, 45, 42, 57, 60, 78, 79, 75, 45],
        format: function (val) {
          return val.toFixed(0);
        }
      }],
      yAxis: {
        //title: 'PM2.5 (ug/m)',
        format: function (val) {
          return val.toFixed(0);//小数位个数设置
        },
        min: 0
      },
      width: windowWidth - 15,// 屏幕超出15px
      height: windowWidth / 2
    });

  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})


