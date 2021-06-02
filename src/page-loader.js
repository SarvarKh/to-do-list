import loadInbox from './inbox';
import loadToday from './today';
import loadDefault from './default';
import { showCalledProject } from './logic'
import { setActiveButton } from './logic'
import { addProjectToProjects } from './logic'


const createE = (elementName, content, className, href) => {
    const element = document.createElement(elementName);
    if (content) { element.innerHTML = content;}
    if (className) { element.classList.toggle(className);}
    if (href) { element.href = href;}
    return element;
};

const projects = {};

function displayProjects() {
    const oldProjects = document.querySelectorAll(".project-container");
    if (oldProjects.length > 0) {
        const arrOldProjects = Array.from(oldProjects);
        for (let index = 0; index < arrOldProjects.length; index++) {
            const element = arrOldProjects[index];
            element.innerHTML = "";
        }
    }

    let projectsContainer = createE("div", false, "projects-container");

    for (const key in localStorage) {
        if (Object.hasOwnProperty.call(localStorage, key)) {
            let newProjectCon = createE("div", false, "project-container");
            newProjectCon.setAttribute("data-projectname", key);
            let projectPart1 = createE("div", false, "project-left")
            let projectPart2 = createE("div", false, "project-right")
            let newProjectIcon = createE("i");
            newProjectIcon.classList.add("far");
            newProjectIcon.classList.add("fa-circle");
            let newProject = createE("span", key.replace(/['"]+/g, ''), 'project-name');
            newProject.classList.add("aside-btn");
            showCalledProject(newProject);
            
            let newProjectDeleteBtn = createE("i");
            newProjectDeleteBtn.classList.add("fas");
            newProjectDeleteBtn.classList.add("fa-trash-alt");
            // deleteProject(newProjectDeleteBtn);
            newProjectDeleteBtn.addEventListener('click', () => {
                newProjectCon.remove();
                localStorage.removeItem(newProjectCon.dataset.projectname);
            })

            projectPart1.appendChild(newProjectIcon);
            projectPart1.appendChild(newProject);
            projectPart2.appendChild(newProjectDeleteBtn);
            newProjectCon.appendChild(projectPart1);
            newProjectCon.appendChild(projectPart2);
            projectsContainer.appendChild(newProjectCon);
        }
    }
    return projectsContainer;
}

function createProject(btn) {
    btn.addEventListener('click', () => {
        const projectTitle = document.querySelector('#projectTitle');
        if (projectTitle.value === '') {
            alert("Project Title's Field must be filled out"); // eslint-disable-line no-alert
        } else {
            const newProject = projectTitle.value;
            addProjectToProjects(newProject, projects);
            let asideBottom = document.querySelector(".aside-bottom");
            asideBottom.appendChild(displayProjects());
        }
    })
    return btn;
}

function createHeader() {
    const header = createE("header");
    const headerIcon = createE("i");
    headerIcon.classList.add("fas");
    headerIcon.classList.add("fa-check-double");
    const headerTitle = createE('h1', 'Smart Todo-list');

    header.appendChild(headerIcon);
    header.appendChild(headerTitle);

    return header;
}

function createAside() {
    const aside = createE("aside", false);
    let asideTop = createE("div", false, "aside-top");
    let asideBottom = createE("div", false, "aside-bottom");

    let inboxBtn = createE("button", false, "aside-btn");
    inboxBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(inboxBtn);
        loadInbox();
    })
    const inboxBtnIcon = document.createElement('i');
    inboxBtnIcon.classList.add('fas');
    inboxBtnIcon.classList.add('fa-inbox');
    let inboxBtnTitle = createE('span', "Inbox")
    inboxBtn.appendChild(inboxBtnIcon);
    inboxBtn.appendChild(inboxBtnTitle);
    asideTop.appendChild(inboxBtn);

    let todayBtn = createE("button", false, "aside-btn");
    todayBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(todayBtn);
        loadToday();
    })
    const todayBtnIcon = document.createElement('i');
    todayBtnIcon.classList.add('fas');
    todayBtnIcon.classList.add('fa-arrow-circle-down');
    let todayBtnTitle = createE('span', "Today")
    todayBtn.appendChild(todayBtnIcon);
    todayBtn.appendChild(todayBtnTitle);
    asideTop.appendChild(todayBtn);
    aside.appendChild(asideTop);

    let project = createE("div", "Projects:");
    asideBottom.appendChild(project);

    let defaulBtn = createE("button", false, "aside-btn");
    defaulBtn.setAttribute("id", "defaulBtn");
    defaulBtn.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        setActiveButton(defaulBtn);
        loadDefault();
    })
    const defaulBtnIcon = document.createElement('i');
    defaulBtnIcon.classList.add('far');
    defaulBtnIcon.classList.add('fa-circle');
    let defaultBtnTitle = createE('span', "Default")
    defaulBtn.appendChild(defaulBtnIcon);
    defaulBtn.appendChild(defaultBtnTitle);
    asideBottom.appendChild(defaulBtn);
    aside.appendChild(asideBottom);

    asideBottom.appendChild(displayProjects());

    const projectBtn = createE("button", false, "aside-btn");
    let projectTitle = createE('input');
    projectTitle.setAttribute("type", "text");
    projectTitle.setAttribute("id", "projectTitle");
    projectTitle.setAttribute("name", "projectTitle");
    projectTitle.setAttribute("placeholder", "Create Project");

    const projectIcon = document.createElement('i');
    projectIcon.classList.add('fas');
    projectIcon.classList.add('fa-plus-square');
    createProject(projectIcon);
    projectBtn.appendChild(projectIcon);
    projectBtn.appendChild(projectTitle);
    aside.appendChild(projectBtn);

    return aside;
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

function createFooter() {
    const footer = createE('footer');
    const footerDiv = createE('div', 'Copyright © 2021 Sarvar Khalimov');
    const linkIcon1 = createE('a', '', 'icon-link', 'https://github.com/SarvarKh');
    linkIcon1.setAttribute('target', '_blank');
    const icon1 = document.createElement('i');
    icon1.classList.add('fab');
    icon1.classList.add('fa-github');
  
    const linkIcon2 = createE('a', '', 'icon-link', 'https://www.linkedin.com/in/sarvar-khalimov/');
    linkIcon2.setAttribute('target', '_blank');
    const icon2 = document.createElement('i');
    icon2.classList.add('fab');
    icon2.classList.add('fa-linkedin');
  
    const linkIcon3 = createE('a', '', 'icon-link', 'https://sarvarkh.github.io/portfolio/');
    linkIcon3.setAttribute('target', '_blank');
    const icon3 = document.createElement('i');
    icon3.classList.add('fas');
    icon3.classList.add('fa-folder-open');
  
    linkIcon1.appendChild(icon1);
    linkIcon2.appendChild(icon2);
    linkIcon3.appendChild(icon3);
    footerDiv.appendChild(linkIcon1);
    footerDiv.appendChild(linkIcon2);
    footerDiv.appendChild(linkIcon3);
    footer.appendChild(footerDiv);
  
    return footer;
}

function start() {
    const content = document.getElementById('content');
    content.appendChild(createHeader());
    const container = createE("div", false, "container");
    container.appendChild(createAside());
    container.appendChild(createMain());
    content.appendChild(container);
    content.appendChild(createFooter());
    setActiveButton(document.querySelector('.aside-btn'));
    loadDefault();
}

export default start