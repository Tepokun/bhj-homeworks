const taskInput = document.getElementById('task__input');
const taskAdd = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

const storageKey = 'tasks';

const closeTask = (e, task) => {
  e.preventDefault(); 
  console.log(task);
  task.remove();
  localStorage.setItem(storageKey, tasksList.innerHTML);
}

const addTaskToList = (title) => {
  const taskTemplate = `
    <div class="task">
      <div class="task__title">
        ${title}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
  `;
  tasksList.insertAdjacentHTML('beforeend', taskTemplate);
  const newTask = tasksList.lastElementChild;
  newTask.querySelector('.task__remove').addEventListener('click', (e) => closeTask(e, newTask));
}

const loadTasksFromStorage = () => {
  const savedTasks = localStorage.getItem(storageKey);
  if (savedTasks) {
    tasksList.innerHTML = savedTasks;
    const taskRemoveButtons = document.querySelectorAll('.task__remove');
    taskRemoveButtons.forEach((button) => {
      button.addEventListener('click', (e) => closeTask(e, button.closest('.task')));
    });
  }
}

taskAdd.addEventListener('click', e => {
  e.preventDefault();
  if (!taskInput.value)
    return;
  
  const taskTitle = taskInput.value.trim();
  addTaskToList(taskTitle);
  localStorage.setItem(storageKey, tasksList.innerHTML);
  taskInput.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  loadTasksFromStorage();
});
