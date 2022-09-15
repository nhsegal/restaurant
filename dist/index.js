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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n function homeContent(){\n    const main = document.createElement('main');\n    const welcomeMsg = document.createElement('h1');\n    welcomeMsg.innerText = 'Welcome to Mighty Mighty Burgers!'\n\n    const welcomeContent =  document.createElement('div');\n    welcomeContent.innerText =  'We use only the finest locally sourced organic ingredients.' \n    + ' Our beef is %100 grass-fed. Come taste the mighty difference quality and care make!'\n    main.append(welcomeMsg, welcomeContent);\n    return main;\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeContent);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _location_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.js */ \"./src/location.js\");\n\n\n\n\nconst contentDiv = document.querySelector('#content');\nconst tabContent = document.createElement('div');\ntabContent.id = 'tabContent';\n\nfunction makeNavbar() {\n    const nav = document.createElement(\"NAV\");\n    const ul = document.createElement('ul');\n    ul.id = 'mainMenu';\n    \n    const li_1 =  document.createElement('li');\n    const a_1 =  document.createElement('a');\n    a_1.innerText = \"Home\";\n    a_1.href = '#';\n    li_1.appendChild(a_1);\n    \n    const li_2 =  document.createElement('li');\n    const a_2 =  document.createElement('a');\n    a_2.innerText = \"Menu\";\n    a_2.href = '#';\n    li_2.appendChild(a_2);\n\n    const li_3 =  document.createElement('li');\n    const a_3 =  document.createElement('a');\n    a_3.innerText = \"Location\";\n    a_3.href = '#';\n    li_3.appendChild(a_3);\n\n    ul.append(li_1, li_2, li_3);\n    nav.append(ul);\n    return nav;\n  }\n\nfunction addEventListenersToNav(){\n  const aList = document.querySelectorAll('nav>ul>li>a');\n  for (let i = 0; i < aList.length; i++) { \n      aList[i].addEventListener('click', switchContent);\n    }\n}\n\nfunction switchContent(e){\n    const tab = e.target.innerText;\n    switch (tab) {\n      case 'Home':\n        tabContent.innerHTML = '';\n        tabContent.append((0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n        break;\n      case 'Menu':\n        tabContent.innerHTML = '';\n        tabContent.append((0,_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n        break;\n      case 'Location':\n        tabContent.innerHTML = '';\n        tabContent.append((0,_location_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n      break;\n    }\n}\n\ncontentDiv.append(makeNavbar());\ncontentDiv.append(tabContent);\ntabContent.append((0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\naddEventListenersToNav();\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction locationInfo(){\n    const main = document.createElement('main');\n    const welcomeMsg = document.createElement('h1');\n    welcomeMsg.innerText = 'Come vist us!'\n\n    const address_1 =  document.createElement('div');\n    address_1.innerText =  '123 Nowhere Dr. ';\n    const address_2 =  document.createElement('div');\n    address_2.innerText =  'Sometown, OH 43001'\n   \n\n    const phone =  document.createElement('div');\n    phone.innerText =  'Tel: (440) 555-5555';\n    const email =  document.createElement('div');\n    email.innerText =  'mightyburgers@burgers.com'\n    main.append(welcomeMsg, address_1, address_2, phone, email);\n    return main;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locationInfo);\n\n//# sourceURL=webpack://restaurant/./src/location.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n\nfunction makeFoodMenu(){\n    const foodMenu= document.createElement('div');\n    foodMenu.id = 'food-menu';\n  \n    const burgers= document.createElement('div');\n   \n    burgers.id = 'burgers';\n    burgers.className = 'heading';\n    burgers.innerText = 'Burgers';\n  \n    const burger_container = document.createElement('div');\n    burger_container.className = \"item-container\";\n\n    const beef =  document.createElement('div');\n    beef.className = 'item';\n    beef.innerText = 'Beef Hamburger';\n    const beefPrice =  document.createElement('div');\n    beefPrice.className = 'price';\n    beefPrice.innerText = \"$9\";\n\n    const lamb =  document.createElement('div');\n    lamb.className = 'item';\n    lamb.innerText = 'Lamb Hamburger';\n    const lambPrice =  document.createElement('div');\n    lambPrice.className = 'price';\n    lambPrice.innerText = \"$12\";\n\n    const veg =  document.createElement('div');\n    veg.className = 'item';\n    veg.innerText = 'Veggie Hamburger';\n    const vegPrice =  document.createElement('div');\n    vegPrice.className = 'price';\n    vegPrice.innerText = \"$8\";\n\n    burger_container.append(beef, beefPrice, lamb, lambPrice, veg, vegPrice);\n\n    const sides = document.createElement('div');\n   \n    sides.id = 'sides';\n    sides.className = 'heading';\n    sides.innerText = 'sides';\n\n    const sides_container = document.createElement('div');\n    sides_container.className = \"item-container\";\n\n    const fries =  document.createElement('div');\n    fries.className = 'item';\n    fries.innerText = 'Fries';\n  \n    const friesPrice =  document.createElement('div');\n    friesPrice.className = 'price';\n    friesPrice.innerText = \"$4\";\n\n    const onion =  document.createElement('div');\n    onion.className = 'item';\n    onion.innerText = 'Onion Rings';\n  \n    const onionPrice =  document.createElement('div');\n    onionPrice.className = 'price';\n    onionPrice.innerText = \"$5\";\n\n    sides_container.append(fries, friesPrice, onion, onionPrice);\n    foodMenu.append(burgers, burger_container, sides, sides_container);\n    return foodMenu;\n    \n} \n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeFoodMenu);\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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
/******/ })()
;