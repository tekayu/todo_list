export default function loadPage (array) {
    array.forEach((todo) => {
        todo.loadTodo();
    })
}