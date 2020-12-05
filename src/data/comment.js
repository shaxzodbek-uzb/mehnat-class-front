export const comments = {
  fields: [
    { label: "id", key: "id" },
    { label: "Commentaries", key: "text", _style: "min-width:80px" },
    { label: "User", key: "user", _style: "min-width:80px" },
    { label: "Article ID", key: "article_id", _style: "min-width:50px;" },
    {
      label: "Article Alias",
      key: "article",
      _style: "min-width:100px; text-align:center; opacity: 0.6"
    },
    {
      key: "actions",
      label: "",
      _style: "width:1%",
      sorter: false,
      filter: false
    }
  ]
};
