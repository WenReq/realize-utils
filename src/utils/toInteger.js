import toFinite from '../utils/toFinite'

/**
 * 将 value 转换为整数
 * @date 2022-02-15
 * @param {number} value 要转换的值
 * @returns {number} 返回转换后的整数。
 * 
 * toInteger(3.2) // => 3
 * toInteger(Number.MIN_VALUE) // => 0
 * toInteger(Infinity) // => 1.7976931348623157e+308
 * toInteger('3.2') // => 3
 */
function toInteger(value) {
  const result = toFinite(value)
  const remainder = result % 1 // 取小数值

  return remainder ? result - remainder : result
}

export default toInteger

