
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

let tasks = [];

try {
    const savedTasks = JSON.parse(localStorage.getItem("multiTaskingTasks"));

    if (Array.isArray(savedTasks)) {
        tasks = savedTasks;
    }
} catch (error) {
    console.log("Could not load saved tasks:", error);
}

function saveTasks() {
    localStorage.setItem("multiTaskingTasks", JSON.stringify(tasks));
}


function displayTask(task) {
    const newTask = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = task.name;
    taskText.classList.add("taskText");
    const completeCheckbox = document.createElement("input");
    completeCheckbox.type = "checkbox";
    completeCheckbox.classList.add("taskCheckbox");
    completeCheckbox.checked = task.completed;
    completeCheckbox.setAttribute(
        "aria-label",
        "Mark " + task.name + " as completed"
    );

    if (task.completed) {
        newTask.classList.add("completed");
    }

    completeCheckbox.addEventListener("change", function() {
        task.completed = completeCheckbox.checked;

        if (task.completed) {
            newTask.classList.add("completed");
            message.textContent = "Task completed!";
        } else {
            newTask.classList.remove("completed");
            message.textContent = "Task marked as incomplete!";
        }

        saveTasks();
    });
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("deleteButton");

    deleteButton.addEventListener("click", function() {
        tasks = tasks.filter(function(item) {
            return item !== task;
        });

        newTask.remove();
        saveTasks();

        message.textContent = "Task is deleted successfully";
    });

    newTask.appendChild(completeCheckbox);
    newTask.appendChild(taskText);
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);
}
taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskName = taskInput.value.trim();

    if (taskName === "") {
        message.textContent = "Please enter a task name.";
        return;
    }

    const newTask = {
        name: taskName,
        completed: false
    };

    tasks.push(newTask);

    displayTask(newTask);
    saveTasks();

    message.textContent = "Task added successfully!";

    taskInput.value = "";
    taskInput.focus();
});
tasks.forEach(function(task) {
    displayTask(task);
});

