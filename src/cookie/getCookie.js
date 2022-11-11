/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:54:19
 * @FilePath: /realize-utils/src/cookie/getCookie.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 根据 name 读取 cookie
 * @date 2022-02-18
 * @param {String} name
 * @returns {String}
 */
export let getCookie = function getCookie(name) {
  let cookieArr = document.cookie.replace(/\s/g, '').split(';');
  for (let i = 0; i < cookieArr.length; i++) {
    const eleArr = cookieArr[i].split('=');
    if (eleArr[0] === name) {
      return decodeURIComponent(eleArr[1]);
    }
  }
  return '';
};
