/**
 * 获取一个元素距离文档（document）的位置，类似于JQ中的offset()
 * @date 2022-02-24
 * @param {HTMLElement} ele 元素
 * @returns { {left: number, top: number} } 距离文档左侧、顶部的距离
 */
function offset(ele) {
  var pos = {
    left: 0,
    top: 0
  }
  while (ele) {
    pos.left += ele.offsetLeft;
    pos.top += ele.offsetTop;
    ele += ele.offsetParent;
  }
  return pos;
}

module.exports = offset