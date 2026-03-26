function addTodo() {
    const taskInput = document.getElementById("todo-input");
    const timeInput = document.getElementById("time-input");
    const task = taskInput.value.trim();
    const time = timeInput.value.trim();
    if (task === "" || time === "") {
        alert("Please enter both task and time!");
        return;
    }
    const ul = document.getElementById("todo-list");
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${task} - (${time} hrs)</span>
        <div>
            <button onclick="toggleDone(this)">✔</button>
            <button onclick="deleteTodo(this)">❌</button>
        </div>
    `;
    ul.appendChild(li);
    taskInput.value = "";
    timeInput.value = "";
}
function toggleDone(button) {
    const span = button.parentElement.parentElement.querySelector("span");
    span.classList.toggle("completed");
}
function deleteTodo(button) {
    button.parentElement.parentElement.remove();
}