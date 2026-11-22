
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
    const taskText = document.createElement("span");
    taskText.textContent = taskName;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", function() {
        newTask.remove();
        message.textContent = "Task is deleted successfully";
    });
    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    message.textContent = "Task added successfully!";

    taskInput.value = "";
    taskInput.focus();
});
