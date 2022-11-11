/**
 * 判断是否为邮箱地址
 * @date 2022-02-27
 * @param {String} str
 * @returns {Boolean}
 */
export let isEmail = function isEmail(str) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
};
