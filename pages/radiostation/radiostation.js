// pages/radiostation/radiostation.js
const API = require('../../API/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotlist: [],
    radiolist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHotDj()
    this.getDjList()
  },
  getDjList: function() {
    API.getDjList().then(res => {
      if (res.code === 200) { //更加严谨
        let list = res.categories
        this.setData({
          radiolist: list
        })
        console.log(list)
      }
    })
  },
  getHotDj: function() {
    API.getHotDj().then(res => {
      if (res.code === 200) { //更加严谨
        let list = res.djRadios
        // let list = res.djRadios.slice(0,9)
        this.setData({
          hotlist: list
        })
        console.log(list)
      }
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