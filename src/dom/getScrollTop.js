/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:51:14
 * @FilePath: /realize-utils/src/dom/getScrollTop.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * 获取滚动条距顶部的距离
 * @date 2022-02-24
 * @returns {Number}
 */
export let getScrollTop = function getScrollTop() {
  return (
    (document.documentElement && document.documentElement.scrollTop) ||
    document.body.scrollTop
  );
};
