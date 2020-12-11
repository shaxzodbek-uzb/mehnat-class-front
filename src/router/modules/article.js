// import user from "../middleweres/user";
const articleRouter = {
  path: "articles/",
  component: () => import("@/App"),
  //   meta: { middleware: [user] },
  children: [
    {
      path: "/",
      name: "ArticleIndex",
      component: () => import("@/views/articles/index")
    },
    {
      path: "edit/:id(\\d+)",
      name: "ArticleEdit",
      component: () => import("@/views/articles/edit")
    },
    {
      path: "show/:id(\\d+)",
      name: "ArticleShow",
      component: () => import("@/views/articles/show")
    },
    {
      path: "create",
      name: "ArticleCreate",
      component: () => import("@/views/articles/create")
    },
    {
      path: "delete/:id(\\d+)",
      name: "ArticleDelete"
    }
  ]
};
export default articleRouter;
