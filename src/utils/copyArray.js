/**
 * 将 source 中的值复制到 array 中
 * @date 2022-02-16
 * @param {Array} source 要从其复制的数组
 * @param {Array} array 要将值复制到的数组
 * @returns {Array} 返回复制后的数组
 */
export default function copyArray(source, array) {
  let index = -1,
    length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}