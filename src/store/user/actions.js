// import { loginKadrlar, login, store, getInfo, logout } from '@/api/user'
import { setToken, removeToken } from "@/utils/auth";
import { resetRouter } from "@/router";
import axios from "axios";

axios.defaults.baseURL = "http://manage.mehnat.test/api/v1/";
export const actions = {
  // user login
  login({ commit }, credientials) {
    return new Promise((resolve, reject) => {
      axios
        .post("/login", credientials)
        .then(res => {
          const result = res.data;
          commit("SET_USER_TOKEN", result.access_token);
          commit("SET_IS_AUTH", true);
          setToken(result.access_token);
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  // user logout
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get("logout")
        .then(res => {
          commit("SET_USER_TOKEN", "");
          commit("SET_IS_AUTH", false);
          removeToken();
          resetRouter();
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers["Authorization"] = `Bearer ${state.user.token}`;
      axios
        .get("/getInfo")
        .then(res => {
          if (res && res.status == 200) {
            commit("SET_USER", res.data.user);
            commit("SET_IS_AUTH", true);
            commit("SET_USER_ROLE", res.data.role[0]);
            resolve(res);
          } else {
            reject(res);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit("SET_USER_TOKEN", "");
      commit("SET_IS_AUTH", false);
      removeToken();
      resolve();
    });
  }
};
