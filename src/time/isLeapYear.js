/**
 * 是否为闰年
 * @date 2022-02-27
 * @param {Number} year
 * @returns {Boolean}
 */
export let isLeapYear = function isLeapYear(year) {
  if (0 === year % 4 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  }
  return false;
};
