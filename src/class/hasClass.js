/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:55:41
 * @FilePath: /realize-utils/src/class/hasClass.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 判断元素是否有某个class
 * @date 2022-02-22
 * @param {HTMLElement} ele
 * @param {String} cls
 * @returns {Boolean} 包含返回true，否则返回false
 */
export let hasClass = function hasClass(ele, cls) {
  return new RegExp('(\\s|^)' + cls + '(\\s|$)').test(ele.className);
};
