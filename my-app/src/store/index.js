import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    wechatSignUrl: ""
  },
  mutations: {
    setWechatSignUrl(state, wxSignUrl) {
      // let isIos = true
      // 关键点
      // IOS仅记录第一次进入页面时的URL
      // IOS微信切换路由实际URL不变，只能使用第一进入页面的URL进行签名
      if (window.__wxjs_is_wkwebview === true && state.wechatSignUrl !== '') {
        return;
      }
      state.wechatSignUrl = wxSignUrl;
    }
  },
  getters: {
    getWechatSignUrl: (state) => state.wechatSignUrl
  }
})
