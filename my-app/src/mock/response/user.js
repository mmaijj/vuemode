import Mock from "mockjs";
const Random = Mock.Random;
export const getUserInfo = (options) => {
  //console.log(options)
  const template = {
    'str|2-4':'sss',
  }
  return Mock.mock(template)
}

export const getCWDetailByOrderId = (options) => {
  const template = [{
    'patient_name':'杨俊武',
    'allMoney':16800,
    'isShow':true,
    'bjtfMoney':800,
    'isShowBackRes':true,
    'backRes':'我是退回说明问题退回问题退回问题',
    'isWxpay':1,
    'wxPayMoney':800,
    'isBankpay':1,
    'bankPayMoney':800,
    'isPostpay':1,
    'postPayMoney':800,
    'isATMpay':1,
    'atmPayMoney':800,
    'isAlipay':1,
    'aliPayMoney':800,
    'fkTime':19840226,
    'fkComment':'aaaaaaaaaa',
    'mfzkComment':11111,
    'isShowFive':1
  }]
  return Mock.mock(template)
}

export const getMessageListJson = (options) => {
  const template = {
    'msg':'',
    'success':true,
    'data':{
      'obj':[
        {
          message_info:' 订单【1178B111A】您的检测包条码已于 2019-09-09 ：14:34成功修改为【88888888】。',
          message_time:'2019-09-09 14:35',
          message_type:'icon-tiaoma'
        },
        {
          message_info:' 订单【1178B111A】您的检测包条码已于 2019-09-09 ：14:34成功修改为【88888888】。',
          message_time:'2019-09-09 14:35',
          message_type:'icon-yangbenhuizong'
        },
        {
          message_info:' 订单【1178B111A】您的检测包条码已于 2019-09-09 ：14:34成功修改为【88888888】。',
          message_time:'2019-09-09 14:35',
          message_type:'icon-zhijian'
        },
        {
          message_info:' 订单【1178B111A】您的检测包条码已于 2019-09-09 ：14:34成功修改为【88888888】。',
          message_time:'2019-09-09 14:35',
          message_type:'icon-zhushi'
        },
        {
          message_info:' 订单【1178B111A】您的检测包条码已于 2019-09-09 ：14:34成功修改为【88888888】。',
          message_time:'2019-09-09 14:35',
          message_type:'icon-kefu'
        }
      ]
    }
  }
  return Mock.mock(template)
}

export const getZKListByState = () => {
  const template = {
    "msg":"",
    "success":true,
    "data":{
      "todocount":96,
      "donocount" : 6,
      "obj|20":[
        {
          "patient_name":()=>(Random.word(3)),
          "order_type":()=>(Random.word(6)),
          "sample_id":()=>(Random.word(11)),
          "dw_time":'耽误7天',
          "res_msg":()=>(Random.word(15)),
          "order_id":()=>(Random.word(11)),
          "order_state":'已完成',
          "done_type":1
        }
      ]
    }

  }
  return Mock.mock(template);
}

