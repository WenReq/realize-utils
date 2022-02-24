/**
 * 节流
 * flag 开始为 true 则进入函数之后会执行计时器， 在一秒之后会执行
 * 继续向下之后flag被变为false， 那么在此进入函数之后将不再执行计时器
 * 在计时器执行完成之后， 将 flag变为true 之后才可以继续执行
 * 节流起到了可控制高频事件逻辑执行的次数
 * @date 2022-02-24
 * @param {Function} fn 延迟毫秒后执行的函数。
 * @param {Number} time 延迟的毫秒数
 */
function throttle(fn, time) {
  let flag = true
  return function () {
    if (flag) {
      setTimeout(() => {
        fn()
        flag = true
      }, time)
    }
    flag = false
  }
}

module.exports = throttle