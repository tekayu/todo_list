import { getStoredData } from "./local_storage";
import Todo from "./manage_todo";

const todos = document.querySelector("#todos");

const newTodoBtn = document.querySelector(".new-todo");

export default function loadHome () {
    const storedData = getStoredData();
    todos.textContent = "";
    newTodoBtn.style.display = "none";
    for (let index in storedData) {
        // Add a header for each list name
        const storedListName = storedData[index].listName;
        addDivHeader(storedListName);
        // Add content for each list name
        const todoArr = storedData[index].todos;
        for (let storedTodo in todoArr) {
            const addTodo = new Todo (todoArr[storedTodo].name, todoArr[storedTodo].date);
            addTodo.displayHomeTodo();
        };
    };
};

export function addDivHeader(listName) {
    const listNameDiv = document.createElement("div");
    const listNameHeader = document.createElement("h3");
    listNameHeader.textContent = listName;
    listNameDiv.appendChild(listNameHeader);
    todos.appendChild(listNameDiv);
}