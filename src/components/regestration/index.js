const {
  getTasksFromLocalStorage,
} = require("../createTask/saveTasksInLocalStorage");

let signInBtn = document.getElementById("register");

signInBtn.addEventListener("click", () => {
  window.location = "/registration";
});

if (window.sessionStorage.getItem("logIn")) {
  let greetingElem = document.querySelector(".greeting"),
    mainPage = document.querySelector(".col-10"),
    navBarElem = document.querySelector(".navbar__container"),
    regBtn = document.getElementById("register"),
    userName = document.querySelector(".name__show");
  getTasksFromLocalStorage();

  greetingElem.classList.add("hide");
  mainPage.classList.remove("hide");
  regBtn.classList.add("hide");
  navBarElem.classList.remove("hide");
  userName.textContent = window.sessionStorage.getItem("user name");
}
