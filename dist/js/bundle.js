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

/***/ "./src/components/createTask/counterTask.js":
/*!**************************************************!*\
  !*** ./src/components/createTask/counterTask.js ***!
  \**************************************************/
/*! namespace exports */
/*! export counterCompletedTasks [provided] [no usage info] [missing usage info prevents renaming] */
/*! export counterCurrentTasks [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "counterCurrentTasks": () => /* binding */ counterCurrentTasks,
/* harmony export */   "counterCompletedTasks": () => /* binding */ counterCompletedTasks
/* harmony export */ });
const counterCurrentTasks = () => {
  const text = document.getElementById("curentTaskCounter"),
    count = document.getElementById("currentTasks").children.length;
  text.textContent = ` - ( ${count} )`;
};
const counterCompletedTasks = () => {
  const text = document.getElementById("completeTaskCounter"),
    count = document.getElementById("completedTasks").children.length;
  text.textContent = ` - ( ${count} )`;
};


/***/ }),

/***/ "./src/components/createTask/getDate.js":
/*!**********************************************!*\
  !*** ./src/components/createTask/getDate.js ***!
  \**********************************************/
/*! namespace exports */
/*! export getDate [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDate": () => /* binding */ getDate
/* harmony export */ });
const getDate = () => {
  let today = new Date();
  let date = `${today.getDate()}.${today.getMonth()}.${today.getFullYear()}`;
  let time = `${today.getHours()}:${
    today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()
  }`;
  return `${time} ${date}`;
};


/***/ }),

/***/ "./src/components/createTask/index.js":
/*!********************************************!*\
  !*** ./src/components/createTask/index.js ***!
  \********************************************/
/*! namespace exports */
/*! export addListsnersOnTaskBtn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export clearForm [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createTask [provided] [no usage info] [missing usage info prevents renaming] */
/*! export hideTaskCompleteBtn [provided] [no usage info] [missing usage info prevents renaming] */
/*! export showTaskCompleteBtn [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hideTaskCompleteBtn": () => /* binding */ hideTaskCompleteBtn,
/* harmony export */   "showTaskCompleteBtn": () => /* binding */ showTaskCompleteBtn,
/* harmony export */   "createTask": () => /* binding */ createTask,
/* harmony export */   "clearForm": () => /* binding */ clearForm,
/* harmony export */   "addListsnersOnTaskBtn": () => /* binding */ addListsnersOnTaskBtn
/* harmony export */ });
/* harmony import */ var _dragAndDrop_dragAndDrop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dragAndDrop/dragAndDrop */ "./src/components/dragAndDrop/dragAndDrop.js");
/* harmony import */ var _counterTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counterTask */ "./src/components/createTask/counterTask.js");
/* harmony import */ var _saveTasksInLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveTasksInLocalStorage */ "./src/components/createTask/saveTasksInLocalStorage.js");




const { langData } = __webpack_require__(/*! ../regestration/usersData */ "./src/components/regestration/usersData.js");
const { getDate } = __webpack_require__(/*! ./getDate */ "./src/components/createTask/getDate.js");

const titleInput = document.getElementById("inputTitle"),
  textInput = document.getElementById("inputText"),
  lowInput = document.getElementById("Low"),
  mediumInput = document.getElementById("Medium"),
  createTaskBtn = document.getElementById("createTask"),
  highInput = document.getElementById("High"),
  currentTasks = document.getElementById("currentTasks"),
  completedTasks = document.getElementById("completedTasks"),
  form = document.getElementById("form"),
  sortBtn = document.getElementById("sortBtn"),
  exampleModalLabel = document.getElementById("exampleModalLabel");

let counter = 0;

const getCurrentLang = window.sessionStorage.getItem("lang");

form.addEventListener("submit", (event) => event.preventDefault());

const deleteTask = (elem) => {
  elem.closest(".parent").remove();
  (0,_saveTasksInLocalStorage__WEBPACK_IMPORTED_MODULE_2__.saveTasksInLocalStorage)();
};

const completeTask = (elem) => {
  completedTasks.insertAdjacentElement("beforeend", elem.closest(".parent"));
  (0,_saveTasksInLocalStorage__WEBPACK_IMPORTED_MODULE_2__.saveTasksInLocalStorage)();
};

