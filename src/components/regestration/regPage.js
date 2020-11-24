let backBtn = document.getElementById("back"),
  name = document.getElementById("name"),
  email = document.getElementById("email"),
  password = document.getElementById("pasword"),
  repPassword = document.getElementById("repPasword"),
  regBtn = document.querySelector(".reg__container__btn"),
  errorMsg = document.querySelector(".reg__container__error");

backBtn.addEventListener("click", () => {
  window.location = "/";
});

const valueCheck = (elem) => {
  if (elem.value == false) {
    return true;
  }
};

const showError = (text) => {
  errorMsg.textContent = text;
  errorMsg.classList.remove("hide");
};

export const isCorrectEmail = (email) => {
  const regExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(email);
};

regBtn.addEventListener("click", () => {
  if (valueCheck(name)) {
    showError("Please enter the name!");
  } else if (valueCheck(email)) {
    showError("Please enter the Email!");
  } else if (!isCorrectEmail(email.value)) {
    showError("Incorrect email!");
  } else if (valueCheck(password)) {
    showError("Please enter the pasword!");
  } else if (password.value != repPassword.value) {
    showError("Passwords do not match!");
  } else {
    window.sessionStorage.setItem("user name", name.value);
    window.sessionStorage.setItem("registration", true);
    window.location = "/";
  }
});
