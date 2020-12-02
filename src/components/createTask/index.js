import { dragAndDrop } from "../dragAndDrop/dragAndDrop";
import { counterCompletedTasks, counterCurrentTasks } from "./counterTask";
import { saveTasksInLocalStorage } from "./saveTasksInLocalStorage";

const { langData } = require("../regestration/usersData");
const { getDate } = require("./getDate");

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
  saveTasksInLocalStorage();
};

const completeTask = (elem) => {
  completedTasks.insertAdjacentElement("beforeend", elem.closest(".parent"));
  saveTasksInLocalStorage();
};

const editTask = (elem) => {
  const container = elem.closest(".parent"),
    priority = container
      .querySelector(".task__prior")
      .textContent.replace(/ .*/, "");
  titleInput.value = container.querySelector(".task__title").textContent;
  textInput.value = container.querySelector(".task__text").textContent;

  if (priority == lowInput.value) {
    lowInput.checked = true;
  } else if (priority == mediumInput.value) {
    mediumInput.checked = true;
  } else if (priority == highInput.value) {
    highInput.checked = true;
  }
  createTaskBtn.textContent = langData[getCurrentLang].edit;
  exampleModalLabel.textContent = langData[getCurrentLang].edit;

  createTaskBtn.addEventListener("click", function () {
    container.remove();
  });
};

export const hideTaskCompleteBtn = () => {
  completedTasks
    .querySelectorAll("#editBtn, #completeBtn")
    .forEach((btn) => btn.classList.add("hide"));
};
export const showTaskCompleteBtn = () => {
  currentTasks
    .querySelectorAll("#editBtn, #completeBtn")
    .forEach((btn) => btn.classList.remove("hide"));
};

export const createTask = (
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

export function clearForm() {
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
    counterCurrentTasks();
    saveTasksInLocalStorage();
  }, 100);

  addListsnersOnTaskBtn();
  dragAndDrop();
});

sortBtn.addEventListener("click", () => {
  let arrUL = [...currentTasks.querySelectorAll("li")];
  let sortArrUL = arrUL.sort().reverse();
  sortArrUL.forEach((elem) =>
    currentTasks.insertAdjacentElement("beforeend", elem)
  );
});

export const addListsnersOnTaskBtn = () => {
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
    counterCurrentTasks();
    counterCompletedTasks();
  });

  completedTasks.addEventListener("click", (elem) => {
    if (elem.target.id === "deleteBtn") deleteTask(elem.target);
    counterCompletedTasks();
  });
};
