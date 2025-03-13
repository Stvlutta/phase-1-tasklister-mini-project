document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskDescription = document.querySelector('#new-task-description').value;

    if (taskDescription) {
      const taskItem = document.createElement('li');
      taskItem.textContent = taskDescription;
      taskList.appendChild(taskItem);
    }

    form.reset();
  });
});
