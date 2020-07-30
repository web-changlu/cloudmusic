// pages/radiostation/radiostation.js
const API = require('../../API/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tjmv: [],
    newmv: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRecommendMV()
    this.getNewMv()
  },
  getRecommendMV: function() {
    API.getRecommendMV().then(res => {
      if (res.code === 200) { //更加严谨
        let list = res.result
        this.setData({
          tjmv: list
        })
        // console.log(list)
      }
    })
  },
  getNewMv: function() {
    API.getNewMv().then(res => {
      if (res.code === 200) { //更加严谨
        // let { data: res} = res
        let data = res.data
        console.log(data)
        // let list = res.djRadios.slice(0,9)
        this.setData({
          newmv: JSON.parse(JSON.stringify(data))
        })
      }
    })
  },
  handleSheet: function(e) { //e 对象，自带，点击事件后触发，event有type,target，timeStamp，currentTarget属性
    // console.log(e.currentTarget.dataset.id)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../video/video?id=${id}`
    });
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