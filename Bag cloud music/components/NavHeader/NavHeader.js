// components/NavHeader/NavHeader.js
Component({
  /**
   * 组件的属性列表:有组件外部存入的数据,等同于Vue中的数据(相当于props)
   */
  properties: {
    title: { // 属性名
      type: String,
      value: '最新歌单'
    },
    myProperty2: String, // 简化的定义方式,
    myNav:{
      type:String,
      value:"推荐更多"
    }
  },

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
