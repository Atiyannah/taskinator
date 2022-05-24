var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);
var tasksToDoEl = document.querySelector("#tasks-to-do");

// dynamically create the task item
var createTaskHandler = function() {
    // create task item
    var listItemEl = document.createElement("li");
    // assign text a class and style it
    listItemEl.className = "task-item";
    // assign text to the element
    listItemEl.textContent = "This is a new task.";
    // append the element to the task list
    tasksToDoEl.appendChild(listItemEl);
};

buttonEl.addEventListener("click", createTaskHandler);