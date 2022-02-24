/**
 * 获取滚动条距顶部的距离
 * @date 2022-02-24
 * @returns {Number}
 */
function getScrollTop() {
  return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
}

module.exports = getScrollTop;