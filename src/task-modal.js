import { createE } from './logic';

const createTaskModal = () => {
    const modal = createE("div", false, "modal-task");
    const modalContent = createE('div', false, 'modal-content');
    const close = createE('span', '&times;', "close");
    modalContent.appendChild(close);

    const taskEditContainer = createE('div');
    taskEditContainer.classList.add('crete-task-container');
  
    

    const taskSaveBtn = createE('button', 'Save', 'edit-save-btn');
    // editProject(taskSaveBtn);
    taskEditContainer.appendChild(taskSaveBtn);
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