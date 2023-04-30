var taskList = document.getElementById("taskList");
var taskInput = document.getElementById("taskInput");

function addTask() {
  if (taskInput.value === "") {
    alert("You must enter a task!");
  } else {
    var taskItem = document.createElement("li");
    taskItem.innerHTML = taskInput.value + "<span onclick='deleteTask(this)'>&times;</span>";
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

function TouchList() {
    if (taskInput.value === "") {
      alert("You must enter a task!");
    } else {
      var taskItem = document.createElement("li");
      taskItem.innerHTML = taskInput.value + "<span onclick='deleteTask(this)'>&times;</span>";
      taskList.appendChild(taskItem);
      taskInput.value = "";
    }
  }


function deleteTask(element) {
  element.parentElement.remove();
}
