import baseFlatten from "../utils/baseFlatten";
import copyArray from "../utils/copyArray";
import arrayPush from "../internal/arrayPush";

/**
 * 创建一个新数组，将 array 与任何数组或其他链接在一起。
 * @date 2022-02-16
 * @category Array
 * @param {Array} array 需要链接的数组
 * @param {...*} [values] 需要链接的值
 * @returns {Array} 返回新的链接数组
 * @example
 * var array = [1];
 * var other = utils.concat(array, 2, [3], [[4]]);
 * console.log(other);
 * // => [1, 2, 3, [4]]
 * 
 * console.log(array);
 * // => [1]
 */
export default function concat() {
  // 根据传入的参数数量分情况处理。
  let length = arguments.length
  // 1.没有传参，返回空数组
  if (!length) { 
    return []
  }
  /**
   * 2. 其他
   * 创建和参数长度 - 1 的空数组
   * 需要链接的数组
   * 参数的长度
   */
  let args = Array(length - 1),
    array = arguments[0],
    index = length;
  // 当参数长度 - 1 大于 0 时，执行代码。
  while (index--) {
    // 将需要链接的值对应的存储在空数组中
    args[index - 1] = arguments[index]
  }
  // 处理需要链接的数组。是数组则拷贝使用，否则用[]包括。
  let arr = Array.isArray(array) ? copyArray(array) : [array]
  // 将处理好的参数所组装好的数组进行拍平处理。然后放到需要链接的数组后，返回。
  let base = baseFlatten(args, 1)
  return arrayPush(arr, base)
}