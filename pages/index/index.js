Page({

  data: {
    titles: ['衣服', '裤子', '鞋子'],
    counter: 5,
    detail_name: null,
    detail_age: null
  },

  handleTouchStart() {
    console.log('handleTouchStart')
  },
  handleTouchMove() {
    console.log('handleTouchMove')
  },
  handleTouchEnd() {
    console.log('handleTouchEnd')
  },
  handleTap() {
    console.log('handleTap')
  },
  handleLongpress() {
    console.log('handleLongpress')
  },

  handleOuter(event) {
    console.log(event)
  },
  handleInner(event) {
    console.log(event)
  },

  handleClick(event) {
    console.log(event)

    console.log(event.currentTarget.dataset.item)
    console.log(event.currentTarget.dataset.index)
  },


  handleCaptureView1() {
    console.log('handleCaptureView1')
  },
  handleBindView1() {
    console.log('handleBindView1')
  },

  handleCaptureView2() {
    console.log('handleCaptureView2')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },

  handleCaptureView3() {
    console.log('handleCaptureView3')
  },
  handleBindView3() {
    console.log('handleBindView3')
  },

  handle_click(event) {
    // console.log('------------------------------')
    console.log(event)
    this.setData({
      counter: this.data.counter += 2,
      detail_name: event.detail.name,
      detail_age: event.detail.age
    })
    
  }

})