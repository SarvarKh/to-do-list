// eslint-disable-next-line import/no-cycle
import { createE } from './logic';

const editProjectFromProjects = (projectInputValue, allProjects) => {
  const key = document.querySelector('.active-edit-project');

  allProjects[key.textContent] = allProjects[projectInputValue];
  delete allProjects[projectInputValue];

  const projectLocalStorage = JSON.parse(localStorage.getItem(JSON.stringify(key.textContent)));
  localStorage.setItem(JSON.stringify(projectInputValue), JSON.stringify(projectLocalStorage));
  localStorage.removeItem(JSON.stringify(key.textContent));
  window.location.reload();
};

const projects = {};

const projectInputVerification = (projectTitle) => {
  if (projectTitle.value === '') {
    alert("Project Title's Field must be filled out"); // eslint-disable-line no-alert
  } else {
    const newProject = projectTitle.value;
    editProjectFromProjects(newProject, projects);
  }
};

function editProject(btn) {
  btn.addEventListener('click', () => {
    const projectTitle = document.querySelector('#projectTitleAfterEdit');
    projectInputVerification(projectTitle);
  });
  return btn;
}

const createProjectModal = () => {
  const modal = createE('div', false, 'modal');
  const modalContent = createE('div', false, 'modal-content');
  const close = createE('span', '&times;', 'close');
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
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  return modal;
};

export default createProjectModal;