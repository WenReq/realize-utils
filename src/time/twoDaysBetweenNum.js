/**
 * 两个日期之间的天数
 * @date 2022-06-16
 * @param {Date} startDay 开始日期 '2022-06-16'
 * @param {Date} endDay 结束日期 '2022-06-20'
 * @returns {Number} 两个日期之间的天数 4
 */
export let twoDaysBetweenNum = (startDay, endDay) => {
  if (
    startDay === '' ||
    startDay === null ||
    startDay === undefined ||
    endDay === '' ||
    endDay === null ||
    endDay === undefined
  ) {
    return null;
  }
  const startDate = Date.parse(startDay);
  const endDate = Date.parse(endDay);
  if (startDate == endDate) {
    return 0;
  }
  const days = (endDate - startDate) / (1 * 24 * 60 * 60 * 1000);
  return days;
};
