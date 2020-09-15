import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { iconsSet as icons } from './assets/icons/icons.js'

// CoreUI installation
import CoreuiVue from '@coreui/vue'
Vue.use(CoreuiVue)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  icons,
  render: h => h(App)
}).$mount("#app");
