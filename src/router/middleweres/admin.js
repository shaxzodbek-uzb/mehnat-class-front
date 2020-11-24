import { getToken } from "@/utils/auth"; // get token from cookie

export default function admin({ to, from, next, store }) {
  const hasToken = getToken();
  if (to.name === "Login" && (hasToken === undefined || hasToken === "")) {
    return next();
  }
  if (hasToken) {
    store
      .dispatch("auth/getInfo")
      .then(res => {
        let role_name = "admin";
        try {
          role_name = res.result.user.roles[0].name;
        } catch (exp) {
          console.log(exp);
        }
        if (role_name === "admin") {
          return next();
        } else {
          return next({ path: "/403" });
        }
      })
      .catch(err => {
        console.log(err);
        store.dispatch("auth/resetToken");
        next({ name: "Login" });
      });
  } else {
    return next({ name: "Login" });
  }
}
