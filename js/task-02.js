const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let ingredientName = document.querySelector("#ingredients");
const createLi = (ingredientsList) => {
  return ingredientsList.map((ingredient) => {
    const ingredientsItem = document.createElement("li");
    ingredientsItem.classList.add("item");
    ingredientsItem.textContent = ingredient;
    return ingredientsItem;
  });
};
const elements = createLi(ingredients);
ingredientName.append(...elements);
