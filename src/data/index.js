export const users = {
  fields: [
    { key: "username", _style: "min-width:200px" },
    { label: "Registered", key: "created_at" },
    { key: "status", _style: "min-width:100px;" },
    {
      key: "show_details",
      label: "",
      _style: "width:1%",
      sorter: false,
      filter: false
    }
  ]
};
