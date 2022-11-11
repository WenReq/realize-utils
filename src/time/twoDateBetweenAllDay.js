/**
 * 根据指定的两个日期，计算并返回中间的所有日期。
 * @date 2022-06-09
 * @param {String} startDay 开始日期 '2022-06-01'
 * @param {String} endDay 结束日期 '2022-06-09'
 * @returns {Array} 包含所有日期的集合 ['2022-06-01', '2022-06-02', '2022-06-03', '2022-06-04', '2022-06-05', '2022-06-06', '2022-06-07', '2022-06-08', '2022-06-09']
 */
export let twoDateBetweenAllDay = function twoDateBetweenAllDay(
  startDay,
  endDay
) {
  let arr = [];
  let dates = [];
  // 设置两个日期 UTC 时间
  const sd = new Date(startDay);
  const ed = new Date(endDay);
  // 获取两个日期 GTM 时间
  const s = sd.getTime() - 24 * 60 * 60 * 1000;
  const e = ed.getTime() - 24 * 60 * 60 * 1000;
  // 获取到两个日期之间的每一天的毫秒数
  for (let i = s; i <= e; ) {
    i = i + 24 * 60 * 60 * 1000;
    arr.push(parseInt(i));
  }
  // 获取每一天的时间 YY-MM-DD
  for (const j in arr) {
    const time = new Date(arr[j]);
    const year = time.getFullYear(time);
    const month = String(time.getMonth() + 1).padStart(2, '0');
    const day = String(time.getDate()).padStart(2, '0');
    const YYMMDD = `${year}-${month}-${day}`;
    dates.push(YYMMDD);
  }
  return dates;
};
