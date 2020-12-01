const { clearForm } = require(".");
const { langData } = require("../regestration/usersData");

const btnClose = document.getElementById("closeBtn"),
  createTaskBtn = document.getElementById("createTask"),
  exampleModalLabel = document.getElementById("exampleModalLabel");

const getCurrentLang = window.sessionStorage.getItem("lang");

export const resetData = () => {
  btnClose.addEventListener("click", () => {
    createTaskBtn.textContent = langData[getCurrentLang].addTask;
    exampleModalLabel.textContent = langData[getCurrentLang].addTask;
    clearForm();
  });

  document.body.addEventListener("click", (event) => {
    if (event.target.id === "exampleModal") {
      createTaskBtn.textContent = langData[getCurrentLang].addTask;
      exampleModalLabel.textContent = langData[getCurrentLang].addTask;
      clearForm();
    }
  });

  document.querySelector(".close").addEventListener("click", () => {
    createTaskBtn.textContent = langData[getCurrentLang].addTask;
    exampleModalLabel.textContent = langData[getCurrentLang].addTask;
    clearForm();
  });
};
