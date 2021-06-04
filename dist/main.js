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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTable\": () => (/* binding */ displayTable),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\n\n\n\n\n\n\n\n\n\nfunction displayTaskForm(key) {\n    const form = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"div\", false, \"form\");\n    const input1 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"input\");\n    input1.setAttribute(\"type\", \"text\");\n    input1.setAttribute(\"id\", \"title\");\n    input1.setAttribute(\"name\", \"title\");\n    input1.setAttribute(\"placeholder\", \"add title\");\n    input1.setAttribute(\"autofocus\", true);\n    \n    const input2 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"input\");\n    input2.setAttribute(\"type\", \"text\");\n    input2.setAttribute(\"id\", \"description\");\n    input2.setAttribute(\"name\", \"description\");\n    input2.setAttribute(\"placeholder\", \"add description\");\n\n    const input3 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"input\");\n    input3.setAttribute(\"type\", \"date\");\n    input3.setAttribute(\"id\", \"dueDate\");\n    input3.setAttribute(\"name\", \"dueDate\");\n    input3.setAttribute(\"placeholder\", \"add due date\");\n\n    const input4 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"select\");\n    input4.setAttribute(\"id\", \"priority\");\n    const input4Label = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"label\", \"Choose a priority:\");\n    input4Label.setAttribute(\"for\", \"priority\");\n    const option1 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"option\", \"High\");\n    option1.setAttribute(\"value\", \"high\");\n    input4.appendChild(option1);\n    const option2 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"option\", \"Medium\");\n    option2.setAttribute(\"value\", \"medium\");\n    input4.appendChild(option2);\n    const option3 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"option\", \"Low\");\n    option3.setAttribute(\"value\", \"low\");\n    input4.appendChild(option3);\n    \n    const input5 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"input\");\n    input5.setAttribute(\"type\", \"text\");\n    input5.setAttribute(\"id\", \"notes\");\n    input5.setAttribute(\"name\", \"notes\");\n    input5.setAttribute(\"placeholder\", \"any notes?\");\n\n    const input6Container = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"div\", false, \"checkbox-container\");\n    const input6 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"input\");\n    input6.setAttribute(\"type\", \"checkbox\");\n    input6.setAttribute(\"id\", \"checklist\");\n    input6.setAttribute(\"name\", \"checklist\");\n\n    const input6Label = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"label\", \"Completeness Status\");\n    input6Label.setAttribute(\"for\", \"checklist\");\n\n    const addTaskbtn = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"button\");\n    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.submitForm)(addTaskbtn, key);\n    const addTaskBtnIcon = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"i\");\n    addTaskBtnIcon.classList.add(\"fas\");\n    addTaskBtnIcon.classList.add(\"fa-plus-circle\");\n    const addTaskbtnSpan = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"span\", \"Add task\");\n    addTaskbtn.appendChild(addTaskBtnIcon);\n    addTaskbtn.appendChild(addTaskbtnSpan);\n\n    form.appendChild(input1);\n    form.appendChild(input2);\n    form.appendChild(input3);\n    form.appendChild(input4Label);\n    form.appendChild(input4);\n    form.appendChild(input5);\n    input6Container.appendChild(input6);\n    input6Container.appendChild(input6Label);\n    form.appendChild(input6Container);\n    form.appendChild(addTaskbtn);\n\n    return form;\n}\n\nfunction displayTable(key) {\n    const table = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"table\");\n    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.displayHeadingIfThereIsItem)(key, table);\n\n    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.deleteOldTasks)();\n    let tasksArray;\n    tasksArray = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.setTasksArray)(tasksArray, key);\n\n    tasksArray.map((newTask) => {\n        let tr = document.createElement('tr');\n        tr.classList.add('task-row');\n      \n        let td1 = document.createElement('td');\n        let td2 = document.createElement('td');\n        let td3 = document.createElement('td');\n        let td4 = document.createElement('td');\n        let td5 = document.createElement('td');\n        let td6 = document.createElement('td');\n        let removeBtn = document.createElement('button');\n        let td6Btn = document.createElement('button');\n      \n        td1.textContent = newTask.title;\n        td2.textContent = newTask.description;\n        td3.textContent = newTask.dueDate;\n        td4.textContent = newTask.priority;\n        td5.textContent = newTask.notes;\n        td6Btn.textContent = newTask.checklist;\n        removeBtn.textContent = 'Remove';\n        tr.setAttribute('data-index', tasksArray.indexOf(newTask));\n      \n        \n        tr.appendChild(td1);\n        tr.appendChild(td2);\n        tr.appendChild(td3);\n        tr.appendChild(td4);\n        tr.appendChild(td5);\n        tr.appendChild(td6);\n        td6.appendChild(td6Btn);\n        td6.appendChild(removeBtn);\n        table.appendChild(tr);\n\n        (0,_logic__WEBPACK_IMPORTED_MODULE_0__.changeTaskStatus)(td6Btn);\n        (0,_logic__WEBPACK_IMPORTED_MODULE_0__.removeTask)(removeBtn, tr, key);\n        return table;\n    });\n\n    return table;\n}\n\nfunction createProject(key) {\n    const projectPage = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"div\", false, \"project-page\");\n    projectPage.appendChild(displayTaskForm(key));\n    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.verifyAndDisplayTable)(projectPage, key);\n\n    return projectPage;\n}\n\nfunction loadProject(key) {\n    const main = document.querySelector(\"#main\");\n    main.textContent = \"\";\n    main.appendChild(createProject(key));\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadProject);\n\n//# sourceURL=webpack://to-do-list/./src/default.js?");

