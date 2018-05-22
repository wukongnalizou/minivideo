//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    banners:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    currentTab: 0,
    setbtn:false,
    dialog: false,
    dialogtext: '确定删除整个类别?'
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
  hidedialog: function () {
    this.setData({
      dialog: false,
      setbtn:false
    })
  },
  toggleset:function(){
    this.setData({
      setbtn: !this.data.setbtn
    })
  },
  nofunny:function(){
    this.setData({
      dialog: true
    })
  },
  totag:function(){
    wx.navigateTo({
      url: '../tags/tags'
    })
  },
  tosearch:function(){
    wx.navigateTo({
      url: '../search/search'
    })
  },
  tomore:function(){
    wx.navigateTo({
      url: '../morevideo/morevideo'
    })
  }
})
