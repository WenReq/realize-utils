const toString = Object.prototype.toString

/**
 * 获取' value '的' toStringTag '
 * @date 2022-02-15
 * @param {*} value 要查询的值
 * @returns {string} 返回 ' toStringTag '
 */
function getTag(value) { 
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}

export default getTag