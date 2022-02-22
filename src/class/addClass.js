var hasClass = require('./hasClass');

/**
 * 为元素添加class
 * @date 2022-02-22
 * @param {HTMLElement} ele
 * @param {String} cls
 */
function addClass(ele, cls) {  
  if (!hasClass(ele, cls)) { 
    ele.className += ' ' + cls;
  }
}

module.exports = addClass