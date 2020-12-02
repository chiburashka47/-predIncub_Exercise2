const { changeLang } = require("../..");

let whiteBtn = document.getElementById("themeWhite"),
  blackBtn = document.getElementById("themeBlack"),
  enBtn = document.getElementById("langEn"),
  ruBtn = document.getElementById("langRu"),
  mainPage = document.querySelector("body");

const changeElem = (activeElem, unactiveElem) => {
  activeElem.classList.add("activeBtn");
  unactiveElem.classList.remove("activeBtn");
};

const changePageColor = (color) => {
  mainPage.style.backgroundColor = color;
};

if (window.sessionStorage.getItem("theme") === "white") {
  changeElem(whiteBtn, blackBtn);
  changePageColor("white");
} else if (window.sessionStorage.getItem("theme") === "black") {
  changeElem(blackBtn, whiteBtn);
  changePageColor("#cacaca");
}

if (window.sessionStorage.getItem("lang") === "en") {
  changeElem(enBtn, ruBtn);
} else if (window.sessionStorage.getItem("lang") === "ru") {
  changeElem(ruBtn, enBtn);
}

whiteBtn.addEventListener("click", () => {
  window.sessionStorage.setItem("theme", "white");
  changeElem(whiteBtn, blackBtn);
  changePageColor("white");
});
blackBtn.addEventListener("click", () => {
  window.sessionStorage.setItem("theme", "black");
  changeElem(blackBtn, whiteBtn);
  changePageColor("#cacaca");
});

enBtn.addEventListener("click", () => {
  window.sessionStorage.setItem("lang", "en");
  changeElem(enBtn, ruBtn);
  changeLang("en");
});
ruBtn.addEventListener("click", () => {
  window.sessionStorage.setItem("lang", "ru");
  changeElem(ruBtn, enBtn);
  changeLang("ru");
});
