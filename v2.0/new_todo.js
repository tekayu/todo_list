import Todo from "./todo";

const newTodoModal = document.querySelector("#new-todo-modal");
const name = newTodoModal.querySelector("#name");
const date = newTodoModal.querySelector("#date");

export function showModal () {
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
    name.value = "";
    date.value = "";
}

export function newTodo (todoArr) {
    if (name.value !== "" && date.value !== "") {
        const newTodo =  new Todo(name.value, date.value);
        todoArr.push(newTodo);
        hideModal();
    } else {
        alert("Input todo parameters");
    }
    
}
