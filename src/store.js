import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'light' // default
  },
  mutations: {
    changeTheme (state, n) {
      state.theme = n
    }
  }
})
