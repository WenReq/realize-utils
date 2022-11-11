/**
 * 删除本地存储
 * @date 2022-02-17
 * @param {string} name 本地存储名称
 * @returns {boolean} 删除成功 true，否则 false
 */
export let removeStorage = function removeStorage(name) {
  return window.localStorage.removeItem(name);
};
