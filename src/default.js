import { createE } from './logic'
import { Task } from './logic'
import { addTaskToDefaultTasks } from './logic'
import { submitForm } from './logic'
import { deleteOldTasks } from './logic'
import { setTasksArray } from './logic'

function displayTaskForm(key) {
    const form = createE("div", false, "form");
    const input1 = createE("input");
    input1.setAttribute("type", "text");
    input1.setAttribute("id", "title");
    input1.setAttribute("name", "title");
    input1.setAttribute("placeholder", "add title");
    input1.setAttribute("autofocus", true);
    
    const input2 = createE("input");
    input2.setAttribute("type", "text");
    input2.setAttribute("id", "description");
    input2.setAttribute("name", "description");
    input2.setAttribute("placeholder", "add description");

    const input3 = createE("input");
    input3.setAttribute("type", "date");
    input3.setAttribute("id", "dueDate");
    input3.setAttribute("name", "dueDate");
    input3.setAttribute("placeholder", "add due date");

    const input4 = createE("select");
    input4.setAttribute("id", "priority");
    const input4Label = createE("label", "Choose a priority:");
    input4Label.setAttribute("for", "priority");
    const option1 = createE("option", "High");
    option1.setAttribute("value", "high");
    input4.appendChild(option1);
    const option2 = createE("option", "Medium");
    option2.setAttribute("value", "medium");
    input4.appendChild(option2);
    const option3 = createE("option", "Low");
    option3.setAttribute("value", "low");
    input4.appendChild(option3);
    
    const input5 = createE("input");
    input5.setAttribute("type", "text");
    input5.setAttribute("id", "notes");
    input5.setAttribute("name", "notes");
    input5.setAttribute("placeholder", "any notes?");

    const input6Container = createE("div", false, "checkbox-container");
    const input6 = createE("input");
    input6.setAttribute("type", "checkbox");
    input6.setAttribute("id", "checklist");
    input6.setAttribute("name", "checklist");

    const input6Label = createE("label", "Completeness Status");
    input6Label.setAttribute("for", "checklist");

    const addTaskbtn = createE("button");
    submitForm(addTaskbtn, key);
    const addTaskBtnIcon = createE("i");
    addTaskBtnIcon.classList.add("fas");
    addTaskBtnIcon.classList.add("fa-plus-circle");
    const addTaskbtnSpan = createE("span", "Add task");
    addTaskbtn.appendChild(addTaskBtnIcon);
    addTaskbtn.appendChild(addTaskbtnSpan);

    form.appendChild(input1);
    form.appendChild(input2);
    form.appendChild(input3);
    form.appendChild(input4Label);
    form.appendChild(input4);
    form.appendChild(input5);
    input6Container.appendChild(input6);
    input6Container.appendChild(input6Label);
    form.appendChild(input6Container);
    form.appendChild(addTaskbtn);

    return form;
}

function displayTable(key) {
    const table = createE("table");
    const trHeading = createE("tr");
    const trh1 = createE("th", "Title");
    const trh2 = createE("th", "Description");
    const trh3 = createE("th", "Due Date");
    const trh4 = createE("th", "Priority");
    const trh5 = createE("th", "Notes");
    const trh6 = createE("th", "Status");
    trHeading.appendChild(trh1);
    trHeading.appendChild(trh2);
    trHeading.appendChild(trh3);
    trHeading.appendChild(trh4);
    trHeading.appendChild(trh5);
    trHeading.appendChild(trh6);
    table.appendChild(trHeading);

    deleteOldTasks();
    let tasksArray;
    tasksArray = setTasksArray(tasksArray, key);
    
    tasksArray.map((newTask) => {
        let tr = document.createElement('tr');
        tr.classList.add('task-row');
      
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let removeBtn = document.createElement('button');
        let td6Btn = document.createElement('button');
      
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

        td6Btn.addEventListener('click', () => {
          if (td6Btn.textContent === 'Closed') {
            td6Btn.textContent = 'Open';
          } else {
            td6Btn.textContent = 'Closed';
          }
        });
      
        removeBtn.addEventListener('click', () => {
            tr.remove();
            allTasks.default.splice(tr.dataset.index, 1);

            if (key === undefined) {
                localStorage.setItem("Default", JSON.stringify(allTasks.default));
            } else {
                localStorage.setItem(JSON.stringify(key), JSON.stringify(allTasks.default));
            }
            
        });
        return table;
    });

    return table;
}

function createProject(key) {
    const projectPage = createE("div", false, "project-page");
    projectPage.appendChild(displayTaskForm(key));
    console.log(localStorage);
    if (localStorage.length === 0) {
        localStorage.setItem("Default", JSON.stringify([]));
    }
    if (JSON.parse(localStorage.getItem('Default')).length > 0) {

        projectPage.appendChild(displayTable(key));
    }

    return projectPage;
}

function loadProject(key) {
    const main = document.querySelector("#main");
    main.textContent = "";
    main.appendChild(createProject(key));
}

export { displayTable };
export default loadProject