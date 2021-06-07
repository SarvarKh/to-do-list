import { 
    createE,
    projectTitleAfterEdit
} from './logic';

function editProject(btn) {
    btn.addEventListener('click', () => {
      const projectTitle = document.querySelector('#projectTitleAfterEdit');
      projectInputVerification(projectTitle);
    });
    return btn;
}

const projects = {};

const projectInputVerification = (projectTitle) => {
    if (projectTitle.value === '') {
      alert("Project Title's Field must be filled out"); // eslint-disable-line no-alert
    } else {
      const newProject = projectTitle.value;
      editProjectToProjects(newProject, projects);
    //   const asideBottom = document.querySelector('.aside-bottom');
    //   asideBottom.appendChild(displayProjects());
    }
};

const editProjectToProjects = (projectInputValue, allProjects) => {
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

const createProjectModal = () => {
    const modal = createE("div", false, "modal");
    const modalContent = createE('div', false, 'modal-content');
    const close = createE('span', '&times;', "close");
    modalContent.appendChild(close);

    const projectBtn = createE('button');
    projectBtn.classList.add('crete-project-container');
    const projectTitle = createE('input');
    projectTitle.setAttribute('type', 'text');
    projectTitle.setAttribute('id', 'projectTitleAfterEdit');
    projectTitle.setAttribute('name', 'projectTitle');
    projectTitle.setAttribute('placeholder', 'Edit Project');
  
    const projectSaveBtn = createE('button', 'Save', 'edit-save-btn');
    editProject(projectSaveBtn);
    projectBtn.appendChild(projectTitle);
    projectBtn.appendChild(projectSaveBtn);
    modalContent.appendChild(projectBtn);

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


export default createProjectModal;