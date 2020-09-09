import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import CoreuiVue from '@coreui/vue';
import { CSwitch, CButton } from '@coreui/vue';
import { CEmitRootEvent, CTooltip } from '@coreui/vue';

Vue.directive('c-emit-root-event', CEmitRootEvent)
Vue.component('CButton', CButton)
Vue.config.productionTip = false;

Vue.use(CoreuiVue);
new Vue({
  router,
  store,
  components: {
    CSwitch
  },
  directives: {
    'c-tooltip': CTooltip
  },
  render: h => h(App)
}).$mount("#app");
