export default [
  {
    _name: "CSidebarNav",
    _children: [
      {
        _name: "CSidebarNavItem",
        name: "Dashboard",
        to: "/dashboard",
        icon: "cil-speedometer",
        badge: {
          color: "primary",
          text: "NEW"
        }
      },
      {
        _name: "CSidebarNavItem",
        name: "Users",
        to: "/users",
        icon: "cil-user"
      },
      {
        _name: "CSidebarNavItem",
        name: "Articles",
        to: "/articles",
        icon: "cil-text"
      },
      {
        _name: "CSidebarNavItem",
        name: "Comments",
        to: "/comments",
        icon: "cil-comment-square"
      }
    ]
  }
];
