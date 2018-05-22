// pages/vip/vip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    navTab: 0, 
    banners: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ]
  },
  switchNav:function(e){
    if (this.data.currentTab === e.target.dataset.current){
      return false;
    }else{
      this.setData({
        currentTab : e.target.dataset.current
      })
    }
  },
  switchNavtab:function(e){
    // console.log(e)
    if (this.data.navTab === e.target.dataset.navtab) {
      return false;
    } else {
      this.setData({
        navTab: e.target.dataset.navtab
      })
    }
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