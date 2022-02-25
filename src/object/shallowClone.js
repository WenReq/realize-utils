/**
 * 浅克隆
 * @date 2022-02-25
 * @param {Object} obj 需要拷贝的对象
 * @returns {Object} 浅拷贝之后的对象 
 */
function shallowClone(obj) {
  if (!(obj instanceof Object)) {
    throw new Error('请传入对象')
  }
  const res = {}
  for (const key in obj) {
    res[key] = obj[key]
  }
  return res
}

module.exports = shallowClone