const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('[id="value"]');

let count = 0;
let step = 1;

const render = () => {
  value.textContent = count;
};

const handledecrement = () => {
  count -= step;
  render();
};

const handleincrement = () => {
  count += step;
  render();
};
render();
decrementBtn.addEventListener("click", handledecrement);
incrementBtn.addEventListener("click", handleincrement);
