const TIME_COUNT = 60 // 默认倒计时秒数
const PHONE_RULE = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/ // 校验手机号格式是否正确
const PASSWORD_RULE = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/ // 校验密码由6-16位字母和数字组成
const IDCARD_RULE = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/ // 校验身份证号

export default {
  methods: {
    // 计时器
    timeCountdown (obj) {
      if (!obj.timer) {
        obj.waitTime = TIME_COUNT
        obj.canGet = false
        obj.timer = setInterval(() => {
          if (obj.waitTime > 0 && obj.waitTime <= TIME_COUNT) {
            obj.waitTime--
          } else {
            obj.canGet = true
            clearInterval(obj.timer) // 清空定时器
            obj.timer = null
          }
        }, 1000)
      }
      return {
        timer: obj.timer,
        canGet: obj.canGet,
        waitTime: obj.waitTime
      }
    },
    /* 校验手机号 */
    isRightNumber (phone) {
      let reg = new RegExp(PHONE_RULE)
      if (reg.test(phone)) {
        return true
      } else {
        return false
      }
    },
    /* 校验身份证号 */
    isRightId (idcard) {
      let re = new RegExp(IDCARD_RULE)
      if (re.test(idcard)) {
        return true
      } else {
        return false
      }
    },
    /* 校验密码 */
    isRightPass (password) {
      let re = new RegExp(PASSWORD_RULE)
      if (re.test(password)) {
        return true
      } else {
        return false
      }
    },
    // 获取当前时间，格式YYYY-MM-DD
    getNowFormatDate () {
      let date = new Date()
      const seperator1 = '-'
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let strDate = date.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      const currentdate = year + seperator1 + month + seperator1 + strDate
      return currentdate
    },
    /* 格式化时间戳 */
    formatDate (date) {
      let newDate = new Date(date);
      let YY = newDate.getFullYear() + '-';
      let MM = (newDate.getMonth() + 1 < 10 ? '0' + (newDate.getMonth() + 1) : newDate.getMonth() + 1) + '-';
      let DD = (newDate.getDate() < 10 ? '0' + (newDate.getDate()) : newDate.getDate());
      let hh = (newDate.getHours() < 10 ? '0' + newDate.getHours() : newDate.getHours()) + ':';
      let mm = (newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes()) + ':';
      let ss = (newDate.getSeconds() < 10 ? '0' + newDate.getSeconds() : newDate.getSeconds());
      return YY + MM + DD +" "+hh + mm + ss;
    }
  }
}
