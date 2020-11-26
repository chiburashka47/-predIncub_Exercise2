/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./style/index.scss":
/*!**************************!*\
  !*** ./style/index.scss ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/createTask/index.js":
/*!********************************************!*\
  !*** ./src/components/createTask/index.js ***!
  \********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

const titleInput = document.getElementById("inputTitle"),
  textInput = document.getElementById("inputText"),
  lowInput = document.getElementById("Low"),
  mediumInput = document.getElementById("Medium"),
  createTaskBtn = document.getElementById("createTask"),
  highInput = document.getElementById("High"),
  currentTasks = document.getElementById("currentTasks"),
  completedTasks = document.getElementById("completedTasks"),
  form = document.getElementById("form"),
  colorInput = document.querySelector(".task__color");

form.addEventListener("submit", (event) => event.preventDefault());

const createTask = (title, text, prior, color) => {
  currentTasks.insertAdjacentHTML(
    "beforeend",
    `
        <li style="background-color : ${color}" class="parent list-group-item d-flex w-100 mb-2">
        <div class="w-100 mr-2">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">${title}</h5>
            <div>
              <small class="mr-2">${prior} priority</small>
              <small>11:00 01.01.2000</small>
            </div>
          </div>
          <p class="mb-1 w-100">
           ${text}
          </p>
        </div>
        <div class="dropdown m-2 dropleft">
          <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
          </button>
          <div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1" x-placement="left-start" style="
              position: absolute;
              will-change: transform;
              top: 0px;
              left: 0px;
              transform: translate3d(-2px, 0px, 0px);
            ">
            <button id="completeBtn" type="button" class="btn btn-success w-100">Завершить</button>
            <button data-target="#exampleModal" data-toggle="modal" id="editBtn" type="button" class="btn btn-info w-100 my-2">Изменить</button>
            <button id="deleteBtn" type="button" class="btn btn-danger w-100">Удалить</button>
          </div>
        </div>
      </li>
          `
  );
};

const clearForm = () => {
  titleInput.value = "";
  textInput.value = "";
  lowInput.checked = false;
  mediumInput.checked = false;
  highInput.checked = false;
};

createTaskBtn.addEventListener("click", () => {
  let checked = lowInput.checked
    ? lowInput.value
    : mediumInput.checked
    ? mediumInput.value
    : highInput.checked
    ? highInput.value
    : false;
  if (titleInput.value != "" && textInput.value != "" && checked) {
    createTask(titleInput.value, textInput.value, checked, colorInput.value);
    createTaskBtn.setAttribute("data-dismiss", "modal");
    clearForm();
  }
  const editBtn = document.getElementById("editBtn"),
    completeBtn = document.getElementById("completeBtn"),
    deleteBtn = document.getElementById("deleteBtn");

  editBtn.addEventListener("click", (elem) => {
    console.log(elem.target.closest(".parent"));
  });

  setTimeout(() => {
    createTaskBtn.setAttribute("data-dismiss", "");
  }, 1000);
});


/***/ }),

/***/ "./src/components/regestration/index.js":
/*!**********************************************!*\
  !*** ./src/components/regestration/index.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

let signInBtn = document.getElementById("register");

signInBtn.addEventListener("click", () => {
  window.location = "/registration";
});

if (window.sessionStorage.getItem("logIn")) {
  let greetingElem = document.querySelector(".greeting"),
    mainPage = document.querySelector(".col-10"),
    navBarElem = document.querySelector(".navbar__container"),
    regBtn = document.getElementById("register"),
    userName = document.querySelector(".nameShow");

  greetingElem.classList.add("hide");
  mainPage.classList.remove("hide");
  regBtn.classList.add("hide");
  navBarElem.classList.remove("hide");
  userName.textContent = window.sessionStorage.getItem("user name");
}


/***/ }),

/***/ "./src/components/regestration/usersData.js":
/*!**************************************************!*\
  !*** ./src/components/regestration/usersData.js ***!
  \**************************************************/
