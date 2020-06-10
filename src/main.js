import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMapBox from "vue-mapbox";
import MapBox from "mapbox-gl";
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(VueMapBox, { mapboxgl: MapBox });
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
