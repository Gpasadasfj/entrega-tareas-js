const ejercicio1 = document.querySelector("#ejercicio1");
console.log(ejercicio1);

const button = document.querySelector("#ej1button");

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

function changeBgColor() {
  ejercicio1.style.backgroundColor = randomColor();
}

button.addEventListener("click", () => changeBgColor());
