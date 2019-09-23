import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    intputNovelText: ''
  },
  mutations: {
    getText (state, text) {
      return (this.state.intputNovelText = text)
    }
  },
  actions: {
    getText (context, text) {
      return context.commit('getText', text)
    }
  }
})
