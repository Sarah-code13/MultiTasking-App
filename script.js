
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskName = taskInput.value.trim();

    if (taskName === "") {
        message.textContent = "Please enter a task name.";
        return;
    }

    const newTask = document.createElement("li");
    newTask.textContent = taskName;

    taskList.appendChild(newTask);

    message.textContent = "Task added successfully!";

    taskInput.value = "";
    taskInput.focus();
});
