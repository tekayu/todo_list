export default function Todo (name, date) {
    const todoList = document.querySelector("#todos");
    this.name = name;
    this.date = date;

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("list-item");
    todoDiv.id = crypto.randomUUID();
    this.id = todoDiv.id;

    const checkbox = document.createElement("input");
    checkbox.type = ("checkbox");
    todoDiv.appendChild(checkbox);

    const todoName = document.createElement("p");
    todoName.textContent = (this.name);
    todoDiv.appendChild(todoName);

    const todoDate = document.createElement("p");
    todoDate.classList.add("date");
    todoDate.textContent = (`Due: ${this.date}`);
    todoDiv.appendChild(todoDate);

    const editBtn = document.createElement("button");
    editBtn.classList.add = ("edit-btn");
    editBtn.textContent = "Edit";
    todoDiv.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add = ("delete-btn");
    deleteBtn.textContent = "Delete";
    todoDiv.appendChild(deleteBtn);

    todoList.appendChild(todoDiv);

    deleteBtn.addEventListener("click", () => todoList.removeChild(todoDiv));
}