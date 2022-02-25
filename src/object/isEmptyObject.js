/**
 * 判断 obj 是否为空
 * @date 2022-02-25
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmptyObject(obj) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false
  return !Object.keys(obj).length
}

module.exports = isEmptyObject