const refs = {
  inputText: document.querySelector('[id = "name-input"]'),
  outputText: document.querySelector('[id = "name-output"]'),
};

function handleInput(event) {
  refs.outputText.textContent = event.currentTarget.value || "Anonymous";
}

refs.inputText.addEventListener("input", handleInput);