const editTask = (elem) => {
  const container = elem.closest(".parent"),
    priority = container
      .querySelector(".task__prior")
      .textContent.replace(/ .*/, "");
  titleInput.value = container.querySelector(".task__title").textContent;
  textInput.value = container.querySelector(".task__text").textContent;

  if (priority === lowInput.value) {
    lowInput.checked = true;
  } else if (priority === mediumInput.value) {
    mediumInput.checked = true;
  } else if (priority === highInput.value) {
    highInput.checked = true;
  }
  createTaskBtn.textContent = langData[getCurrentLang].edit;
  exampleModalLabel.textContent = langData[getCurrentLang].edit;

  createTaskBtn.addEventListener("click", function () {
    container.remove();
  });
};

const hideTaskCompleteBtn = () => {
  completedTasks
    .querySelectorAll("#editBtn, #completeBtn")
    .forEach((btn) => btn.classList.add("hide"));
};
const showTaskCompleteBtn = () => {
  currentTasks
    .querySelectorAll("#editBtn, #completeBtn")
    .forEach((btn) => btn.classList.remove("hide"));
};

const createTask = (
  container,
  title,
  text,
  prior,
  color,
  index,
  date
) => {
  container.insertAdjacentHTML(
    "beforeend",
    `
        <li draggable="true" data-id=${
          text + title
        }  style="background-color : ${color}" class="parent list-group-item d-flex w-100 mb-2">
        <div class="w-100 mr-2">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1 task__title">${title}</h5>
            <div>
              <small class="mr-2 task__prior">${prior}</small>
              <small class="task__date">${date}</small>
            </div>
          </div>
          <p class="mb-1 w-100 task__text">${text}</p>
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
            <button id="completeBtn" type="button" class="btn btn-success w-100">${
              langData[getCurrentLang].complete
            }</button>
            <button data-target="#exampleModal" data-toggle="modal" id="editBtn" type="button" class="btn btn-info w-100 my-2">${
              langData[getCurrentLang].edit
            }</button>
            <button id="deleteBtn" type="button" class="btn btn-danger w-100">${
              langData[getCurrentLang].delete
            }</button>
          </div>
        </div>
      </li>
          `
  );
};

function clearForm() {
  titleInput.value = "";
  textInput.value = "";
  lowInput.checked = false;
  mediumInput.checked = false;
  highInput.checked = false;
  createTaskBtn.textContent = langData[getCurrentLang].addTask;
  exampleModalLabel.textContent = langData[getCurrentLang].addTask;
}

createTaskBtn.addEventListener("click", () => {
  let checked = lowInput.checked
    ? lowInput.value
    : mediumInput.checked
    ? mediumInput.value
    : highInput.checked
    ? highInput.value
    : false;
  let color = "#fbff65";
  if (checked === "Medium") color = "#36b6ff";
  else if (checked === "High") color = "#ff2050";
  checked = checked + " priority";
  if (titleInput.value != "" && textInput.value != "" && checked) {
    createTask(
      currentTasks,
      titleInput.value,
      textInput.value,
      checked,
      color,
      counter++,
      getDate()
    );
    createTaskBtn.setAttribute("data-dismiss", "modal");
    clearForm();
  }

  setTimeout(() => {
    createTaskBtn.setAttribute("data-dismiss", "");
    (0,_counterTask__WEBPACK_IMPORTED_MODULE_1__.counterCurrentTasks)();
    (0,_saveTasksInLocalStorage__WEBPACK_IMPORTED_MODULE_2__.saveTasksInLocalStorage)();
  }, 100);

  addListsnersOnTaskBtn();
  (0,_dragAndDrop_dragAndDrop__WEBPACK_IMPORTED_MODULE_0__.dragAndDrop)();
});

sortBtn.addEventListener("click", () => {
  let arrUL = [...currentTasks.querySelectorAll("li")];
  let sortArrUL = arrUL.sort().reverse();
  sortArrUL.forEach((elem) =>
    currentTasks.insertAdjacentElement("beforeend", elem)
  );
});

const addListsnersOnTaskBtn = () => {
  currentTasks.addEventListener("click", (elem) => {
    if (elem.target.id === "deleteBtn") {
      deleteTask(elem.target);
    }

    if (elem.target.id === "completeBtn") {
      completeTask(elem.target);
    }

    if (elem.target.id === "editBtn") {
      editTask(elem.target);
    }

    hideTaskCompleteBtn();
    (0,_counterTask__WEBPACK_IMPORTED_MODULE_1__.counterCurrentTasks)();
    (0,_counterTask__WEBPACK_IMPORTED_MODULE_1__.counterCompletedTasks)();
  });

  completedTasks.addEventListener("click", (elem) => {
    if (elem.target.id === "deleteBtn") deleteTask(elem.target);
    (0,_counterTask__WEBPACK_IMPORTED_MODULE_1__.counterCompletedTasks)();
  });
};


/***/ }),

