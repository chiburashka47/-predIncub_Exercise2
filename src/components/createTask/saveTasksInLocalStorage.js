import { addListsnersOnTaskBtn, createTask, hideTaskCompleteBtn } from ".";
import { dragAndDrop } from "../dragAndDrop/dragAndDrop";
import { usersData } from "../regestration/usersData";
import { counterCompletedTasks, counterCurrentTasks } from "./counterTask";

const findCollection = (email) => {
  let index;

  usersData.map((item, i) => {
    if (typeof item[email] !== "undefined") {
      index = i;
    }
  });
  return usersData[index][email];
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
    createTask(
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

export const saveTasksInLocalStorage = () => {
  let data = findCollection(window.sessionStorage.getItem("loginUser"));

  data.tasks = { current: [], completed: [] };
  pushData(currentTasks.querySelectorAll("li"), data.tasks.current);
  pushData(completedTasks.querySelectorAll("li"), data.tasks.completed);
  window.localStorage.setItem("data", JSON.stringify(usersData));
};

export const getTasksFromLocalStorage = () => {
  let data = findCollection(window.sessionStorage.getItem("loginUser")),
    currentTaskkList = data.tasks.current,
    completedTasksList = data.tasks.completed;
  drowTasks(currentTaskkList, currentTasks);
  drowTasks(completedTasksList, completedTasks);
  addListsnersOnTaskBtn();
  counterCurrentTasks();
  counterCompletedTasks();
  hideTaskCompleteBtn();
  dragAndDrop();
};
