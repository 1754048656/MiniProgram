Page({
  data: {
    message: 'ysx',
    isActive: false,
    nowTime: '',
    isShow: false,
    list: [
      [11,22,33],
      [44,55,66]
    ]
  },
  handleClick() {
    this.setData({
      isActive: !this.data.isActive
    })
  },

  onLoad() {
    this.setData({
      nowTime: new Date().toLocaleString()
    })
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  }
  
})