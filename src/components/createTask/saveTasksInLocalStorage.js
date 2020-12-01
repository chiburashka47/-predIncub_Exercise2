export const saveTasksInLocalStorage = () => {
  const tasks = [];
  let arr = currentTasks.querySelectorAll("li");

  [...arr].map((li) =>
    tasks.push({
      counter: li.dataset.id,
      backgroundColor: li.style.backgroundColor,
      title: li.querySelector(".task__title").textContent,
      text: li.querySelector(".task__text").textContent,
      priority: li.querySelector(".task__prior").textContent,
      date: li.querySelector(".task__date").textContent,
    })
  );

  window.localStorage.setItem(`tasksData`, JSON.stringify(tasks));
};
