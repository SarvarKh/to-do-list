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

/***/ "./src/default.js":
/*!************************!*\
  !*** ./src/default.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createE = (elementName, content, className, href) => {\n    const element = document.createElement(elementName);\n    if (content) { element.innerHTML = content;}\n    if (className) { element.classList.toggle(className);}\n    if (href) { element.href = href;}\n    return element;\n};\n\nfunction createDefault() {\n    const defaultPage = createE(\"div\", \"Hey this is from default page!\");\n    return defaultPage;\n}\n\nfunction loadDefault() {\n    const main = document.querySelector(\"#main\");\n    main.textContent = \"\";\n    main.appendChild(createDefault());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadDefault);\n\n//# sourceURL=webpack://to-do-list/./src/default.js?");

/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createE = (elementName, content, className, href) => {\n    const element = document.createElement(elementName);\n    if (content) { element.innerHTML = content;}\n    if (className) { element.classList.toggle(className);}\n    if (href) { element.href = href;}\n    return element;\n};\n\nfunction createInbox() {\n    const defaultPage = createE(\"div\", \"Hey this is from Inbox.js!\");\n    return defaultPage;\n}\n\nfunction loadInbox() {\n    const main = document.querySelector(\"#main\");\n    main.textContent = \"\";\n    main.appendChild(createInbox());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadInbox);\n\n//# sourceURL=webpack://to-do-list/./src/inbox.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-loader */ \"./src/page-loader.js\");\n\n\ndocument.body.appendChild((0,_page_loader__WEBPACK_IMPORTED_MODULE_0__.default)());\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/page-loader.js":
/*!****************************!*\
  !*** ./src/page-loader.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox */ \"./src/inbox.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ \"./src/today.js\");\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default */ \"./src/default.js\");\n\n\n\n\n\nconst createE = (elementName, content, className, href) => {\n    const element = document.createElement(elementName);\n    if (content) { element.innerHTML = content;}\n    if (className) { element.classList.toggle(className);}\n    if (href) { element.href = href;}\n    return element;\n};\n\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll('.aside-btn');\n\n    buttons.forEach((btn) => {\n      btn.classList.remove('active');\n    });\n\n    button.classList.add('active');\n}\n\nfunction createHeader() {\n    const header = createE('h1', 'Smart Todo-list');\n    return header;\n}\n\nfunction createAside() {\n    const aside = createE(\"aside\", false);\n    let asideTop = createE(\"div\", false, \"aside-top\");\n    let asideBottom = createE(\"div\", false, \"aside-bottom\");\n\n    let inboxBtn = createE(\"button\", false, \"aside-btn\");\n    console.log(\"call event...\");\n    inboxBtn.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        setActiveButton(inboxBtn);\n        (0,_inbox__WEBPACK_IMPORTED_MODULE_0__.default)();\n    })\n    const inboxBtnIcon = document.createElement('i');\n    inboxBtnIcon.classList.add('fas');\n    inboxBtnIcon.classList.add('fa-inbox');\n    let inboxBtnTitle = createE('span', \"Inbox\")\n    inboxBtn.appendChild(inboxBtnIcon);\n    inboxBtn.appendChild(inboxBtnTitle);\n    asideTop.appendChild(inboxBtn);\n\n    let todayBtn = createE(\"button\", false, \"aside-btn\");\n    todayBtn.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        setActiveButton(todayBtn);\n        (0,_today__WEBPACK_IMPORTED_MODULE_1__.default)();\n    })\n    const todayBtnIcon = document.createElement('i');\n    todayBtnIcon.classList.add('fas');\n    todayBtnIcon.classList.add('fa-arrow-circle-down');\n    let todayBtnTitle = createE('span', \"Today\")\n    todayBtn.appendChild(todayBtnIcon);\n    todayBtn.appendChild(todayBtnTitle);\n    asideTop.appendChild(todayBtn);\n    aside.appendChild(asideTop);\n\n    let project = createE(\"div\", \"Projects:\");\n    asideBottom.appendChild(project);\n\n    let defaulBtn = createE(\"button\", false, \"aside-btn\");\n    defaulBtn.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        setActiveButton(defaulBtn);\n        (0,_default__WEBPACK_IMPORTED_MODULE_2__.default)();\n    })\n    const defaulBtnIcon = document.createElement('i');\n    defaulBtnIcon.classList.add('far');\n    defaulBtnIcon.classList.add('fa-circle');\n    let defaultBtnTitle = createE('span', \"Default\")\n    defaulBtn.appendChild(defaulBtnIcon);\n    defaulBtn.appendChild(defaultBtnTitle);\n    asideBottom.appendChild(defaulBtn);\n    aside.appendChild(asideBottom);\n\n    return aside;\n}\n\nfunction createMain() {\n    const main = document.createElement('main');\n    main.classList.add('main');\n    main.setAttribute('id', 'main');\n    return main;\n}\n\nfunction createFooter() {\n    const footer = createE('footer');\n    const footerDiv = createE('div', 'Copyright © 2021 Sarvar Khalimov');\n    const linkIcon1 = createE('a', '', 'icon-link', 'https://github.com/SarvarKh');\n    linkIcon1.setAttribute('target', '_blank');\n    const icon1 = document.createElement('i');\n    icon1.classList.add('fab');\n    icon1.classList.add('fa-github');\n  \n    const linkIcon2 = createE('a', '', 'icon-link', 'https://www.linkedin.com/in/sarvar-khalimov/');\n    linkIcon2.setAttribute('target', '_blank');\n    const icon2 = document.createElement('i');\n    icon2.classList.add('fab');\n    icon2.classList.add('fa-linkedin');\n  \n    const linkIcon3 = createE('a', '', 'icon-link', 'https://sarvarkh.github.io/portfolio/');\n    linkIcon3.setAttribute('target', '_blank');\n    const icon3 = document.createElement('i');\n    icon3.classList.add('fas');\n    icon3.classList.add('fa-folder-open');\n  \n    linkIcon1.appendChild(icon1);\n    linkIcon2.appendChild(icon2);\n    linkIcon3.appendChild(icon3);\n    footerDiv.appendChild(linkIcon1);\n    footerDiv.appendChild(linkIcon2);\n    footerDiv.appendChild(linkIcon3);\n    footer.appendChild(footerDiv);\n  \n    return footer;\n}\n\nfunction start() {\n    const content = document.getElementById('content');\n    content.appendChild(createHeader());\n    content.appendChild(createAside());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n\n    setActiveButton(document.querySelector('.aside-btn'));\n    (0,_default__WEBPACK_IMPORTED_MODULE_2__.default)();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (start);\n\n//# sourceURL=webpack://to-do-list/./src/page-loader.js?");

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createE = (elementName, content, className, href) => {\n    const element = document.createElement(elementName);\n    if (content) { element.innerHTML = content;}\n    if (className) { element.classList.toggle(className);}\n    if (href) { element.href = href;}\n    return element;\n};\n\nfunction createToday() {\n    const todayPage = createE(\"div\", \"Hey this is from today.js!\");\n    return todayPage;\n}\n\nfunction loadToday() {\n    const main = document.querySelector(\"#main\");\n    main.textContent = \"\";\n    main.appendChild(createToday());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadToday);\n\n//# sourceURL=webpack://to-do-list/./src/today.js?");

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