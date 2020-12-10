export const users = {
  fields: [
    { key: "fullname", _style: "min-width:100px" },
    { label: "Username", key: "username" },
    { label: "Age", key: "birth_date", _style: "min-width:50px;" },
    { label: "Articles", key: "article", _style: "min-width:100px;" },
    {
      key: "actions",
      label: "",
      _style: "width:1%",
      sorter: false,
      filter: false
    }
  ]
};
export const genders = [
  { value: 1, label: "Мужчина" },
  { value: 2, label: "Женщина" }
];
export const userFields = [
  {
    key: "fullname",
    type: "text",
    label: "Ф.И.О.",
    placeholder: "Введите полное имя",
    value: ""
  },
  {
    key: "password",
    type: "password",
    label: "Пароль",
    placeholder: "Введите новый пароль",
    value: ""
  },
  {
    key: "birth_date",
    type: "date",
    label: "Дата рождения",
    placeholder: "Введите дату рождения",
    value: ""
  },
  {
    key: "phone",
    type: "text",
    label: "Телефон",
    placeholder: "Введите номер телефона",
    value: ""
  },
  {
    key: "gender",
    type: "radio",
    label: "Пол",
    value: "",
    options: genders
  }
];
export const articleFields = [
  {
    key: "user_id",
    type: "text",
    label: "Пользователь",
    placeholder: "Пользователь idsini kiritirng",
    value: ""
  },
  {
    key: "alias",
    type: "text",
    label: "Maqola",
    placeholder: "Maqola annotatsiyasini kiriting",
    value: ""
  },

  {
    key: "text",
    type: "textArea",
    label: "Firk",
    placeholder: "Fikr mazmuni",
    value: ""
  }
];
