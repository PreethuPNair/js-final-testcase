document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const prioritySelect = document.getElementById('priority');
    const taskList = document.getElementById('task-list');
    const priorityFilter = document.getElementById('priority-filter');
  
    // Load tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    // Render tasks
    function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span class="${task.completed ? 'complete' : ''}">${task.text} - Due: ${task.dueDate} - Priority: ${task.priority}</span>
          <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        taskList.appendChild(li);
      });
      updateLocalStorage();
    }
  
    // Add new task
    taskForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const taskText = taskInput.value.trim();
      const dueDate = dueDateInput.value;
      const priority = prioritySelect.value;
      if (taskText !== '') {
        tasks.push({ text: taskText, dueDate: dueDate, priority: priority, completed: false });
        renderTasks();
        taskInput.value = '';
        dueDateInput.value = '';
        prioritySelect.value = 'low';
      }
    });
  
    // Delete task
    taskList.addEventListener('click', function (e) {
      if (e.target.classList.contains('delete-btn')) {
        const index = e.target.getAttribute('data-index');
        tasks.splice(index, 1);
        renderTasks();
      }
    });
  
    // Toggle task completion
    taskList.addEventListener('click', function (e) {
      if (e.target.tagName === 'SPAN') {
        const index = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
      }
    });
  
    // Filter tasks by priority
    priorityFilter.addEventListener('change', function () {
      const selectedPriority = priorityFilter.value;
      if (selectedPriority !== 'all') {
        const filteredTasks = tasks.filter(task => task.priority === selectedPriority);
        renderFilteredTasks(filteredTasks);
      } else {
        renderTasks();
      }
    });
  
    // Render filtered tasks
    function renderFilteredTasks(filteredTasks) {
      taskList.innerHTML = '';
      filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span class="${task.completed ? 'complete' : ''}">${task.text} - Due: ${task.dueDate} - Priority: ${task.priority}</span>
          <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        taskList.appendChild(li);
      });
    }
  
    // Update local storage
    function updateLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Initial render
    renderTasks();
  });
  