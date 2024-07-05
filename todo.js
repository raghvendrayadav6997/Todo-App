let todos = [];

function addTodo() {
  const input = document.getElementById('todo-input');
  const task = input.value.trim();
  
  if (task !== '') {
    todos.push(task);
    input.value = '';
    renderTodos();
  }
}

function completeTodo(index) {
  todos[index] = `<s>${todos[index]}</s>`;
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function renderTodos() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task ${todo.includes('<s>') ? 'completed' : ''}">${todo}</span>
      <button onclick="completeTodo(${index})">Complete</button>
      <button onclick="deleteTodo(${index})">Delete</button>
    `;
    todoList.appendChild(li);
  });
}