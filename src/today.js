import {
  createE, deleteOldTasks, changeTaskStatus, removeTask, setTasksArrayForToday,
} from './logic';

function displayTable() {
  const table = createE('table');
  const trHeading = createE('tr');
  const trh1 = createE('th', 'Title');
  const trh2 = createE('th', 'Description', 'mobile');
  const trh3 = createE('th', 'Due Date');
  const trh4 = createE('th', 'Priority');
  const trh5 = createE('th', 'Notes', 'mobile');
  const trh6 = createE('th', 'Status');
  trHeading.appendChild(trh1);
  trHeading.appendChild(trh2);
  trHeading.appendChild(trh3);
  trHeading.appendChild(trh4);
  trHeading.appendChild(trh5);
  trHeading.appendChild(trh6);
  table.appendChild(trHeading);

  deleteOldTasks();
  const tasksArray = setTasksArrayForToday();

  tasksArray.map((newTask) => {
    const tr = document.createElement('tr');
    tr.classList.add('task-row');

    const td1 = document.createElement('td');
    const td2 = createE('td', false, 'mobile');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = createE('td', false, 'mobile');
    const td6 = document.createElement('td');
    const removeBtn = document.createElement('button');
    const td6Btn = document.createElement('button');

    td1.textContent = newTask.title;
    td2.textContent = newTask.description;
    td3.textContent = newTask.dueDate;
    td4.textContent = newTask.priority;
    td5.textContent = newTask.notes;
    td6Btn.textContent = newTask.checklist;
    removeBtn.textContent = 'Remove';
    tr.setAttribute('data-index', tasksArray.indexOf(newTask));

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    td6.appendChild(td6Btn);
    td6.appendChild(removeBtn);
    table.appendChild(tr);

    changeTaskStatus(td6Btn);
    removeTask(removeBtn, tr);
    return table;
  });

  return table;
}

function createToday() {
  const todayPage = createE('div');
  todayPage.appendChild(displayTable());
  return todayPage;
}

function loadToday() {
  const main = document.querySelector('#main');
  main.textContent = '';
  main.appendChild(createToday());
}

export { displayTable };
export default loadToday;