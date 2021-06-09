import { createE } from './logic';

function editTask(btn) {
    btn.addEventListener('click', () => {
        const taskTitle = document.querySelector('#titleAfterTaskEdit');
        const taskDescription = document.querySelector('#descriptionAfterTaskEdit');
        const taskDueDate = document.querySelector('#dueDateAfterTaskEdit');
        const taskPriority = document.querySelector('#priorityAfterTaskEdit');
        const taskNotes = document.querySelector('#notesAfterTaskEdit');
        const taskStatus = document.querySelector('#checklistAfterTaskEdit');
      
        if (taskStatus.checked) {
            taskStatus.status = 'Complete';
        } else {
            taskStatus.status = 'Incomplete';
        }

        projectInputVerification(taskTitle, taskDescription, taskDueDate, taskPriority, taskNotes, taskStatus);
    });
    return btn;
}


function Task(title, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
}
  
const tasks = {};

const projectInputVerification = (taskTitle, taskDescription, taskDueDate, taskPriority, taskNotes, taskStatus) => {
    if (taskTitle.value === '' || taskDescription.value === '' || taskDueDate.value === '' || taskPriority.value === '' || taskNotes.value === '' || taskStatus.value === '') {
        alert("At least one field must be filled out"); // eslint-disable-line no-alert
    } else {
        const newTask = {
            title: taskTitle.value,
            description: taskDescription.value,
            dueDate: taskDueDate.value,
            priority: taskPriority.value,
            notes: taskNotes.value,
            checklist: taskStatus.status,
    };
        editTaskFromTasks(newTask, tasks);
    }
};

const editTaskFromTasks = (taskInputValue, allTasks) => {
    const taskKeyElement = document.querySelector('.active-edit-task');
    const taskKeyIndex = taskKeyElement.dataset.index;
    const projectKeyElement = document.querySelector('.active').lastChild;
    const projectKey = projectKeyElement.textContent;

    allTasks[projectKey] = JSON.parse(localStorage.getItem(JSON.stringify(projectKey)));
    allTasks[projectKey][parseInt(taskKeyIndex)] = taskInputValue;
    localStorage.setItem(JSON.stringify(projectKey), JSON.stringify(allTasks[projectKey]));
    location.reload();
};

function displayTaskForm(key) {
    const form = createE('div', false, 'form');
    const input1 = createE('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('id', 'titleAfterTaskEdit');
    input1.setAttribute('name', 'title');
    input1.setAttribute('placeholder', 'add title');
  
    const input2 = createE('input');
    input2.setAttribute('type', 'text');
    input2.setAttribute('id', 'descriptionAfterTaskEdit');
    input2.setAttribute('name', 'description');
    input2.setAttribute('placeholder', 'add description');
  
    const input3 = createE('input');
    input3.setAttribute('type', 'date');
    input3.setAttribute('id', 'dueDateAfterTaskEdit');
    input3.setAttribute('name', 'dueDate');
    input3.setAttribute('placeholder', 'add due date');
  
    const input4 = createE('select');
    input4.setAttribute('id', 'priorityAfterTaskEdit');
    const input4Label = createE('label', 'Choose a priority:');
    input4Label.setAttribute('for', 'priority');
    const option1 = createE('option', 'High');
    option1.setAttribute('value', 'high');
    input4.appendChild(option1);
    const option2 = createE('option', 'Medium');
    option2.setAttribute('value', 'medium');
    input4.appendChild(option2);
    const option3 = createE('option', 'Low');
    option3.setAttribute('value', 'low');
    input4.appendChild(option3);
  
    const input5 = createE('input');
    input5.setAttribute('type', 'text');
    input5.setAttribute('id', 'notesAfterTaskEdit');
    input5.setAttribute('name', 'notes');
    input5.setAttribute('placeholder', 'any notes?');
  
    const input6Container = createE('div', false, 'checkbox-container');
    const input6 = createE('input');
    input6.setAttribute('type', 'checkbox');
    input6.setAttribute('id', 'checklistAfterTaskEdit');
    input6.setAttribute('name', 'checklist');
  
    const input6Label = createE('label', 'Completeness Status');
    input6Label.setAttribute('for', 'checklist');
  
    const addTaskbtn = createE('button');
    editTask(addTaskbtn);
    const addTaskBtnIcon = createE('i');
    addTaskBtnIcon.classList.add('fas');
    addTaskBtnIcon.classList.add('fa-check-square');
    const addTaskbtnSpan = createE('span', 'Save the edit');
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

const createTaskModal = () => {
    const modal = createE("div", false, "modal-task");
    const modalContent = createE('div', false, 'modal-content');
    modalContent.classList.add('modal-content-task')
    const close = createE('span', '&times;', "close");
    modalContent.appendChild(close);

    const taskEditContainer = createE('div');
    taskEditContainer.classList.add('crete-task-container');

    taskEditContainer.appendChild(displayTaskForm());
    modalContent.appendChild(taskEditContainer);

    modal.appendChild(modalContent);

    close.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    });

    return modal;
}


export default createTaskModal;