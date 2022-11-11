/**
 * 添加本地存储
 * @date 2022-02-17
 * @param {string} name 本地存储名称
 * @param {*} data 本地存储数据
 */
export let setStorage = function setStorage(name, data) {
  if (typeof data === 'object') {
    data = JSON.stringify(data);
  }
  window.localStorage.setItem(name, data);
};
