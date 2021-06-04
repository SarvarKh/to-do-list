import { displayTable } from './today'

const createE = (elementName, content, className, href) => {
    const element = document.createElement(elementName);
    if (content) { element.innerHTML = content;}
    if (className) { element.classList.toggle(className);}
    if (href) { element.href = href;}
    return element;
};

function createInbox() {
    const inboxPage = createE("div", "Hey this is from Inbox.js!");
    inboxPage.appendChild(displayTable());
    return inboxPage;
}

function loadInbox() {
    const main = document.querySelector("#main");
    main.textContent = "";
    main.appendChild(createInbox());
}

export default loadInbox