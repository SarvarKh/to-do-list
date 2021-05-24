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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import loadInbox from './inbox';\n// import loadToday from './today';\n// import loadProject from './project';\n// import loadDefault from './default';\n\nconst createE = (elementName, content, className, href) => {\n    const element = document.createElement(elementName);\n    if (content) { element.innerHTML = content;}\n    if (className) { element.classList.toggle(className);}\n    if (href) { element.href = href;}\n    return element;\n};\n\nfunction createHeader() {\n    const header = createE('h1', 'Smart Todo-list');\n    return header;\n}\n\nfunction createAside() {\n    const aside = createE(\"aside\", false);\n    let asideTop = createE(\"div\", false, \"aside-top\");\n    let asideBottom = createE(\"div\", false, \"aside-bottom\");\n\n    let inboxBtn = createE(\"button\");\n    const inboxBtnIcon = document.createElement('i');\n    inboxBtnIcon.classList.add('fas');\n    inboxBtnIcon.classList.add('fa-inbox');\n    let inboxBtnTitle = createE('span', \"Inbox\")\n    inboxBtn.appendChild(inboxBtnIcon);\n    inboxBtn.appendChild(inboxBtnTitle);\n    asideTop.appendChild(inboxBtn);\n\n    let todayBtn = createE(\"button\");\n    const todayBtnIcon = document.createElement('i');\n    todayBtnIcon.classList.add('fas');\n    todayBtnIcon.classList.add('fa-arrow-circle-down');\n    let todayBtnTitle = createE('span', \"Today\")\n    todayBtn.appendChild(todayBtnIcon);\n    todayBtn.appendChild(todayBtnTitle);\n    asideTop.appendChild(todayBtn);\n    aside.appendChild(asideTop);\n\n    let project = createE(\"div\", \"Projects:\");\n    asideBottom.appendChild(project);\n\n    let defaulBtn = createE(\"button\");\n    const defaulBtnIcon = document.createElement('i');\n    defaulBtnIcon.classList.add('far');\n    defaulBtnIcon.classList.add('fa-circle');\n    let defaultBtnTitle = createE('span', \"Default\")\n    defaulBtn.appendChild(defaulBtnIcon);\n    defaulBtn.appendChild(defaultBtnTitle);\n    asideBottom.appendChild(defaulBtn);\n    aside.appendChild(asideBottom);\n\n    return aside;\n}\n\nfunction createMain() {\n    const main = createE('main', \"Main\", \"main\");\n    return main;\n}\n\nfunction createFooter() {\n    const footer = createE('footer');\n    const footerDiv = createE('div', 'Copyright © 2021 Sarvar Khalimov');\n    const linkIcon1 = createE('a', '', 'icon-link', 'https://github.com/SarvarKh');\n    linkIcon1.setAttribute('target', '_blank');\n    const icon1 = document.createElement('i');\n    icon1.classList.add('fab');\n    icon1.classList.add('fa-github');\n  \n    const linkIcon2 = createE('a', '', 'icon-link', 'https://www.linkedin.com/in/sarvar-khalimov/');\n    linkIcon2.setAttribute('target', '_blank');\n    const icon2 = document.createElement('i');\n    icon2.classList.add('fab');\n    icon2.classList.add('fa-linkedin');\n  \n    const linkIcon3 = createE('a', '', 'icon-link', 'https://sarvarkh.github.io/portfolio/');\n    linkIcon3.setAttribute('target', '_blank');\n    const icon3 = document.createElement('i');\n    icon3.classList.add('fas');\n    icon3.classList.add('fa-folder-open');\n  \n    linkIcon1.appendChild(icon1);\n    linkIcon2.appendChild(icon2);\n    linkIcon3.appendChild(icon3);\n    footerDiv.appendChild(linkIcon1);\n    footerDiv.appendChild(linkIcon2);\n    footerDiv.appendChild(linkIcon3);\n    footer.appendChild(footerDiv);\n  \n    return footer;\n}\n\nfunction start() {\n    const content = document.getElementById('content');\n\n    content.appendChild(createHeader());\n    content.appendChild(createAside());\n    content.appendChild(createMain());\n    content.appendChild(createFooter());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (start);\n\n//# sourceURL=webpack://to-do-list/./src/page-loader.js?");

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