// pages/shop/shop.js
var goods = require('./goods.js');
var animationShowHeight = 135;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topClassifyId: 1,
    restaurant: goods.restaurant,
    cartDetailShowed: true,
    dialogHidde: true,
    discount_dialog_hidde: true,
    classifySeletedId: "c1",
    scrollDown: false,
    classifyViewed: null,
    cartList: {count: 0, foodList:[]},
    specAbout: null,
    select_specId: null,
    select_spec: null,
    select_food: null,
    select_foodId: null,
    cur_select_food: null
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
  showSpecDetail: function (e) {
    var foodId = e.target.dataset.foodId;
    console.log(foodId);
    var food_list = this.data.restaurant.food_list;
    for (var i in food_list) {
      if (foodId == food_list[i].food_id) {
        this.setData({
          specAbout: food_list[i]
        });
      }
    }
    this.setData({
      dialogHidde: false
    });
  },
  hideSpecDetail: function () {
    this.setData({
      dialogHidde: true
    });
  },
  tapSpec: function (e) {
    var specItemId = e.target.dataset.specItemId;
    var specId = e.target.dataset.specId;
    var foodId = e.target.dataset.foodId;
    var food_list = this.data.restaurant.food_list;
    var cur_food;
    for (var i in food_list) {
      if (foodId == food_list[i].food_id) {
        cur_food = food_list[i];
        cur_food.specification[specId].select_spec = food_list[i].specification[specId].spec_list[specItemId];
        this.setData({
          select_specId: specItemId,
          select_spec: food_list[i].specification[specId].spec_list[specItemId],
          select_foodId: foodId,
          cur_select_food: cur_food,
        });
      }
    }
    console.log(cur_food);
  },
  buy: function (e) {
    var foodId = e.target.dataset.foodId;
    var selected_food = this.data.cur_select_food;
    if (selected_food == null || foodId != selected_food.food_id) {
      return;
    }
    var select_count_food = {};
    select_count_food.count = 1;
    select_count_food.selected_food = selected_food;
    var flag = false;
    if (this.data.cartList != null) {
      for (var i in this.data.cartList.foodList) {
        if (foodId == this.data.cartList.foodList[i].selected_food.food_id) {
          this.data.cartList.foodList[i].count += 1;
          this.data.cartList.count += 1;
          flag = true;
        }
      }
      if (!flag) {
        this.data.cartList.foodList.push(select_count_food);
        this.data.cartList.count += 1;
      }
    } else {
      this.data.cartList.foodList.push(select_count_food);
      this.data.cartList.count += 1;
    }
    this.setData({
      cartList: this.data.cartList,
    });
    this.hideSpecDetail();
    console.log(this.data.cartList);
  },
  clearCart: function () {
    this.setData({
      cartList: { count: 0, foodList: [] },
    });
    this.hideCartDetail();
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
    if (e.detail.scrollTop > 10 && !this.data.scrollDown) { // 隐藏顶部元素
      this.setData({
        scrollDown: true
      });
    } else if (e.detail.scrollTop < 10 && this.data.scrollDown) { // 显示顶部元素
      this.setData({
        scrollDown: false
      });
    }
  },
})