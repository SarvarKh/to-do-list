const createE = (elementName, content, className, href) => {
    const element = document.createElement(elementName);
    if (content) { element.innerHTML = content;}
    if (className) { element.classList.toggle(className);}
    if (href) { element.href = href;}
    return element;
};

const defaultTasks = {};

function createDefault(tasksObj) {
    const defaultPage = createE("div", false, "default-page");
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
    input3.setAttribute("type", "text");
    input3.setAttribute("id", "dueDate");
    input3.setAttribute("name", "dueDate");
    input3.setAttribute("placeholder", "add due date");

    const input4 = createE("input");
    input4.setAttribute("type", "number");
    input4.setAttribute("id", "priority");
    input4.setAttribute("name", "priority");
    input4.setAttribute("placeholder", "add priority");

    const input5 = createE("input");
    input5.setAttribute("type", "text");
    input5.setAttribute("id", "notes");
    input5.setAttribute("name", "notes");
    input5.setAttribute("placeholder", "any notes?");

    const input6 = createE("input");
    input6.setAttribute("type", "checkbox");
    input6.setAttribute("id", "checklist");
    input6.setAttribute("name", "checklist");

    const input6Label = createE("label", "Whether it's been completed?");
    input6Label.setAttribute("for", "checklist");

    const addTaskbtn = createE("button");
    addTaskbtn.addEventListener('click', (e) => {
        console.log("I am being called from Add Tasj Btn event Linster!");
    })
    const addTaskBtnIcon = createE("i");
    addTaskBtnIcon.classList.add("fas");
    addTaskBtnIcon.classList.add("fa-plus-circle");
    const addTaskbtnSpan = createE("span", "Add task");

    form.appendChild(input1);
    form.appendChild(input2);
    form.appendChild(input3);
    form.appendChild(input4);
    form.appendChild(input5);
    form.appendChild(input6);
    form.appendChild(input6Label);
    defaultPage.appendChild(form);
    addTaskbtn.appendChild(addTaskBtnIcon);
    addTaskbtn.appendChild(addTaskbtnSpan);
    defaultPage.appendChild(addTaskbtn);

    return defaultPage;
}

function loadDefault() {
    const main = document.querySelector("#main");
    main.textContent = "";
    main.appendChild(createDefault(defaultTasks));
}

export default loadDefault