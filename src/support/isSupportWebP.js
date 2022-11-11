/**
 * 判断浏览器是否支持webP格式图片
 * @date 2022-02-27
 * @returns {Boolean}
 */
export let isSupportWebP = function isSupportWebP() {
  return (
    !![].map &&
    document
      .createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') == 0
  );
};
