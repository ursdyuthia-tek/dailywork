// const users = [
//     { name:"A", role:"admin"},
//     {name:"B", role:"user"},
//     {name:"C", role:"admin"}
// ];

// const freq = users.reduce((result, user)=> {
//     result[user.role] = (result[user.role] || 0) + 1;
//     return SpeechRecognitionResultList;
// }, {});
// console/log(freq);


// const users = [
//     {name:"B", age:20},
//     {name:"A", age:20},
//     {name:"C", age:18}
// ];

// users.sort((a, b) => {
//   if (a.age !== b.age) return a.age - b.age;
//   return a.name.localeCompare(b.name);
// });

// console.log(users);


// const arr =[
//     {id:1, name:"A"},
//     {id:1, name:"A"},
//     {id:2, name :"B"}
// ];
// const unique = Array.from(
//   new Map(arr.map(item => [item.id, item])).values()
// );
// console.log(unique);



// function validate(obj, requiredKeys) {
//   return requiredKeys.every(key => key in obj);
// }

// const data = { name: "John", age: 25 };

// console.log(validate(data, ["name", "age", "email"]));



// const users = [
//   { name: "A", role: "admin" },
//   { name: "B", role: "user" }
// ];
// const users = [
//   { name: "A", role: "admin" },
//   { name: "B", role: "user" }
// ];
// const grouped = users.reduce((acc, user) => {
//     if (!acc[user.role]) acc[user.role] = [];
//   acc[user.role].push(user);
//   return acc;
// }, {});
// console.log(grouped);

// const users = [
//     { name: "A", role: "admin", salary: 4000 },
//     { name: "B", role: "user", salary: 4000 },
//     { name: "C", role: "user", salary: 5000 },
//     { name: "D", role: "admin", salary: 5050}
// ];
// function groupBySalary(users) {
//     const grouped = users.reduce((acc, user) => {
//         if (!acc[user.salary]) acc[user.salary] = [];
//         acc[user.salary].push(user);
//         return acc;
//     }, {});

//     console.log(grouped);
// }
// groupBySalary(users);
// function groupByRole(users) {
//     const grouped = users.reduce((acc, user) => {
//         if (!acc[user.role]) acc[user.role] = [];
//         acc[user.role].push(user);
//         return acc;
//     }, {});
//     console.log(grouped);
// }
// groupByRole(users);



function validateTask() {
    const input = document.getElementById("todo-input");
    const error = document.getElementById("task-error");

    const value = input.value.trim();
    const hasAlphabets = /[a-zA-Z]/.test(value);

    if (value === "" || !hasAlphabets) {
        error.style.display = "block";
        return false;
    } else {
        error.style.display = "none";
        return true;
    }
}
function validateTime() {
    const input = document.getElementById("time-input");
    const error = document.getElementById("time-error");

    const value = input.value.trim();

    if (value === "" || isNaN(value) || Number(value) <= 0) {
        error.style.display = "block";
        return false;
    } else {
        error.style.display = "none";
        return true;
    }
}
function validatePriority() {
    const input = document.getElementById("priority-input");
    const error = document.getElementById("priority-error");

    if (input.value === "") {
        error.style.display = "block";
        return false;
    } else {
        error.style.display = "none";
        return true;
    }
}
function addTodo() {
    const isTaskValid = validateTask();
    const isTimeValid = validateTime();
    const isPriorityValid = validatePriority();

    if (!isTaskValid || !isTimeValid || !isPriorityValid) return;

    const task = document.getElementById("todo-input").value.trim();
    const time = document.getElementById("time-input").value.trim();
    const priority = document.getElementById("priority-input").value;

    const ul = document.getElementById("todo-list");
    const li = document.createElement("li");

    li.innerHTML = `
        <span data-task="${task}" data-time="${time}">
            ${task} - (${time} hrs) [${priority}]
        </span>
        <div>
            <button onclick="toggleDone(this)">✔</button>
            <button onclick="deleteTodo(this)">❌</button>
        </div>
    `;

    ul.appendChild(li);

    document.getElementById("todo-input").value = "";
    document.getElementById("time-input").value = "";
    document.getElementById("priority-input").value = "";
}
function toggleDone(button) {
    const span = button.closest("li").querySelector("span");
    span.classList.toggle("completed");
}
function deleteTodo(button) {
    button.closest("li").remove();
}
function sortTodos() {
    const ul = document.getElementById("todo-list");
    const items = Array.from(ul.getElementsByTagName("li"));

    items.sort((a, b) => {
        const taskA = a.querySelector("span").dataset.task.toLowerCase();
        const taskB = b.querySelector("span").dataset.task.toLowerCase();
        return taskA.localeCompare(taskB);
    });

    ul.innerHTML = "";
    items.forEach(item => ul.appendChild(item));
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("todo-input").addEventListener("keyup", validateTask);
    document.getElementById("time-input").addEventListener("keyup", validateTime);
    document.getElementById("priority-input").addEventListener("change", validatePriority);
});