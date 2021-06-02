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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createE = (elementName, content, className, href) => {\n    const element = document.createElement(elementName);\n    if (content) { element.innerHTML = content;}\n    if (className) { element.classList.toggle(className);}\n    if (href) { element.href = href;}\n    return element;\n};\n\nfunction Task(title, description, dueDate, priority, notes, checklist) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.notes = notes;\n    this.checklist = checklist;\n}\n\nconst allTasks = {\n    default: [],\n    today: []\n};\n\nfunction addTaskToDefaultTasks(newTask, tasksObj) {\n    let defLocalStorage = JSON.parse(localStorage.getItem('defaultPage'));\n    if (defLocalStorage.length > 0) {\n        tasksObj.default = [];\n        defLocalStorage.map((e) => {\n            tasksObj.default.push(e);\n        });\n        tasksObj.default.push(newTask);\n        localStorage.setItem(\"defaultPage\", JSON.stringify(allTasks.default));\n    } else {\n        tasksObj.default.push(newTask);\n        localStorage.setItem(\"defaultPage\", JSON.stringify(allTasks.default));\n    }\n}\n\nfunction submitForm(btn) {\n    btn.addEventListener('click', () => {\n        const title = document.querySelector('#title');\n        const description = document.querySelector('#description');\n        const dueDate = document.querySelector('#dueDate');\n        const priority = document.querySelector('#priority');\n        const notes = document.querySelector('#notes');\n        let checklist = document.querySelector('#checklist');\n        \n        if (checklist.checked) {\n            checklist.status = \"Closed\";\n        } else {\n            checklist.status = \"Open\";\n        }\n        if (title.value === '' || description.value === '' || dueDate.value === '' || priority.value === '' || notes.value === '') {\n            alert('Fields must be filled out'); // eslint-disable-line no-alert\n        } else {\n            const newTask = new Task(title.value, description.value, dueDate.value, priority.value, notes.value, checklist.status);\n            addTaskToDefaultTasks(newTask, allTasks);\n            let defPage = document.querySelector(\".default-page\");\n            defPage.appendChild(displayTable());\n        }\n    })\n    return btn;\n}\n\nfunction displayTaskForm() {\n    const form = createE(\"div\", false, \"form\");\n    const input1 = createE(\"input\");\n    input1.setAttribute(\"type\", \"text\");\n    input1.setAttribute(\"id\", \"title\");\n    input1.setAttribute(\"name\", \"title\");\n    input1.setAttribute(\"placeholder\", \"add title\");\n    input1.setAttribute(\"autofocus\", true);\n    \n    const input2 = createE(\"input\");\n    input2.setAttribute(\"type\", \"text\");\n    input2.setAttribute(\"id\", \"description\");\n    input2.setAttribute(\"name\", \"description\");\n    input2.setAttribute(\"placeholder\", \"add description\");\n\n    const input3 = createE(\"input\");\n    input3.setAttribute(\"type\", \"date\");\n    input3.setAttribute(\"id\", \"dueDate\");\n    input3.setAttribute(\"name\", \"dueDate\");\n    input3.setAttribute(\"placeholder\", \"add due date\");\n\n    const input4 = createE(\"select\");\n    input4.setAttribute(\"id\", \"priority\");\n    const input4Label = createE(\"label\", \"Choose a priority:\");\n    input4Label.setAttribute(\"for\", \"priority\");\n    const option1 = createE(\"option\", \"High\");\n    option1.setAttribute(\"value\", \"high\");\n    input4.appendChild(option1);\n    const option2 = createE(\"option\", \"Medium\");\n    option2.setAttribute(\"value\", \"medium\");\n    input4.appendChild(option2);\n    const option3 = createE(\"option\", \"Low\");\n    option3.setAttribute(\"value\", \"low\");\n    input4.appendChild(option3);\n    \n    const input5 = createE(\"input\");\n    input5.setAttribute(\"type\", \"text\");\n    input5.setAttribute(\"id\", \"notes\");\n    input5.setAttribute(\"name\", \"notes\");\n    input5.setAttribute(\"placeholder\", \"any notes?\");\n\n    const input6Container = createE(\"div\", false, \"checkbox-container\");\n    const input6 = createE(\"input\");\n    input6.setAttribute(\"type\", \"checkbox\");\n    input6.setAttribute(\"id\", \"checklist\");\n    input6.setAttribute(\"name\", \"checklist\");\n\n    const input6Label = createE(\"label\", \"Completeness Status\");\n    input6Label.setAttribute(\"for\", \"checklist\");\n\n    const addTaskbtn = createE(\"button\");\n    submitForm(addTaskbtn);\n    const addTaskBtnIcon = createE(\"i\");\n    addTaskBtnIcon.classList.add(\"fas\");\n    addTaskBtnIcon.classList.add(\"fa-plus-circle\");\n    const addTaskbtnSpan = createE(\"span\", \"Add task\");\n    addTaskbtn.appendChild(addTaskBtnIcon);\n    addTaskbtn.appendChild(addTaskbtnSpan);\n\n    form.appendChild(input1);\n    form.appendChild(input2);\n    form.appendChild(input3);\n    form.appendChild(input4Label);\n    form.appendChild(input4);\n    form.appendChild(input5);\n    input6Container.appendChild(input6);\n    input6Container.appendChild(input6Label);\n    form.appendChild(input6Container);\n    form.appendChild(addTaskbtn);\n\n    return form;\n}\n\nfunction displayTable() {\n    const table = createE(\"table\");\n    const trHeading = createE(\"tr\");\n    const trh1 = createE(\"th\", \"Title\");\n    const trh2 = createE(\"th\", \"Description\");\n    const trh3 = createE(\"th\", \"Due Date\");\n    const trh4 = createE(\"th\", \"Priority\");\n    const trh5 = createE(\"th\", \"Notes\");\n    const trh6 = createE(\"th\", \"Status\");\n    trHeading.appendChild(trh1);\n    trHeading.appendChild(trh2);\n    trHeading.appendChild(trh3);\n    trHeading.appendChild(trh4);\n    trHeading.appendChild(trh5);\n    trHeading.appendChild(trh6);\n    table.appendChild(trHeading);\n    const oldTasks = document.querySelectorAll(\"tr\");\n    if (oldTasks.length > 0) {\n        const arrOldTasks = Array.from(oldTasks);\n        for (let index = 0; index < arrOldTasks.length; index++) {\n            const element = arrOldTasks[index];\n            element.innerHTML = \"\";\n        }\n    }\n\n    let tasksArray = JSON.parse(localStorage.getItem('defaultPage'));\n    tasksArray.map((newTask) => {\n        let tr = document.createElement('tr');\n        tr.classList.add('task-row');\n      \n        let td1 = document.createElement('td');\n        let td2 = document.createElement('td');\n        let td3 = document.createElement('td');\n        let td4 = document.createElement('td');\n        let td5 = document.createElement('td');\n        let td6 = document.createElement('td');\n        let removeBtn = document.createElement('button');\n        let td6Btn = document.createElement('button');\n      \n        td1.textContent = newTask.title;\n        td2.textContent = newTask.description;\n        td3.textContent = newTask.dueDate;\n        td4.textContent = newTask.priority;\n        td5.textContent = newTask.notes;\n        td6Btn.textContent = newTask.checklist;\n        removeBtn.textContent = 'Remove';\n        tr.setAttribute('data-index', tasksArray.indexOf(newTask));\n      \n        \n        tr.appendChild(td1);\n        tr.appendChild(td2);\n        tr.appendChild(td3);\n        tr.appendChild(td4);\n        tr.appendChild(td5);\n        tr.appendChild(td6);\n        td6.appendChild(td6Btn);\n        td6.appendChild(removeBtn);\n        table.appendChild(tr);\n\n        td6Btn.addEventListener('click', () => {\n          if (td6Btn.textContent === 'Closed') {\n            td6Btn.textContent = 'Open';\n          } else {\n            td6Btn.textContent = 'Closed';\n          }\n        });\n      \n        removeBtn.addEventListener('click', () => {\n            tr.remove();\n            allTasks.default.splice(tr.dataset.index, 1);\n            localStorage.setItem(\"defaultPage\", JSON.stringify(allTasks.default));\n        });\n        return table;\n    });\n\n    return table;\n}\n\nfunction createDefault() {\n    const defaultPage = createE(\"div\", false, \"default-page\");\n    defaultPage.appendChild(displayTaskForm());\n    console.log(localStorage);\n    if (localStorage.length === 0) {\n        localStorage.setItem(\"defaultPage\", JSON.stringify([]));\n    }\n    if (JSON.parse(localStorage.getItem('defaultPage')).length > 0) {\n\n        defaultPage.appendChild(displayTable());\n    }\n\n    return defaultPage;\n}\n\nfunction loadDefault() {\n    const main = document.querySelector(\"#main\");\n    main.textContent = \"\";\n    main.appendChild(createDefault());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadDefault);\n\n//# sourceURL=webpack://to-do-list/./src/default.js?");

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

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setActiveButton\": () => (/* binding */ setActiveButton),\n/* harmony export */   \"showCalledProject\": () => (/* binding */ showCalledProject),\n/* harmony export */   \"addProjectToProjects\": () => (/* binding */ addProjectToProjects),\n/* harmony export */   \"deleteOldProjectsFromHTML\": () => (/* binding */ deleteOldProjectsFromHTML)\n/* harmony export */ });\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll('.aside-btn');\n\n    buttons.forEach((btn) => {\n      btn.classList.remove('active');\n    });\n\n    button.classList.add('active');\n}\n\n\nconst showCalledProject = (projectName) => {\n    projectName.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        console.log(e.target.textContent);\n        setActiveButton(projectName);\n        // loadToday();\n    })\n}\n\nconst addProjectToProjects = (projectInputValue, allProjects) => {\n    allProjects[projectInputValue] = [];\n    let projectLocalStorage = JSON.parse(localStorage.getItem(JSON.stringify(projectInputValue)));\n    if (projectLocalStorage !== null) {\n        allProjects.projectInputValue = [];\n        projectLocalStorage.map((e) => {\n            allProjects.projectInputValue.push(e);\n        });\n        allProjects.projectInputValue.push(projectInputValue);\n        localStorage.setItem(JSON.stringify(projectInputValue), JSON.stringify(allProjects.projectInputValue));\n    } else {\n        allProjects.projectInputValue = [];\n        localStorage.setItem(JSON.stringify(projectInputValue), JSON.stringify([]));\n    }\n}\n\nfunction deleteOldProjectsFromHTML() {\n    const oldProjects = document.querySelectorAll(\".project-container\");\n    if (oldProjects.length > 0) {\n        const arrOldProjects = Array.from(oldProjects);\n        for (let index = 0; index < arrOldProjects.length; index++) {\n            const element = arrOldProjects[index];\n            element.innerHTML = \"\";\n        }\n    }\n}\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/logic.js?");

/***/ }),

