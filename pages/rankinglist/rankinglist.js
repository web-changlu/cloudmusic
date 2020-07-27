// pages/songsheet/songsheet.js
const API = require('../../API/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lsit: [],
    tuijian: [],
    guanfang: [],
    more: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTopList()
  },
  getTopList: function() {
    API.getTopList().then(res => {
      // console.log(res)
      if (res.code === 200) { //更加严谨
        let list = res.list
        let tj = []
        let gf = res.list.slice(0,4)
        let gd = res.list.slice(4)
        // 随机生成三个数，作为推荐榜单的索引
        let first = parseInt(Math.random()*list.length) 
        tj.push(list[first])
        let second = parseInt(Math.random()*list.length) 
        tj.push(list[second])
        let three = parseInt(Math.random()*list.length) 
        tj.push(list[three])
        // console.log(first,second,three)
        this.setData({
          list: list,
          tuijian: tj,
          guanfang: gf,
          more: gd
        })
        // console.log(list)
    // console.log('------------------------')
    // console.log(tj)
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