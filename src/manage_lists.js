import { getStoredData } from "./local_storage";

import Todo from "./manage_todo";

const todos = document.querySelector("#todos");

const todoList = document.querySelector("#todo-list");
const modalList = document.querySelector("#new-list-modal");
const newListName = document.querySelector("#list-name");

export function loadLists () {
    const storedData = getStoredData();
    storedData.forEach((list) => {
        const listBtn = document.createElement("button");
        listBtn.textContent = list.listName;
        listBtn.classList.add("list-button");
        todoList.appendChild(listBtn);
        listBtn.addEventListener("click", () => {
            todos.textContent = "";
            const testData = loadListTodos(list.listName);
            testData.forEach((todo) => {
                const addTodo = new Todo(todo.name, todo.date);
                console.log(addTodo);
                addTodo.displayTodo();
            })
        })
    })
}

export function loadListTodos (listName) {
    const storedListData = getStoredData();
    for (let currentIndex in storedListData) {
        if (storedListData[currentIndex].listName === listName) {
            return storedListData[currentIndex].todos
        }
    };
};

export function newList () {
    modalList.style.display = "block";
    const closeModal = document.querySelector("#closeListModal");
    closeModal.addEventListener("click", () => {
        hideModal();
    });
};

function hideModal() {
    modalList.style.display = "none";
}