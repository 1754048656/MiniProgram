// pages/category/category.js
Page({
  //小程序生命周期：在后台保存两个小时
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log('小程序初始化完成: onLoad')

    wx.getUserInfo({
      success: function (res) {
        // console.log(res)
      }
    })

    // setTimeout(function() {
    //   const err = new Error();

    //   throw err;
    // }, 1000)
    // console.log(options)

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
    console.log('页面显示出来了: onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('页面隐藏起来了: onHide')
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

  },
  onError: function(msg) {
    console.log('小程序中发生了一些错误时会执行')
  }
})