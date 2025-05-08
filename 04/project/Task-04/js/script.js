document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');
  const filterRadios = document.querySelectorAll('input[name="filter"]');

  let tasks = [];

  function renderTasks() {
    taskList.innerHTML = '';
    const selectedFilter = document.querySelector('input[name="filter"]:checked').value;
    let filtered = [];

    if (selectedFilter === 'all') {
      filtered = tasks;
    } else {
      filtered = tasks.filter(t => t.status === selectedFilter);
    }

    filtered.forEach(task => {
      const li = document.createElement('li');
      li.className = `task ${task.status}`;
      
      const taskText = document.createElement('span');
      taskText.className = 'task-text';
      taskText.textContent = task.text;

      if (task.status === 'done') {
        taskText.textContent += ` (Виконано о ${task.time})`;
      }

      if (task.status === 'deleted') {
        taskText.textContent += ` (Видалено о ${task.time})`;
      }

      li.appendChild(taskText);

      // Додати дії тільки якщо задача "active"
      if (task.status === 'active') {
        const actions = document.createElement('div');
        actions.className = 'actions';

        const doneBtn = document.createElement('button');
        doneBtn.textContent = '✅';
        doneBtn.title = 'Позначити як виконано';
        doneBtn.onclick = () => completeTask(task.id);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑️';
        deleteBtn.title = 'Видалити задачу';
        deleteBtn.onclick = () => deleteTask(task.id);

        actions.appendChild(doneBtn);
        actions.appendChild(deleteBtn);
        li.appendChild(actions);
      }

      taskList.appendChild(li);
    });
  }

  function addTask() {
    const text = taskInput.value.trim();
    if (!text) return;

    const task = {
      id: Date.now(),
      text: text,
      status: 'active',
      time: null
    };

    tasks.unshift(task);
    taskInput.value = '';
    renderTasks();
  }

  function completeTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.status = 'done';
      task.time = new Date().toLocaleTimeString();
      tasks = [task, ...tasks.filter(t => t.id !== id)];
      renderTasks();
    }
  }

  function deleteTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
      task.status = 'deleted';
      task.time = new Date().toLocaleTimeString();
      tasks = [task, ...tasks.filter(t => t.id !== id)];
      renderTasks();
    }
  }

  addTaskBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
  });

  filterRadios.forEach(radio => {
    radio.addEventListener('change', renderTasks);
  });
});
