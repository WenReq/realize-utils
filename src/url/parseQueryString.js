/**
 * url参数转对象
 * @date 2022-02-27
 * @param {String} url default: window.location.href
 * @returns {Object}
 */
function parseQueryString(url) {
  url = !url ? window.location.href : url
  if (url.indexOf('?') === -1) {
    return {}
  }
  var search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
  if (search === '') {
    return {}
  }
  search = search.split('&')
  var query = {}
  for (let i = 0; i < search.length; i++) {
    var pair = search[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
  }
  return query
}

module.exports = parseQueryString