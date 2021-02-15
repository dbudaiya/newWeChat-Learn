//  pages/video/video.js
import res from '../../utils/request'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    VideoGroupList: null,
    budai: ""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getVideoGroupList();
  },

  async getVideoGroupList() {
    let VideoGroupList_One = await new res('/video/group/list')
    this.setData({
      VideoGroupList: VideoGroupList_One.data.slice(0, 14),
      // 默认标识
      budai: VideoGroupList_One.data[0].id
    })
  },

  // 点击按钮回调事件
  changeNav(event) {
    let navId = event.currentTarget.id;
    // console.log(typeof navId)
    this.setData({
      budai: navId * 1
    })
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

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

  }
})