import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant';
Vue.use(Toast)

const service = axios.create({
  timeout:30000
})
let base_url = 'http://testweonco.origimed.com'
// let base_url = 'http://weonco.origimed.com'
let toast = '';
service.interceptors.request.use(config=>{
  //添加全局的loading
  Toast.loading({
    duration: 0,       // 持续展示 toast
    forbidClick: true, // 禁用背景点击
    loadingType: 'spinner',
    message: '加载中...'
  });
  return config
},error=>{
  Promise.reject(error)
})

service.interceptors.response.use(
  response=>{
    //隐藏全局的loading
    Toast.clear();
    let res = {};
    res.status = response.status;
    res.data = response.data;
    return res;
  },
  error=>{
    if(error.response && error.response.status == 404){
      //跳转404
    }
    return Promise.reject(error,response)
  }
)
//封装get请求
export function get(url, params = {}) {
  params.t = new Date().getTime(); //get方法加一个时间参数,解决ie下可能缓存问题.
  let realUrl = base_url + url
  return service({
    url: realUrl,
    method: 'get',
    headers: {
    },
    params
  })
}

//封装post请求
export function post(url, data = {}) {
  //默认配置
  let realUrl = base_url + url
  let sendObject={
    url: realUrl,
    method: 'post',
    headers: {
      'Content-Type':'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data)
  };
//   sendObject.data=JSON.stringify(data);
  return service(sendObject)
}

//封装post请求
export function imgPost(url, data) {
  let realUrl = base_url + url
  //默认配置
  let sendObject={
    url: realUrl,
    method: 'post',
    headers: {
      'Content-Type':'multipart/form-data'
    },
    data: data
  };
//   sendObject.data=JSON.stringify(data);
  return service(sendObject)
}

//封装put方法 (resfulAPI常用)
export function put(url,data = {}){
  return service({
    url: url,
    method: 'put',
    headers: {
      'Content-Type':'application/json;charset=UTF-8'
    },
    data:JSON.stringify(data)
  })
}
//删除方法(resfulAPI常用)
export function deletes(url){
  return service({
    url: url,
    method: 'delete',
    headers: {}
  })
}

export default {
  get,
  post,
  imgPost,
  service
}


