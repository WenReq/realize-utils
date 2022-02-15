/**
 * 创建' array '中从' start '到' end '的切片，但不包括' end '。  
 * @category Array
 * @param {Array} array 要切片的数组
 * @param {number} [start=0] 一开始的位置。 一个负数的索引将被视为从结束的偏移量。  
 * @param {number} [end=array.length] 最后的位置。 一个负数的索引将被视为从结束的偏移量。  
 * @returns {Array} 返回' array '的切片。
 * @example
 *
 * var array = [1, 2, 3, 4]
 *
 * utils.slice(array, 2) // => [3, 4]
 */
function slice(array, start, end) {
  let length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  start = start == null ? 0 : start
  end = end === undefined ? length : end

  if (start < 0) {
    start = -start > length ? 0 : (length + start)
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  length = start > end ? 0 : ((end - start) >>> 0)
  start >>>= 0

  let index = -1
  const result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

export default slice
