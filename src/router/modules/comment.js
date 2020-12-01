// import user from "../middleweres/user";
const commentRouter = {
  path: "comments/",
  component: () => import("@/App"),
  // meta: { middleware: [user] },
  children: [
    {
      path: "/",
      name: "CommentIndex",
      component: () => import("@/views/comments/index")
    },
    {
      path: "edit/:id(\\d+)",
      name: "CommentEdit",
      component: () => import("@/views/comments/edit")
    },
    {
      path: "show/:id(\\d+)",
      name: "CommentShow",
      component: () => import("@/views/comments/show")
    },
    {
      path: "delete/:id(\\d+)",
      name: "CommentDelete"
    }
  ]
};
export default commentRouter;
