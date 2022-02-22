/**
 * 判断元素是否有某个class
 * @date 2022-02-22
 * @param {HTMLElement} ele
 * @param {String} cls
 * @returns {Boolean} 包含返回true，否则返回false
 */
function hasClass(ele, cls) { 
  return (new RegExp('(\\s|^)' + cls + '(\\s|$)')).test(ele.className)
}

module.exports = hasClass