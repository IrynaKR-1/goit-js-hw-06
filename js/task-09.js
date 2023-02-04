function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnChangeColor = document.querySelector(".change-color");
const backgroundColor = document.querySelector(".color");
const body = document.querySelector("body");

function randomChangeColor() {
  body.style.backgroundColor = getRandomHexColor();
  backgroundColor.textContent = body.style.backgroundColor;
}
btnChangeColor.addEventListener("click", randomChangeColor);
