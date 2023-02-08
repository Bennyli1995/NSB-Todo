// Query selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoContainer = document.querySelector(".todo-container");
const todoUl = document.querySelector(".todo-list");
const todoFilter = document.querySelector(".todo-filter");

todoButton.addEventListener("click", addTodo);
todoUl.addEventListener("click", removeCheck);
todoFilter.addEventListener("click", filterTodo);

// Event listeners

function addTodo(e) {
  e.preventDefault();
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-div");

  const todoLi = document.createElement("li");
  todoLi.innerText = todoInput.value;
  todoLi.classList.add("todo-li");
  const completeButton = document.createElement("button");
  completeButton.innerHTML = ` <i class="fas fa-check"></i>`;
  completeButton.classList.add("complete-btn");
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = ` <i class="fas fa-trash"></i>`;

  todoDiv.appendChild(todoLi);
  todoDiv.appendChild(completeButton);
  todoDiv.appendChild(trashButton);

  todoUl.appendChild(todoDiv);

  todoInput.value = "";
}

function removeCheck(e) {
  const item = e.target;
  const parent = item.parentElement;
  if (item.classList[0] === "trash-btn") {
    parent.remove();
  } else if (item.classList[0] === "complete-btn") {
    parent.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const allTodos = todoUl.childNodes;
  allTodos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}
