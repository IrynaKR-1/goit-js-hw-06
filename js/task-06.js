const input = document.getElementById("validation-input");
const inputLength = Number(input.dataset.length);
input.addEventListener("blur", (event) => {
  if (event.target.value.length === inputLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
