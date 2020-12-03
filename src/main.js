import Vue from "vue";
import axios from "axios";
import store from "./store";
import App from "./App.vue";
import router from "./router";
import VModal from "vue-js-modal";
import VueMaskDirective from "v-mask";
import { iconsSet as icons } from "./assets/icons/icons.js";

// CoreUI installation
import CoreuiVue from "@coreui/vue";
Vue.use(VModal);
Vue.use(CoreuiVue);
Vue.use(VueMaskDirective);
//Header requests
import { getToken } from "@/utils/auth";
axios.defaults.headers["Authorization"] = `Bearer ${getToken()}`;

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
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
