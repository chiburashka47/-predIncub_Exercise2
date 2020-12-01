export const counterCurrentTasks = () => {
  const text = document.getElementById("curentTaskCounter"),
    count = document.getElementById("currentTasks").children.length;
  text.textContent = ` - ( ${count} )`;
};
export const counterCompletedTasks = () => {
  const text = document.getElementById("completeTaskCounter"),
    count = document.getElementById("completedTasks").children.length;
  text.textContent = ` - ( ${count} )`;
};
