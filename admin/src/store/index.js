import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存放用户信息
    userInfo: {
      username: '',
      nickname: ''
    },
    session: ''
  },
  getters: {
    // 获取登录用户信息
    getUserinfo: state => {
      return state.userInfo
    }
  },
  mutations: {
    // 设置用户信息
    setUserinfo (state, userInfo) {
      state.userInfo.username = userInfo.username
      state.userInfo.nickname = userInfo.nickname
    }
  },
  actions: { }
})
