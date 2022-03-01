(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["utils"] = factory();
	else
		root["utils"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src sync recursive ^\\.\\/.+\\/.+\\.js$":
/*!***********************************!*\
  !*** ./src sync ^\.\/.+\/.+\.js$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./array/equalityArray.js\": \"./src/array/equalityArray.js\",\n\t\"./array/mergeArrayDelRepeat.js\": \"./src/array/mergeArrayDelRepeat.js\",\n\t\"./array/subArray.js\": \"./src/array/subArray.js\",\n\t\"./array/uniqueArray.js\": \"./src/array/uniqueArray.js\",\n\t\"./class/addClass.js\": \"./src/class/addClass.js\",\n\t\"./class/hasClass.js\": \"./src/class/hasClass.js\",\n\t\"./class/removeClass.js\": \"./src/class/removeClass.js\",\n\t\"./cookie/getCookie.js\": \"./src/cookie/getCookie.js\",\n\t\"./cookie/removeCookie.js\": \"./src/cookie/removeCookie.js\",\n\t\"./cookie/setCookie.js\": \"./src/cookie/setCookie.js\",\n\t\"./device/getExplore.js\": \"./src/device/getExplore.js\",\n\t\"./device/getOS.js\": \"./src/device/getOS.js\",\n\t\"./dom/getScrollTop.js\": \"./src/dom/getScrollTop.js\",\n\t\"./dom/offset.js\": \"./src/dom/offset.js\",\n\t\"./dom/scrollTo.js\": \"./src/dom/scrollTo.js\",\n\t\"./dom/setScrollTop.js\": \"./src/dom/setScrollTop.js\",\n\t\"./dom/windowResize.js\": \"./src/dom/windowResize.js\",\n\t\"./function/debounce.js\": \"./src/function/debounce.js\",\n\t\"./function/throttle.js\": \"./src/function/throttle.js\",\n\t\"./keycode/getKeyName.js\": \"./src/keycode/getKeyName.js\",\n\t\"./object/deepClone.js\": \"./src/object/deepClone.js\",\n\t\"./object/getFormData.js\": \"./src/object/getFormData.js\",\n\t\"./object/isEmptyObject.js\": \"./src/object/isEmptyObject.js\",\n\t\"./object/shallowClone.js\": \"./src/object/shallowClone.js\",\n\t\"./random/randomColor.js\": \"./src/random/randomColor.js\",\n\t\"./random/randomNumber.js\": \"./src/random/randomNumber.js\",\n\t\"./regexp/isColor.js\": \"./src/regexp/isColor.js\",\n\t\"./regexp/isEmail.js\": \"./src/regexp/isEmail.js\",\n\t\"./regexp/isIdCard.js\": \"./src/regexp/isIdCard.js\",\n\t\"./regexp/isPhoneNum.js\": \"./src/regexp/isPhoneNum.js\",\n\t\"./regexp/isUrl.js\": \"./src/regexp/isUrl.js\",\n\t\"./storage/getStorage.js\": \"./src/storage/getStorage.js\",\n\t\"./storage/removeStorage.js\": \"./src/storage/removeStorage.js\",\n\t\"./storage/setStorage.js\": \"./src/storage/setStorage.js\",\n\t\"./string/digitUppercase.js\": \"./src/string/digitUppercase.js\",\n\t\"./support/isSupportWebP.js\": \"./src/support/isSupportWebP.js\",\n\t\"./time/formatPassTime.js\": \"./src/time/formatPassTime.js\",\n\t\"./time/formatRemainTime.js\": \"./src/time/formatRemainTime.js\",\n\t\"./time/isLeapYear.js\": \"./src/time/isLeapYear.js\",\n\t\"./time/isSameDay.js\": \"./src/time/isSameDay.js\",\n\t\"./time/monthDays.js\": \"./src/time/monthDays.js\",\n\t\"./time/timeLeft.js\": \"./src/time/timeLeft.js\",\n\t\"./url/parseQueryString.js\": \"./src/url/parseQueryString.js\",\n\t\"./url/stringifyQueryString.js\": \"./src/url/stringifyQueryString.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src sync recursive ^\\\\.\\\\/.+\\\\/.+\\\\.js$\";\n\n//# sourceURL=webpack://utils/./src_sync_^\\.\\/.+\\/.+\\.js$?");

/***/ }),

/***/ "./src/array/equalityArray.js":
/*!************************************!*\
  !*** ./src/array/equalityArray.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 判断两个数组是否相等\r\n * @date 2022-02-18\r\n * @param {Array} array1 第一个需要对比的数组\r\n * @param {Array} array2 第二个需要对比的数组\r\n * @returns {Boolean}\r\n */\nfunction equalityArray(array1, array2) {\n  // 直接判读，两个不相等，则不相等。\n  if (array1 === array2) {\n    return true;\n  }\n  // 判断length，不相等，则不相等。\n  if (array1.length !== array2.length) {\n    return false;\n  }\n  // 循环判断各项，如有一项不相等，则不相等。\n  for (let i = 0; i < array1.length; i++) {\n    if (array1[i] !== array2[i]) {\n      return false;\n    }\n  }\n  // 否则，则是相等的。\n  return true;\n}\n\nmodule.exports = equalityArray;\n\n//# sourceURL=webpack://utils/./src/array/equalityArray.js?");

/***/ }),

