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

export default getStorage