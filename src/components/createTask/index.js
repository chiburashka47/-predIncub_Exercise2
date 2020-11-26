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
