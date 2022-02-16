import slice from '../internal/slice.js'
import toInteger from '../utils/toFinite'
/**
 * 将数组（ array） 拆分成多个 size 长度的区块， 并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块， 那么最后剩余的元素将组成一个区块。
 * 
 * @date 2022-02-15
 * @category Array
 * @param {Array} array 需要处理的数组
 * @param {Number} size=1 每个数组区块的长度
 * @returns {Array} 返回数组区块的新数组，相当于一个二维数组
 * example:
 * utils.chunk([1, 2, 3, 4, 5, 6, 7], 2) 
 * // => [[1, 2], [3, 4], [5, 6], [7]] 
 * 
 */
export default function chunk(array, size = 1) {
  size = Math.max(toInteger(size), 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) { 
    return []
  }
  let index = 0
  let resultIndex = 0
  // Math.ceil 大于或等于给定数字的最小整数。
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resultIndex++] = slice(array, index, (index += size))
  }
  return result
}