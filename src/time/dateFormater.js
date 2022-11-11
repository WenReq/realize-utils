/**
 * 格式化时间
 * @date 2022-08-07
 * @param {String} formater 格式化格式 'YYYY-MM-DD HH:mm:ss' 'YYYY-MM-DD' 'YYYYMMDDHHmm'
 * @param {Date | String} t 可以不传，不传默认 new Date()。
 * @returns {String} 格式化后的日期字符串
 * @example dateFormater('YYYY-MM-DD', '2020.11.29') => '2020-11-29'
 */
export let dateFormater = function dateFormater(formater, t) {
  let date = t ? new Date(t) : new Date(),
    Y = date.getFullYear() + '',
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  return formater
    .replace(/YYYY|yyyy/g, Y)
    .replace(/YY|yy/g, Y.substring(2, 4))
    .replace(/MM/g, (M < 10 ? '0' : '') + M)
    .replace(/DD/g, (D < 10 ? '0' : '') + D)
    .replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
    .replace(/mm/g, (m < 10 ? '0' : '') + m)
    .replace(/ss/g, (s < 10 ? '0' : '') + s);
};
