import Todo from "./manage_todo.js";
import newTodo from "./new_todo.js";
import { loadLocalStorage, testTodo, getStoredData } from "./local_storage.js";
import { loadLists } from "./manage_lists.js";

export default function loadHome () {
    let homeTodos = [];
    // loadLocalStorage("homeTodos", homeTodos);
    // newTodo("homeTodos", homeTodos);
    testTodo();
    const storedData = getStoredData();
    console.log(storedData);
};