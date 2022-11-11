/**
 * 判断是否为身份证号
 * @date 2022-02-27
 * @param {String|Number} str
 * @returns {Boolean}
 */
export let isIdCard = function isIdCard(str) {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(
    str
  );
};
