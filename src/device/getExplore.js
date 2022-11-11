/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-11 23:49:16
 * @FilePath: /realize-utils/src/device/getExplore.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 获取浏览器类型和版本
 * @date 2022-02-23
 * @returns {String} '类型：版本'
 */
export let getExplore = function getExplore() {
  var sys = {},
    ua = navigator.userAgent.toLowerCase(),
    s;
  // IE - rv:11.0) like Gecko
  (s = ua.match(/rv:([\d.]+)\) like gecko/))
    ? (sys.ie = s[1])
    : (s = ua.match(/msie ([\d\.]+)/))
    ? (sys.ie = s[1])
    : (s = ua.match(/edge\/([\d\.]+)/))
    ? (sys.edge = s[1])
    : (s = ua.match(/firefox\/([\d\.]+)/))
    ? (sys.firefox = s[1])
    : (s = ua.match(/(?:opera|opr).([\d\.]+)/))
    ? (sys.opera = s[1])
    : (s = ua.match(/chrome\/([\d\.]+)/))
    ? (sys.chrome = s[1])
    : (s = ua.match(/version\/([\d\.]+).*safari/))
    ? (sys.safari = s[1])
    : 0;

  // 根据关系进行判断
  if (sys.ie) return 'IE：' + sys.ie;
  if (sys.edge) return 'EDGE: ' + sys.edge;
  if (sys.firefox) return 'Firefox: ' + sys.firefox;
  if (sys.chrome) return 'Chrome: ' + sys.chrome;
  if (sys.opera) return 'Opera: ' + sys.opera;
  if (sys.safari) return 'Safari: ' + sys.safari;
  return 'unknown';
};
