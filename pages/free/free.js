// pages/free/free.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    hasbox:true,
    boxopen:false
  },
  switchNav: function (e) {
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  openbox:function(){
    this.setData({
      boxopen: true
    })
  },
  closebox:function(){
    this.setData({
      boxopen: false
    })
  },
  tochangevip: function(){
    wx.navigateTo({
      url: '../changevip/changevip'
    })
  },
  tofeedlist: function () {
    wx.navigateTo({
      url: '../feedlist/feedlist'
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