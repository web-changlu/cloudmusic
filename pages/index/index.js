//index.js
//获取应用实例
const app = getApp()
const API = require('../../API/api.js')
Page({
  data: {
    banner: [],
    newsong: [],
    diantai: [],
    songer: []
  },
  // 页面开始加载触发
  onLoad: function (options) {
    this.getBanner()
    this.getNewSong()
    this.getDjRadios()
    this.getSonger()
  },
  getBanner: function() {
    API.getBanner({
      type: 2
    }).then(res => {
      if (res.code === 200) { //更加严谨
        this.setData({
          banner: res.banners
        })
        // console.log(res)
      }
    })
  },
  getNewSong: function() {
    API.getNewSong({
      type: 2
    }).then(res => {
      if(res.code === 200) {
        let newdata = res.result.slice(0,3)
        // console.log(newdata)
        this.setData({
          newsong: newdata
        })
        // console.log(res)
      }
    })
  },
  getDjRadios: function() {
    API.getDjRadios({
      type: 2
    }).then(res => {
      if(res.code === 200) {
        let newdata = res.djRadios.slice(0,3)
        // console.log(newdata)
        this.setData({
          diantai:newdata
        })
        // console.log(res)
      }
    })
  },
  getSonger: function() {
    API.getSonger().then(res => {
      if(res.code === 200) {
        let newdata = res.list.artists.slice(0,6)
        // let newdata = res.djRadios.slice(0,3)
        // console.log(newdata)
        this.setData({
          songer:newdata
        })
        // console.log(res)
      }
    })
  }
})
