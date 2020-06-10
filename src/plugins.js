import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueMapBox from "vue-mapbox";
import MapBox from "mapbox-gl";
import Vue from "vue";

Vue.use(VueMapBox, { mapboxgl: MapBox });
Vue.use(BootstrapVue);