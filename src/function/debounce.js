/**
 * 防抖： 保证一个函数在多少毫秒内不再被触发，只会执行一次。
 * @date 2022-02-24
 * @param {Function} func 逻辑函数
 * @param {Number} wait 执行逻辑的间隔（毫秒）
 * @param {Boolean} immediate 是否立即执行
 */

// timeout接收setTimeout返回的唯一值，result接收最终返回值
// 定时器的声明不能放在函数内部，否则将会持续新建函数，造成多次执行问题
let timeout, result;

export let debounce = function debounce(func, wait, immediate) {
  let debounced = function () {
    let context = this; //将this用context接收
    let args = arguments; //将arguments用args接收

    if (timeout) clearTimeout(timeout); //如果有timeout在执行，清除它
    if (immediate) {
      let callNow = !timeout; // 是否需要绑定this指向，和arguments
      timeout = setTimeout(function () {
        // 设置一个
        timeout = null;
      }, wait);
      if (callNow) result = func.apply(context, args);
    } else {
      // 如果不用立即执行的话
      timeout = setTimeout(function () {
        func.apply(context, args);
      }, wait);
    }
    return result;
  };

  return debounced();
};
