/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:50:14
 * @FilePath: /realize-utils/src/dom/offset.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 获取一个元素距离文档（document）的位置，类似于JQ中的offset()
 * @date 2022-02-24
 * @param {HTMLElement} ele 元素
 * @returns { {left: number, top: number} } 距离文档左侧、顶部的距离
 */
export let offset = function offset(ele) {
  var pos = {
    left: 0,
    top: 0,
  };
  while (ele) {
    pos.left += ele.offsetLeft;
    pos.top += ele.offsetTop;
    ele += ele.offsetParent;
  }
  return pos;
};
