/**
 * 设置滚动条距顶部的距离
 * @date 2022-02-24
 * @param {Number} value 距顶部的距离的值
 */
function setScrollTop(value) {
  window.scrollTo(0, value);
  return value;
}

module.exports = setScrollTop