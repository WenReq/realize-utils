/**
 * 计算从一个时间到现在过去多久
 * @date 2022-02-24
 * @param {String} 字符串日期 '2020-11-29'
 * @returns {String} '451天15小时17分钟25秒'
 */
export let formatRemainTime = function formatRemainTime(time) {
  const nowStamp = new Date().getTime();
  const targetStamp = new Date(time.replace(/-/g, '/')).getTime();
  const difference = nowStamp - targetStamp;
  const allSeconds = Math.floor(difference / 1000);
  const allMinutes = Math.floor(allSeconds / 60);
  const allHours = Math.floor(allMinutes / 60);
  const day = Math.floor(allHours / 24);
  const hours = allHours % 24;
  const minutes = allMinutes % 60;
  const seconds = allSeconds % 60;
  return `${day}天${hours}小时${minutes}分钟${seconds}秒`;
};