/***/ "./src/page-loader.js":
/*!****************************!*\
  !*** ./src/page-loader.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox */ \"./src/inbox.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ \"./src/today.js\");\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default */ \"./src/default.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\n\n\n\n\n\n\n\n\nconst createE = (elementName, content, className, href) => {\n    const element = document.createElement(elementName);\n    if (content) { element.innerHTML = content;}\n    if (className) { element.classList.toggle(className);}\n    if (href) { element.href = href;}\n    return element;\n};\n\nconst projects = {};\n\nfunction displayProjects() {\n    (0,_logic__WEBPACK_IMPORTED_MODULE_3__.deleteOldProjectsFromHTML)()\n\n    let projectsContainer = createE(\"div\", false, \"projects-container\");\n\n    for (const key in localStorage) {\n        if (Object.hasOwnProperty.call(localStorage, key)) {\n            let newProjectCon = createE(\"div\", false, \"project-container\");\n            newProjectCon.setAttribute(\"data-projectname\", key);\n            let projectPart1 = createE(\"div\", false, \"project-left\")\n            let projectPart2 = createE(\"div\", false, \"project-right\")\n            let newProjectIcon = createE(\"i\");\n            newProjectIcon.classList.add(\"far\");\n            newProjectIcon.classList.add(\"fa-circle\");\n            let newProject = createE(\"span\", key.replace(/['\"]+/g, ''), 'project-name');\n            newProject.classList.add(\"aside-btn\");\n            (0,_logic__WEBPACK_IMPORTED_MODULE_3__.showCalledProject)(newProject);\n            \n            let newProjectDeleteBtn = createE(\"i\");\n            newProjectDeleteBtn.classList.add(\"fas\");\n            newProjectDeleteBtn.classList.add(\"fa-trash-alt\");\n            // deleteProject(newProjectDeleteBtn);\n            newProjectDeleteBtn.addEventListener('click', () => {\n                newProjectCon.remove();\n                localStorage.removeItem(newProjectCon.dataset.projectname);\n            })\n\n            projectPart1.appendChild(newProjectIcon);\n            projectPart1.appendChild(newProject);\n            projectPart2.appendChild(newProjectDeleteBtn);\n            newProjectCon.appendChild(projectPart1);\n            newProjectCon.appendChild(projectPart2);\n            projectsContainer.appendChild(newProjectCon);\n        }\n    }\n    return projectsContainer;\n}\n\nfunction createProject(btn) {\n    btn.addEventListener('click', () => {\n        const projectTitle = document.querySelector('#projectTitle');\n        if (projectTitle.value === '') {\n            alert(\"Project Title's Field must be filled out\"); // eslint-disable-line no-alert\n        } else {\n            const newProject = projectTitle.value;\n            (0,_logic__WEBPACK_IMPORTED_MODULE_3__.addProjectToProjects)(newProject, projects);\n            let asideBottom = document.querySelector(\".aside-bottom\");\n            asideBottom.appendChild(displayProjects());\n        }\n    })\n    return btn;\n}\n\nfunction createHeader() {\n    const header = createE(\"header\");\n    const headerIcon = createE(\"i\");\n    headerIcon.classList.add(\"fas\");\n    headerIcon.classList.add(\"fa-check-double\");\n    const headerTitle = createE('h1', 'Smart Todo-list');\n\n    header.appendChild(headerIcon);\n    header.appendChild(headerTitle);\n\n    return header;\n}\n\nfunction createAside() {\n    const aside = createE(\"aside\", false);\n    let asideTop = createE(\"div\", false, \"aside-top\");\n    let asideBottom = createE(\"div\", false, \"aside-bottom\");\n\n    let inboxBtn = createE(\"button\", false, \"aside-btn\");\n    inboxBtn.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        (0,_logic__WEBPACK_IMPORTED_MODULE_3__.setActiveButton)(inboxBtn);\n        (0,_inbox__WEBPACK_IMPORTED_MODULE_0__.default)();\n    })\n    const inboxBtnIcon = document.createElement('i');\n    inboxBtnIcon.classList.add('fas');\n    inboxBtnIcon.classList.add('fa-inbox');\n    let inboxBtnTitle = createE('span', \"Inbox\")\n    inboxBtn.appendChild(inboxBtnIcon);\n    inboxBtn.appendChild(inboxBtnTitle);\n    asideTop.appendChild(inboxBtn);\n\n    let todayBtn = createE(\"button\", false, \"aside-btn\");\n    todayBtn.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        (0,_logic__WEBPACK_IMPORTED_MODULE_3__.setActiveButton)(todayBtn);\n        (0,_today__WEBPACK_IMPORTED_MODULE_1__.default)();\n    })\n    const todayBtnIcon = document.createElement('i');\n    todayBtnIcon.classList.add('fas');\n    todayBtnIcon.classList.add('fa-arrow-circle-down');\n    let todayBtnTitle = createE('span', \"Today\")\n    todayBtn.appendChild(todayBtnIcon);\n    todayBtn.appendChild(todayBtnTitle);\n    asideTop.appendChild(todayBtn);\n    aside.appendChild(asideTop);\n\n    let project = createE(\"div\", \"Projects:\");\n    asideBottom.appendChild(project);\n\n    let defaulBtn = createE(\"button\", false, \"aside-btn\");\n    defaulBtn.setAttribute(\"id\", \"defaulBtn\");\n    defaulBtn.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        (0,_logic__WEBPACK_IMPORTED_MODULE_3__.setActiveButton)(defaulBtn);\n        (0,_default__WEBPACK_IMPORTED_MODULE_2__.default)();\n    })\n    const defaulBtnIcon = document.createElement('i');\n    defaulBtnIcon.classList.add('far');\n    defaulBtnIcon.classList.add('fa-circle');\n    let defaultBtnTitle = createE('span', \"Default\")\n    defaulBtn.appendChild(defaulBtnIcon);\n    defaulBtn.appendChild(defaultBtnTitle);\n    asideBottom.appendChild(defaulBtn);\n    aside.appendChild(asideBottom);\n\n    asideBottom.appendChild(displayProjects());\n\n    const projectBtn = createE(\"button\", false, \"aside-btn\");\n    let projectTitle = createE('input');\n    projectTitle.setAttribute(\"type\", \"text\");\n    projectTitle.setAttribute(\"id\", \"projectTitle\");\n    projectTitle.setAttribute(\"name\", \"projectTitle\");\n    projectTitle.setAttribute(\"placeholder\", \"Create Project\");\n\n    const projectIcon = document.createElement('i');\n    projectIcon.classList.add('fas');\n    projectIcon.classList.add('fa-plus-square');\n    createProject(projectIcon);\n    projectBtn.appendChild(projectIcon);\n    projectBtn.appendChild(projectTitle);\n    aside.appendChild(projectBtn);\n\n    return aside;\n}\n\nfunction createMain() {\n    const main = document.createElement('main');\n    main.classList.add('main');\n    main.setAttribute('id', 'main');\n    return main;\n}\n\nfunction createFooter() {\n    const footer = createE('footer');\n    const footerDiv = createE('div', 'Copyright © 2021 Sarvar Khalimov');\n    const linkIcon1 = createE('a', '', 'icon-link', 'https://github.com/SarvarKh');\n    linkIcon1.setAttribute('target', '_blank');\n    const icon1 = document.createElement('i');\n    icon1.classList.add('fab');\n    icon1.classList.add('fa-github');\n  \n    const linkIcon2 = createE('a', '', 'icon-link', 'https://www.linkedin.com/in/sarvar-khalimov/');\n    linkIcon2.setAttribute('target', '_blank');\n    const icon2 = document.createElement('i');\n    icon2.classList.add('fab');\n    icon2.classList.add('fa-linkedin');\n  \n    const linkIcon3 = createE('a', '', 'icon-link', 'https://sarvarkh.github.io/portfolio/');\n    linkIcon3.setAttribute('target', '_blank');\n    const icon3 = document.createElement('i');\n    icon3.classList.add('fas');\n    icon3.classList.add('fa-folder-open');\n  \n    linkIcon1.appendChild(icon1);\n    linkIcon2.appendChild(icon2);\n    linkIcon3.appendChild(icon3);\n    footerDiv.appendChild(linkIcon1);\n    footerDiv.appendChild(linkIcon2);\n    footerDiv.appendChild(linkIcon3);\n    footer.appendChild(footerDiv);\n  \n    return footer;\n}\n\nfunction start() {\n    const content = document.getElementById('content');\n    content.appendChild(createHeader());\n    const container = createE(\"div\", false, \"container\");\n    container.appendChild(createAside());\n    container.appendChild(createMain());\n    content.appendChild(container);\n    content.appendChild(createFooter());\n    (0,_logic__WEBPACK_IMPORTED_MODULE_3__.setActiveButton)(document.querySelector('.aside-btn'));\n    (0,_default__WEBPACK_IMPORTED_MODULE_2__.default)();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (start);\n\n//# sourceURL=webpack://to-do-list/./src/page-loader.js?");

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