import { getToken } from "@/utils/auth"; // get token from cookie

export default function chancellery({ to, next, store }) {
  const hasToken = getToken();
  if (to.name === "Login" && (hasToken === undefined || hasToken === "")) {
    return next();
  }
  if (hasToken) {
    debugger;
    store
      .dispatch("user/getInfo")
      .then(res => {
        debugger;
        let role_name = "user";
        try {
          role_name = res.result.user.roles[0].name;
        } catch (exp) {
          console.log(exp);
        }
        if (role_name === "user") {
          return next();
        } else {
          return next({ path: "/403" });
        }
      })
      .catch(err => {
        debugger;
        console.log(err);
        store.dispatch("user/resetToken");
        next({ name: "Login" });
      });
  } else {
    return next({ name: "Login" });
  }
}
