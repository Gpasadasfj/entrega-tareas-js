const clicksCounter = document.querySelector("#clicksCounter");
const ej2button = document.querySelector("#ej2button");

function increaseCounter() {
  let counter = Number(clicksCounter.textContent);
  counter++;
  return (clicksCounter.textContent = counter);
}

ej2button.addEventListener("click", () => increaseCounter());
