import Todo from "./todo.js";
import reload from "./reload.js";

const todos = document.querySelector("#todos");

export default function loadHome () {
    reload(todos);
    const doLaundry = new Todo("Do laundry", "12/01/25");
    const makeDinner = new Todo("Make dinner", "12/01/25");
}