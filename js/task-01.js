const liItemCount = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItemCount.length}`);
const categoryName = liItemCount.forEach((category) => {
  console.log("Category:", category.firstElementChild.textContent);
  console.log("Elements:", category.querySelectorAll("li").length);
});
