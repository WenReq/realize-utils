/**
 * 判断是否为16进制颜色， rgb 或 rgba
 * @date 2022-02-27
 * @param {String} str
 * @returns {Boolean}
 */
export let isColor = function isColor(str) {
  return /^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){2}\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*\)|[Aa]\((\s*(2[0-4]\d|25[0-5]|[01]?\d{1,2})\s*,){3}\s*([01]|0\.\d+)\s*\)))$/.test(str)
}
