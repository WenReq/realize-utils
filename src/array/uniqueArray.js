/**
 * 数组去除重复项
 * @date 2022-02-18
 * @param {Array} array 需要去重的数组
 * @returns {Array} 去重之后的数组，如果传入的不是数组则返回空数组。
 */
function uniqueArray(array) { 
  if (!Array.isArray(array)) { 
    throw new Error('第一个参数必须是数组')
  }
  if (array.length == 1) { 
    return array
  }
  return [...new Set(array)]
}

module.exports = uniqueArray