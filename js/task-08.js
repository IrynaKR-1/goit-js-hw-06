const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    if (value === "" || name === "") {
      alert("Всі поля повинні бути заповнені!");
    } else {
      console.log("onFormSubmit -> name", name);
      console.log("onFormSubmit -> value", value);
      form.reset();
    }
  });
}
