export default function Todo (name, date) {
    const todoList = document.querySelector("#todos");
    this.name = name;
    this.date = date;

    // Create a new div for the actual todo itself
    // This div stores all the todo data
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("list-item");

    // Create all the elements for the todo div
    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = ("checkbox");
    // Name
    const todoName = document.createElement("p");
    todoName.textContent = (this.name);
    // Date
    const todoDate = document.createElement("p");
    todoDate.classList.add("date");
    todoDate.textContent = (`Due: ${this.date}`);
    // Edit button
    const editBtn = document.createElement("button");
    editBtn.classList.add = ("edit-btn");
    editBtn.textContent = "Edit";
    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add = ("delete-btn");
    deleteBtn.textContent = "Delete";

    this.loadTodo = function () {
        // Add all elements to the todo div
        todoDiv.appendChild(checkbox);
        todoDiv.appendChild(todoName);
        todoDiv.appendChild(todoDate);
        todoDiv.appendChild(editBtn);
        todoDiv.appendChild(deleteBtn);

        // Add the todo div to the list div
        todoList.appendChild(todoDiv);

        
    }

    deleteBtn.addEventListener("click", () => todoList.removeChild(todoDiv));
}