/***/ "./src/array/mergeArrayDelRepeat.js":
/*!******************************************!*\
  !*** ./src/array/mergeArrayDelRepeat.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 将多个数组合并为一个新的数组，并去重。\r\n * 该方法可以传一个或多个数组\r\n * @date 2022-02-18\r\n * @returns {Array} 将多个数组合并后并去重后的新数组\r\n */\nfunction mergeArrayDelRepeat() {\n  let newArr = [];\n  for (let i = 0; i < arguments.length; i++) {\n    newArr.push(...arguments[i]);\n  }\n  return [...new Set([...newArr])];\n}\n\nmodule.exports = mergeArrayDelRepeat;\n\n//# sourceURL=webpack://utils/./src/array/mergeArrayDelRepeat.js?");

/***/ }),

/***/ "./src/array/subArray.js":
/*!*******************************!*\
  !*** ./src/array/subArray.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 数组相减\r\n * 例如有两个数组\r\n * const arr1 = [1, 2, 3, 4, 5, 6] 和 const arr2 = [1, 2, 3]\r\n * 那么这时候需要第一个数组减去第二个数组中的项，返回剩下的项\r\n * 使用 subArray(arr1, arr2) 就可以解决这个问题\r\n * 返回 [4, 5, 6]\r\n * @date 2022-02-23\r\n * @param {Array} array1 要处理的数组\r\n * @param {Array} array2 要处理的数组\r\n * @returns {Array} 相减后的数组\r\n */\nfunction subArray(array1, array2) {\n  if (array1.length > array2.length) {\n    return array1.filter(item1 => {\n      return !array2.find(item2 => {\n        return item1 === item2;\n      });\n    });\n  } else {\n    return array2.filter(item1 => {\n      return !array1.find(item2 => {\n        return item1 === item2;\n      });\n    });\n  }\n}\n\nmodule.exports = subArray;\n\n//# sourceURL=webpack://utils/./src/array/subArray.js?");

/***/ }),

/***/ "./src/array/uniqueArray.js":
/*!**********************************!*\
  !*** ./src/array/uniqueArray.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 数组去除重复项\r\n * @date 2022-02-18\r\n * @param {Array} array 需要去重的数组\r\n * @returns {Array} 去重之后的数组，如果传入的不是数组则返回空数组。\r\n */\nfunction uniqueArray(array) {\n  if (!Array.isArray(array)) {\n    throw new Error('第一个参数必须是数组');\n  }\n  if (array.length == 1) {\n    return array;\n  }\n  return [...new Set(array)];\n}\n\nmodule.exports = uniqueArray;\n\n//# sourceURL=webpack://utils/./src/array/uniqueArray.js?");

/***/ }),

/***/ "./src/class/addClass.js":
/*!*******************************!*\
  !*** ./src/class/addClass.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hasClass = __webpack_require__(/*! ./hasClass */ \"./src/class/hasClass.js\");\n\n/**\r\n * 为元素添加class\r\n * @date 2022-02-22\r\n * @param {HTMLElement} ele\r\n * @param {String} cls\r\n */\nfunction addClass(ele, cls) {\n  if (!hasClass(ele, cls)) {\n    ele.className += ' ' + cls;\n  }\n}\n\nmodule.exports = addClass;\n\n//# sourceURL=webpack://utils/./src/class/addClass.js?");

/***/ }),

/***/ "./src/class/hasClass.js":
/*!*******************************!*\
  !*** ./src/class/hasClass.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 判断元素是否有某个class\r\n * @date 2022-02-22\r\n * @param {HTMLElement} ele\r\n * @param {String} cls\r\n * @returns {Boolean} 包含返回true，否则返回false\r\n */\nfunction hasClass(ele, cls) {\n  return new RegExp('(\\\\s|^)' + cls + '(\\\\s|$)').test(ele.className);\n}\n\nmodule.exports = hasClass;\n\n//# sourceURL=webpack://utils/./src/class/hasClass.js?");

/***/ }),

/***/ "./src/class/removeClass.js":
/*!**********************************!*\
  !*** ./src/class/removeClass.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var hasClass = __webpack_require__(/*! ./hasClass */ \"./src/class/hasClass.js\");\n\n/**\r\n * 为元素移除某个class类\r\n * @date 2022-02-22\r\n * @param {HTMLElement} ele 元素\r\n * @param {String} cls 类名\r\n */\nfunction removeClass(ele, cls) {\n  if (hasClass(ele, cls)) {\n    var reg = new RegExp('(\\\\s|^)' + cls + '(\\\\s|$)');\n    ele.className = ele.className.replace(reg, ' ');\n  }\n}\n\nmodule.exports = removeClass;\n\n//# sourceURL=webpack://utils/./src/class/removeClass.js?");

/***/ }),

/***/ "./src/cookie/getCookie.js":
/*!*********************************!*\
  !*** ./src/cookie/getCookie.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 根据 name 读取 cookie\r\n * @date 2022-02-18\r\n * @param {String} name\r\n * @returns {String}\r\n */\nfunction getCookie(name) {\n  let cookieArr = document.cookie.replace(/\\s/g, \"\").split(\";\");\n  for (let i = 0; i < cookieArr.length; i++) {\n    const eleArr = cookieArr[i].split(\"=\");\n    if (eleArr[0] === name) {\n      return decodeURIComponent(eleArr[1]);\n    }\n  }\n  return '';\n}\n\nmodule.exports = getCookie;\n\n//# sourceURL=webpack://utils/./src/cookie/getCookie.js?");

/***/ }),

