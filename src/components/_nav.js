export default [
  {
    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavItem",
        name: "Пользователи",
        to: "/users",
        icon: "cil-user"
      },
      {
        _name: "CSidebarNavItem",
        name: "Статьи",
        to: "/articles",
        icon: "cil-text"
      },
      {
        _name: "CSidebarNavItem",
        name: "Комментарии",
        to: "/comments",
        icon: "cil-comment-square"
      }
    ]
  }
];