/***/ }),

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\n\n\n\n\n\nfunction displayTable() {\n    const table = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"table\");\n    const trHeading = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"tr\");\n    const trh1 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"th\", \"Title\");\n    const trh2 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"th\", \"Description\");\n    const trh3 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"th\", \"Due Date\");\n    const trh4 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"th\", \"Priority\");\n    const trh5 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"th\", \"Notes\");\n    const trh6 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"th\", \"Status\");\n    trHeading.appendChild(trh1);\n    trHeading.appendChild(trh2);\n    trHeading.appendChild(trh3);\n    trHeading.appendChild(trh4);\n    trHeading.appendChild(trh5);\n    trHeading.appendChild(trh6);\n    table.appendChild(trHeading);\n\n    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.deleteOldTasks)();\n    let tasksArray;\n    tasksArray = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.setTasksArrayForCustomPages)(tasksArray);\n    \n    tasksArray.map((newTask) => {\n        let tr = document.createElement('tr');\n        tr.classList.add('task-row');\n      \n        let td1 = document.createElement('td');\n        let td2 = document.createElement('td');\n        let td3 = document.createElement('td');\n        let td4 = document.createElement('td');\n        let td5 = document.createElement('td');\n        let td6 = document.createElement('td');\n        let removeBtn = document.createElement('button');\n        let td6Btn = document.createElement('button');\n      \n        td1.textContent = newTask.title;\n        td2.textContent = newTask.description;\n        td3.textContent = newTask.dueDate;\n        td4.textContent = newTask.priority;\n        td5.textContent = newTask.notes;\n        td6Btn.textContent = newTask.checklist;\n        removeBtn.textContent = 'Remove';\n        tr.setAttribute('data-index', tasksArray.indexOf(newTask));\n      \n        \n        tr.appendChild(td1);\n        tr.appendChild(td2);\n        tr.appendChild(td3);\n        tr.appendChild(td4);\n        tr.appendChild(td5);\n        tr.appendChild(td6);\n        td6.appendChild(td6Btn);\n        td6.appendChild(removeBtn);\n        table.appendChild(tr);\n\n        (0,_logic__WEBPACK_IMPORTED_MODULE_0__.changeTaskStatus)(td6Btn);\n        (0,_logic__WEBPACK_IMPORTED_MODULE_0__.removeTask)(removeBtn, tr);\n        return table;\n    });\n\n    return table;\n}\n\nfunction createInbox() {\n    const inboxPage = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"div\");\n    inboxPage.appendChild(displayTable());\n    return inboxPage;\n}\n\nfunction loadInbox() {\n    const main = document.querySelector(\"#main\");\n    main.textContent = \"\";\n    main.appendChild(createInbox());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadInbox);\n\n//# sourceURL=webpack://to-do-list/./src/inbox.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createE\": () => (/* binding */ createE),\n/* harmony export */   \"setActiveButton\": () => (/* binding */ setActiveButton),\n/* harmony export */   \"showCalledProject\": () => (/* binding */ showCalledProject),\n/* harmony export */   \"deleteOldProjectsFromHTML\": () => (/* binding */ deleteOldProjectsFromHTML),\n/* harmony export */   \"loopThroughLocalStorageKeys\": () => (/* binding */ loopThroughLocalStorageKeys),\n/* harmony export */   \"projectInputVerification\": () => (/* binding */ projectInputVerification),\n/* harmony export */   \"addTaskToDefaultTasks\": () => (/* binding */ addTaskToDefaultTasks),\n/* harmony export */   \"submitForm\": () => (/* binding */ submitForm),\n/* harmony export */   \"deleteOldTasks\": () => (/* binding */ deleteOldTasks),\n/* harmony export */   \"setTasksArray\": () => (/* binding */ setTasksArray),\n/* harmony export */   \"changeTaskStatus\": () => (/* binding */ changeTaskStatus),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask),\n/* harmony export */   \"verifyAndDisplayTable\": () => (/* binding */ verifyAndDisplayTable),\n/* harmony export */   \"setTasksArrayForCustomPages\": () => (/* binding */ setTasksArrayForCustomPages),\n/* harmony export */   \"setTasksArrayForToday\": () => (/* binding */ setTasksArrayForToday),\n/* harmony export */   \"displayHeadingIfThereIsItem\": () => (/* binding */ displayHeadingIfThereIsItem)\n/* harmony export */ });\n/* harmony import */ var _page_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-loader */ \"./src/page-loader.js\");\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default */ \"./src/default.js\");\n\n\n\n\nconst createE = (elementName, content, className, href) => {\n    const element = document.createElement(elementName);\n    if (content) { element.innerHTML = content;}\n    if (className) { element.classList.toggle(className);}\n    if (href) { element.href = href;}\n    return element;\n};\n\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll('.aside-btn');\n\n    buttons.forEach((btn) => {\n      btn.classList.remove('active');\n    });\n\n    button.classList.add('active');\n}\n\n\nconst showCalledProject = (projectName, loadProject, key) => {\n    projectName.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        setActiveButton(projectName);\n        loadProject(key);\n    })\n}\n\nconst addProjectToProjects = (projectInputValue, allProjects) => {\n    allProjects[projectInputValue] = [];\n    let projectLocalStorage = JSON.parse(localStorage.getItem(JSON.stringify(projectInputValue)));\n    if (projectLocalStorage !== null) {\n        allProjects.projectInputValue = [];\n        projectLocalStorage.map((e) => {\n            allProjects.projectInputValue.push(e);\n        });\n        allProjects.projectInputValue.push(projectInputValue);\n        localStorage.setItem(JSON.stringify(projectInputValue), JSON.stringify(allProjects.projectInputValue));\n    } else {\n        allProjects.projectInputValue = [];\n        localStorage.setItem(JSON.stringify(projectInputValue), JSON.stringify([]));\n    }\n}\n\nconst deleteOldProjectsFromHTML = () => {\n    const oldProjects = document.querySelectorAll(\".project-container\");\n    if (oldProjects.length > 0) {\n        const arrOldProjects = Array.from(oldProjects);\n        for (let index = 0; index < arrOldProjects.length; index++) {\n            const element = arrOldProjects[index];\n            element.innerHTML = \"\";\n        }\n    }\n}\n\nconst loopThroughLocalStorageKeys = (projectsContainer) => {\n    for (const key in localStorage) {\n        if (Object.hasOwnProperty.call(localStorage, key)) {\n            (0,_page_loader__WEBPACK_IMPORTED_MODULE_0__.createProjectsHTML)(key, projectsContainer);\n        }\n    }\n}\n\nconst projects = {};\n\nconst projectInputVerification = (projectTitle) => {\n    if (projectTitle.value === '') {\n        alert(\"Project Title's Field must be filled out\"); // eslint-disable-line no-alert\n    } else {\n        const newProject = projectTitle.value;\n        addProjectToProjects(newProject, projects);\n        let asideBottom = document.querySelector(\".aside-bottom\");\n        asideBottom.appendChild((0,_page_loader__WEBPACK_IMPORTED_MODULE_0__.displayProjects)());\n    }\n}\n\nfunction Task(title, description, dueDate, priority, notes, checklist) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.notes = notes;\n    this.checklist = checklist;\n}\n\nconst allTasks = {\n    default: [],\n    today: []\n};\n\nconst addTaskToDefaultTasks = (newTask, tasksObj, key) => {\n    let defLocalStorage;\n    if (key === undefined) {\n        defLocalStorage = JSON.parse(localStorage.getItem('Default'));\n    } else {\n        defLocalStorage = JSON.parse(localStorage.getItem(JSON.stringify(key)));\n    }\n\n    if (defLocalStorage.length > 0) {\n        tasksObj.default = [];\n        defLocalStorage.map((e) => {\n            tasksObj.default.push(e);\n        });\n        tasksObj.default.push(newTask);\n        \n\n        if (key === undefined) {\n            localStorage.setItem(\"Default\", JSON.stringify(allTasks.default));\n        } else {\n            localStorage.setItem(JSON.stringify(key), JSON.stringify(allTasks.default));\n        }\n\n    } else {\n        tasksObj.default.push(newTask);\n        if (key === undefined) {\n            localStorage.setItem(\"Default\", JSON.stringify(allTasks.default));\n        } else {\n            localStorage.setItem(JSON.stringify(key), JSON.stringify(allTasks.default));\n        }\n    }\n}\n\nconst submitForm = (btn, key) => {\n    btn.addEventListener('click', () => {\n        const title = document.querySelector('#title');\n        const description = document.querySelector('#description');\n        const dueDate = document.querySelector('#dueDate');\n        const priority = document.querySelector('#priority');\n        const notes = document.querySelector('#notes');\n        let checklist = document.querySelector('#checklist');\n        \n        if (checklist.checked) {\n            checklist.status = \"Closed\";\n        } else {\n            checklist.status = \"Open\";\n        }\n        if (title.value === '' || description.value === '' || dueDate.value === '' || priority.value === '' || notes.value === '') {\n            alert('Fields must be filled out'); // eslint-disable-line no-alert\n        } else {\n            const newTask = new Task(title.value, description.value, dueDate.value, priority.value, notes.value, checklist.status);\n            addTaskToDefaultTasks(newTask, allTasks, key);\n            let defPage = document.querySelector(\".project-page\");\n            defPage.appendChild((0,_default__WEBPACK_IMPORTED_MODULE_1__.displayTable)(key));\n        }\n    })\n    return btn;\n}\n\nconst deleteOldTasks = () => {\n    const oldTasks = document.querySelectorAll(\"tr\");\n    if (oldTasks.length > 0) {\n        const arrOldTasks = Array.from(oldTasks);\n        for (let index = 0; index < arrOldTasks.length; index++) {\n            const element = arrOldTasks[index];\n            element.innerHTML = \"\";\n        }\n    }\n}\n\nfunction setTasksArray(tasksArray, key) {\n    if (key === undefined) {\n        tasksArray = JSON.parse(localStorage.getItem('Default'));\n    } else {\n        tasksArray = JSON.parse(localStorage.getItem(JSON.stringify(key)));\n    }\n    return tasksArray;\n}\n\nconst changeTaskStatus = (td6Btn) => {\n    td6Btn.addEventListener('click', () => {\n      if (td6Btn.textContent === 'Closed') {\n        td6Btn.textContent = 'Open';\n      } else {\n        td6Btn.textContent = 'Closed';\n      }\n    });\n}\n\nconst removeTask = (removeBtn, tr, key) => {\n    removeBtn.addEventListener('click', () => {\n        tr.remove();\n        allTasks.default.splice(tr.dataset.index, 1);\n    \n        if (key === undefined) {\n            localStorage.setItem(\"Default\", JSON.stringify(allTasks.default));\n        } else {\n            localStorage.setItem(JSON.stringify(key), JSON.stringify(allTasks.default));\n        }\n        \n    });\n}\n\nconst verifyAndDisplayTable = (projectPage, key) => {\n    if (localStorage.length === 0) {\n        localStorage.setItem(\"Default\", JSON.stringify([]));\n    }\n    projectPage.appendChild((0,_default__WEBPACK_IMPORTED_MODULE_1__.displayTable)(key));\n    \n}\n\nconst setTasksArrayForCustomPages = (tasksArray) => {\n    let arr = [];\n    const keys = Object.keys(localStorage);\n    keys.forEach((key, index) => {\n        arr.push(JSON.parse(localStorage[key]));\n    })\n    tasksArray = arr.flat();\n    return tasksArray;\n}\n\nconst setTasksArrayForToday = (tasksArray) => {\n    let today = new Date();\n    let arr = [];\n    const keys = Object.keys(localStorage);\n    keys.forEach((key, index) => {\n        arr.push(JSON.parse(localStorage[key]));\n    })\n    let finalArr = [];\n    arr.flat().map((e) => {\n        let objectDueDate = new Date(e.dueDate);\n        if (objectDueDate, objectDueDate <= today) {\n            finalArr.push(e);\n        }\n    })\n    tasksArray = finalArr;\n    return tasksArray;\n}\n\nconst displayHeadingIfThereIsItem = (key, table) => {\n    if (JSON.parse(localStorage.getItem('Default')).length > 0 || (localStorage.getItem(JSON.stringify(key)) !== null && JSON.parse(localStorage.getItem(JSON.stringify(key))).length > 0)) {\n        const trHeading = createE(\"tr\");\n        const trh1 = createE(\"th\", \"Title\");\n        const trh2 = createE(\"th\", \"Description\");\n        const trh3 = createE(\"th\", \"Due Date\");\n        const trh4 = createE(\"th\", \"Priority\");\n        const trh5 = createE(\"th\", \"Notes\");\n        const trh6 = createE(\"th\", \"Status\");\n        trHeading.appendChild(trh1);\n        trHeading.appendChild(trh2);\n        trHeading.appendChild(trh3);\n        trHeading.appendChild(trh4);\n        trHeading.appendChild(trh5);\n        trHeading.appendChild(trh6);\n        table.appendChild(trHeading);\n    }\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/logic.js?");

