/**
 * 节流
 * flag 开始为 true 则进入函数之后会执行计时器， 在一秒之后会执行
 * 继续向下之后flag被变为false， 那么在此进入函数之后将不再执行计时器
 * 在计时器执行完成之后， 将 flag变为true 之后才可以继续执行
 * 节流起到了可控制高频事件逻辑执行的次数
 * @date 2022-02-24
 * @param {Function} fn 延迟毫秒后执行的函数。
 * @param {Number} wait 延迟的毫秒数
 * @param {Boolean} immediate 为true时，fn在可以执行时立即执行，否则必须延时wait后才能执行
 */
export let throttle = function throttle(fn, wait, immediate = false) {
  let timeout = null;
  return (...args) => {
    if (!timeout) {
      immediate && fn.apply(this, args);
      timeout = setTimeout(() => {
        !immediate && fn.apply(this, args);
        timeout = null;
      }, wait);
    }
  };
};
