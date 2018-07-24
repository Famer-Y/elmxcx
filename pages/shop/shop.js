// pages/shop/shop.js
var goods = require('./goods.js');
var animationShowHeight = 135;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topClassifyId: 1,
    goods: goods,
    cartDetailShowed: true,
    dialogHidde: true,
    discount_dialog_hidde: true,
    classifySeletedId: "c1",
    scrollDown: false,
    classifyViewed: null
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
  },
  showSpecDetail: function () {
    this.setData({
      dialogHidde: false
    });
  },
  hideSpecDetail: function () {
    this.setData({
      dialogHidde: true
    });
  },
  preventTouchMove: function (e) {
  },

  showDiscountDialog: function () {
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(animationShowHeight).step()
    this.setData({
      animationData: animation.export(),
      discount_dialog_hidde: false,
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
  },
  hideDiscountDialog: function () {
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation;
    animation.translateY(animationShowHeight).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        discount_dialog_hidde: true,
      })
    }.bind(this), 200)
  },
  tapClassify: function (e) {
    var classifyId = e.target.dataset.classifyId;
    this.setData({
      classifyViewed: classifyId
    });
    var self = this;
    setTimeout(function () {
      self.setData({
        classifySeletedId: classifyId
      });
    }, 100);
  },
  onGoodsScroll: function (e) {
    if (e.detail.scrollTop > 20 && !this.data.scrollDown) {
      this.setData({
        scrollDown: true
      });
    } else if (e.detail.scrollTop < 20 && this.data.scrollDown) {
      this.setData({
        scrollDown: false
      });
    }
  },
})