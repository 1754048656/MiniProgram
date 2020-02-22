// components/w-tab-contorl/w-tab-contorl.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handle_click(event) {
      console.log(event)
      this.setData({
        currentIndex: event.currentTarget.dataset.index
      })
      console.log(this.data.currentIndex)
    }
  }
})
