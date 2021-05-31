import loadInbox from './inbox';
import loadToday from './today';
import loadDefault from './default';


const createE = (elementName, content, className, href) => {
    const element = document.createElement(elementName);
    if (content) { element.innerHTML = content;}
    if (className) { element.classList.toggle(className);}
    if (href) { element.href = href;}
    return element;
};

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.aside-btn');

    buttons.forEach((btn) => {
      btn.classList.remove('active');
    });

    button.classList.add('active');
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

    const createProjectBtn = createE("button", false, "aside-btn");
    createProjectBtn.addEventListener('click', (e) => {
        createProject();
    })

    let inputProjectTitle = createE('input');
    inputProjectTitle.setAttribute("type", "text");
    inputProjectTitle.setAttribute("id", "projectTitle");
    inputProjectTitle.setAttribute("name", "projectTitle");
    inputProjectTitle.setAttribute("placeholder", "Create Project");

    const createProjectIcon = document.createElement('i');
    createProjectIcon.classList.add('fas');
    createProjectIcon.classList.add('fa-plus-square');
    createProjectBtn.appendChild(createProjectIcon);
    createProjectBtn.appendChild(inputProjectTitle);
    aside.appendChild(createProjectBtn);

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