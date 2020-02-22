// components/my-event/my-event.js
Component({
  methods: {
    handle_click() {
      this.triggerEvent('handle_click', {name: "jjt", age: '小你一岁多'}, {})
    }
  }
})
