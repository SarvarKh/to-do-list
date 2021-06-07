import { createE } from './logic';

const createProjectModal = () => {
    const modal = createE("div", false, "modal");
    const modalContent = createE('div', false, 'modal-content');
    const close = createE('span', '&times;', "close");
    const modalText = createE('p', 'Some text in the Modal..');
    modalContent.appendChild(close);
    modalContent.appendChild(modalText);
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