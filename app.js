const taskInput = document.getElementById('task');
const outputList = document.getElementById('outputList');
const clearCompletedButton = document.getElementById('btn-clear-completed');

function displayUserInput(input) {
  const container = document.createElement('label');
  container.classList = 'task-container';

  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  checkBox.classList = 'complete';

  const listItem = document.createElement('span');
  listItem.classList = 'input-text';
  listItem.textContent = input;

  const ellipsisIcon = document.createElement('i');
  ellipsisIcon.classList = 'fa-solid fa-ellipsis-vertical';

  container.appendChild(checkBox);

  container.appendChild(listItem);

  container.appendChild(ellipsisIcon);

  outputList.appendChild(container);

  const lineBreak = document.createElement('br');
  outputList.appendChild(lineBreak);

  checkBox.addEventListener('click', () => {
    if (checkBox.checked) {
      listItem.style.textDecoration = 'line-through';
    } else {
      listItem.style.textDecoration = 'none';
    }
  });

  clearCompletedButton.addEventListener('click', () => {
    const completedContainers = document.querySelectorAll('.complete:checked');
    completedContainers.forEach((container) => {
      const lineBreak = container.parentElement.querySelector('br');
      if (lineBreak) {
        lineBreak.remove();
      }
      container.parentElement.remove();
    });

    const remainingLineBreaks = outputList.querySelectorAll('br');
    remainingLineBreaks.forEach((lineBreak) => {
      lineBreak.remove();
    });
  });
}

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    const userInput = taskInput.value;
    taskInput.value = '';
    displayUserInput(userInput);
  }
});