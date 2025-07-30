// import loadHome, { addDivHeader } from "./home";
// import { loadLists, newList, loadListTodos, showList } from "./manage_lists";
// import { newTodo, showTodo } from "./new_todo";

// const newListBtn = document.querySelector("#new-list");
// const submitListBtn = document.querySelector("#submit-list-modal");
// const homeBtn = document.querySelector("#home-btn");
// const newTodoBtn = document.querySelector(".new-todo");
// const submitTodoBtn = document.querySelector("#submit-modal");

// const userList = document.querySelector("#user-list")

// export default function buttonLogic() {
//     newListBtn.addEventListener("click", () => {
//         showList();
//     });

//     submitListBtn.addEventListener("click", () => {
//         newList();
//     });

//     homeBtn.addEventListener("click", () => loadHome());

//     userList.addEventListener("click", (event) => {
//         if (event.target.classList.contains("list-button")) {
//             addDivHeader(event.target.textContent);
//             loadListTodos(event.target.textContent);
//         };
//     });

//     newTodoBtn.addEventListener("click", () => {
//         showTodo();
//     });

//     submitTodoBtn.addEventListener("click", () => {
//         newTodo(newTodoBtn.id);
//     });
// };