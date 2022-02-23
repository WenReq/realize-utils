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

eval("var map = {\n\t\"./array/equalityArray.js\": \"./src/array/equalityArray.js\",\n\t\"./array/mergeArrayDelRepeat.js\": \"./src/array/mergeArrayDelRepeat.js\",\n\t\"./array/subArray.js\": \"./src/array/subArray.js\",\n\t\"./array/uniqueArray.js\": \"./src/array/uniqueArray.js\",\n\t\"./class/addClass.js\": \"./src/class/addClass.js\",\n\t\"./class/hasClass.js\": \"./src/class/hasClass.js\",\n\t\"./class/removeClass.js\": \"./src/class/removeClass.js\",\n\t\"./cookie/getCookie.js\": \"./src/cookie/getCookie.js\",\n\t\"./cookie/removeCookie.js\": \"./src/cookie/removeCookie.js\",\n\t\"./cookie/setCookie.js\": \"./src/cookie/setCookie.js\",\n\t\"./device/getExplore.js\": \"./src/device/getExplore.js\",\n\t\"./device/getOS.js\": \"./src/device/getOS.js\",\n\t\"./storage/getStorage.js\": \"./src/storage/getStorage.js\",\n\t\"./storage/removeStorage.js\": \"./src/storage/removeStorage.js\",\n\t\"./storage/setStorage.js\": \"./src/storage/setStorage.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src sync recursive ^\\\\.\\\\/.+\\\\/.+\\\\.js$\";\n\n//# sourceURL=webpack://utils/./src_sync_^\\.\\/.+\\/.+\\.js$?");

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\r\n * @desc webpack打包入口文件  \r\n * @example 自动引入子目录下所有js文件\r\n */\nlet moduleExports = {};\n\nconst r = __webpack_require__(\"./src sync recursive ^\\\\.\\\\/.+\\\\/.+\\\\.js$\");\nr.keys().forEach(key => {\n  let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));\n  moduleExports[attr] = r(key);\n});\n\nmodule.exports = moduleExports;\n\n//# sourceURL=webpack://utils/./src/index.js?");

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

/***/ })

/******/ });
});