/***/ }),

/***/ "./src/page-loader.js":
/*!****************************!*\
  !*** ./src/page-loader.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProjectsHTML\": () => (/* binding */ createProjectsHTML),\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox */ \"./src/inbox.js\");\n/* harmony import */ var _today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today */ \"./src/today.js\");\n/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default */ \"./src/default.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst createProjectsHTML = (key, projectsContainer) => {\n    let newProjectCon = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)(\"div\", false, \"project-container\");\n    newProjectCon.setAttribute(\"data-projectname\", key);\n    let projectPart1 = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)(\"div\", false, \"project-left\")\n    let projectPart2 = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)(\"div\", false, \"project-right\")\n    let newProjectIcon = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)(\"i\");\n    newProjectIcon.classList.add(\"far\");\n    newProjectIcon.classList.add(\"fa-circle\");\n    let newProject = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)(\"span\", key.replace(/['\"]+/g, ''), 'project-name');\n    newProject.classList.add(\"aside-btn\");\n    (0,_logic__WEBPACK_IMPORTED_MODULE_3__.showCalledProject)(newProject, _default__WEBPACK_IMPORTED_MODULE_2__.default, key.replace(/['\"]+/g, ''));\n    \n    let newProjectDeleteBtn = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)(\"i\");\n    newProjectDeleteBtn.classList.add(\"fas\");\n    newProjectDeleteBtn.classList.add(\"fa-trash-alt\");\n    newProjectDeleteBtn.addEventListener('click', () => {\n        newProjectCon.remove();\n        localStorage.removeItem(newProjectCon.dataset.projectname);\n    })\n\n    projectPart1.appendChild(newProjectIcon);\n    projectPart1.appendChild(newProject);\n    projectPart2.appendChild(newProjectDeleteBtn);\n    newProjectCon.appendChild(projectPart1);\n    newProjectCon.appendChild(projectPart2);\n    projectsContainer.appendChild(newProjectCon);\n}\n\nfunction displayProjects() {\n    ;(0,_logic__WEBPACK_IMPORTED_MODULE_3__.deleteOldProjectsFromHTML)()\n    let projectsContainer = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)(\"div\", false, \"projects-container\");\n    (0,_logic__WEBPACK_IMPORTED_MODULE_3__.loopThroughLocalStorageKeys)(projectsContainer);\n    return projectsContainer;\n}\n\nfunction createProject(btn) {\n    btn.addEventListener('click', () => {\n        const projectTitle = document.querySelector('#projectTitle');\n        (0,_logic__WEBPACK_IMPORTED_MODULE_3__.projectInputVerification)(projectTitle);\n    })\n    return btn;\n}\n\nfunction createHeader() {\n    const header = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)(\"header\");\n    const headerIcon = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)(\"i\");\n    headerIcon.classList.add(\"fas\");\n    headerIcon.classList.add(\"fa-check-double\");\n    const headerTitle = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)('h1', 'Smart Todo-list');\n\n    header.appendChild(headerIcon);\n    header.appendChild(headerTitle);\n\n    return header;\n}\n\nfunction createAside() {\n    const aside = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)(\"aside\", false);\n    let asideTop = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)(\"div\", false, \"aside-top\");\n    let asideBottom = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)(\"div\", false, \"aside-bottom\");\n\n    let inboxBtn = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)(\"button\", false, \"aside-btn\");\n    (0,_logic__WEBPACK_IMPORTED_MODULE_3__.showCalledProject)(inboxBtn, _inbox__WEBPACK_IMPORTED_MODULE_0__.default);\n    const inboxBtnIcon = document.createElement('i');\n    inboxBtnIcon.classList.add('fas');\n    inboxBtnIcon.classList.add('fa-inbox');\n    let inboxBtnTitle = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)('span', \"Inbox\")\n    inboxBtn.appendChild(inboxBtnIcon);\n    inboxBtn.appendChild(inboxBtnTitle);\n    asideTop.appendChild(inboxBtn);\n\n    let todayBtn = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)(\"button\", false, \"aside-btn\");\n    (0,_logic__WEBPACK_IMPORTED_MODULE_3__.showCalledProject)(todayBtn, _today__WEBPACK_IMPORTED_MODULE_1__.default);\n    const todayBtnIcon = document.createElement('i');\n    todayBtnIcon.classList.add('fas');\n    todayBtnIcon.classList.add('fa-arrow-circle-down');\n    let todayBtnTitle = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)('span', \"Today\")\n    todayBtn.appendChild(todayBtnIcon);\n    todayBtn.appendChild(todayBtnTitle);\n    asideTop.appendChild(todayBtn);\n    aside.appendChild(asideTop);\n\n    let project = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)(\"div\", \"Projects:\");\n    asideBottom.appendChild(project);\n\n    let defaulBtn = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)(\"button\", false, \"aside-btn\");\n    defaulBtn.setAttribute(\"id\", \"defaulBtn\");\n    (0,_logic__WEBPACK_IMPORTED_MODULE_3__.showCalledProject)(defaulBtn, _default__WEBPACK_IMPORTED_MODULE_2__.default);\n    const defaulBtnIcon = document.createElement('i');\n    defaulBtnIcon.classList.add('far');\n    defaulBtnIcon.classList.add('fa-circle');\n    let defaultBtnTitle = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)('span', \"Default\")\n    defaulBtn.appendChild(defaulBtnIcon);\n    defaulBtn.appendChild(defaultBtnTitle);\n    asideBottom.appendChild(defaulBtn);\n    aside.appendChild(asideBottom);\n\n    asideBottom.appendChild(displayProjects());\n\n    const projectBtn = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)(\"button\", false, \"aside-btn\");\n    let projectTitle = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)('input');\n    projectTitle.setAttribute(\"type\", \"text\");\n    projectTitle.setAttribute(\"id\", \"projectTitle\");\n    projectTitle.setAttribute(\"name\", \"projectTitle\");\n    projectTitle.setAttribute(\"placeholder\", \"Create Project\");\n\n    const projectIcon = document.createElement('i');\n    projectIcon.classList.add('fas');\n    projectIcon.classList.add('fa-plus-square');\n    createProject(projectIcon);\n    projectBtn.appendChild(projectIcon);\n    projectBtn.appendChild(projectTitle);\n    aside.appendChild(projectBtn);\n\n    return aside;\n}\n\nfunction createMain() {\n    const main = document.createElement('main');\n    main.classList.add('main');\n    main.setAttribute('id', 'main');\n    return main;\n}\n\nfunction createFooter() {\n    const footer = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)('footer');\n    const footerDiv = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)('div', 'Copyright © 2021 Sarvar Khalimov');\n    const linkIcon1 = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)('a', '', 'icon-link', 'https://github.com/SarvarKh');\n    linkIcon1.setAttribute('target', '_blank');\n    const icon1 = document.createElement('i');\n    icon1.classList.add('fab');\n    icon1.classList.add('fa-github');\n  \n    const linkIcon2 = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)('a', '', 'icon-link', 'https://www.linkedin.com/in/sarvar-khalimov/');\n    linkIcon2.setAttribute('target', '_blank');\n    const icon2 = document.createElement('i');\n    icon2.classList.add('fab');\n    icon2.classList.add('fa-linkedin');\n  \n    const linkIcon3 = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)('a', '', 'icon-link', 'https://sarvarkh.github.io/portfolio/');\n    linkIcon3.setAttribute('target', '_blank');\n    const icon3 = document.createElement('i');\n    icon3.classList.add('fas');\n    icon3.classList.add('fa-folder-open');\n  \n    linkIcon1.appendChild(icon1);\n    linkIcon2.appendChild(icon2);\n    linkIcon3.appendChild(icon3);\n    footerDiv.appendChild(linkIcon1);\n    footerDiv.appendChild(linkIcon2);\n    footerDiv.appendChild(linkIcon3);\n    footer.appendChild(footerDiv);\n  \n    return footer;\n}\n\nfunction start() {\n    const content = document.getElementById('content');\n    content.appendChild(createHeader());\n    const container = (0,_logic__WEBPACK_IMPORTED_MODULE_3__.createE)(\"div\", false, \"container\");\n    container.appendChild(createAside());\n    container.appendChild(createMain());\n    content.appendChild(container);\n    content.appendChild(createFooter());\n    (0,_logic__WEBPACK_IMPORTED_MODULE_3__.setActiveButton)(document.querySelector('.aside-btn'));\n    (0,_default__WEBPACK_IMPORTED_MODULE_2__.default)();\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (start);\n\n//# sourceURL=webpack://to-do-list/./src/page-loader.js?");