/***/ "./src/cookie/removeCookie.js":
/*!************************************!*\
  !*** ./src/cookie/removeCookie.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setCookie = __webpack_require__(/*! ./setCookie */ \"./src/cookie/setCookie.js\");\n\n/**\r\n * 根据 name 删除 cookie\r\n * @date 2022-02-18\r\n * @param {String} name cookie 的名称\r\n */\nfunction removeCookie(name) {\n  // 设置已过期，系统会立刻删除 cookie\n  setCookie(name, '1', -1);\n}\n\nmodule.exports = removeCookie;\n\n//# sourceURL=webpack://utils/./src/cookie/removeCookie.js?");

/***/ }),

/***/ "./src/cookie/setCookie.js":
/*!*********************************!*\
  !*** ./src/cookie/setCookie.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 设置 cookie\r\n * @date 2022-02-18\r\n * @param {String} name cookie 名称\r\n * @param {String} value cookie 的值\r\n * @param {Number} days cookie 的有限天数\r\n */\nfunction setCookie(name, value, days) {\n  var date = new Date();\n  date.setDate(date.getDate() + days);\n  document.cookie = name + '=' + value + ';expires=' + date.toUTCString();\n}\n\nmodule.exports = setCookie;\n\n//# sourceURL=webpack://utils/./src/cookie/setCookie.js?");

/***/ }),

/***/ "./src/device/getExplore.js":
/*!**********************************!*\
  !*** ./src/device/getExplore.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 获取浏览器类型和版本\r\n * @date 2022-02-23\r\n * @returns {String} '类型：版本'\r\n */\nfunction getExplore() {\n  var sys = {},\n      ua = navigator.userAgent.toLowerCase(),\n      s;\n  // IE - rv:11.0) like Gecko\n  (s = ua.match(/rv:([\\d.]+)\\) like gecko/)) ? sys.ie = s[1] : (s = ua.match(/msie ([\\d\\.]+)/)) ? sys.ie = s[1] : (s = ua.match(/edge\\/([\\d\\.]+)/)) ? sys.edge = s[1] : (s = ua.match(/firefox\\/([\\d\\.]+)/)) ? sys.firefox = s[1] : (s = ua.match(/(?:opera|opr).([\\d\\.]+)/)) ? sys.opera = s[1] : (s = ua.match(/chrome\\/([\\d\\.]+)/)) ? sys.chrome = s[1] : (s = ua.match(/version\\/([\\d\\.]+).*safari/)) ? sys.safari = s[1] : 0;\n\n  // 根据关系进行判断\n  if (sys.ie) return 'IE：' + sys.ie;\n  if (sys.edge) return 'EDGE: ' + sys.edge;\n  if (sys.firefox) return 'Firefox: ' + sys.firefox;\n  if (sys.chrome) return 'Chrome: ' + sys.chrome;\n  if (sys.opera) return 'Opera: ' + sys.opera;\n  if (sys.safari) return 'Safari: ' + sys.safari;\n  return 'unknown';\n}\n\nmodule.exports = getExplore;\n\n//# sourceURL=webpack://utils/./src/device/getExplore.js?");

/***/ }),

/***/ "./src/device/getOS.js":
/*!*****************************!*\
  !*** ./src/device/getOS.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 获取操作系统类型\r\n * @date 2022-02-23\r\n * @returns {String} 操作系统类型\r\n */\nfunction getOS() {\n  var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';\n  var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';\n\n  if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) return 'ios';\n  if (/android/i.test(userAgent)) return 'android';\n  if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'windowsPhone';\n  if (/mac/i.test(appVersion)) return 'MacOSX';\n  if (/win/i.test(appVersion)) return 'windows';\n  if (/linux/i.test(appVersion)) return 'linux';\n}\n\nmodule.exports = getOS;\n\n//# sourceURL=webpack://utils/./src/device/getOS.js?");

/***/ }),

/***/ "./src/dom/getScrollTop.js":
/*!*********************************!*\
  !*** ./src/dom/getScrollTop.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 获取滚动条距顶部的距离\r\n * @date 2022-02-24\r\n * @returns {Number}\r\n */\nfunction getScrollTop() {\n  return document.documentElement && document.documentElement.scrollTop || document.body.scrollTop;\n}\n\nmodule.exports = getScrollTop;\n\n//# sourceURL=webpack://utils/./src/dom/getScrollTop.js?");

/***/ }),

/***/ "./src/dom/offset.js":
/*!***************************!*\
  !*** ./src/dom/offset.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 获取一个元素距离文档（document）的位置，类似于JQ中的offset()\r\n * @date 2022-02-24\r\n * @param {HTMLElement} ele 元素\r\n * @returns { {left: number, top: number} } 距离文档左侧、顶部的距离\r\n */\nfunction offset(ele) {\n  var pos = {\n    left: 0,\n    top: 0\n  };\n  while (ele) {\n    pos.left += ele.offsetLeft;\n    pos.top += ele.offsetTop;\n    ele += ele.offsetParent;\n  }\n  return pos;\n}\n\nmodule.exports = offset;\n\n//# sourceURL=webpack://utils/./src/dom/offset.js?");

/***/ }),

