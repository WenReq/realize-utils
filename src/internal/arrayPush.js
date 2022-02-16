/**
 * 将 values 中的元素添加到 array 中。
 * @date 2022-02-16
 * @param {Array} 修改的数组
 * @param {Array} 追加的值
 * @returns {Array} 返回添加后的数组
 */
export default function arrayPush(array, values) { 
  let index = -1,
    length = values.length,
    offset = array.length;
  
  while (++index < length) { 
    array[offset + index] = values[index];
  }

  return array
}