import isArguments from "./isArguments";

/**
 * 检查 value 是否为一个扁平的 arguments 对象或数组。
 * @date 2022-02-16
 * @param {any} value
 * @returns {any}
 */
export default function isFlattenable(value) {
  const spreadableSymbol = Symbol.isConcatSpreadable
  return Array.isArray(value) || isArguments(value) ||
    !!(value && value[spreadableSymbol]);
}