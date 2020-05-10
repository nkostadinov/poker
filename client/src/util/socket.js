import io from 'socket.io-client'
import store from '../store'

export default {
  socket: null,

  connect () {
    this.socket = io()//window.location.href
      .on('connect', () => console.log('[WS] Connected'))
      .on('games', (data) => {
        store.commit('setGames', data)
      });
    return this.socket
  }
}