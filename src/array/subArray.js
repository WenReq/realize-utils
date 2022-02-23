/**
 * 数组相减
 * 例如有两个数组
 * const arr1 = [1, 2, 3, 4, 5, 6] 和 const arr2 = [1, 2, 3]
 * 那么这时候需要第一个数组减去第二个数组中的项，返回剩下的项
 * 使用 subArray(arr1, arr2) 就可以解决这个问题
 * 返回 [4, 5, 6]
 * @date 2022-02-23
 * @param {Array} array1 要处理的数组
 * @param {Array} array2 要处理的数组
 * @returns {Array} 相减后的数组
 */
function subArray(array1, array2) {
  if (array1.length > array2.length) {
    return array1.filter((item1) => {
      return !array2.find((item2) => {
        return item1 === item2
      })
    })
  } else {
    return array2.filter((item1) => {
      return !array1.find((item2) => {
        return item1 === item2
      })
    })
  }
}

module.exports = subArray