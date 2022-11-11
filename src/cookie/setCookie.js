/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:52:57
 * @FilePath: /realize-utils/src/cookie/setCookie.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 设置 cookie
 * @date 2022-02-18
 * @param {String} name cookie 名称
 * @param {String} value cookie 的值
 * @param {Number} days cookie 的有限天数
 */
export let setCookie = function setCookie(name, value, days) {
  var date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie = name + '=' + value + ';expires=' + date.toUTCString();
};
