import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import router from "./router"
import socket from './util/socket'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    games: [],
    user: null,
    scoket: null
  },
  actions: {
    login (context, params) {
      axios.post('/api/connect', params)
        .then(response => {
          let user = response.data
          //login
          context.commit('setUser', response.data)
          if(user.id) {
            router.push({path: '/lobby'})
          }
        })
    }
  },
  mutations: {
    setGames(state, value) {
      state.games = value
    },
    setUser (state, value) {
      state.user = value

      if(!state.socket && value.id) {
        state.socket = socket.connect()
      }
    }
  },
  getters: {
    current (state) {
      return state.games.find(game => {
        let pl = game.table.players.find(p => p.playerName === Vue.user.name)
        return !!pl
      })
    }
  }
})

export default store