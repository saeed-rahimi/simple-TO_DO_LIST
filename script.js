
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const taskList = document.getElementById('taskList');


function addTask() {
  const taskValue = taskInput.value.trim();
  
  // Input validation: Ensure task is not empty
  if (taskValue === '') {
    alert('Please enter a task!');
    return;
  }


  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');
  

  const taskText = document.createElement('span');
  taskText.textContent = taskValue;
  

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  

  taskItem.appendChild(taskText);
  taskItem.appendChild(deleteBtn);
  

  taskList.appendChild(taskItem);
  

  taskInput.value = '';
  

  deleteBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });
}


function clearAllTasks() {
  taskList.innerHTML = '';
}


addTaskBtn.addEventListener('click', addTask);
clearAllBtn.addEventListener('click', clearAllTasks);
