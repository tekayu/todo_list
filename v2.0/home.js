import Todo from "./todo.js";
import {showModal, newTodo} from "./new_todo.js";
import loadPage from "./load_page.js";
import reload from "./reload.js";

// const storedArrAsString = JSON.parse(localStorage.getItem("homeTodos"));
// storedArrAsString.forEach((todo) => {
//     const storedTodo = new Todo(todo.name, todo.date);
//     homeTodos.push(storedTodo);
// });

const homeTodos = JSON.parse(localStorage.getItem("homeTodos")) || [];


// Add new todo modal functionality
const newTodoBtn = document.querySelector("#new-todo");
newTodoBtn.addEventListener("click", () => showModal())

// Get the submit button for new todos from the modal
const modalSubmitBtn = document.querySelector("#submit-modal");
modalSubmitBtn.addEventListener("click", () => {
    newTodo(homeTodos);
    localStorage.setItem("homeTodos", JSON.stringify(homeTodos));
    loadHome();
})

const todoDiv = document.querySelector("#todo-div");

export default function loadHome () {
    homeTodos.forEach((todo) => {
    const localTodo = new Todo(todo.name, todo.date);
    localTodo.loadTodo();
    })
};