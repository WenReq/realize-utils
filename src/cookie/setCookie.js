/**
 * 设置 cookie
 * @date 2022-02-18
 * @param {String} name cookie 名称
 * @param {String} value cookie 的值
 * @param {Number} days cookie 的有限天数
 */
function setCookie(name, value, days) { 
  var date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + '=' + value + ';expires=' + date.toUTCString();
}

module.exports = setCookie