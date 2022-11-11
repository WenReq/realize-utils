/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-09 22:26:06
 * @FilePath: /realize-utils/src/url/stringifyQueryString.js
 * @Description: esm
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 对象序列化
 * @date 2022-02-27
 * @param {Object} obj
 * @returns {String}
 */
export let stringifyQueryString = function stringifyQueryString(obj) {
  if (!obj) return '';
  var pairs = [];

  for (var key in obj) {
    var value = obj[key];
    if (value instanceof Array) {
      for (var i = 0; i < value.length; ++i) {
        pairs.push(
          encodeURIComponent(key + '[' + i + ']') +
            '=' +
            encodeURIComponent(value[i])
        );
      }
      continue;
    }
    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }

  return pairs.join('&');
};
