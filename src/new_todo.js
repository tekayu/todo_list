export default function newTodo () {
    const newTodoModal = document.querySelector("#new-todo-modal");
    newTodoModal.style.display = "block";

    const closeModal = document.querySelector(".close");
    closeModal.addEventListener("click", () => {
        newTodoModal.style.display = "none";
    })
};