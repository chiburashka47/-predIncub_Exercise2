import {
  counterCompletedTasks,
  counterCurrentTasks,
} from "../createTask/counterTask";
import { saveTasksInLocalStorage } from "../createTask/saveTasksInLocalStorage";
import { addListsnersOnTaskBtn } from "../createTask/index";

export const dragAndDrop = () => {
  const currentTasks = document.getElementById("currentTasks"),
    completedTasks = document.getElementById("completedTasks"),
    list = currentTasks.querySelectorAll("li");

  completedTasks.ondragover = allowDrop;
  currentTasks.ondragover = allowDrop;

  function allowDrop(event) {
    event.preventDefault();
  }

  function drag(event) {
    event.dataTransfer.setData("id", event.target.dataset.id);
  }

  [...list].map((item) => {
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
      [...list].map((elem) => {
        elem.dataset.id == id ? (currentElem = elem) : "";
      });
      item.append(currentElem);

      setTimeout(() => {
        saveTasksInLocalStorage();
      }, 100);
      counterCurrentTasks();
      counterCompletedTasks();
      addListsnersOnTaskBtn();
    }
  }
};
