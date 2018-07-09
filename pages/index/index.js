// pages/index/index.js
var sortName = [
  '综合排序',
  '起送价最低',
  '配送速度最快',
  '评分最高',
  '好评优先'
];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: "none",
    isShowed: false,
    top: '-1',
    middle: '-1',
    topshow: 'none',
    middleshow: 'none',
    sortTypeId: '1',
    sortTypeName: sortName[0]
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
  
  },

  showDiscount: function() {
    if (this.data.isShowed) {
      this.setData({
        show: 'none'
      });
      this.data.isShowed = false;
    } else {
      this.setData({
        show: 'flex'
      });
      this.data.isShowed = true;
    }    
  },

  show_zhpx: function() {
    this.setData({
      top: '2',
      middle: '1',
      topshow: 'block',
      middleshow: 'block'
    });
  },

  hide_zhpx: function() {
    this.setData({
      top: '-1',
      middle: '-1',
      topshow: 'none',
      middleshow: 'none'
    });
  },

  tapSortTypeId: function(e) {
    switch (e.target.dataset.sortTypeId) {
      case '1': 
        this.data.sortTypeName = sortName[0];
        break;
      case '2':
        this.data.sortTypeName = sortName[1];
        break;
      case '3':
        this.data.sortTypeName = sortName[2];
        break;
      case '4':
        this.data.sortTypeName = sortName[3];
        break;
      case '5':
        this.data.sortTypeName = sortName[4];
        break;
    }
    this.setData({
      sortTypeId: e.target.dataset.sortTypeId,
      sortTypeName: this.data.sortTypeName
    });
  },

  preventTouchMove: function (e) {

  },
})