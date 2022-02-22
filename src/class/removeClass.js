var hasClass = require('./hasClass');

/**
 * 为元素移除某个class类
 * @date 2022-02-22
 * @param {HTMLElement} ele 元素
 * @param {String} cls 类名
 */
function removeClass(ele, cls) {
  if (hasClass(ele, cls)) { 
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
}

module.exports = removeClass