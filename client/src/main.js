import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import initUser from './util/user'
import store from './store'
import router from './router'

Vue.config.productionTip = false

axios.get('/api/user').then((response) => {
  initUser(response.data)

  new Vue({
    ...App,
    store,
    router,
  }).$mount('#app')
})