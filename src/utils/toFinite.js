import toNumber from '../utils/toNumber'

const INFINITY = 1 / 0
const MAX_INTEGER = 1.7976931348623157e+308
/**
 * 将value转换为有限数字
 * @date 2022-02-15
 * @param {*} value 要转换的值
 * @returns {number}  返回后的数字
 * 
 * toFinite(3.2) // => 3.2
 * toFinite(Number.MIN_VALUE) // => 5e-324
 * toFinite(Infinity) // => 1.7976931348623157e+308
 * toFinite('3.2') // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0
  }
  value = toNumber(value)
  if (value === INFINITY || value === -INFINITY) {
    const sign = (value < 0 ? -1 : 1)
    return sign * MAX_INTEGER
  }
  return value === value ? value : 0
}

export default toFinite