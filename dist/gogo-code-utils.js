/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["utils"] = factory();
	else
		root["utils"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/array/index.js":
/*!****************************!*\
  !*** ./src/array/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"unique\": () => (/* binding */ unique)\n/* harmony export */ });\nfunction unique(arr) { \r\n  return [...new Set(arr)];\r\n}\n\n//# sourceURL=webpack://utils/./src/array/index.js?");

/***/ }),

/***/ "./src/function/index.js":
/*!*******************************!*\
  !*** ./src/function/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* binding */ debounce),\n/* harmony export */   \"throttle\": () => (/* binding */ throttle)\n/* harmony export */ });\nfunction debounce() { \r\n\r\n}\r\n\r\nfunction throttle() {\r\n\r\n}\n\n//# sourceURL=webpack://utils/./src/function/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"debounce\": () => (/* reexport safe */ _function_index_js__WEBPACK_IMPORTED_MODULE_0__.debounce),\n/* harmony export */   \"throttle\": () => (/* reexport safe */ _function_index_js__WEBPACK_IMPORTED_MODULE_0__.throttle),\n/* harmony export */   \"clone\": () => (/* reexport safe */ _object_index_js__WEBPACK_IMPORTED_MODULE_1__.clone),\n/* harmony export */   \"deepClone\": () => (/* reexport safe */ _object_index_js__WEBPACK_IMPORTED_MODULE_1__.deepClone),\n/* harmony export */   \"unique\": () => (/* reexport safe */ _array_index_js__WEBPACK_IMPORTED_MODULE_2__.unique)\n/* harmony export */ });\n/* harmony import */ var _function_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/index.js */ \"./src/function/index.js\");\n/* harmony import */ var _object_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object/index.js */ \"./src/object/index.js\");\n/* harmony import */ var _array_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array/index.js */ \"./src/array/index.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://utils/./src/index.js?");

/***/ }),

/***/ "./src/object/index.js":
/*!*****************************!*\
  !*** ./src/object/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clone\": () => (/* binding */ clone),\n/* harmony export */   \"deepClone\": () => (/* binding */ deepClone)\n/* harmony export */ });\nfunction clone(param) {\r\n  return Object.assign({}, param);\r\n}\r\n\r\nfunction deepClone(param) {\r\n  return Object.assign({}, param);\r\n}\n\n//# sourceURL=webpack://utils/./src/object/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});