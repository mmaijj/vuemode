import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import request from './axios/axios'
// import eruda from 'eruda'
import './config/vantModel'
import 'assets/stylus/index.styl'

Vue.prototype.request = request
// eruda.init()
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') {
//     let docId = to.query.docId
//     localStorage.setItem('docId',docId)
//   }
//   let _token = localStorage.getItem('userToken')
//   if (_token !== null && _token !== '') {
//     if(to.path === '/login'){
//       //登录状态下 访问登录页面 会跳到index.vue
//       next({path: '/patientIndex'});
//     }else if (to.path === '/') {
//       next({path: '/patientIndex'});
//     } else {
//       next();
//     }
//   } else {
//     if (to.path === '/login') { // 如果是登录页面的话，直接next() -->解决注销后的循环执行bug
//       next();
//     }else if (to.path === '/register') {
//       next();
//     } else if (to.path === '/') {
//       next({ path: '/login' });
//     } else { // 否则 跳转到登录页面
//       next({ path: '/login' });
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
