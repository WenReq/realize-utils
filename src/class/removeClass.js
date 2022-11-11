/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-11 21:24:05
 * @FilePath: /realize-utils/src/class/removeClass.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
import { hasClass } from './hasClass';

/**
 * 为元素移除某个class类
 * @date 2022-02-22
 * @param {HTMLElement} ele 元素
 * @param {String} cls 类名
 */
export let removeClass = function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
};
