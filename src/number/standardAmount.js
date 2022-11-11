/**
 * 将数字（包含小数）逢三一断
 * @date 2022-08-06
 * @param {Number} value 要转换的值
 * @returns {String} 转换后的值
 * @example standardAmount(999999999.9991) => '999,999,999.999'
 */
export let standardAmount = function standardAmount(value) {
  if (!value) {
    return value === 0 ? '0' : '--';
  }
  const intPartFormat = parseFloat(value).toLocaleString();
  return intPartFormat;
};
