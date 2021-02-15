// pages/index1/index1.js
import request from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerdata: {},
    personalized: {},
    regelist: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 轮播数据
    let res = await new request('/banner', {
      type: 2
    });
    let pers = await new request('/personalized', {
      limit: 30
    })

    // 热歌数据多次请求
    let index = 0;
    let resultArr = [];
    while (index < 16) {
      let topListArr = await new request("/top/list", {
        idx: index++
      })

      let topListItem = {
        // 最好多多复习,这个根本不会
        name: topListArr.playlist.name,
        // splice(修改原数组,可以指定的数组进行增删改查) slice(不会改变原数组)
        track: topListArr.playlist.tracks.slice(0, 5)
      }
      resultArr.push(topListItem);
    }
    // console.log("结果数据", res.banners);
    // console.log('获取数据',pers)
    // console.log("获取数据", rege.playlist.tracks)
    this.setData({
      // !!!数据载入
      bannerdata: res.banners,
      personalized: pers.result,
      regelist: resultArr
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