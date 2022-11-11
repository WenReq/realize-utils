/**
 * 生成指定范围[min, max] 的随机数
 * @date 2022-02-27
 * @param {Number} min
 * @param {Number} max
 * @returns {Number}
 */
export let randomNumber = function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