/*! namespace exports */
/*! export langData [provided] [no usage info] [missing usage info prevents renaming] */
/*! export saveData [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveData": () => /* binding */ saveData,
/* harmony export */   "langData": () => /* binding */ langData
/* harmony export */ });
let usersData = [];

const saveData = (mail, name, password) => {
  usersData.push({ mail: mail, name: name, password: password });

  window.localStorage.setItem("data", JSON.stringify(usersData));
};

const langData = {
  ru: {
    logo: "МойТуДуЛист",
    addTask: "Создать задачу",
    theme: "Тема",
    white: "Белая",
    dark: "Темная",
    lang: "Язык",
    en: "Англ",
    ru: "Рус",
    signOut: "Выйти",
    signIn: "Авторизоваться",
    registration: "Зарегестрироваться",
    toDo: "Активные",
    complited: "Завершенные",
    back: "Назад",
    greetingTitle: "Привет",
    close: "Закрыть",
    complete: "Завершить",
    edit: "Изменить",
    delete: "Удалить",
    color: "Цвет",
    greetingText:
      "Для использования данного приложения, необходимо авторизоваться.",
  },
  en: {
    logo: "MyToDoList",
    addTask: "Add task",
    theme: "Theme",
    white: "White",
    dark: "Dark",
    lang: "Lang",
    en: "En",
    ru: "Ru",
    signOut: "Sign out",
    signIn: "Sign in",
    registration: "Registration",
    toDo: "Todo",
    complited: "Complited",
    back: "Back",
    greetingTitle: "Hello",
    close: "Close",
    complete: "Complete",
    edit: "Edit",
    delete: "Delete",
    color: "Color",
    greetingText: "To use this application, you must register!",
  },
};


/***/ }),

/***/ "./src/components/setting/index.js":
/*!*****************************************!*\
  !*** ./src/components/setting/index.js ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const { changeLang } = __webpack_require__(/*! ../.. */ "./src/index.js");

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

if (window.sessionStorage.getItem("theme") == "white") {
  changeElem(whiteBtn, blackBtn);
  changePageColor("white");
} else if (window.sessionStorage.getItem("theme") == "black") {
  changeElem(blackBtn, whiteBtn);
  changePageColor("#cacaca");
}

if (window.sessionStorage.getItem("lang") == "en") {
  changeElem(enBtn, ruBtn);
} else if (window.sessionStorage.getItem("lang") == "ru") {
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


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! export changeLang [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeLang": () => /* binding */ changeLang
/* harmony export */ });
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/index.scss */ "./style/index.scss");
/* harmony import */ var _components_regestration_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/regestration/index */ "./src/components/regestration/index.js");
/* harmony import */ var _components_regestration_index__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_regestration_index__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/regestration/usersData */ "./src/components/regestration/usersData.js");
/* harmony import */ var _components_setting_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/setting/index */ "./src/components/setting/index.js");
/* harmony import */ var _components_setting_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_setting_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_createTask_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/createTask/index */ "./src/components/createTask/index.js");
/* harmony import */ var _components_createTask_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_createTask_index__WEBPACK_IMPORTED_MODULE_4__);






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

function changeLang(lang) {
  signOutBtn.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].signOut;
  logo[0].textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].logo;
  greetingTitle.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].greetingTitle;
  greetingText.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].greetingText;
  theme.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].theme;
  white.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].white;
  dark.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].dark;
  langElem.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].lang;
  en.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].en;
  ru.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].ru;
  toDo.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].toDo;
  complited.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].complited;
  signInBtn.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].signIn;
  closeBtn.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].close;
  closeText.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].close;
  completeBtn ? (completeBtn.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].complete) : "";
  editBtn ? (editBtn.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].edit) : "";
  deleteBtn ? (deleteBtn.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].delete) : "";
  taskColor.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].color;
  addTask.forEach((elem) => {
    elem.textContent = _components_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.langData[lang].addTask;
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=bundle.js.map