function setActiveButton(button) {
    const buttons = document.querySelectorAll('.aside-btn');

    buttons.forEach((btn) => {
      btn.classList.remove('active');
    });

    button.classList.add('active');
}


const showCalledProject = (projectName) => {
    projectName.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        console.log(e.target.textContent);
        setActiveButton(projectName);
        // loadToday();
    })
}

const addProjectToProjects = (projectInputValue, allProjects) => {
    allProjects[projectInputValue] = [];
    let projectLocalStorage = JSON.parse(localStorage.getItem(JSON.stringify(projectInputValue)));
    if (projectLocalStorage !== null) {
        allProjects.projectInputValue = [];
        projectLocalStorage.map((e) => {
            allProjects.projectInputValue.push(e);
        });
        allProjects.projectInputValue.push(projectInputValue);
        localStorage.setItem(JSON.stringify(projectInputValue), JSON.stringify(allProjects.projectInputValue));
    } else {
        allProjects.projectInputValue = [];
        localStorage.setItem(JSON.stringify(projectInputValue), JSON.stringify([]));
    }
}

export { setActiveButton };
export { showCalledProject };
export { addProjectToProjects };