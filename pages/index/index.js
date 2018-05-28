//index.js
//获取应用实例
const app = getApp()

Page({
  dataObj:{
    page:1,
    recommend:{}
  },
  data: {
    banners:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    nav:[],
    modules:[],
    currentTab: 0,
    setbtn:false,
    dialog: false,
    dialogtext: '确定删除整个类别?'
  },
  onLoad: function () {
    app.login(info => {
      this.setData({
        info: info
      });
      this.getUserTip((res) => {
        this.getBanner((res) => {
          this.getTipsVideo();
        });
      })
      // this.getTipVideo();
    });
  },
  //获取banner
  getBanner: function(fn){
    app.https("/banner", res => {
      if (res.status == 2000) {
        this.setData({
          banner: res.data
        })
      }
      if (fn) fn();
    })
  },
  //获取用户自定义标签
  getUserTip: function(fn){
    app.https("/tip/userTip",{
      openid: this.data.info.openid
    }, res => {
      if (res.status == 2000) {
        this.setData({
          nav: res.data.nav,
          modules: res.data.modules
        })
      }
      if(fn) fn();
    })
  },
  getTipVideo:function(id=1,fn){
    let page = this.dataObj.page
    app.https("/video/byTip", {
      id:id,
      page:page
    }, res => {
      if (res.status == 2000) {
        console.log(res.data);
      }
      if (fn) fn();
    })
  },
  getTipsVideo:function(fn){
    let modules = this.data.modules
    let tipOrder = modules.map(function(item){
      return item['id']
    })
    app.https("/video/byTips", {
      tips: tipOrder
    }, res => {
      if (res.status == 2000) {
        for (let [i, item] of modules.entries() ) {
          modules[i].videos = res.data[item.id];
        }
        this.setData({
          modules: modules
        })
      }
      if (fn) fn();
    })
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
  tomore:function(e){
    console.log(e)
    // wx.navigateTo({
    //   url: '../morevideo/morevideo'
    // })
  },
  onShareAppMessage: function (res) {
    return {
      title: "小罗潮人视频平台",
      path: "pages/index/index",
      imageUrl: "/img/logo.jpg"
    }
  },
})
