const { clearForm } = require(".");

const btnClose = document.getElementById("closeBtn"),
  createTaskBtn = document.getElementById("createTask"),
  exampleModalLabel = document.getElementById("exampleModalLabel");

(function resetData() {
  btnClose.addEventListener("click", () => {
    createTaskBtn.textContent = "Add task";
    exampleModalLabel.textContent = "Add task";
    clearForm();
  });

  document.body.addEventListener("click", (event) => {
    if (event.target.id === "exampleModal") {
      createTaskBtn.textContent = "Add task";
      exampleModalLabel.textContent = "Add task";
      clearForm();
    }
  });

  document.querySelector(".close").addEventListener("click", () => {
    createTaskBtn.textContent = "Add task";
    exampleModalLabel.textContent = "Add task";
    clearForm();
  });
})();
