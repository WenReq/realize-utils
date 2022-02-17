/**
 * 添加本地存储
 * @date 2022-02-17
 * @param {string} name 本地存储名称
 * @param {*} data 本地存储数据
 */
function setStorage(name, data) {
  if (typeof data === 'object') { 
    data = JSON.stringify(data)
  }
  window.localStorage.setItem(name, data)
}

/**
 * 获取本地存储
 * @date 2022-02-17
 * @param {string} name 本地存储名称
 */
function getStorage(name) {
  const data = window.localStorage.getItem(name)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

/**
 * 删除本地存储
 * @date 2022-02-17
 * @param {string} name 本地存储名称
 * @returns {boolean} 删除成功 true，否则 false
 */
function removeStorage(name) { 
  return window.localStorage.removeItem(name)
}

export {
  setStorage,
  getStorage,
  removeStorage
}