import { addTodo, getStoredData, removeTodo } from "./local_storage.js";
import Todo from "./manage_todo.js";
import { loadListData, loadLists, loadListTodos } from "./manage_lists.js";

const newTodoModal = document.querySelector("#new-todo-modal");
const name = newTodoModal.querySelector("#name");
const date = newTodoModal.querySelector("#date");

const modalSubmitBtn = document.querySelector("#submit-modal");

export function showTodo(listName) {
    name.value = "";
    date.value = "";
    showModal();
    // modalSubmitBtn.addEventListener("click", () => {
    //     if (name.value == "" || date.value == "") {
    //         alert("fill in todo param");
    //         return;
    //     } else {
    //         let newTodoObj = new Todo (name.value, date.value)
    //         newTodoObj.displayTodo();
    //         let todoObj = {
    //             "name": name.value,
    //             "date": date.value
    //         }
    //         addTodo(listName, todoObj);
    //         hideModal();
    //         return;
    //     };
    // });
};

export function newTodo(listName) {
    if (name.value == "" || date.value == "") {
            alert("fill in todo param");
            return;
        } else {
            let newTodoObj = new Todo (name.value, date.value)
            newTodoObj.displayTodo();
            let todoObj = {
                "name": name.value,
                "date": date.value,
            }
            addTodo(listName, todoObj);
            hideModal();
            return;
        };
}

export function deleteTodo(listName, todoName) {
    const listArr = loadListData(listName);
    for (let todo in listArr) {
        if (listArr[todo].name === todoName) {
            removeTodo(listName, listArr[todo].name);
        }
    }
};

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
    newTodoModal.style.display = "none";
}

// function addTodo (key, todoArr) {
//     const newTodo =  new Todo(name.value, date.value);
//     todoArr.push(newTodo);
//     hideModal();
// }
