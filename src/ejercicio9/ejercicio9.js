const inputText = document.querySelector("#ej9input");
const ej9button = document.querySelector("#ej9button");
const taskList = document.querySelector("#taskList");
const listItem = document.querySelector("#listItem");
const cleanerButton = document.querySelector(".cleanerButton");

let actualText = "";

inputText.value = localStorage.getItem("actualInput") ?? "";

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  if (key === "actualInput") {
    continue;
  }
  const value = localStorage.getItem(key);
  const parsedValue = JSON.parse(value);

  const savedLabel = document.createElement("label");
  savedLabel.textContent = parsedValue.text;
  savedLabel.htmlFor = parsedValue.text;

  const savedInput = document.createElement("input");
  savedInput.addEventListener("change", (e) => {
    localStorage.setItem(
      parsedValue.text,
      JSON.stringify({ text: parsedValue.text, checked: e.target.checked })
    );
  });
  savedInput.type = "checkbox";
  savedInput.id = parsedValue.text;
  savedInput.checked = parsedValue.checked;

  const savedDiv = document.createElement("div");
  savedDiv.className = "taskDiv";
  savedDiv.append(savedInput);
  savedDiv.append(savedLabel);

  listItem.append(savedDiv);
}

function addTask() {
  let newTask = document.createElement("input");
  let newLabel = document.createElement("label");
  let newDiv = document.createElement("div");
  if (actualText != "") {
    newTask.type = "checkbox";
    newTask.id = actualText;
    newLabel.textContent = actualText;
    newLabel.htmlFor = actualText;
    newDiv.className = "taskDiv";
    newDiv.append(newTask);
    newDiv.append(newLabel);
    newTask.addEventListener("change", (e) =>
      localStorage.setItem(
        newLabel.textContent,
        JSON.stringify({
          text: newLabel.textContent,
          checked: e.target.checked,
        })
      )
    );

    listItem.append(newDiv);
    inputText.value = "";
    actualText = "";
  }
}

function cleanTasks() {
  const tasksInputs = document.querySelectorAll("#listItem input");
  const tasksLabels = document.querySelectorAll("#listItem label");
  const inputsArray = [...tasksInputs];
  const labelsArray = [...tasksLabels];
  inputsArray.map((e) => {
    if (e.checked) {
      labelsArray.map((i) => {
        if (i.textContent == e.id) {
          e.remove(), i.remove();
          localStorage.removeItem(i.textContent);
        }
      });
    }
  });
}

inputText.addEventListener("input", (e) => {
  actualText = e.target.value;
  localStorage.setItem("actualInput", e.target.value);
});

inputText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (actualText != "") {
      localStorage.setItem(
        actualText,
        JSON.stringify({ text: actualText, checked: false })
      );
    }
    addTask();
    localStorage.removeItem("actualInput");
  }
});

ej9button.addEventListener("click", () => {
  if (actualText != "") {
    localStorage.setItem(
      actualText,
      JSON.stringify({ text: actualText, checked: false })
    );
  }
  addTask();
  localStorage.removeItem("actualInput");
});

cleanerButton.addEventListener("click", () => cleanTasks());
