// pages/index/index.js
const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: "你好， 我是msg",
    student: {
      name: "shy",
      age: 19,
      height: 187,
    },
    counter: 0
  },

  // 绑定事件
  increaseClick() {
    this.setData({
      counter: this.data.counter += 1
    })
  },
  decreaseClick() {
    this.setData({
      counter: this.data.counter -= 1
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onload");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onready");

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onshow");

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onhide");

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh(){
    console.log("我下啦了");
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