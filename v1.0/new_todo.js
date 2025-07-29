import Todo from "./todo.js";

export default function newTodo () {
    const newTodoModal = document.querySelector("#new-todo-modal");
    newTodoModal.style.display = "block";

    const closeModal = document.querySelector(".close");
    closeModal.addEventListener("click", () => {
        newTodoModal.style.display = "none";
    })

    const newName = document.querySelector("#name");
    const newDate = document.querySelector("#date");

    const submitBtn = document.querySelector("#submit-modal")

    submitBtn.addEventListener("click", () => {
        const newTodo = new Todo(newName, newDate);
    })  
};