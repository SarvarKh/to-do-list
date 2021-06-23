/**
 * @jest-environment jsdom
 */
import { before } from 'lodash';
import {createE, deleteOldProjectsFromHTML} from './logic'

test('Creates a p element', () => {
    const newElement = document.createElement('p');
    expect(createE('p')).toStrictEqual(newElement);
})

test('Creates a div element with its attributes like: textContent, ClassName', () => {
    const newElement = document.createElement('div');
    newElement.textContent = "this is the div element content";
    newElement.classList.add('div-class')
    expect(createE('div', "this is the div element content", "div-class")).toStrictEqual(newElement);
})

describe("Remove old projects from HTML content", () => {
    beforeEach(() => {
        document.body.appendChild(createE('div', 'Some random text', 'project-container'));
    })
    
    test('deleteOldProjectsFromHTML', () => {
        expect(deleteOldProjectsFromHTML()).toStrictEqual(createE('div', false, 'project-container'));
    })
})