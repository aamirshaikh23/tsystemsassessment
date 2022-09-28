import Vue from 'vue'
import Router from 'vue-router'
import Users from './views/Users.vue'
import UserDetails from './views/UserDetails.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'users',
      component: Users
    },
    {
      path: '/:username',
      component: UserDetails
    }
  ]
})
