/*
 * @Author: wenreq 294491328@qq.com
 * @Date: 2022-11-09 21:17:24
 * @LastEditors: wenreq 294491328@qq.com
 * @LastEditTime: 2022-11-10 22:48:45
 * @FilePath: /realize-utils/src/dom/windowResize.js
 * @Description:
 *
 * Copyright (c) 2022 by wenreq 294491328@qq.com, All Rights Reserved.
 */
/**
 * H5软键盘缩回、弹起回调
 * 当软件键盘弹起会改变当前 window.innerHeight， 监听这个值变化
 * @date 2022-02-24
 * @param {Function} downCb 当软键盘弹起后，缩回的回调
 * @param {any} upCb 当软键盘弹起的回调
 */
export let windowResize = function windowResize(downCb, upCb) {
  var clientHeight = window.innerHeight;
  downCb = typeof downCb === 'function' ? downCb : function () {};
  upCb = typeof upCb === 'function' ? upCb : function () {};
  window.addEventListener('resize', () => {
    var height = window.innerHeight;
    if (height === clientHeight) {
      downCb();
    }
    if (height < clientHeight) {
      upCb();
    }
  });
};
