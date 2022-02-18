/**
 * 设置 cookie
 * @date 2022-02-18
 * @param {String} name cookie 名称
 * @param {String} value cookie 的值
 * @param {Number} days cookie 的有限天数
 */
function setCookie(name, value, days) { 
  let exDate = new Date()
  exDate.setDate(exDate.getDate() + days)
  let completeStr = name + '=' + value + ';expires=' + exDate.toUTCString()
  document.cookie = completeStr
}

export default setCookie