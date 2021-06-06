import { createProjectsHTML, displayProjects } from './page-loader';

import { displayTable } from './default';

const createE = (elementName, content, className, href) => {
  const element = document.createElement(elementName);
  if (content) { element.innerHTML = content; }
  if (className) { element.classList.toggle(className); }
  if (href) { element.href = href; }
  return element;
};

function setActiveButton(button) {
  const buttons = document.querySelectorAll('.aside-btn');

  buttons.forEach((btn) => {
    btn.classList.remove('active');
  });

  button.classList.add('active');
}

const showCalledProject = (projectName, loadProject, key) => {
  projectName.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) return;
    setActiveButton(projectName);
    loadProject(key);
  });
};

const addProjectToProjects = (projectInputValue, allProjects) => {
  allProjects[projectInputValue] = [];
  const projectLocalStorage = JSON.parse(localStorage.getItem(JSON.stringify(projectInputValue)));
  if (projectLocalStorage !== null) {
    allProjects.projectInputValue = [];
    projectLocalStorage.map((e) => {
      allProjects.projectInputValue.push(e);
      return allProjects;
    });
    allProjects.projectInputValue.push(projectInputValue);
    localStorage.setItem(
      JSON.stringify(projectInputValue),
      JSON.stringify(allProjects.projectInputValue),
    );
  } else {
    allProjects.projectInputValue = [];
    localStorage.setItem(JSON.stringify(projectInputValue), JSON.stringify([]));
  }
};

const deleteOldProjectsFromHTML = () => {
  const oldProjects = document.querySelectorAll('.project-container');
  if (oldProjects.length > 0) {
    const arrOldProjects = Array.from(oldProjects);
    for (let index = 0; index < arrOldProjects.length; index += 1) {
      const element = arrOldProjects[index];
      element.innerHTML = '';
    }
  }
};

const loopThroughLocalStorageKeys = (projectsContainer) => {
  for (const key in localStorage) {
    if (Object.hasOwnProperty.call(localStorage, key)) {
      createProjectsHTML(key, projectsContainer);
    }
  }
};

const projects = {};

const projectInputVerification = (projectTitle) => {
  if (projectTitle.value === '') {
    alert("Project Title's Field must be filled out"); // eslint-disable-line no-alert
  } else {
    const newProject = projectTitle.value;
    addProjectToProjects(newProject, projects);
    const asideBottom = document.querySelector('.aside-bottom');
    asideBottom.appendChild(displayProjects());
  }
};

function Task(title, description, dueDate, priority, notes, checklist) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.checklist = checklist;
}

const allTasks = {
  default: [],
  today: [],
};

const addTaskToDefaultTasks = (newTask, tasksObj, key) => {
  let defLocalStorage;
  if (key === undefined) {
    defLocalStorage = JSON.parse(localStorage.getItem('Default'));
  } else {
    defLocalStorage = JSON.parse(localStorage.getItem(JSON.stringify(key)));
  }

  if (defLocalStorage.length > 0) {
    tasksObj.default = [];
    defLocalStorage.map((e) => {
      tasksObj.default.push(e);
    });
    tasksObj.default.push(newTask);

    if (key === undefined) {
      localStorage.setItem('Default', JSON.stringify(allTasks.default));
    } else {
      localStorage.setItem(JSON.stringify(key), JSON.stringify(allTasks.default));
    }
  } else {
    tasksObj.default.push(newTask);
    if (key === undefined) {
      localStorage.setItem('Default', JSON.stringify(allTasks.default));
    } else {
      localStorage.setItem(JSON.stringify(key), JSON.stringify(allTasks.default));
    }
  }
};

const submitForm = (btn, key) => {
  btn.addEventListener('click', () => {
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');
    const dueDate = document.querySelector('#dueDate');
    const priority = document.querySelector('#priority');
    const notes = document.querySelector('#notes');
    const checklist = document.querySelector('#checklist');

    if (checklist.checked) {
      checklist.status = 'Closed';
    } else {
      checklist.status = 'Open';
    }
    if (title.value === '' || description.value === '' || dueDate.value === '' || priority.value === '' || notes.value === '') {
      alert('Fields must be filled out'); // eslint-disable-line no-alert
    } else {
      const newTask = new Task(title.value, description.value, dueDate.value, priority.value, notes.value, checklist.status);
      addTaskToDefaultTasks(newTask, allTasks, key);
      const defPage = document.querySelector('.project-page');
      defPage.appendChild(displayTable(key));
    }
  });
  return btn;
};

