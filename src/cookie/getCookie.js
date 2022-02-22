/**
 * 根据 name 读取 cookie
 * @date 2022-02-18
 * @param {String} name
 * @returns {String}
 */
function getCookie(name) { 
  let cookieArr = document.cookie.replace(/\s/g, "").split(";")
  for (let i = 0; i < cookieArr.length; i++) {
    const eleArr = cookieArr[i].split("=");
    if (eleArr[0] === name) { 
      return decodeURIComponent(eleArr[1])
    }
  }
  return ''
}

module.exports = getCookie