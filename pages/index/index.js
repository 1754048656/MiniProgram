const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)
//注册一个页面
Page({
  

  //-----------------------2.页面数据的储存--------------------------------

  /**
   * 页面的初始数据
   */
  data: {
    message: "world",
    age: "18",
    list: [
      { id: 1, name: 'kobe', age: 30},
      { id: 2, name: 'james', age: 28 },
      { id: 3, name: 'curry', age: 20 },
      { id: 4, name: 'why', age: 18 },
    ],
    count: 0,
    list2: []
  },
  add() {
    //1.错误做法，界面不会发生刷新
    // this.data.count++
    console.log(this.data.count)
    
    
    //2.this.setData()
    this.setData({
      count: this.data.count + 1
    })
  },
  jian() {
    this.setData({
      count: this.data.count - 1 
    })
  },




  // ------------------------1.监听页面的生命周期函数-----------------------
  /**
   * 生命周期函数--监听页面加载     相当于created
   */
  onLoad(options) {
    console.log('onLoad')
    const _this = this
    wx.request({
      url: 'http://123.207.32.32:8000/api/hy/recommend',
      success: 
      // (res) => {
      //   console.log(res)
      //   this.setData({
      //     list2: res.data.data.list
      //   })
      // }
      function(res) {
        console.log(res)
        _this.setData({
          list2: res.data.data.list
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成  相当于mount
   */
  onReady() {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log('onUnload')
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
    
  },

  //-----------------------------3.监听wxml中的事件-----------------------------



  //-----------------------------4.监听其他事件--------------------------------

  //监听页面的滚动
  onPageScroll(obj) {
    // console.log(obj)
  },



  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉刷新')
  },

})