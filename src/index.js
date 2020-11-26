import "../style/index.scss";
import "./components/regestration/index";
import { langData } from "./components/regestration/usersData";
import "./components/setting/index";
import "./components/createTask/index";

let signOutBtn = document.getElementById("signOut"),
  logo = document.getElementsByTagName("h1"),
  greetingTitle = document.querySelector(".greeting__title"),
  greetingText = document.querySelector(".greeting__text"),
  closeText = document.querySelector(".close"),
  taskColor = document.querySelector(".task__color__text"),
  closeBtn = document.getElementById("closeBtn"),
  addTask = document.querySelectorAll(".addTask__btn"),
  theme = document.getElementById("theme"),
  completeBtn = document.getElementById("completeBtn"),
  editBtn = document.getElementById("editBtn"),
  deleteBtn = document.getElementById("deleteBtn"),
  white = document.getElementById("themeWhite"),
  dark = document.getElementById("themeBlack"),
  langElem = document.getElementById("lang"),
  en = document.getElementById("langEn"),
  ru = document.getElementById("langRu"),
  toDo = document.getElementById("toDo"),
  complited = document.getElementById("complited"),
  signInBtn = document.getElementById("register");

signOutBtn.addEventListener("click", () => {
  window.sessionStorage.clear();
  window.location = "/";
});

export function changeLang(lang) {
  signOutBtn.textContent = langData[lang].signOut;
  logo[0].textContent = langData[lang].logo;
  greetingTitle.textContent = langData[lang].greetingTitle;
  greetingText.textContent = langData[lang].greetingText;
  theme.textContent = langData[lang].theme;
  white.textContent = langData[lang].white;
  dark.textContent = langData[lang].dark;
  langElem.textContent = langData[lang].lang;
  en.textContent = langData[lang].en;
  ru.textContent = langData[lang].ru;
  toDo.textContent = langData[lang].toDo;
  complited.textContent = langData[lang].complited;
  signInBtn.textContent = langData[lang].signIn;
  closeBtn.textContent = langData[lang].close;
  closeText.textContent = langData[lang].close;
  completeBtn ? (completeBtn.textContent = langData[lang].complete) : "";
  editBtn ? (editBtn.textContent = langData[lang].edit) : "";
  deleteBtn ? (deleteBtn.textContent = langData[lang].delete) : "";
  taskColor.textContent = langData[lang].color;
  addTask.forEach((elem) => {
    elem.textContent = langData[lang].addTask;
  });
}

window.addEventListener("load", () => {
  window.sessionStorage.getItem("theme")
    ? ""
    : window.sessionStorage.setItem("theme", "white");

  window.sessionStorage.getItem("lang")
    ? ""
    : window.sessionStorage.setItem("lang", "en");

  if (window.sessionStorage.getItem("lang") == "en") {
    changeLang("en");
  }
  if (window.sessionStorage.getItem("lang") == "ru") {
    changeLang("ru");
  }
});