/***/ "./src/dom/scrollTo.js":
/*!*****************************!*\
  !*** ./src/dom/scrollTo.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getScrollTop = __webpack_require__(/*! ./getScrollTop */ \"./src/dom/getScrollTop.js\");\nvar setScrollTop = __webpack_require__(/*! ./setScrollTop */ \"./src/dom/setScrollTop.js\");\nvar requestAnimFrame = function () {\n  // window.requestAnimationFrame 要求浏览器在下次重绘之前调用指定的回调函数更新动画。\n  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (callback) {\n    window.setTimeout(callback, 1000 / 60);\n  };\n}();\n\n/**\r\n * 在 duration 时间内，滚动条平滑滚动到 to 指定位置\r\n * @date 2022-02-24\r\n * @param {Number} to 滚动位置的值\r\n * @param {Number} duration 时间-毫秒数\r\n */\nfunction scrollTo(to, duration) {\n  if (duration < 0) {\n    setScrollTop(to);\n    return;\n  }\n  var diff = to - getScrollTop();\n  if (diff === 0) return;\n  var step = diff / duration * 10;\n  requestAnimFrame(function () {\n    if (Math.abs(step) > Math.abs(diff)) {\n      setScrollTop(getScrollTop() + diff);\n      return;\n    }\n    setScrollTop(getScrollTop() + step);\n    if (diff > 0 && getScrollTop() >= to || diff < 0 && getScrollTop() <= to) {\n      return;\n    }\n    scrollTo(to, duration - 16);\n  });\n}\n\nmodule.exports = scrollTo;\n\n//# sourceURL=webpack://utils/./src/dom/scrollTo.js?");

/***/ }),

/***/ "./src/dom/setScrollTop.js":
/*!*********************************!*\
  !*** ./src/dom/setScrollTop.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 设置滚动条距顶部的距离\r\n * @date 2022-02-24\r\n * @param {Number} value 距顶部的距离的值\r\n */\nfunction setScrollTop(value) {\n  window.scrollTo(0, value);\n  return value;\n}\n\nmodule.exports = setScrollTop;\n\n//# sourceURL=webpack://utils/./src/dom/setScrollTop.js?");

/***/ }),

/***/ "./src/dom/windowResize.js":
/*!*********************************!*\
  !*** ./src/dom/windowResize.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * H5软键盘缩回、弹起回调\r\n * 当软件键盘弹起会改变当前 window.innerHeight， 监听这个值变化\r\n * @date 2022-02-24\r\n * @param {Function} downCb 当软键盘弹起后，缩回的回调\r\n * @param {any} upCb 当软键盘弹起的回调\r\n */\nfunction windowResize(downCb, upCb) {\n  var clientHeight = window.innerHeight;\n  downCb = typeof downCb === 'function' ? downCb : function () {};\n  upCb = typeof upCb === 'function' ? upCb : function () {};\n  window.addEventListener('resize', () => {\n    var height = window.innerHeight;\n    if (height === clientHeight) {\n      downCb();\n    }\n    if (height < clientHeight) {\n      upCb();\n    }\n  });\n}\n\nmodule.exports = windowResize;\n\n//# sourceURL=webpack://utils/./src/dom/windowResize.js?");

/***/ }),

/***/ "./src/function/debounce.js":
/*!**********************************!*\
  !*** ./src/function/debounce.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 防抖： 保证一个函数在多少毫秒内不再被触发，只会执行一次。\r\n * @date 2022-02-24\r\n * @param {Function} fn 逻辑函数\r\n * @param {Number} time 执行逻辑的间隔（毫秒） \r\n */\nfunction debounce(fn, time) {\n  let timer = null;\n  return function () {\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(() => {\n      fn();\n    }, time);\n  };\n}\n\nmodule.exports = debounce;\n\n//# sourceURL=webpack://utils/./src/function/debounce.js?");

/***/ }),

/***/ "./src/function/throttle.js":
/*!**********************************!*\
  !*** ./src/function/throttle.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 节流\r\n * flag 开始为 true 则进入函数之后会执行计时器， 在一秒之后会执行\r\n * 继续向下之后flag被变为false， 那么在此进入函数之后将不再执行计时器\r\n * 在计时器执行完成之后， 将 flag变为true 之后才可以继续执行\r\n * 节流起到了可控制高频事件逻辑执行的次数\r\n * @date 2022-02-24\r\n * @param {Function} fn 延迟毫秒后执行的函数。\r\n * @param {Number} time 延迟的毫秒数\r\n */\nfunction throttle(fn, time) {\n  let flag = true;\n  return function () {\n    if (flag) {\n      setTimeout(() => {\n        fn();\n        flag = true;\n      }, time);\n    }\n    flag = false;\n  };\n}\n\nmodule.exports = throttle;\n\n//# sourceURL=webpack://utils/./src/function/throttle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\r\n * @desc webpack打包入口文件  \r\n * @example 自动引入子目录下所有js文件\r\n */\nlet moduleExports = {};\n\nconst r = __webpack_require__(\"./src sync recursive ^\\\\.\\\\/.+\\\\/.+\\\\.js$\");\nr.keys().forEach(key => {\n  let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));\n  moduleExports[attr] = r(key);\n});\n\nmodule.exports = moduleExports;\n\n//# sourceURL=webpack://utils/./src/index.js?");

/***/ }),

