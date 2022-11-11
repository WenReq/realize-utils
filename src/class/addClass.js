/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-11 21:24:02
 * @FilePath: /realize-utils/src/class/addClass.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
import { hasClass } from './hasClass';

/**
 * 为元素添加class
 * @date 2022-02-22
 * @param {HTMLElement} ele
 * @param {String} cls
 */
export let addClass = function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className += ' ' + cls;
  }
};
