import "./styles.css";
import loadHome, { addDivHeader } from "./home";
import { loadLists, newList, loadListTodos, showList, deleteList } from "./manage_lists";
import { newTodo, showTodo, deleteTodo } from "./new_todo";
import { testTodo } from "./local_storage";

// testTodo();
loadHome();
loadLists();

const newListBtn = document.querySelector("#new-list");
const submitListBtn = document.querySelector("#submit-list-modal");
const homeBtn = document.querySelector("#home-btn");
const newTodoBtn = document.querySelector(".new-todo");
const submitTodoBtn = document.querySelector("#submit-modal");

const userList = document.querySelector("#user-list")
const todoList = document.querySelector("#todos");

todoList.addEventListener("click", (event) => {
    if(event.target.classList == "todo-delete-btn") {
        deleteTodo(newTodoBtn.id, event.target.id);
        loadListTodos(newTodoBtn.id);
    }
});


newListBtn.addEventListener("click", () => {
    showList();
})

submitListBtn.addEventListener("click", () => {
    newList();
});

homeBtn.addEventListener("click", () => loadHome());

userList.addEventListener("click", (event) => {
    if (event.target.classList.contains("list-button")) {
        addDivHeader(event.target.textContent);
        loadListTodos(event.target.textContent);
    }
});

userList.addEventListener("click", (event) => {
    if (event.target.classList.contains("list-del-btn")) {
        deleteList(event.target.id);
    }
});

newTodoBtn.addEventListener("click", () => {
    showTodo();
})

submitTodoBtn.addEventListener("click", () => {
    newTodo(newTodoBtn.id);
})