/***/ "./src/keycode/getKeyName.js":
/*!***********************************!*\
  !*** ./src/keycode/getKeyName.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var keyCodeMap = {\n  8: 'Backspace',\n  9: 'Tab',\n  13: 'Enter',\n  16: 'Shift',\n  17: 'Ctrl',\n  18: 'Alt',\n  19: 'Pause',\n  20: 'Caps Lock',\n  27: 'Escape',\n  32: 'Space',\n  33: 'Page Up',\n  34: 'Page Down',\n  35: 'End',\n  36: 'Home',\n  37: 'Left',\n  38: 'Up',\n  39: 'Right',\n  40: 'Down',\n  42: 'Print Screen',\n  45: 'Insert',\n  46: 'Delete',\n\n  48: '0',\n  49: '1',\n  50: '2',\n  51: '3',\n  52: '4',\n  53: '5',\n  54: '6',\n  55: '7',\n  56: '8',\n  57: '9',\n\n  65: 'A',\n  66: 'B',\n  67: 'C',\n  68: 'D',\n  69: 'E',\n  70: 'F',\n  71: 'G',\n  72: 'H',\n  73: 'I',\n  74: 'J',\n  75: 'K',\n  76: 'L',\n  77: 'M',\n  78: 'N',\n  79: 'O',\n  80: 'P',\n  81: 'Q',\n  82: 'R',\n  83: 'S',\n  84: 'T',\n  85: 'U',\n  86: 'V',\n  87: 'W',\n  88: 'X',\n  89: 'Y',\n  90: 'Z',\n\n  91: 'Windows',\n  93: 'Right Click',\n\n  96: 'Numpad 0',\n  97: 'Numpad 1',\n  98: 'Numpad 2',\n  99: 'Numpad 3',\n  100: 'Numpad 4',\n  101: 'Numpad 5',\n  102: 'Numpad 6',\n  103: 'Numpad 7',\n  104: 'Numpad 8',\n  105: 'Numpad 9',\n  106: 'Numpad *',\n  107: 'Numpad +',\n  109: 'Numpad -',\n  110: 'Numpad .',\n  111: 'Numpad /',\n\n  112: 'F1',\n  113: 'F2',\n  114: 'F3',\n  115: 'F4',\n  116: 'F5',\n  117: 'F6',\n  118: 'F7',\n  119: 'F8',\n  120: 'F9',\n  121: 'F10',\n  122: 'F11',\n  123: 'F12',\n\n  144: 'Num Lock',\n  145: 'Scroll Lock',\n  182: 'My Computer',\n  183: 'My Calculator',\n  186: ';',\n  187: '=',\n  188: ',',\n  189: '-',\n  190: '.',\n  191: '/',\n  192: '`',\n  219: '[',\n  220: '\\\\',\n  221: ']',\n  222: '\\''\n};\n/**\r\n * @desc 根据keycode获得键名\r\n * @param  {Number} keycode \r\n * @return {String}\r\n */\nfunction getKeyName(keycode) {\n  if (keyCodeMap[keycode]) {\n    return keyCodeMap[keycode];\n  } else {\n    console.log('Unknow Key(Key Code:' + keycode + ')');\n    return '';\n  }\n};\n\nmodule.exports = getKeyName;\n\n//# sourceURL=webpack://utils/./src/keycode/getKeyName.js?");

/***/ }),

/***/ "./src/object/deepClone.js":
/*!*********************************!*\
  !*** ./src/object/deepClone.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && obj !== null;\n\n/**\r\n * 深拷贝， 支持各种复杂类型\r\n * @date 2022-02-25\r\n * @param {any} obj\r\n * @param {any} hash=newWeakMap()\r\n * @returns {any} 拷贝后的对象\r\n */\n\n/*\r\n  1、 不可枚举的属性 及 Symbol 类型。 可以使用 Reflect.ownKeys 方法； \r\n  2、 判断参数是 Date、 RegExp 类型， 则直接生成一个新的实例返回； \r\n  3、 利用 Object.getOwnPropertyDescriptors() 获得对象的所有属性 以及 对应 的特性， 结合 Object.create() 创建一个新的对象， 并继承传入原对象的原型链； \r\n  4、 利用 WeakMap 类型作为 Hash 表， 因为 WeakMap 是弱引用类型， 可以 防止内存泄漏， 作为检测循环引用很有帮组， 如果循环引用则返回 WeakMap 存储的值。\r\n*/\nfunction deepClone(obj, hash = new WeakMap()) {\n  if (obj.constructor === Date) return new Date(obj); // 日期对象直接返回一个新的日期对象\n  if (obj.constructor === RegExp) return new RegExp(obj); // 正则对象直接返回一个新的正则对象\n  if (hash.has(obj)) return hash.get(obj); // 如果循环引用了就用 WeakMap 来解决\n  let allDesc = Object.getOwnPropertyDescriptors(obj); // 获得对象的所有属性及对应的特性\n  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc); // 创建一个新的对象，并继承传入原对象的原型链\n  hash.set(obj, cloneObj); // 继承原型链\n  for (let key of Reflect.ownKeys(obj)) {\n    // 不可枚举的属性及Symbol类型，用Reflect.ownKeys()\n    cloneObj[key] = isComplexDataType(obj[key]) && typeof obj[key] !== 'function' ? deepClone(obj[key], hash) : obj[key];\n  }\n  return cloneObj;\n}\n\nmodule.exports = deepClone;\n\n//# sourceURL=webpack://utils/./src/object/deepClone.js?");

/***/ }),

/***/ "./src/object/getFormData.js":
/*!***********************************!*\
  !*** ./src/object/getFormData.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 将对象转换为 formData 对象\r\n * @date 2022-02-25\r\n * @param {Object} object 需要转换的对象\r\n * @returns {Object} formData 对象\r\n */\nfunction getFormData(object) {\n  let formData = new FormData();\n  Object.keys(object).forEach(key => {\n    let value = object[key];\n    if (Array.isArray(value)) {\n      value.forEach((subValue, i) => formData.append(key + `[${i}]`, subValue));\n    } else {\n      formData.append(key, object[key]);\n    }\n  });\n  return formData;\n}\n\nmodule.exports = getFormData;\n\n//# sourceURL=webpack://utils/./src/object/getFormData.js?");

