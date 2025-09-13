const textArea = document.querySelector(".ej8TextArea");
const showWords = document.querySelector(".nWords");
const showLetters = document.querySelector(".nLetters");

let actualText = "";

textArea.addEventListener("input", (e) => {
  actualText = e.target.value;
  countLetters();
});

function countLetters() {
  let cleanText = actualText.trim();
  let textArray = cleanText.split(/\s+/);
  let totalLetters = textArray.reduce((acum, e) => acum + e.length, 0);
  let nWords = textArray.length;
  if (cleanText === "") {
    nWords = 0;
    totalLetters = 0;
  }

  showLetters.textContent = totalLetters;
  showWords.textContent = nWords;
}
