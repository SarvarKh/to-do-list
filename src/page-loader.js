function createHeader() {
    const header = document.createElement("h1");
    header.innerHTML = "HEADER - Todo List";

    console.log("Hey, I am running this console.log from PageLoader > Index");
    return header;
}

function start() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
}

export default start