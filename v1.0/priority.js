import Todo from "./todo.js";
import reload from "./reload.js";

const todos = document.querySelector("#todos");

export default function loadPriority () {
    reload(todos);
    const doLaundry = new Todo("Take out the trash", "12/01/25");
}