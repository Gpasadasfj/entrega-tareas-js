const num1 = document.querySelector(".number1");
const num2 = document.querySelector(".number2");
const sum = document.querySelector(".sum");
const res = document.querySelector(".res");
const mul = document.querySelector(".mul");
const div = document.querySelector(".div");
const result = document.querySelector(".result");

console.log(num1, num2, sum, res, mul, div);

let n1 = 0;
let n2 = 0;

num1.addEventListener("input", (e) => (n1 = Number(e.target.value)));
num2.addEventListener("input", (e) => (n2 = Number(e.target.value)));

let resultado = 0;

function sumar() {
  if (n1 === 0 || n2 === 0) {
    result.textContent = "DEBE ASIGNAR UN VALOR A AMBOS NÚMEROS";
  } else {
    resultado = n1 + n2;
    result.textContent = resultado;
  }
}

function restar() {
  if (n1 === 0 || n2 === 0) {
    result.textContent = "DEBE ASIGNAR UN VALOR A AMBOS NÚMEROS";
  } else {
    resultado = n1 - n2;
    result.textContent = resultado;
  }
}

function multiplicar() {
  if (n1 === 0 || n2 === 0) {
    result.textContent = "DEBE ASIGNAR UN VALOR A AMBOS NÚMEROS";
  } else {
    resultado = n1 * n2;
    result.textContent = resultado;
  }
}

function dividir() {
  if (n2 === 0) {
    result.textContent = "DEBE ASIGNAR UN VALOR DIFERENTE A 0 AL NÚMERO 2";
  } else if (n1 == 0) {
    result.textContent = 0;
  } else {
    resultado = n1 / n2;
    result.textContent = resultado;
  }
}

function addEvList(element, evType, func) {
  element.addEventListener(evType, func);
}

addEvList(sum, "click", sumar);
addEvList(res, "click", restar);
addEvList(div, "click", dividir);
addEvList(mul, "click", multiplicar);
