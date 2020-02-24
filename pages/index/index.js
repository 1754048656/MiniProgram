const app = getApp()

app.globalData.token

Page({
  data: {
    
  },
  handleShowToast() {
    wx.showToast({
      title: 'ysx',
      icon: 'loading',
      duration: 2000,
      mask: true
    })
  },
  handleShowModal() {
    wx.showModal({
      title: 'ysx',
      content: 'wan',
      showCancel: true,
      cancelText: 'huilai',
      cancelColor: 'red',
      confirmText: 'fuhe',
      confirmColor: 'red',
      success(res) {
        if(res.cancel) {
          console.log('用户点击回来')
        }
        if(res.confirm) {
          console.log('用户点击复合')
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: 'ysx',
      mask: true,
      success(res) {
        setTimeout(() => {
          wx.hideLoading()
        }, 1000)
      } 
    })
  },
  handleShowActionSheet() {
    wx.showActionSheet({
      itemList: ['ysx','wan'],
      itemColor: 'red',
      success(res) {
        console.log(res)
        if(res.tapIndex === 0) {
          console.log('用户点击了第零个')
        } else if (res.tapIndex === 1) {
          console.log('用户点击了第一个')
        }
      }
    })
  },
  onShareAppMessage: function(options) {
    return {
      title: '你好啊,ysx',
      path: '/pages/index/index',
      imageUrl: 'http://p1.music.126.net/J759PR3d7oSJy2mgpUIPYg==/109951164733623757.jpg?imageView&quality=89'
    }
  }

  
})