/**
 * 将多个数组合并为一个新的数组，并去重。
 * 该方法可以传一个或多个数组
 * @date 2022-02-18
 * @returns {Array} 将多个数组合并后并去重后的新数组
 */
function mergeArrayDelRepeat() { 
  let newArr = []
  for (let i = 0; i < arguments.length; i++) {
    newArr.push(...arguments[i])
  }
  return [...new Set([...newArr])]
}

module.exports = mergeArrayDelRepeat