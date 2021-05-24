const createE = (elementName, content, className, href) => {
    const element = document.createElement(elementName);
    if (content) { element.innerHTML = content;}
    if (className) { element.classList.toggle(className);}
    if (href) { element.href = href;}
    return element;
};

function createToday() {
    const todayPage = createE("div", "Hey this is from today.js!");
    return todayPage;
}

function loadToday() {
    const main = document.querySelector("#main");
    main.textContent = "";
    main.appendChild(createToday());
}

export default loadToday