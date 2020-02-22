// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    my: {
      type: String,
      value: "ysx",
      observer: function(newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    },
    thinking: {
      type: String,
      value: "wan",
      observer: function(newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    }
  },
  externalClasses: ['title-class', 'content-class'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
