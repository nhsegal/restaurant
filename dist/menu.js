/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n\nfunction makeFoodMenu(){\n    const foodMenu= document.createElement('div');\n    foodMenu.id = 'food-menu';\n  \n    const burgers= document.createElement('div');\n   \n    burgers.id = 'burgers';\n    burgers.className = 'heading';\n    burgers.innerText = 'Burgers';\n  \n    const burger_container = document.createElement('div');\n    burger_container.className = \"item-container\";\n\n    const beef =  document.createElement('div');\n    beef.className = 'item';\n    beef.innerText = 'Beef Hamburger';\n    const beefPrice =  document.createElement('div');\n    beefPrice.className = 'price';\n    beefPrice.innerText = \"$9\";\n\n    const lamb =  document.createElement('div');\n    lamb.className = 'item';\n    lamb.innerText = 'Lamb Hamburger';\n    const lambPrice =  document.createElement('div');\n    lambPrice.className = 'price';\n    lambPrice.innerText = \"$12\";\n\n    const veg =  document.createElement('div');\n    veg.className = 'item';\n    veg.innerText = 'Veggie Hamburger';\n    const vegPrice =  document.createElement('div');\n    vegPrice.className = 'price';\n    vegPrice.innerText = \"$8\";\n\n    burger_container.append(beef, beefPrice, lamb, lambPrice, veg, vegPrice);\n\n    const sides = document.createElement('div');\n   \n    sides.id = 'sides';\n    sides.className = 'heading';\n    sides.innerText = 'sides';\n\n    const sides_container = document.createElement('div');\n    sides_container.className = \"item-container\";\n\n    const fries =  document.createElement('div');\n    fries.className = 'item';\n    fries.innerText = 'Fries';\n  \n    const friesPrice =  document.createElement('div');\n    friesPrice.className = 'price';\n    friesPrice.innerText = \"$4\";\n\n    const onion =  document.createElement('div');\n    onion.className = 'item';\n    onion.innerText = 'Onion Rings';\n  \n    const onionPrice =  document.createElement('div');\n    onionPrice.className = 'price';\n    onionPrice.innerText = \"$5\";\n\n    sides_container.append(fries, friesPrice, onion, onionPrice);\n    foodMenu.append(burgers, burger_container, sides, sides_container);\n    return foodMenu;\n    \n} \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeFoodMenu);\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/menu.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;