import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state () {
    return {
      user_avatar: "",
      text: "",
      user_list: []
    }
  },
  mutations: {
    changeImg(state, upd_avatar) {
      state.user_avatar = upd_avatar;
    },
    searchableText(state, text) {
      state.text = text;
    }
  },
  actions: {

  }
})
