// pages/songsheet/songsheet.js
const API = require('../../API/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lsit: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getsongsheet()
  },
  getsongsheet: function() {
    API.getsongsheet().then(res => {
      if (res.code === 200) { //更加严谨
        let list = res.playlists
        this.setData({
          list: list
        })
        // console.log(list)
      }
    })
  },
  handleSheet: function(e) { //e 对象，自带，点击事件后触发，event有type,target，timeStamp，currentTarget属性
    // console.log(e.currentTarget.dataset.id)
    let app =  getApp();
    
    let id = e.currentTarget.dataset.id
    app.globalData.defaultgdId = id
    // wx.navigateTo({
    //   url: ``
    // });
    wx.switchTab({url:`../bofang/bofang`,
      success: function(e) {
        let page =  getCurrentPages().pop()
        if(page == undefined || page == null) return
        page.onLoad()
        
      }})
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