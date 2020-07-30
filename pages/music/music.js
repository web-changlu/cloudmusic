// pages/music/music.js
const API_BASE_URL = 'http://musicapi.leanapp.cn';
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay: '',
    song:[],
    innerAudioContext: {},
    show:true,
    showLyric:true,
    songid:[],
    history_songId:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    let id = options.id
    this.play(id)
  },
  play: function(id) {
    let musicId = id
    app.globalData.songId = musicId;  //让每一个要播放的歌曲ID给全局变量的songId
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