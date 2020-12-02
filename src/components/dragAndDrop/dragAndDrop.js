import {
  counterCompletedTasks,
  counterCurrentTasks,
} from "../createTask/counterTask";
import { saveTasksInLocalStorage } from "../createTask/saveTasksInLocalStorage";
import {
  addListsnersOnTaskBtn,
  hideTaskCompleteBtn,
  showTaskCompleteBtn,
} from "../createTask/index";

export const dragAndDrop = () => {
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
        : false || event.target.closest(".list-group") == currentTasks
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
        saveTasksInLocalStorage();
      }, 100);
      hideTaskCompleteBtn();
      showTaskCompleteBtn();
      counterCurrentTasks();
      counterCompletedTasks();
      addListsnersOnTaskBtn();
    }
  }
};
