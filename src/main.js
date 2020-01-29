import Vue from "vue";
import Buefy from 'buefy'
import Loadmask from 'vue-element-loading';
import Root from "./Root.vue";
import router from './router.js';
import store from './store';
import 'buefy/dist/buefy.css'


Vue.config.productionTip = false;

Vue.use(Buefy, { defaultIconPack: 'fas' });

Vue.component('loadmask', Loadmask);

new Vue({
  store,
  router,
  render: h => h(Root)
}).$mount("#app");
