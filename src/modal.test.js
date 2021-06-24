/**
 * @jest-environment jsdom
 */
import { editProjectFromProjects } from './modal';

describe('Editing the project', () => {
  const { reload } = window.location;

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { reload: jest.fn() },
    });
  });

  afterAll(() => {
    window.location.reload = reload;
  });

  beforeEach(() => {
    const newElement = document.createElement('div');
    newElement.textContent = 'Some project name';
    newElement.classList.add('active-edit-project');
    document.body.appendChild(newElement);
    localStorage.setItem(JSON.stringify('Some project name'), JSON.stringify(['Some tasks are here']));
  });
  test('Edit the project name in the page and LS remaining the content the same', () => {
    const projects = {};
    editProjectFromProjects('new-name', projects);
    expect(JSON.parse(localStorage.getItem(JSON.stringify('new-name')))).toStrictEqual(['Some tasks are here']);
    expect(JSON.parse(localStorage.getItem(JSON.stringify('new-name')))).not.toStrictEqual(['Some different tasks']);

    localStorage.clear();
  });
});
