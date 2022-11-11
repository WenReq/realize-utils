/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:49:20
 * @FilePath: /realize-utils/src/dom/setScrollTop.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 设置滚动条距顶部的距离
 * @date 2022-02-24
 * @param {Number} value 距顶部的距离的值
 */
export let setScrollTop = function setScrollTop(value) {
  window.scrollTo(0, value);
  return value;
};
