import "./styles.css";
import loadHome from "./home";
import loadPersonal from "./personal";
import loadPriority from "./priority";
import newTodo from "./new_todo";
import { loadLists, newList, loadListTodos } from "./manage_lists";
import { testTodo } from "./local_storage";

// const homeBtn = document.querySelector("#home-btn");
// const personalBtn = document.querySelector("#personal-btn");
// const priorityBtn = document.querySelector("#priority-btn");

const newListBtn = document.querySelector("#new-list");

const newBtn = document.querySelector("#new-todo");

const deleteBtn = document.querySelector("#delete-btn")

// homeBtn.addEventListener("click", () => loadHome());
// personalBtn.addEventListener("click", () => loadPersonal());
// priorityBtn.addEventListener("click", () => loadPriority());

newListBtn.addEventListener("click", () => {
    newList();
})


testTodo();
loadLists();
loadListTodos("Weekly");