/***/ }),

/***/ "./src/object/isEmptyObject.js":
/*!*************************************!*\
  !*** ./src/object/isEmptyObject.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 判断 obj 是否为空\r\n * @date 2022-02-25\r\n * @param {Object} obj\r\n * @returns {Boolean}\r\n */\nfunction isEmptyObject(obj) {\n  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return false;\n  return !Object.keys(obj).length;\n}\n\nmodule.exports = isEmptyObject;\n\n//# sourceURL=webpack://utils/./src/object/isEmptyObject.js?");

/***/ }),

/***/ "./src/object/shallowClone.js":
/*!************************************!*\
  !*** ./src/object/shallowClone.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 浅克隆\r\n * @date 2022-02-25\r\n * @param {Object} obj 需要拷贝的对象\r\n * @returns {Object} 浅拷贝之后的对象 \r\n */\nfunction shallowClone(obj) {\n  if (!(obj instanceof Object)) {\n    throw new Error('请传入对象');\n  }\n  const res = {};\n  for (const key in obj) {\n    res[key] = obj[key];\n  }\n  return res;\n}\n\nmodule.exports = shallowClone;\n\n//# sourceURL=webpack://utils/./src/object/shallowClone.js?");

/***/ }),

/***/ "./src/random/randomColor.js":
/*!***********************************!*\
  !*** ./src/random/randomColor.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 描述 随机生成颜色\r\n * @date 2022-02-27\r\n * @returns {String}\r\n */\nfunction randomColor() {\n  return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);\n}\n\nmodule.exports = randomColor;\n\n//# sourceURL=webpack://utils/./src/random/randomColor.js?");

/***/ }),

/***/ "./src/random/randomNumber.js":
/*!************************************!*\
  !*** ./src/random/randomNumber.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 生成指定范围[min, max] 的随机数\r\n * @date 2022-02-27\r\n * @param {Number} min\r\n * @param {Number} max\r\n * @returns {Number}\r\n */\nfunction randomNumber(min, max) {\n  min = Math.ceil(min);\n  max = Math.floor(max);\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nmodule.exports = randomNumber;\n\n//# sourceURL=webpack://utils/./src/random/randomNumber.js?");

/***/ }),

/***/ "./src/regexp/isColor.js":
/*!*******************************!*\
  !*** ./src/regexp/isColor.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 判断是否为16进制颜色， rgb 或 rgba\r\n * @date 2022-02-27\r\n * @param {String} str\r\n * @returns {Boolean}\r\n */\nfunction isColor(str) {\n  return (/^(#([0-9a-fA-F]{3}){1,2}|[rR][gG][Bb](\\((\\s*(2[0-4]\\d|25[0-5]|[01]?\\d{1,2})\\s*,){2}\\s*(2[0-4]\\d|25[0-5]|[01]?\\d{1,2})\\s*\\)|[Aa]\\((\\s*(2[0-4]\\d|25[0-5]|[01]?\\d{1,2})\\s*,){3}\\s*([01]|0\\.\\d+)\\s*\\)))$/.test(str)\n  );\n}\n\nmodule.exports = isColor;\n\n//# sourceURL=webpack://utils/./src/regexp/isColor.js?");

/***/ }),

/***/ "./src/regexp/isEmail.js":
/*!*******************************!*\
  !*** ./src/regexp/isEmail.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 判断是否为邮箱地址\r\n * @date 2022-02-27\r\n * @param {String} str\r\n * @returns {Boolean}\r\n */\nfunction isEmail(str) {\n  return (/\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*/.test(str)\n  );\n}\n\nmodule.exports = isEmail;\n\n//# sourceURL=webpack://utils/./src/regexp/isEmail.js?");

/***/ }),

/***/ "./src/regexp/isIdCard.js":
/*!********************************!*\
  !*** ./src/regexp/isIdCard.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 判断是否为身份证号\r\n * @date 2022-02-27\r\n * @param {String|Number} str\r\n * @returns {Boolean}\r\n */\nfunction isIdCard(str) {\n  return (/^(^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$)|(^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])((\\d{4})|\\d{3}[Xx])$)$/.test(str)\n  );\n}\n\nmodule.exports = isIdCard;\n\n//# sourceURL=webpack://utils/./src/regexp/isIdCard.js?");

/***/ }),

/***/ "./src/regexp/isPhoneNum.js":
/*!**********************************!*\
  !*** ./src/regexp/isPhoneNum.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 判断是否为手机号\r\n * @date 2022-02-27\r\n * @param {String|Number} str\r\n * @returns {Boolean}\r\n */\nfunction isPhoneNum(str) {\n  return (/^(\\+?0?86\\-?)?1[3456789]\\d{9}$/.test(str)\n  );\n}\n\nmodule.exports = isPhoneNum;\n\n//# sourceURL=webpack://utils/./src/regexp/isPhoneNum.js?");

/***/ }),

