import { get,post,put,deletes } from './axios.js'
//let base_api = process.env.API_ROOT;
let base_api='http://testweonco.origimed.com';
//let token = localStorage.getItem('Authorization');
//let token = 'bcclrtX1Qtzaro7iFPnyfT';
export const getLoginDetail = (data)=>{
  return post(`/getMessageList`,data)
}
export const getZKListByState = (data)=>{
  return post(`/getZKListByState`,data)
}

