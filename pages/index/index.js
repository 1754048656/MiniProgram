import request from '../../service/network/network.js'
// 必须写相对路径
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  onLoad() {
    // 1.发送最简单的get请求
    // wx:request({
    //   url: "",
    //   success: function(res) {
    //     console.log(res)
    //   }
    // }),

    //2.携带参数的get请求
    // wx:request({
    //   url: '',
    //   data: {
    //     type: 'sell',
    //     page: 1
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   }
    // }),

    // 3.post请求
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     name: 'xxx',
    //     age: 18
    //   },
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })

    // 4.用工具类请求数据
    request({
      url: 'http://httpbin.org/post',
      method: 'post',
      data: {
        name: 'ysx',
        age: 18
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

    
  }
})