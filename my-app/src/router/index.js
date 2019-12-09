import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const NewLogin = () => import('pages/User/userLogin') // 用户登录
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: NewLogin
    },
    {
      path: '/login',
      component: NewLogin
    }
  ]
})
