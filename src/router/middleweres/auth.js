import { getToken } from "@/utils/auth"; // get token from cookie

export default function auth({ to, next, store }) {
  const hasToken = getToken();
  if (to.name === "Login" && (hasToken === undefined || hasToken === "")) {
    return next();
  }
  if (hasToken) {
    store
      .dispatch("user/getInfo")
      .then(res => {
        let role_name = "user";
        try {
          role_name = res.result.user.roles[0].name;
        } catch (exp) {
          console.log(exp);
        }
        if (to.name === "Login") {
          switch (role_name) {
            case "admin":
              return next({ name: "Dashboard" });
            case "user":
              return next({ name: "UserIndex" });
          }
        }
        return next();
      })
      .catch(err => {
        console.log(err);
        store.dispatch("user/resetToken");
        next({ name: "Login" });
      });
  } else {
    return next({ name: "Login" });
  }
}
