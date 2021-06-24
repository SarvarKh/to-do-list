/**
 * @jest-environment jsdom
 */
import editTaskFromTasks from './task-modal'; // eslint-disable-line import/no-named-as-default

describe('Editing the task', () => {
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
    const project = document.createElement('div');
    project.textContent = 'Random project name';
    project.classList.add('active');

    const task = document.createElement('div');
    task.textContent = 'Invalid task name';
    task.classList.add('active-edit-task');
    task.setAttribute('data-index', '0');

    project.appendChild(task);
    document.body.appendChild(project);

    localStorage.setItem(JSON.stringify('Random project name'), JSON.stringify(task));
  });
  test('Edit the task title in the page and LS', () => {
    const newTask = {
      title: 'New title',
      description: 'New description',
      dueDate: 'New due Date',
      priority: 'New priority',
      notes: 'New notes',
      checklist: 'Complete',
    };
    const tasks = {};

    editTaskFromTasks(newTask, tasks);
    expect(JSON.parse(localStorage.getItem(JSON.stringify('Random project name')))).toStrictEqual({});
    expect(JSON.parse(localStorage.getItem(JSON.stringify('Random project name')))).not.toStrictEqual('Result');

    localStorage.clear();
  });
});
