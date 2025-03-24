let form = document.getElementById("taskForm");
let tasksContainer = document.getElementById("tasks");

let tasks = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let taskTitle = document.getElementById("taskTitle").value;
  let dueDate = document.getElementById("dueDate").value;
  let taskDescription = document.getElementById("taskDescription").value;

  // Create a new task object
  let task = {
    title: taskTitle,
    dueDate: dueDate,
    description: taskDescription,
  };

  // Add task to the tasks array
  tasks.push(task);
  displayTasks();

  // Reset the form
  form.reset();
});

// Display tasks on the page
function displayTasks() {
  tasksContainer.innerHTML = "";
  tasks.forEach((task, index) => {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    taskDiv.innerHTML = `
      <div>
        <p><strong>${task.title}</strong> (Due: ${task.dueDate})</p>
        <p>${task.description}</p>
        <span class="options">
          <i class="fas fa-edit" onclick="editTask(${index})"></i>
          <i class="fas fa-trash-alt" onclick="deleteTask(${index})"></i>
        </span>
      </div>
    `;

    tasksContainer.appendChild(taskDiv);
  });
}

// Delete task
function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

// Edit task
function editTask(index) {
  let task = tasks[index];

  // Populate the form with the task details
  document.getElementById("taskTitle").value = task.title;
  document.getElementById("dueDate").value = task.dueDate;
  document.getElementById("taskDescription").value = task.description;

  // Delete the task after editing, to avoid duplication
  tasks.splice(index, 1);
  displayTasks();
}
