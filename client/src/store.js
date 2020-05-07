import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import router from "./router"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    games: [],
    user: null
  },
  actions: {
    login (context, params) {
      axios.post('/api/connect', params)
        .then(response => {
          let user = response.data
          context.commit('setUser', response.data)
          if(user.id) {
            router.push({path: '/lobby'})
          }
        })
    }
  },
  mutations: {
    setUser (state, value) {
      state.user = value
    }
  }
})

export default store