import loadInbox from './inbox';
import loadToday from './today';
import loadProject from './default';
import {
  showCalledProject, setActiveButton, deleteOldProjectsFromHTML, loopThroughLocalStorageKeys, projectInputVerification, createE,
} from './logic';

const createProjectsHTML = (key, projectsContainer) => {
  const newProjectCon = createE('div', false, 'project-container');
  newProjectCon.setAttribute('data-projectname', key);
  const projectPart1 = createE('div', false, 'project-left');
  const projectPart2 = createE('div', false, 'project-right');
  const newProjectIcon = createE('i');
  newProjectIcon.classList.add('far');
  newProjectIcon.classList.add('fa-circle');
  const newProject = createE('span', key.replace(/['"]+/g, ''), 'project-name');
  newProject.classList.add('aside-btn');
  showCalledProject(newProject, loadProject, key.replace(/['"]+/g, ''));

  const newProjectDeleteBtn = createE('i');
  newProjectDeleteBtn.classList.add('fas');
  newProjectDeleteBtn.classList.add('fa-trash-alt');
  newProjectDeleteBtn.addEventListener('click', () => {
    newProjectCon.remove();
    localStorage.removeItem(newProjectCon.dataset.projectname);
  });

  projectPart1.appendChild(newProjectIcon);
  projectPart1.appendChild(newProject);
  projectPart2.appendChild(newProjectDeleteBtn);
  newProjectCon.appendChild(projectPart1);
  newProjectCon.appendChild(projectPart2);
  projectsContainer.appendChild(newProjectCon);
};

function displayProjects() {
  deleteOldProjectsFromHTML();
  const projectsContainer = createE('div', false, 'projects-container');
  loopThroughLocalStorageKeys(projectsContainer);
  return projectsContainer;
}

function createProject(btn) {
  btn.addEventListener('click', () => {
    const projectTitle = document.querySelector('#projectTitle');
    projectInputVerification(projectTitle);
  });
  return btn;
}

function createHeader() {
  const header = createE('header');
  const headerIcon = createE('i');
  headerIcon.classList.add('fas');
  headerIcon.classList.add('fa-check-double');
  const headerTitle = createE('h1', 'Smart Todo-list');

  header.appendChild(headerIcon);
  header.appendChild(headerTitle);

  return header;
}

function createAside() {
  const aside = createE('aside', false);
  const asideTop = createE('div', false, 'aside-top');
  const asideBottom = createE('div', false, 'aside-bottom');

  const inboxBtn = createE('button', false, 'aside-btn');
  showCalledProject(inboxBtn, loadInbox);
  const inboxBtnIcon = document.createElement('i');
  inboxBtnIcon.classList.add('fas');
  inboxBtnIcon.classList.add('fa-inbox');
  const inboxBtnTitle = createE('span', 'Inbox');
  inboxBtn.appendChild(inboxBtnIcon);
  inboxBtn.appendChild(inboxBtnTitle);
  asideTop.appendChild(inboxBtn);

  const todayBtn = createE('button', false, 'aside-btn');
  showCalledProject(todayBtn, loadToday);
  const todayBtnIcon = document.createElement('i');
  todayBtnIcon.classList.add('fas');
  todayBtnIcon.classList.add('fa-arrow-circle-down');
  const todayBtnTitle = createE('span', 'Today');
  todayBtn.appendChild(todayBtnIcon);
  todayBtn.appendChild(todayBtnTitle);
  asideTop.appendChild(todayBtn);
  aside.appendChild(asideTop);

  const project = createE('div', 'Projects:');
  asideBottom.appendChild(project);

  const defaulBtn = createE('button', false, 'aside-btn');
  defaulBtn.setAttribute('id', 'defaulBtn');
  showCalledProject(defaulBtn, loadProject);
  const defaulBtnIcon = document.createElement('i');
  defaulBtnIcon.classList.add('far');
  defaulBtnIcon.classList.add('fa-circle');
  const defaultBtnTitle = createE('span', 'Default');
  defaulBtn.appendChild(defaulBtnIcon);
  defaulBtn.appendChild(defaultBtnTitle);
  asideBottom.appendChild(defaulBtn);
  aside.appendChild(asideBottom);

  asideBottom.appendChild(displayProjects());

  const projectBtn = createE('button', false, 'aside-btn');
  const projectTitle = createE('input');
  projectTitle.setAttribute('type', 'text');
  projectTitle.setAttribute('id', 'projectTitle');
  projectTitle.setAttribute('name', 'projectTitle');
  projectTitle.setAttribute('placeholder', 'Create Project');

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
  const container = createE('div', false, 'container');
  container.appendChild(createAside());
  container.appendChild(createMain());
  content.appendChild(container);
  content.appendChild(createFooter());
  setActiveButton(document.querySelector('.aside-btn'));
  loadProject();
}

export { createProjectsHTML };
export { displayProjects };
export default start;