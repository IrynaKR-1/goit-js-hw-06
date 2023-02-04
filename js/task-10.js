function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputNumber = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");

const createBoxes = function (amount) {
  const markUp = [];
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const div = `<div class = 'colored-box'
    style = 'background-color: ${getRandomHexColor()};
    width: ${size}px;
    height: ${size}px;'></div>`;
    markUp.push(div);
    size += 10;
  }
  return markUp.join("");
};
const updatePage = function (markup) {
  boxes.innerHTML = markup;
};
btnCreate.addEventListener("click", () => {
  if (!inputNumber.value) {
    return;
  }
  const markup = createBoxes(inputNumber.value);
  updatePage(markup);
});

btnDestroy.addEventListener("click", () => {
  updatePage("");
});
