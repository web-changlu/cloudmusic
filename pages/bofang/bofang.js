// pages/radiostation/radiostation.js
const API = require('../../API/api.js')
const API_BASE_URL = 'http://musicapi.leanapp.cn'
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tjmv: [],
    newmv: [],
    defaultId: 691548662,
    songList:[],
    suoy:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    });
    // console.log(options);
    let defaultId = app.globalData.defaultgdId === 0?691548662:app.globalData.defaultgdId
    console.log(app.globalData.defaultgdId)

    wx.request({
      url: API_BASE_URL + '/playlist/detail',
      data: {
        id: defaultId    
      },
      success: res => {
        const waitForPlay = new Array;
        for (let i = 0; i <= res.data.playlist.trackIds.length - 1;i++){ //循环打印出其id
          waitForPlay.push(res.data.playlist.trackIds[i].id) //循环push ID 到waitForPlay数组
          app.globalData.waitForPlaying = waitForPlay  //让waitForPlay数组给全局数组
        }
        console.log(res.data.playlist.tracks)
        wx.hideLoading()
        this.setData({
          songList: res.data.playlist.tracks
        })  
      }
    })
    
    // this.getSongList(defaultId)
  },
  getSongList: function(val) {
    API.getSongList({
      id: val
    }).then(res => {
      if (res.code === 200) { //更加严谨
        let list = res
        this.setData({
          tjmv: list
        })
        console.log(list)
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
      url: `../music/music?id=${id}`
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