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
