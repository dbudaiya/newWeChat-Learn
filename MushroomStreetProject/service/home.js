import request from "./network.js"

// 请求轮播图以及推荐数据 
export function getHomeData() {
  return request({
    url: "/home/multidata"
  })
}

// 请求商品数据
export function getGoodsData(type, page) {
  return request({
    url: "/home/data",
    data: {
      type,
      page
    }
  })
}