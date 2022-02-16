/**
 * 检查 value 是否可能是一个 arguments 对象。  
 * @date 2022-02-16
 * @param {*} value 要检测的值
 * @returns {boolean} 如果 value 是一个 arguments 对象，则返回 true ，否则返回 false。  
 */
export default function isArguments(value) {
  return typeof value === 'object' && value !== null && Object.prototype.toString.call() == '[Object Arguments]'
}