function addTodo() {
    const taskInput = document.getElementById("todo-input");
    const timeInput = document.getElementById("time-input");

    const task = taskInput.value.trim();
    const time = timeInput.value.trim();
    if (task === "") {
        alert("Please enter a task!");
        return;
    }
    const ul = document.getElementById("todo-list");
    const li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleDone(this)">${task}</span>
        <button onclick="toggleDone(this)">✔</button>
        <button onclick="deleteTodo(this)">❌</button>
    `;
    ul.appendChild(li);
    input.value = "";
}

function toggleDone(element) {
    element.classList.toggle("done");
}
function deleteTodo(button) {
    button.parentElement.remove();
}