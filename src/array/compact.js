/**
 * 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
 * @date 2022-02-16
 * @category Array
 * @param {Array} array 待处理的数组
 * @returns {Array} 返回过滤掉假值的新数组
 * example:
 * utils.compat([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 * 
 */
export default function compact(array) { 
  let resIndex = 0  // 初始化新数组索引
  const result = [] // 初始化新数组
  // 传入的数组为 null，则直接返回空数组。
  if (array == null) { 
    return result
  }
  // 顺序迭代传入的数组
  for (const value of array) {
    // 如果为真值，则给新数组添加该真值。
    if (value) { 
      result[resIndex++] = value
    }
  }
  // 返回新的数组
  return result
}