/***/ }),

/***/ "./src/today.js":
/*!**********************!*\
  !*** ./src/today.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTable\": () => (/* binding */ displayTable),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/logic.js\");\n\n\n\n\n\n\nfunction displayTable() {\n    const table = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"table\");\n    const trHeading = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"tr\");\n    const trh1 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"th\", \"Title\");\n    const trh2 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"th\", \"Description\");\n    const trh3 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"th\", \"Due Date\");\n    const trh4 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"th\", \"Priority\");\n    const trh5 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"th\", \"Notes\");\n    const trh6 = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"th\", \"Status\");\n    trHeading.appendChild(trh1);\n    trHeading.appendChild(trh2);\n    trHeading.appendChild(trh3);\n    trHeading.appendChild(trh4);\n    trHeading.appendChild(trh5);\n    trHeading.appendChild(trh6);\n    table.appendChild(trHeading);\n\n    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.deleteOldTasks)();\n    let tasksArray;\n    tasksArray = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.setTasksArrayForToday)(tasksArray);\n    \n    tasksArray.map((newTask) => {\n        let tr = document.createElement('tr');\n        tr.classList.add('task-row');\n      \n        let td1 = document.createElement('td');\n        let td2 = document.createElement('td');\n        let td3 = document.createElement('td');\n        let td4 = document.createElement('td');\n        let td5 = document.createElement('td');\n        let td6 = document.createElement('td');\n        let removeBtn = document.createElement('button');\n        let td6Btn = document.createElement('button');\n      \n        td1.textContent = newTask.title;\n        td2.textContent = newTask.description;\n        td3.textContent = newTask.dueDate;\n        td4.textContent = newTask.priority;\n        td5.textContent = newTask.notes;\n        td6Btn.textContent = newTask.checklist;\n        removeBtn.textContent = 'Remove';\n        tr.setAttribute('data-index', tasksArray.indexOf(newTask));\n      \n        \n        tr.appendChild(td1);\n        tr.appendChild(td2);\n        tr.appendChild(td3);\n        tr.appendChild(td4);\n        tr.appendChild(td5);\n        tr.appendChild(td6);\n        td6.appendChild(td6Btn);\n        td6.appendChild(removeBtn);\n        table.appendChild(tr);\n\n        (0,_logic__WEBPACK_IMPORTED_MODULE_0__.changeTaskStatus)(td6Btn);\n        (0,_logic__WEBPACK_IMPORTED_MODULE_0__.removeTask)(removeBtn, tr);\n        return table;\n    });\n\n    return table;\n}\n\nfunction createToday() {\n    const todayPage = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createE)(\"div\");\n    todayPage.appendChild(displayTable());\n    return todayPage;\n}\n\nfunction loadToday() {\n    const main = document.querySelector(\"#main\");\n    main.textContent = \"\";\n    main.appendChild(createToday());\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadToday);\n\n//# sourceURL=webpack://to-do-list/./src/today.js?");

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