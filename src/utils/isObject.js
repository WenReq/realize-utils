/**
 * 检测value是否是对象
 * @date 2022-02-15
 * @param {*} value 检测的值
 * @returns {boolean} value是对象返回true，否则返回false
 * 
 * isObject({}) // => true
 * isObject([1, 2, 3]) // => true
 * isObject(Function) // => true
 * isObject(null) // => false
 */
function isObject(value) { 
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

export default isObject