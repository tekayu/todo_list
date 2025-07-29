import Todo from "./manage_todo";

const lists = [];

export function loadLocalStorage() {
    if (localStorage.getItem() == null) {
        return
    } else {
        const localArr = localStorage.getItem();
        lists = JSON.parse(localArr);
        // localArr.forEach((el) => {
        //     lists.push(el);
        // })
    }
}

export function updateLocalStorage(key, arr) {
    const arrAsString = JSON.stringify(arr);
    localStorage.setItem(key, arrAsString);
}

export function getStoredData () {
    if (localStorage.getItem("lists") == null) {
        return [];
    } else {
        const storedData = JSON.parse(localStorage.getItem("lists"));
        return storedData;
    }
}

export function testTodo() {
    const testLists = [
        {
            listName: "Weekly",
            todos: [
                {
                    name: "clean",
                    date: "11-11-11",
                },
                {
                    name: "cook dinner",
                    date: "12-1-9",
                },
            ],
        },
        {
            listName: "Monthly",
            todos: [
                {
                    name: "wash car",
                    date: "1-2-23",
                },
                {
                    name: "mow garden",
                    date: "12-3-12",
                },
            ],
        }     
    ];
    localStorage.setItem("lists", JSON.stringify(testLists));
};