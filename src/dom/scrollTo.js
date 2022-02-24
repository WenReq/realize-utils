var getScrollTop = require('./getScrollTop')
var setScrollTop = require('./setScrollTop')
var requestAnimFrame = (function () {
  // window.requestAnimationFrame 要求浏览器在下次重绘之前调用指定的回调函数更新动画。
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60)
    }
})()

/**
 * 在 duration 时间内，滚动条平滑滚动到 to 指定位置
 * @date 2022-02-24
 * @param {Number} to 滚动位置的值
 * @param {Number} duration 时间-毫秒数
 */
function scrollTo(to, duration) {
  if (duration < 0) {
    setScrollTop(to);
    return
  }
  var diff = to - getScrollTop()
  if (diff === 0) return
  var step = diff / duration * 10;
  requestAnimFrame(
    function () {
      if (Math.abs(step) > Math.abs(diff)) {
        setScrollTop(getScrollTop() + diff);
        return;
      }
      setScrollTop(getScrollTop() + step);
      if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {
        return;
      }
      scrollTo(to, duration - 16);
    }
  )
}

module.exports = scrollTo;