import Vue from "vue";
import App from "./App.vue";
import router from "./router/";
Vue.config.productionTip = false;

import vant from "vant";
import 'vant/lib/index.css'
Vue.use(vant)

import 'swiper/dist/css/swiper.css'

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");


