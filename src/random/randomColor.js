/**
 * 描述 随机生成颜色
 * @date 2022-02-27
 * @returns {String}
 */
function randomColor() {
  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}

module.exports = randomColor