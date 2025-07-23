import "./styles.css";
import loadHome from "./home";
import loadPersonal from "./personal";
import loadPriority from "./priority";
import newTodo from "./new_todo";

const homeBtn = document.querySelector("#home-btn");
const personalBtn = document.querySelector("#personal-btn");
const priorityBtn = document.querySelector("#priority-btn");

const newBtn = document.querySelector("#new-todo");

homeBtn.addEventListener("click", () => loadHome());
personalBtn.addEventListener("click", () => loadPersonal());
priorityBtn.addEventListener("click", () => loadPriority());

newBtn.addEventListener("click", () => newTodo());