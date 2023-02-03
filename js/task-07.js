const changeFont = document.querySelector("#font-size-control");
const fontText = document.querySelector("#text");
changeFont.oninput = function () {
  console.log(this.value);
  fontText.style.fontSize = changeFont.value + "px";
};
