/**
 * 防抖： 保证一个函数在多少毫秒内不再被触发，只会执行一次。
 * @date 2022-02-24
 * @param {Function} fn 逻辑函数
 * @param {Number} time 执行逻辑的间隔（毫秒） 
 */
function debounce(fn, time) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn()
    }, time)
  }
}

module.exports = debounce