export const getDate = () => {
  let today = new Date();
  let date = `${today.getDate()}.${today.getMonth()}.${today.getFullYear()}`;
  let time = `${today.getHours()}:${
    today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes()
  }`;
  return `${time} ${date}`;
};
