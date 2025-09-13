const input = document.querySelector(".ej7input");
const button = document.querySelector(".ej7button");
const passw = document.querySelector(".passw");

const letras = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+-=[]{}|;:',.<>/?";
const todos = letras + letras.toUpperCase() + numeros + simbolos;

let nChar;

console.log(input, button, passw);

input.addEventListener("input", (e) => (nChar = Number(e.target.value)));

function passwGenerator() {
  if (nChar < 4 || isNaN(nChar)) {
    alert("La contraseña debe tener al menos 4 caracteres")
    return "";
  }

    let newPassw = "";
    for (let i = 0; i < nChar; i++) {
      const randomNumber = Math.floor(Math.random() * todos.length);
      newPassw += todos[randomNumber];
    }
    return newPassw;
  }

button.addEventListener("click", () => {
  passw.textContent = passwGenerator();
});