/***/ "./src/components/createTask/refreshForm.js":
/*!**************************************************!*\
  !*** ./src/components/createTask/refreshForm.js ***!
  \**************************************************/
/*! namespace exports */
/*! export resetData [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resetData": () => /* binding */ resetData
/* harmony export */ });
const { clearForm } = __webpack_require__(/*! . */ "./src/components/createTask/index.js");
const { langData } = __webpack_require__(/*! ../regestration/usersData */ "./src/components/regestration/usersData.js");

const btnClose = document.getElementById("closeBtn"),
  createTaskBtn = document.getElementById("createTask"),
  exampleModalLabel = document.getElementById("exampleModalLabel");

const getCurrentLang = window.sessionStorage.getItem("lang");

const resetData = () => {
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


/***/ }),

/***/ "./src/components/createTask/saveTasksInLocalStorage.js":
/*!**************************************************************!*\
  !*** ./src/components/createTask/saveTasksInLocalStorage.js ***!
  \**************************************************************/
/*! namespace exports */
/*! export getTasksFromLocalStorage [provided] [no usage info] [missing usage info prevents renaming] */
/*! export saveTasksInLocalStorage [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveTasksInLocalStorage": () => /* binding */ saveTasksInLocalStorage,
/* harmony export */   "getTasksFromLocalStorage": () => /* binding */ getTasksFromLocalStorage
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/components/createTask/index.js");
/* harmony import */ var _dragAndDrop_dragAndDrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dragAndDrop/dragAndDrop */ "./src/components/dragAndDrop/dragAndDrop.js");
/* harmony import */ var _regestration_usersData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../regestration/usersData */ "./src/components/regestration/usersData.js");
/* harmony import */ var _counterTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counterTask */ "./src/components/createTask/counterTask.js");





const findCollection = (email) => {
  let index;

  _regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.usersData.map((item, i) => {
    if (typeof item[email] !== "undefined") {
      index = i;
    }
  });
  return _regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.usersData[index][email];
};

const pushData = (arr, path) => {
  [...arr].map((li) => {
    path.push({
      counter: li.dataset.id,
      title: li.querySelector(".task__title").textContent,
      text: li.querySelector(".task__text").textContent,
      priority: li.querySelector(".task__prior").textContent,
      date: li.querySelector(".task__date").textContent,
    });
  });
};

const drowTasks = (arr, container) => {
  arr.map((item) => {
    let color = "#fbff65";
    if (item.priority === "Medium priority") color = "#36b6ff";
    else if (item.priority === "High priority") color = "#ff2050";
    (0,___WEBPACK_IMPORTED_MODULE_0__.createTask)(
      container,
      item.title,
      item.text,
      item.priority,
      color,
      item.counter,
      item.date
    );
  });
};

const saveTasksInLocalStorage = () => {
  let data = findCollection(window.sessionStorage.getItem("loginUser"));

  data.tasks = { current: [], completed: [] };
  pushData(currentTasks.querySelectorAll("li"), data.tasks.current);
  pushData(completedTasks.querySelectorAll("li"), data.tasks.completed);
  window.localStorage.setItem("data", JSON.stringify(_regestration_usersData__WEBPACK_IMPORTED_MODULE_2__.usersData));
};

const getTasksFromLocalStorage = () => {
  let data = findCollection(window.sessionStorage.getItem("loginUser")),
    currentTaskkList = data.tasks.current,
    completedTasksList = data.tasks.completed;
  drowTasks(currentTaskkList, currentTasks);
  drowTasks(completedTasksList, completedTasks);
  (0,___WEBPACK_IMPORTED_MODULE_0__.addListsnersOnTaskBtn)();
  (0,_counterTask__WEBPACK_IMPORTED_MODULE_3__.counterCurrentTasks)();
  (0,_counterTask__WEBPACK_IMPORTED_MODULE_3__.counterCompletedTasks)();
  (0,___WEBPACK_IMPORTED_MODULE_0__.hideTaskCompleteBtn)();
  (0,_dragAndDrop_dragAndDrop__WEBPACK_IMPORTED_MODULE_1__.dragAndDrop)();
};


/***/ }),

/***/ "./src/components/dragAndDrop/dragAndDrop.js":
/*!***************************************************!*\
  !*** ./src/components/dragAndDrop/dragAndDrop.js ***!
  \***************************************************/
/*! namespace exports */
/*! export dragAndDrop [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dragAndDrop": () => /* binding */ dragAndDrop
/* harmony export */ });
/* harmony import */ var _createTask_counterTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createTask/counterTask */ "./src/components/createTask/counterTask.js");
/* harmony import */ var _createTask_saveTasksInLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createTask/saveTasksInLocalStorage */ "./src/components/createTask/saveTasksInLocalStorage.js");
/* harmony import */ var _createTask_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createTask/index */ "./src/components/createTask/index.js");




