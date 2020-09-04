import Vue from "vue";
import Vuex from "vuex";
import { user } from "./user/state.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user
  },
  mutations: {
    setName(state, newValue) {
      //validation

      state.user.name = newValue;
    }
  },
  actions: {},
  modules: {}
});
