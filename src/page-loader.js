// import loadInbox from './inbox';
// import loadToday from './today';
// import loadProject from './project';
// import loadDefault from './default';

const createE = (elementName, content, className, href) => {
    const element = document.createElement(elementName);
    if (content) { element.innerHTML = content;}
    if (className) { element.classList.toggle(className);}
    if (href) { element.href = href;}
    return element;
};

function createHeader() {
    const header = createE('h1', 'Smart Todo-list');
    return header;
}

function createAside() {
    const aside = createE("aside", "Aside");
    
    return aside;
}

function createMain() {
    const main = createE('main', "Main", "main");
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
    content.appendChild(createAside());
    content.appendChild(createMain());
    content.appendChild(createFooter());
}

export default start