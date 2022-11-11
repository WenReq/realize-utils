/**
 * 将整数数字逢三一断
 * @date 2022-08-06
 * @param {Number} value 要转换的值
 * @returns {String} 转换后的值
 * @example standardIntegerAmount(99999999999) => '99,999,999,999'
 */
export let standardIntegerAmount = function standardIntegerAmount(value) {
  if (!value) {
    return value === 0 ? '0' : '--';
  }
  const intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
  return intPartFormat;
};
