// 导入
// import request from "../../service/network.js"
import {
  getHomeData,
  getGoodsData
} from "../../service/home.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    titles: ["流行", "新款", "精选"],
    currentType: "流行",
    goods: {
      "pop": {
        page: 10,
        list: []
      },
      "new": {
        page: 0,
        list: []
      },
      "sell": {
        page: 0,
        list: []
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 1.请求轮播图和推荐数据
    // wx.request({
    //   url: 'http://123.207.32.32:8000/api/h8/home/multidata', //仅为示例，并非真实的接口地址

    //   success(res) {
    //     console.log(res.data)
    //   }
    // })

    //请求轮播图以及推荐数据 
    this._getHomeData();

    // 请求商品数据
    this._getGoodsData("pop");
    this._getGoodsData("new");
    this._getGoodsData("sell");

  },
  // -----------------------网络请求函数-------------------------------------------
  _getHomeData() {
    getHomeData().then(res => {
      const ress = res.data;
      // console.log(ress.data)
      const banners = ress.data.banner.list;
      const recommends = ress.data.recommend.list;

      // 将banners和recommend数据放到data中
      this.setData({
        banners,
        recommends
      })
    })
  },
  _getGoodsData(type) {
    const page = this.data.goods[type].page + 1;
    getGoodsData(type, page).then(res => {
      // console.log(res)

      // 1.取出数据
      const lists = res.data.data.list;

      //2.讲数据设置到对相应type的list中
      const oldList = this.data.goods[type].list;
      oldList.push(...lists);

      // 3.将数据设置到data中
      const typekey = `goods.${type}.list`;
      const pagekey = `goods.${type}.page`;
      this.setData({
        // 加个中括号,得到是上面的typelist
        [typekey]: oldList,
        [pagekey]: page
      })
    })
  },

  // ---------------------------时间事件监听函数---------------------------------------------
  btnClick(event) {
    // console.log(event)
    // 得到下标值取出index
    const index = event.detail.index;
    // console.log(index);
    const types = ["pop", "new", "sell"];
    // console.log(types[index])

    // 设置currentType
    this.setData({
      currentType: types[index]
    })
  }
})