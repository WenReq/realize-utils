import getTag from '../internal/getTag'

/**
 * 检查 value 是否被归类为 Symbol 原语或对象。
 * @date 2022-02-15
 * @param {*} value 要检测的值
 * @returns {boolean} 是symbol类型返回true，否则返回false
 * 
 * isSymbol(Symbol.iterator) // => true
 * isSymbol('abc') // => false
 */
function isSymbol(value) {  
  const type = typeof value
  return type == 'symbol' || (type === 'object' && value != null && getTag(value) == '[object Symbol]')
}

export default isSymbol