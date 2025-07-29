import Todo from "./todo.js";
import reload from "./reload.js";

const todos = document.querySelector("#todos");

export default function loadPersonal () {
    reload(todos);
    const doLaundry = new Todo("Clean my room", "12/01/25");
}