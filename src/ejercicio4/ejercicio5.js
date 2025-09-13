const ej4Input = document.querySelector(".ej4Input");
const itemList = document.querySelector(".ej4ItemList");
const products = document.querySelectorAll(".ej4ItemList>li");
const productsArray = [...products];
console.log(typeof productsArray);

ej4Input.addEventListener("input", (e) => {
  let productName = e.target.value;
  productsArray.map((product) => {
    product.textContent.includes(capitalizeFirstLetter(productName))
      ? (product.style.display = "list-item")
      : (product.style.display = "none");
  });
});

function capitalizeFirstLetter(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstLetter("hola"));
console.log(capitalizeFirstLetter("mundo"));
