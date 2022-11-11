/**
 * 将指定字符串由一种时间格式转化为另一种。from 的格式应对应 str 的位置
 * @date 2022-08-07
 * @param {String} str 原始的日期字符串
 * @param {String} from 匹配原始字符串的格式
 * @param {String} to 想要转换的日期字符串格式
 * @returns {String} 格式化后的日期字符串
 * @example
 *  dateStrForma('20220807', 'YYYYMMDD', 'YYYY年MM月DD日') ==> 2022年08月07日
 *  dateStrForma('121220220807', '----YYYYMMDD', 'YYYY年MM月DD日') ==> 2022年08月07日
 *  dateStrForma('2022年08月07日', 'YYYY年MM月DD日', 'YYYYMMDD') ==> 20220807
 *
 * 一般的也可以使用正则来实现
 * '2022年08月07日'.replace(/(\d{4})年(\d{2})月(\d{2})日/, '$1-$2-$3') ==> 2022-08-07
 */
export let dateStrFormat = function dateStrFormat(str, from, to) {
  //'20220807' 'YYYYMMDD' 'YYYY年MM月DD日'
  str += '';
  let Y = '';
  if (~(Y = from.indexOf('YYYY'))) {
    Y = str.substring(Y, Y + 4);
    to = to.replace(/YYYY|yyyy/g, Y);
  } else if (~(Y = from.indexOf('YY'))) {
    Y = str.substring(Y, Y + 2);
    to = to.replace(/YY|yy/g, Y);
  }

  let k, i;
  ['M', 'D', 'H', 'h', 'm', 's'].forEach((s) => {
    i = from.indexOf(s + s);
    k = ~i ? str.substring(i, i + 2) : '';
    to = to.replace(s + s, k);
  });
  return to;
};
