import { createProjectsHTML } from './page-loader'
import { displayProjects } from './page-loader'

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.aside-btn');

    buttons.forEach((btn) => {
      btn.classList.remove('active');
    });

    button.classList.add('active');
}


const showCalledProject = (projectName) => {
    projectName.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        console.log(e.target.textContent);
        setActiveButton(projectName);
        // loadToday();
    })
}

const addProjectToProjects = (projectInputValue, allProjects) => {
    allProjects[projectInputValue] = [];
    let projectLocalStorage = JSON.parse(localStorage.getItem(JSON.stringify(projectInputValue)));
    if (projectLocalStorage !== null) {
        allProjects.projectInputValue = [];
        projectLocalStorage.map((e) => {
            allProjects.projectInputValue.push(e);
        });
        allProjects.projectInputValue.push(projectInputValue);
        localStorage.setItem(JSON.stringify(projectInputValue), JSON.stringify(allProjects.projectInputValue));
    } else {
        allProjects.projectInputValue = [];
        localStorage.setItem(JSON.stringify(projectInputValue), JSON.stringify([]));
    }
}

const deleteOldProjectsFromHTML = () => {
    const oldProjects = document.querySelectorAll(".project-container");
    if (oldProjects.length > 0) {
        const arrOldProjects = Array.from(oldProjects);
        for (let index = 0; index < arrOldProjects.length; index++) {
            const element = arrOldProjects[index];
            element.innerHTML = "";
        }
    }
}

const loopThroughLocalStorageKeys = (projectsContainer) => {
    for (const key in localStorage) {
        if (Object.hasOwnProperty.call(localStorage, key)) {
            createProjectsHTML(key, projectsContainer);
        }
    }
}

const projects = {};

const projectInputVerification = (projectTitle) => {
    if (projectTitle.value === '') {
        alert("Project Title's Field must be filled out"); // eslint-disable-line no-alert
    } else {
        const newProject = projectTitle.value;
        addProjectToProjects(newProject, projects);
        let asideBottom = document.querySelector(".aside-bottom");
        asideBottom.appendChild(displayProjects());
    }
}

export { setActiveButton };
export { showCalledProject };
export { addProjectToProjects };
export { deleteOldProjectsFromHTML };
export { loopThroughLocalStorageKeys };
export { projectInputVerification };