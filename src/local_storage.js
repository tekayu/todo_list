import Todo from "./manage_todo";
import { loadListData } from "./manage_lists";

export function getStoredData () {
    if (localStorage.getItem("lists") == null) {
        return [];
    } else {
        const storedData = JSON.parse(localStorage.getItem("lists"));
        return storedData;
    }
}

export function addList(newListObj) {
    let storedArr = getStoredData();
    storedArr.push(newListObj);
    const arrAsString = JSON.stringify(storedArr);
    localStorage.setItem("lists", arrAsString);
};

export function removeList(listName) {
    let storedArr = getStoredData();
    for (let todo in storedArr) {
        if (storedArr[todo].listName === listName) {
            storedArr.splice(todo, 1);
        }
    };
    const arrAsString = JSON.stringify(storedArr);
    localStorage.setItem("lists", arrAsString);
}

export function addTodo(listNameItem, todoObj) {
    let storedArr = getStoredData();
    for (let list in storedArr) {
        if (storedArr[list].listName === listNameItem) {
            storedArr[list].todos.push(todoObj);
            const arrAsString = JSON.stringify(storedArr);
            localStorage.setItem("lists", arrAsString);
            return;
        };
    };
};

function findTodoOnClick(listName, todoName) {
    let storedArr = getStoredData()
    for (let list in storedArr) {
        if (storedArr[list].listName === listName) {
            for (let todo in storedArr[list].todos) {
                if (storedArr[list].todos[todo].name === todoName) {
                    return storedArr[list].todos[todo];
                };
            };
        };
    };
};

export function removeTodo(listName, todoName) {
    const todoObj = findTodoOnClick(listName, todoName);
    console.log(todoObj.name)
    const storedArr = getStoredData();
    for (let list in storedArr) {
        if (storedArr[list].listName == listName) {
            for (let todo in storedArr[list].todos) {
                if (storedArr[list].todos[todo].name == todoObj.name) {
                    storedArr[list].todos.splice(todo, 1);
                    const arrAsString = JSON.stringify(storedArr);
                    localStorage.setItem("lists", arrAsString);
                };
            };
        };
    };
};

const clean = new Todo("clean", "11-11-11");
const cook = new Todo("cook", "12-12-12");

export function testTodo() {
    const testLists = [
        {
            listName: "Weekly",
            todos: [
                {
                    name: clean.name,
                    date: clean.date,
                },
            ],
        },
        {
            listName: "Monthly",
            todos: [
                {
                    name: cook.name,
                    date: cook.date,
                },
            ],
        }     
    ];
    localStorage.setItem("lists", JSON.stringify(testLists));
};