/***/ "./src/regexp/isUrl.js":
/*!*****************************!*\
  !*** ./src/regexp/isUrl.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 描述\r\n * @date 判断是否为URL地址\r\n * @param {String} str\r\n * @returns {Boolean}\r\n */\nfunction isUrl(str) {\n  return (/[-a-zA-Z0-9@:%._\\+~#=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/i.test(str)\n  );\n}\n\nmodule.exports = isUrl;\n\n//# sourceURL=webpack://utils/./src/regexp/isUrl.js?");

/***/ }),

/***/ "./src/storage/getStorage.js":
/*!***********************************!*\
  !*** ./src/storage/getStorage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 获取本地存储\r\n * @date 2022-02-17\r\n * @param {string} name 本地存储名称\r\n */\nfunction getStorage(name) {\n  const data = window.localStorage.getItem(name);\n  try {\n    return JSON.parse(data);\n  } catch (error) {\n    return data;\n  }\n}\n\nmodule.exports = getStorage;\n\n//# sourceURL=webpack://utils/./src/storage/getStorage.js?");

/***/ }),

/***/ "./src/storage/removeStorage.js":
/*!**************************************!*\
  !*** ./src/storage/removeStorage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 删除本地存储\r\n * @date 2022-02-17\r\n * @param {string} name 本地存储名称\r\n * @returns {boolean} 删除成功 true，否则 false\r\n */\nfunction removeStorage(name) {\n  return window.localStorage.removeItem(name);\n}\n\nmodule.exports = removeStorage;\n\n//# sourceURL=webpack://utils/./src/storage/removeStorage.js?");

/***/ }),

/***/ "./src/storage/setStorage.js":
/*!***********************************!*\
  !*** ./src/storage/setStorage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 添加本地存储\r\n * @date 2022-02-17\r\n * @param {string} name 本地存储名称\r\n * @param {*} data 本地存储数据\r\n */\nfunction setStorage(name, data) {\n  if (typeof data === 'object') {\n    data = JSON.stringify(data);\n  }\n  window.localStorage.setItem(name, data);\n}\n\nmodule.exports = setStorage;\n\n//# sourceURL=webpack://utils/./src/storage/setStorage.js?");

/***/ }),

/***/ "./src/string/digitUppercase.js":
/*!**************************************!*\
  !*** ./src/string/digitUppercase.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 现金额转大写\r\n * @date 2022-02-27\r\n * @param {Number} n\r\n * @returns {String}\r\n */\nfunction digitUppercase(n) {\n  var fraction = ['角', '分'];\n  var digit = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];\n  var unit = [['元', '万', '亿'], ['', '拾', '佰', '仟']];\n  var head = n < 0 ? '欠' : '';\n  n = Math.abs(n);\n  var s = '';\n  for (var i = 0; i < fraction.length; i++) {\n    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');\n  }\n  s = s || '整';\n  n = Math.floor(n);\n  for (var i = 0; i < unit[0].length && n > 0; i++) {\n    var p = '';\n    for (var j = 0; j < unit[1].length && n > 0; j++) {\n      p = digit[n % 10] + unit[1][j] + p;\n      n = Math.floor(n / 10);\n    }\n    s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;\n  }\n  return head + s.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零').replace(/^整$/, '零元整');\n}\n\nmodule.exports = digitUppercase;\n\n//# sourceURL=webpack://utils/./src/string/digitUppercase.js?");

/***/ }),

/***/ "./src/support/isSupportWebP.js":
/*!**************************************!*\
  !*** ./src/support/isSupportWebP.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 判断浏览器是否支持webP格式图片\r\n * @date 2022-02-27\r\n * @returns {Boolean}\r\n */\nfunction isSupportWebP() {\n  return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;\n}\n\nmodule.exports = isSupportWebP;\n\n//# sourceURL=webpack://utils/./src/support/isSupportWebP.js?");

/***/ }),

/***/ "./src/time/formatPassTime.js":
/*!************************************!*\
  !*** ./src/time/formatPassTime.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 格式化${startTime}距现在的已过时间\r\n * @param  {Date} startTime '2020-11-29'\r\n * @return {String}\r\n */\nfunction formatPassTime(startTime) {\n  var currentTime = Date.parse(new Date()),\n      time = currentTime - Date.parse(new Date(startTime)),\n      day = parseInt(time / (1000 * 60 * 60 * 24)),\n      hour = parseInt(time / (1000 * 60 * 60)),\n      min = parseInt(time / (1000 * 60)),\n      month = parseInt(day / 30),\n      year = parseInt(month / 12);\n  if (year) return year + \"年前\";\n  if (month) return month + \"个月前\";\n  if (day) return day + \"天前\";\n  if (hour) return hour + \"小时前\";\n  if (min) return min + \"分钟前\";else return '刚刚';\n}\n\nmodule.exports = formatPassTime;\n\n//# sourceURL=webpack://utils/./src/time/formatPassTime.js?");

/***/ }),

/***/ "./src/time/formatRemainTime.js":
/*!**************************************!*\
  !*** ./src/time/formatRemainTime.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 计算从一个时间到现在过去多久\r\n * @date 2022-02-24\r\n * @param {String} 字符串日期 '2020-11-29'\r\n * @returns {String} '451天15小时17分钟25秒'\r\n */\nfunction formatRemainTime(time) {\n  const nowStamp = new Date().getTime();\n  const targetStamp = new Date(time.replace(/-/g, '/')).getTime();\n  const difference = nowStamp - targetStamp;\n  const allSeconds = Math.floor(difference / 1000);\n  const allMinutes = Math.floor(allSeconds / 60);\n  const allHours = Math.floor(allMinutes / 60);\n  const day = Math.floor(allHours / 24);\n  const hours = allHours % 24;\n  const minutes = allMinutes % 60;\n  const seconds = allSeconds % 60;\n  return `${day}天${hours}小时${minutes}分钟${seconds}秒`;\n}\n\nmodule.exports = formatRemainTime;\n\n//# sourceURL=webpack://utils/./src/time/formatRemainTime.js?");

