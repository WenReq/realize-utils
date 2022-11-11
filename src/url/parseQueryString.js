/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-09 22:23:02
 * @FilePath: /realize-utils/src/url/parseQueryString.js
 * @Description: esm
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * url参数转对象
 * @date 2022-02-27
 * @param {String} url default: window.location.href
 * @returns {Object}
 */
export let parseQueryString = function parseQueryString(url) {
  url = !url ? window.location.href : url;
  if (url.indexOf('?') === -1) {
    return {};
  }
  var search =
    url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
  if (search === '') {
    return {};
  }
  search = search.split('&');
  var query = {};
  for (let i = 0; i < search.length; i++) {
    var pair = search[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
};
