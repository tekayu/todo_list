import Todo from "./manage_todo";
import { loadLocalStorage, updateLocalStorage } from "./local_storage.js";

const newTodoModal = document.querySelector("#new-todo-modal");
const name = newTodoModal.querySelector("#name");
const date = newTodoModal.querySelector("#date");

const modalSubmitBtn = document.querySelector("#submit-modal");
const newTodoBtn = document.querySelector("#new-todo");

export default function newTodo(key, todoArr) {
    newTodoBtn.addEventListener("click", () => {
        showModal();
        modalSubmitBtn.addEventListener("click", () => {
            if (name.value !== "" && date.value !== "") {
                addTodo(key, todoArr);
            } else {
                alert("Fill todo param");
                return;
            }
            updateLocalStorage(key, todoArr);
            loadLocalStorage(key, todoArr);
        });
    });
}

function showModal () {
    // Make the modal visible
    
    newTodoModal.style.display = "block";
    // Add functionality to close the modal
    const closeModal = document.querySelector(".close");
    closeModal.addEventListener("click", () => {
        hideModal();
    })  
};

function hideModal () {
    name.value = "";
    date.value = "";
    newTodoModal.style.display = "none";
}

function addTodo (key, todoArr) {
    const newTodo =  new Todo(name.value, date.value);
    todoArr.push(newTodo);
    hideModal();
}
