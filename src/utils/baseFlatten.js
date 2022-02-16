import isFlattenable from "./isFlattenable";

/**
 * flatten 的基本实现，支持限制 flatten。  
 * @date 2022-02-16
 * @param {Array} array 要变平的数组
 * @param {number} depth 最大递归深度。
 * @param {boolean} [predicate=isFlattenable] 每次迭代调用的函数
 * @param {boolean} [isStrict] 限制通过 predicate 检查的值。  
 * @param {Array} [result=[]] 初始结果值
 * @returns {Array} 返回新的扁平数组。
 */
export default function baseFlatten(array, depth, predicate, isStrict, result) {
  predicate || (predicate = isFlattenable);
  result || (result = []);

  if (array == null) {
    return result
  }

  for (const value of array) {
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        result.push(...value)
      }
    } else if (!isStrict) {
      result[result.length] = value
    }
  }
  return result;
}