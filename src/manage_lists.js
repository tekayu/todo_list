import { getStoredData } from "./local_storage";
import loadHome, { addDivHeader } from "./home";
import { addList, removeList } from "./local_storage";
import newTodo from "./new_todo.js";

import Todo from "./manage_todo.js";

const items = document.querySelector("#items");
const todos = document.querySelector("#todos");
const todoList = document.querySelector("#todo-list");
const userList = document.querySelector("#user-list");

const modalList = document.querySelector("#new-list-modal");
const listName = document.querySelector("#list-name");
const submitListBtn = document.querySelector("#submit-list-modal");

const newTodoBtn = document.querySelector(".new-todo");

// const newTodoBtn = document.querySelector("#new-todo");

export function loadLists () {
    const storedData = getStoredData();
    userList.textContent = "";
    storedData.forEach((list) => {
        const listDiv = document.createElement("div");
        listDiv.classList.add("list-div");
        const listBtn = document.createElement("button");
        listBtn.textContent = list.listName;
        listBtn.classList.add("list-button");
        const delBtn = document.createElement("button");
        delBtn.textContent = "Del";
        delBtn.classList.add("list-del-btn");
        delBtn.id = list.listName;
        listDiv.appendChild(listBtn);
        listDiv.appendChild(delBtn);
        userList.appendChild(listDiv);
        todoList.appendChild(userList);
    });
};

export function loadListTodos(listName) {
    const listData = loadListData(listName);
    newTodoBtn.id = listName;
    newTodoBtn.style.display = "block";
    todos.textContent = "";
    addDivHeader(listName);
    listData.forEach((todo) => {
        const formattedTodo = new Todo(todo.name, todo.date);
        formattedTodo.displayTodo();
    });
}

export function loadListData (listName) {
    const storedListData = getStoredData();
    for (let currentIndex in storedListData) {
        if (storedListData[currentIndex].listName === listName) {
            return storedListData[currentIndex].todos
        }
    };
};

export function showList () {
    listName.value = "";
    modalList.style.display = "block";
    const closeModal = document.querySelector("#closeListModal");
    closeModal.addEventListener("click", () => {
        hideModal();
    });
};

export function newList () {
    addList(createListObj(listName.value));
    hideModal();
    loadLists();
    loadHome();
    return;
}

function hideModal() {
    modalList.style.display = "none";
}

function createListObj (listName) {
    let newListObj = {
        listName: `${listName}`,
        todos: [],
    }
    return newListObj;
}

export function deleteList (listName) {
    const storedData = getStoredData();
    for (let item in storedData) {
        if (storedData[item].listName === listName) {
            removeList(storedData[item].listName);
        }
    }
    loadLists();
    loadHome();
}