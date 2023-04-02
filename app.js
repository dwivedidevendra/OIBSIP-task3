const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", addTodo);

function addTodo() {
  if (todoInput.value === "") {
    return;
  }

  const todoItem = document.createElement("li");
  const todoCheckbox = document.createElement("input");
  todoCheckbox.type = "checkbox";
  const todoText = document.createElement("span");
  todoText.textContent = todoInput.value;
  const todoDeleteButton = document.createElement("button");
  todoDeleteButton.textContent = "Delete";
  todoDeleteButton.addEventListener("click", deleteTodo);

  todoItem.appendChild(todoCheckbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(todoDeleteButton);
  todoList.appendChild(todoItem);

  todoInput.value = "";
}

function deleteTodo() {
  const todoItem = this.parentNode;
  todoList.removeChild(todoItem);
}
