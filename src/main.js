import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { iconsSet as icons } from "./assets/icons/icons.js";
import axios from "axios";

// CoreUI installation
import CoreuiVue from "@coreui/vue";
Vue.use(CoreuiVue);

const instance = axios.create({
  baseURL: "http://manage.mehnat.test/api/v1/",
  timeout: 5000
});
Vue.prototype.$api = instance;
Vue.config.productionTip = false;

const app = {
  render: h => h(App),
  router,
  store,
  icons
};

new Vue(app).$mount("#app");
