/**
 * 获取指定日期月份的总天数
 * @date 2022-02-27
 * @param {Date} time
 * @returns {Number}
 */
export let monthDays = function monthDays(time) {
  time = new Date(time);
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  return new Date(year, month, 0).getDate();
};
