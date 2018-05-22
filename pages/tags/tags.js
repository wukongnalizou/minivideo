// pages/tags/tags.js
Page({

  /**
   * 页面的初始数据
   */
  dataobj:{
    tags: [
      {
        name: "标签0"
      },
      {
        name: "标签1"
      },
      {
        name: "标签2"
      },
      {
        name: "标签3"
      },
      {
        name: "标签4"
      },
      {
        name: "标签5"
      },
      {
        name: "标签6"
      },
      {
        name: "标签7"
      },
      {
        name: "标签8"
      },
      {
        name: "标签9"
      },
      {
        name: "标签10"
      },
      {
        name: "标签11"
      }
    ],
  },
  data: { 
    tagarray:[],
    position:{},
    arrayIndex:Number
  },
  setposition: function () {
    let computeArray = [];
    let sizex = 150;
    let sizey = 100;
    let columns = 750 / sizex;
    let unit = this.width/750;
    let pxwidth = sizex * unit;
    let pxheight = sizey * unit;
    // console.log(`deviceWidth:${this.width},deviceHeight:${deviceHeight},dpr:${dpr}`)
    for (let [i, item] of this.dataobj.tags.entries()){
      computeArray.push({
        name : item.name,
        x: i % columns * pxwidth,
        y: parseInt(i / columns) * pxheight
      })
    }
    this.setData({
      tagarray:computeArray
    })
  },
  onChange: function (e) {
    let newarray = this.dataobj.tags
    let x = e.detail.x;
    let y = e.detail.y;
    let drag = e.target.dataset.item
    let column = Math.ceil(x / 75)
    let row = Math.ceil(y / 50)
    let index = row * 5 + column
    if (index < newarray.length && index != e.target.dataset.index){
      let delarray = newarray.splice(e.target.dataset.index,1)
      newarray.splice(index,0,delarray[0])
      this.setposition();
    //   this.setData({
    //     tagarray: newarray,
    //     // arrayIndex: e.target.dataset.index
    // })
    } 
    // this.data.position.x = e.detail.x;
    // this.data.position.y = e.detail.y;
  },
  onEnd:function(e){
    // let newarray = this.dataobj.tags
    // let x = this.data.position.x
    // let y = this.data.position.y
    // let drag = e.target.dataset.item
    // let column = Math.ceil(this.data.position.x/75)
    // let row = Math.ceil(this.data.position.y / 50)
    // let index = row*5+column
    // newarray.splice(index,0,)
    // this.setData({
    //   // tagarray: this.data.tags,
    //   arrayIndex: e.target.dataset.index
    // })
    // this.setposition()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: res => {
        this.width = res.windowWidth;
        this.height = res.windowHeight;
        this.dpr = res.pixelRatio;
        this.setposition();
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