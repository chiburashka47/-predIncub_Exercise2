import { saveData } from "./usersData.js";

let backBtn = document.getElementById("back"),
  name = document.getElementById("name"),
  email = document.getElementById("email"),
  signEmail = document.getElementById("signEmail"),
  password = document.getElementById("password"),
  singPassword = document.getElementById("signPassword"),
  repPassword = document.getElementById("repPasword"),
  signContainer = document.getElementById("signContainer"),
  goRegBtn = document.getElementById("goReg"),
  endRegBtn = document.getElementById("endReg"),
  signBtn = document.getElementById("signIn"),
  regContainer = document.getElementById("regContainer"),
  errorMsg = document.querySelectorAll(".reg__container__error");

const userData = JSON.parse(window.localStorage.getItem("data"))[0];

backBtn.addEventListener("click", () => {
  window.location = "/";
});

const valueCheck = (elem) => {
  if (elem.value == false) {
    return true;
  }
};

const showError = (text, i) => {
  errorMsg[i].textContent = text;
  errorMsg[i].classList.remove("hide");
};

export const isCorrectEmail = (email) => {
  const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(email);
};

endRegBtn.addEventListener("click", () => {
  if (valueCheck(name)) {
    showError("Please enter the name!", 1);
  } else if (valueCheck(email)) {
    showError("Please enter the Email!", 1);
  } else if (!isCorrectEmail(email.value)) {
    showError("Incorrect email!", 1);
  } else if (valueCheck(password)) {
    showError("Please enter the pasword!", 1);
  } else if (password.value != repPassword.value) {
    showError("Passwords do not match!", 1);
  } else {
    saveData(email.value, name.value, password.value);

    window.sessionStorage.setItem("user name", name.value);
    window.sessionStorage.setItem("logIn", true);
    window.location = "/";
  }
});

goRegBtn.addEventListener("click", () => {
  regContainer.classList.toggle("hide");
  signContainer.classList.toggle("hide");
});

signBtn.addEventListener("click", () => {
  console.log(userData);
  if (valueCheck(signEmail)) {
    showError("Please enter the Email!", 0);
  } else if (!isCorrectEmail(signEmail.value)) {
    showError("Incorrect email!", 0);
  } else if (valueCheck(singPassword)) {
    showError("Please enter the pasword!", 0);
  } else if (
    userData.mail != signEmail.value ||
    userData.password != singPassword.value
  ) {
    showError("Email or password not correct!", 0);
  } else {
    window.sessionStorage.setItem("user name", userData.name);
    window.sessionStorage.setItem("logIn", true);
    window.location = "/";
  }
});
