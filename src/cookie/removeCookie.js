var setCookie = require("./setCookie");

/**
 * 根据 name 删除 cookie
 * @date 2022-02-18
 * @param {String} name cookie 的名称
 */
function removeCookie(name) { 
  // 设置已过期，系统会立刻删除 cookie
  setCookie(name, '1', -1);
}

module.exports = removeCookie