const deleteOldTasks = () => {
  const oldTasks = document.querySelectorAll('tr');
  if (oldTasks.length > 0) {
    const arrOldTasks = Array.from(oldTasks);
    for (let index = 0; index < arrOldTasks.length; index++) {
      const element = arrOldTasks[index];
      element.innerHTML = '';
    }
  }
};

function setTasksArray(tasksArray, key) {
  if (key === undefined) {
    tasksArray = JSON.parse(localStorage.getItem('Default'));
  } else {
    tasksArray = JSON.parse(localStorage.getItem(JSON.stringify(key)));
  }
  return tasksArray;
}

const changeTaskStatus = (td6Btn) => {
  td6Btn.addEventListener('click', () => {
    if (td6Btn.textContent === 'Closed') {
      td6Btn.textContent = 'Open';
    } else {
      td6Btn.textContent = 'Closed';
    }
  });
};

const removeTask = (removeBtn, tr, key) => {
  removeBtn.addEventListener('click', () => {
    tr.remove();
    allTasks.default.splice(tr.dataset.index, 1);

    if (key === undefined) {
      localStorage.setItem('Default', JSON.stringify(allTasks.default));
    } else {
      localStorage.setItem(JSON.stringify(key), JSON.stringify(allTasks.default));
    }
  });
};

const verifyAndDisplayTable = (projectPage, key) => {
  if (localStorage.length === 0) {
    localStorage.setItem('Default', JSON.stringify([]));
  }
  projectPage.appendChild(displayTable(key));
};

const setTasksArrayForCustomPages = (tasksArray) => {
  const arr = [];
  const keys = Object.keys(localStorage);
  keys.forEach((key, index) => {
    arr.push(JSON.parse(localStorage[key]));
  });
  tasksArray = arr.flat();
  return tasksArray;
};

const setTasksArrayForToday = (tasksArray) => {
  const today = new Date();
  const arr = [];
  const keys = Object.keys(localStorage);
  keys.forEach((key, index) => {
    arr.push(JSON.parse(localStorage[key]));
  });
  const finalArr = [];
  arr.flat().map((e) => {
    const objectDueDate = new Date(e.dueDate);
    if (objectDueDate, objectDueDate <= today) {
      finalArr.push(e);
    }
  });
  tasksArray = finalArr;
  return tasksArray;
};

const displayHeadingIfThereIsItem = (key, table) => {
  if (JSON.parse(localStorage.getItem('Default')).length > 0 || (localStorage.getItem(JSON.stringify(key)) !== null && JSON.parse(localStorage.getItem(JSON.stringify(key))).length > 0)) {
    const trHeading = createE('tr');
    const trh1 = createE('th', 'Title');
    const trh2 = createE('th', 'Description');
    const trh3 = createE('th', 'Due Date');
    const trh4 = createE('th', 'Priority');
    const trh5 = createE('th', 'Notes');
    const trh6 = createE('th', 'Status');
    trHeading.appendChild(trh1);
    trHeading.appendChild(trh2);
    trHeading.appendChild(trh3);
    trHeading.appendChild(trh4);
    trHeading.appendChild(trh5);
    trHeading.appendChild(trh6);
    table.appendChild(trHeading);
  }
};

export { createE };
export { setActiveButton };
export { showCalledProject };
export { deleteOldProjectsFromHTML };
export { loopThroughLocalStorageKeys };
export { projectInputVerification };
export { addTaskToDefaultTasks };
export { submitForm };
export { deleteOldTasks };
export { setTasksArray };
export { changeTaskStatus };
export { removeTask };
export { verifyAndDisplayTable };
export { setTasksArrayForCustomPages };
export { setTasksArrayForToday };
export { displayHeadingIfThereIsItem };