const dragAndDrop = () => {
  const currentTasks = document.getElementById("currentTasks"),
    completedTasks = document.getElementById("completedTasks"),
    list1 = currentTasks.querySelectorAll("li"),
    list2 = completedTasks.querySelectorAll("li");

  completedTasks.ondragover = allowDrop;
  currentTasks.ondragover = allowDrop;

  function allowDrop(event) {
    event.preventDefault();
  }

  function drag(event) {
    event.dataTransfer.setData("id", event.target.dataset.id);
  }

  [...list1].map((item) => {
    item.ondragstart = drag;
  });
  [...list2].map((item) => {
    item.ondragstart = drag;
  });

  completedTasks.ondrop = drop;
  currentTasks.ondrop = drop;

  function drop(event) {
    let item;
    if (
      event.target.closest(".list-group") == completedTasks
        ? (item = completedTasks)
        :  false || event.target.closest(".list-group") == currentTasks
        ? (item = currentTasks)
        : false
    ) {
      let id = event.dataTransfer.getData("id");
      let currentElem;
      [...list1].map((elem) => {
        elem.dataset.id == id ? (currentElem = elem) : "";
      });
      [...list2].map((elem) => {
        elem.dataset.id == id ? (currentElem = elem) : "";
      });
      item.append(currentElem);

      setTimeout(() => {
        (0,_createTask_saveTasksInLocalStorage__WEBPACK_IMPORTED_MODULE_1__.saveTasksInLocalStorage)();
      }, 100);
      (0,_createTask_index__WEBPACK_IMPORTED_MODULE_2__.hideTaskCompleteBtn)();
      (0,_createTask_index__WEBPACK_IMPORTED_MODULE_2__.showTaskCompleteBtn)();
      (0,_createTask_counterTask__WEBPACK_IMPORTED_MODULE_0__.counterCurrentTasks)();
      (0,_createTask_counterTask__WEBPACK_IMPORTED_MODULE_0__.counterCompletedTasks)();
      (0,_createTask_index__WEBPACK_IMPORTED_MODULE_2__.addListsnersOnTaskBtn)();
    }
  }
};


/***/ }),

/***/ "./src/components/regestration/index.js":
/*!**********************************************!*\
  !*** ./src/components/regestration/index.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const {
  getTasksFromLocalStorage,
} = __webpack_require__(/*! ../createTask/saveTasksInLocalStorage */ "./src/components/createTask/saveTasksInLocalStorage.js");

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


/***/ }),

/***/ "./src/components/regestration/usersData.js":
/*!**************************************************!*\
  !*** ./src/components/regestration/usersData.js ***!
  \**************************************************/
/*! namespace exports */
/*! export langData [provided] [no usage info] [missing usage info prevents renaming] */
/*! export saveData [provided] [no usage info] [missing usage info prevents renaming] */
/*! export usersData [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usersData": () => /* binding */ usersData,
/* harmony export */   "saveData": () => /* binding */ saveData,
/* harmony export */   "langData": () => /* binding */ langData
/* harmony export */ });
let usersData = window.localStorage.getItem("data")
  ? JSON.parse(window.localStorage.getItem("data"))
  : [];

const saveData = (mail, name, password) => {
  usersData.push({
    [mail]: {
      mail: mail,
      name: name,
      password: password,
      tasks: { current: [], completed: [] },
    },
  });

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
    complited: "Completed",
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
/* harmony import */ var _components_createTask_refreshForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/createTask/refreshForm */ "./src/components/createTask/refreshForm.js");
/* harmony import */ var _components_dragAndDrop_dragAndDrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dragAndDrop/dragAndDrop */ "./src/components/dragAndDrop/dragAndDrop.js");









let signOutBtn = document.getElementById("signOut"),
  logo = document.getElementsByTagName("h1"),
  greetingTitle = document.querySelector(".greeting__title"),
  greetingText = document.querySelector(".greeting__text"),
  closeText = document.querySelector(".close"),
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

  if (window.sessionStorage.getItem("lang") === "en") {
    changeLang("en");
  }
  if (window.sessionStorage.getItem("lang") === "ru") {
    changeLang("ru");
  }
  (0,_components_dragAndDrop_dragAndDrop__WEBPACK_IMPORTED_MODULE_6__.dragAndDrop)();
  (0,_components_createTask_refreshForm__WEBPACK_IMPORTED_MODULE_5__.resetData)();
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