/**
 * 判断是否为手机号
 * @date 2022-02-27
 * @param {String|Number} str
 * @returns {Boolean}
 */
export let isPhoneNum = function isPhoneNum(str) {
  return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str)
}
