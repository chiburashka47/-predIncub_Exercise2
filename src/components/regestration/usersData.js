export let usersData = window.localStorage.getItem("data")
  ? JSON.parse(window.localStorage.getItem("data"))
  : [];

export const saveData = (mail, name, password) => {
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

export const langData = {
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
