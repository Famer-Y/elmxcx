// pages/shop/shop.js
var goods = require('./goods.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topClassifyId: 1,
    goods: goods,
    cartDetailShowed: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(goods);
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
  
  },

  showSpecDetail: function() {
    wx.showModal({
      title: 'haha',
      content: '',
    })
  },

  showCartDetail: function () {
    this.setData({
      cartDetailShowed: !this.data.cartDetailShowed
    });
  },

  hideCartDetail: function () {
    this.setData({
      cartDetailShowed: true
    });
  }
})