/***/ }),

/***/ "./src/time/isLeapYear.js":
/*!********************************!*\
  !*** ./src/time/isLeapYear.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 是否为闰年\r\n * @date 2022-02-27\r\n * @param {Number} year\r\n * @returns {Boolean}\r\n */\nfunction isLeapYear(year) {\n  if (0 === year % 4 && (year % 100 !== 0 || year % 400 === 0)) {\n    return true;\n  }\n  return false;\n}\n\nmodule.exports = isLeapYear;\n\n//# sourceURL=webpack://utils/./src/time/isLeapYear.js?");

/***/ }),

/***/ "./src/time/isSameDay.js":
/*!*******************************!*\
  !*** ./src/time/isSameDay.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 判断是否为同一天\r\n * @date 2022-02-27\r\n * @param {Date} date1\r\n * @param {Date} date2 可选 / 默认值：当天\r\n * @returns {Boolean}\r\n */\nfunction isSameDay(date1, date2) {\n  if (!date2) {\n    date2 = new Date();\n  }\n  var date1_year = date1.getFullYear(),\n      date1_month = date1.getMonth() + 1,\n      date1_date = date1.getDate();\n  var date2_year = date2.getFullYear(),\n      date2_month = date2.getMonth() + 1,\n      date2_date = date2.getDate();\n  return date1_date === date2_date && date1_month === date2_month && date1_year === date2_year;\n}\n\nmodule.exports = isSameDay;\n\n//# sourceURL=webpack://utils/./src/time/isSameDay.js?");

/***/ }),

/***/ "./src/time/monthDays.js":
/*!*******************************!*\
  !*** ./src/time/monthDays.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 获取指定日期月份的总天数\r\n * @date 2022-02-27\r\n * @param {Date} time\r\n * @returns {Number}\r\n */\nfunction monthDays(time) {\n  time = new Date(time);\n  var year = time.getFullYear();\n  var month = time.getMonth() + 1;\n  return new Date(year, month, 0).getDate();\n}\n\nmodule.exports = monthDays;\n\n//# sourceURL=webpack://utils/./src/time/monthDays.js?");

/***/ }),

/***/ "./src/time/timeLeft.js":
/*!******************************!*\
  !*** ./src/time/timeLeft.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * ${startTime - endTime}的剩余时间,startTime大于endTime时，均返回0\r\n * @param { Date | String } startTime\r\n * @param { Date | String } endTime\r\n * @returns { Object } { d, h, m, s } 天 时 分 秒\r\n */\nfunction timeLeft(startTime, endTime) {\n  if (!startTime || !endTime) {\n    return;\n  }\n  var startDate, endDate;\n  if (startTime instanceof Date) {\n    startDate = startTime;\n  } else {\n    startDate = new Date(startTime.replace(/-/g, '/')); //开始时间\n  }\n  if (endTime instanceof Date) {\n    endDate = endTime;\n  } else {\n    endDate = new Date(endTime.replace(/-/g, '/')); //结束时间\n  }\n  var t = endDate.getTime() - startDate.getTime();\n  var d = 0,\n      h = 0,\n      m = 0,\n      s = 0;\n  if (t >= 0) {\n    d = Math.floor(t / 1000 / 3600 / 24);\n    h = Math.floor(t / 1000 / 60 / 60 % 24);\n    m = Math.floor(t / 1000 / 60 % 60);\n    s = Math.floor(t / 1000 % 60);\n  }\n  return {\n    d,\n    h,\n    m,\n    s\n  };\n}\n\nmodule.exports = timeLeft;\n\n//# sourceURL=webpack://utils/./src/time/timeLeft.js?");

/***/ }),

/***/ "./src/url/parseQueryString.js":
/*!*************************************!*\
  !*** ./src/url/parseQueryString.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * url参数转对象\r\n * @date 2022-02-27\r\n * @param {String} url default: window.location.href\r\n * @returns {Object}\r\n */\nfunction parseQueryString(url) {\n  url = !url ? window.location.href : url;\n  if (url.indexOf('?') === -1) {\n    return {};\n  }\n  var search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);\n  if (search === '') {\n    return {};\n  }\n  search = search.split('&');\n  var query = {};\n  for (let i = 0; i < search.length; i++) {\n    var pair = search[i].split('=');\n    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');\n  }\n  return query;\n}\n\nmodule.exports = parseQueryString;\n\n//# sourceURL=webpack://utils/./src/url/parseQueryString.js?");

/***/ }),

/***/ "./src/url/stringifyQueryString.js":
/*!*****************************************!*\
  !*** ./src/url/stringifyQueryString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * 对象序列化\r\n * @date 2022-02-27\r\n * @param {Object} obj\r\n * @returns {String}\r\n */\nfunction stringifyQueryString(obj) {\n  if (!obj) return '';\n  var pairs = [];\n\n  for (var key in obj) {\n    var value = obj[key];\n    if (value instanceof Array) {\n      for (var i = 0; i < value.length; ++i) {\n        pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));\n      }\n      continue;\n    }\n    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));\n  }\n\n  return pairs.join('&');\n}\n\nmodule.exports = stringifyQueryString;\n\n//# sourceURL=webpack://utils/./src/url/stringifyQueryString.js?");

/***/ })

/******/ });
});