import Vue from 'vue'
import VueRouter from "vue-router"
import store from './store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./components/Home')
    }, {
      path: '/lobby',
      component: () => import('./pages/Lobby')
    }
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if(to.path !== '/' && !store.state.user.id) {
    next('/')
  } else
    next()
})

export default router