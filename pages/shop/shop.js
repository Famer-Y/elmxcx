// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topClassifyId: 1,
    goods: {
      1:{
        id: 1,
        name: "海绵宝宝",
        price: 25,
        image: "/image/index/classify.jpeg",
        sign: "来自海底世界，一个快乐的，无烦恼的小可爱",
        sold: 2018,
        spec: [
          {
            spec_id: 1001,
            spec_name: "口味",
            spec_type: [
              {
                spec_type_id: 1001001,
                spec_type_name: "不辣"
              },
              {
                spec_type_id: 1001002,
                spec_type_name: "微辣"
              },
              {
                spec_type_id: 1001003,
                spec_type_name: "中辣"
              },
              {
                spec_type_id: 1001004,
                spec_type_name: "麻辣"
              }
            ]
          },
          {
            spec_id: 1002,
            spec_name: "大小",
            spec_type: [
              {
                spec_type_id: 1002001,
                spec_type_name: "大碗"
              },
              {
                spec_type_id: 1002002,
                spec_type_name: "小碗"
              },
            ]
          },
        ]
      },
      2:{
        id: 2,
        name: "海绵宝宝",
        price: 30,
        image: "/image/index/classify.jpeg",
        sign: "来自海底世界，一个快乐的，无烦恼的小可爱",
        sold: 2018,
        spec: []
      },
    },
    goodClassify: [
      {
        id: 1,
        name: "热销",
        sign: "这里大家都喜欢",
        goodsList: [1, 2],
      },
      {
        id: 2,
        name: "优惠",
        sign: "这里最优惠",
        goodsList: [1],
      },
      {
        id: 3,        
        name: "招牌",
        sign: "",
        goodsList: [1],
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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