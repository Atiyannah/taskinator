var formEl = document.querySelector("#task-form");
console.log(formEl);
var tasksToDoEl = document.querySelector("#tasks-to-do");

// dynamically create the task item
var createTaskHandler = function(event) {
    // prevents the browser from carrying out its default (unwanted) behavior
    event.preventDefault();
    // create task item
    var listItemEl = document.createElement("li");
    // assign text a class and style it
    listItemEl.className = "task-item";
    // assign text to the element
    listItemEl.textContent = "This is a new task.";
    // append the element to the task list
    tasksToDoEl.appendChild(listItemEl);
    console.log(event);
};

formEl.addEventListener("submit", createTaskHandler);