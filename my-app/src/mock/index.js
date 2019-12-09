import Mock from 'mockjs'
import { getMessageListJson,getZKListByState} from './response/user.js'
//Mock.mock('/getDatamingData','post',getUserInfo);
//Mock.mock('/getCWDetailByOrderId','get',getCWDetailByOrderId);
Mock.mock('/getMessageList','post',getMessageListJson);
Mock.mock('/getZKListByState','post',getZKListByState);


export default Mock



