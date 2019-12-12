import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const NewLogin = () => import('pages/User/userLogin') // 用户登录
const DevelopClass = () => import('pages/DevelopClass') // 患教课堂
const GoodsList = () => import('pages/OnlineMall/goodsList') // 商品列表
const GoodDetail = () => import('pages/OnlineMall/goodDetail') // 商品详情
const ConsentForm = () => import('pages/OnlineMall/consentForm') // 知情同意书
const PatientsInfo = () => import('pages/OnlineMall/patientsInfo') // 患者信息
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
    },
    {
      path: '/developClass',
      component: DevelopClass
    },
    {
      path: '/goodsList',
      component: GoodsList
    },
    {
      path: '/goodDetail',
      component: GoodDetail
    },
    {
      path: '/consentForm',
      component: ConsentForm
    },
    {
      path: '/patientsInfo',
      component: PatientsInfo
    }
  ]
})
