import res from "../../utils/request.js"
// 用户中心
let startY = 0;
let moveY = 0;
let moveDistance = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverTranfrom: `translateY(0rpx)`,
    coverTrantion: '',
    userInfo: {},
    recentPlayList: []
  },
  toLogin: function() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 读取用户的基本信息
    let userinfo = wx.getStorageSync("userinfo");
    // console.log(userinfo)
    if (userinfo) {
      this.setData({
        userInfo: JSON.parse(userinfo)
      })

      // 获取用户播放记录
      this.getbofang(this.data.userInfo.userId)
    }
  },

  async getbofang(userId) {
    let bofangList = await new res('/user/record', {
      uid: '392350392',
      type: '1'
    });
    // let recentPlayList = bofangList.weekData.map(item=>{
    //   item.id = index++;
    //   return item;
    // })
    this.setData({
      recentPlayList: bofangList.weekData
    })
  },
  handleTouchStart(event) {
    // 主要是一些看一些CSS中的过渡效果
    startY = event.touches[0].clientY;
    // console.log(startY)
  },

  handleTouchMove(event) {
    moveY = event.touches[0].clientY;
    moveDistance = moveY - startY;
    // console.log('这个是' + moveDistance)
    if (moveDistance <= 0) {
      return;
    }

    if (moveDistance >= 180) {
      moveDistance = 180;
    }

    // 动态更行covertransfrom的值
    this.setData({
      coverTranfrom: `translateY(${moveDistance}rpx)`,
      coverTrantion: ''

    })
  },
  handleTouchEnd() {
    this.setData({
      coverTranfrom: `translateY(0rpx)`,
      coverTrantion: 'transform 1s linear'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})