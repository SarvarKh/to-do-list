const createE = (elementName, content, className, href) => {
    const element = document.createElement(elementName);
    if (content) { element.innerHTML = content;}
    if (className) { element.classList.toggle(className);}
    if (href) { element.href = href;}
    return element;
};

function createDefault() {
    const defaultPage = createE("div", "Hey this is from default page!");
    return defaultPage;
}

function loadDefault() {
    const main = document.querySelector("#main");
    main.textContent = "";
    main.appendChild(createDefault());
}

export default loadDefault