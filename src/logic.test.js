/**
 * @jest-environment jsdom
 */
import { before } from 'lodash';
import {createE, deleteOldProjectsFromHTML, projectInputVerification, addProjectToProjects, Task, addTaskToDefaultTasks} from './logic'

describe("HTML elements creation with muptiple properties", () => {
    test('Creates a p element', () => {
        const newElement = document.createElement('p');
        expect(createE('p')).toStrictEqual(newElement);
    })
    
    test('Creates a div element with its attributes like: textContent, ClassName', () => {
        const newElement = document.createElement('div');
        newElement.textContent = "this is the div element content";
        newElement.classList.add('div-class')
        expect(createE('div', "this is the div element content", "div-class")).toStrictEqual(newElement);
        expect(createE('div', "this is the div element content", "div-class")).not.toStrictEqual(document.createElement('div'));
    })
})

describe("Remove old projects from HTML content", () => {
    beforeEach(() => {
        document.body.appendChild(createE('div', 'Some random text', 'project-container'));
    })
    
    test('deleteOldProjectsFromHTML', () => {
        expect(deleteOldProjectsFromHTML()).toStrictEqual(createE('div', false, 'project-container'));
        expect(deleteOldProjectsFromHTML()).not.toStrictEqual(createE('p', 'random-content', 'random-class'));
    })
})

describe("Project creation", () => {
    test("Create a project from user input", () => {
        const allProjects = {};
        addProjectToProjects('Jest Project', allProjects);
        expect(JSON.parse(localStorage.getItem(JSON.stringify('Jest Project')))).toStrictEqual([]);
        expect(JSON.parse(localStorage.getItem(JSON.stringify('Jest Project')))).not.toStrictEqual([1, 2]);

        localStorage.clear();
    })

    test("Create 2 projects and check by length of keys in LocalStorage", () => {
        const allProjects = {};
        addProjectToProjects('Jest 1', allProjects);
        addProjectToProjects('Jest 2', allProjects);
        expect(JSON.parse(localStorage.length)).toEqual(2);
        expect(JSON.parse(localStorage.length)).not.toEqual(3);

        localStorage.clear();
    })
})





describe("Task creation", () => {
    beforeEach(() => {
        localStorage.setItem('Default', JSON.stringify([]));
        const allProjects = {};
        addProjectToProjects('jest1', allProjects);
        addProjectToProjects('jest2', allProjects);
    })

    test("Add newly created task to All Tasks in LocalStorage", () => {
        const newTask = new Task('testing_title', 'testing_description', 'testing_dueDate', 'testing_priority', 'testing_notes', 'testing_checklist');
        const allTasks = {
            default: [],
            today: [],
        };
        addTaskToDefaultTasks(newTask, allTasks, 'jest1');
        addTaskToDefaultTasks(newTask, allTasks, 'jest2');

        expect(JSON.parse(localStorage.length)).toEqual(3); // ['Default', 'jest1', 'jest2']
        expect(JSON.parse(localStorage.length)).not.toEqual(2);

        localStorage.clear();
    })

    test("Add empty input and through the alert error", () => {
        window.alert = jest.fn();
        expect(projectInputVerification(createE('input', ""))).toBe("Project Title's Field must be filled out")
    })

    test("Create Task object", () => {
        expect(new Task('testing_title', 'testing_description', 'testing_dueDate', 'testing_priority', 'testing_notes', 'testing_checklist')).toEqual({title: 'testing_title', description: 'testing_description', dueDate: 'testing_dueDate', priority: 'testing_priority', notes: 'testing_notes', checklist: 'testing_checklist'})
    })
})

