export const users = {
  fields: [
    { key: "username", _style: "min-width:200px" },
    { label: "Age", key: "age" },
    { label: "Articles", key: "articles", _style: "min-width:100px;" },
    {
      key: "show_details",
      label: "",
      _style: "width:1%",
      sorter: false,
      filter: false
    }
  ]
};
