const createE = (elementName, content, className, href) => {
    const element = document.createElement(elementName);
    if (content) { element.innerHTML = content;}
    if (className) { element.classList.toggle(className);}
    if (href) { element.href = href;}
    return element;
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
    today: []
};

function addTaskToDefaultTasks(newTask, tasks) {
    tasks.default.push(newTask);
    console.log("Hey I am being called");
}

function submitForm(btn) {
    btn.addEventListener('click', () => {
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');
        const dueDate = document.querySelector('#dueDate');
        const priority = document.querySelector('#priority');
        const notes = document.querySelector('#notes');
        let checklist = document.querySelector('#checklist');

        if (checklist.checked) {
            checklist.status = "Closed";
        } else {
            checklist.status = "Open";
        }
        console.log(checklist["data-value"]);
        if (title.value === '' || description.value === '' || dueDate.value === '' || priority.value === '' || notes.value === '') {
            alert('Fields must be filled out'); // eslint-disable-line no-alert
          } else {
            const newTask = new Task(title.value, description.value, dueDate.value, priority.value, notes.value, checklist.status);
            addTaskToDefaultTasks(newTask, allTasks);
            displayTasks(newTask);
        }
    })
    return btn;
}

function displayTaskForm() {
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
    submitForm(addTaskbtn);
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

function displayTableHeading() {
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

    return table;
}

const displayTasks = (newTask) => {
    const table = document.querySelector('table');

    const tr = document.createElement('tr');
    tr.classList.add('task-row');
  
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');
    const td5 = document.createElement('td');
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
    tr.setAttribute('data-index', allTasks.default.indexOf(newTask));
  
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
    });

    return table;
};

function createDefault() {
    const defaultPage = createE("div", false, "default-page");

    defaultPage.appendChild(displayTaskForm());
    defaultPage.appendChild(displayTableHeading());

    return defaultPage;
}

function loadDefault() {
    const main = document.querySelector("#main");
    main.textContent = "";
    main.appendChild(createDefault());
}

export default loadDefault