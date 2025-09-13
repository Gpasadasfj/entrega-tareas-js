const inputText = document.querySelector("#ej3input");
const ej3button = document.querySelector("#ej3button");
const taskList = document.querySelector("#taskList");
const listItem = document.querySelector("#listItem");

let actualText = "";

function addTask() {
  let newTask = document.createElement("li");
  if (actualText != "") {
    newTask.textContent = actualText;
    newTask.className = "listElement"
    let deleteTaskButton = document.createElement("button");
    deleteTaskButton.textContent = "Eliminar tarea";
    deleteTaskButton.addEventListener("click", () => newTask.remove());
    newTask.append(deleteTaskButton);

    listItem.append(newTask);
    inputText.value = "";
    actualText = "";
  }
}

inputText.addEventListener("input", (e) => {
  actualText = e.target.value;
});

inputText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

ej3button.addEventListener("click", () => addTask());
