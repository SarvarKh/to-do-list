import { createE } from './logic';

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
  
    const projectIcon = createE('button', 'Save', 'edit-save-btn');
    // createProject(projectIcon);
    projectBtn.appendChild(projectTitle);
    projectBtn.appendChild(projectIcon);
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