import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Login from "@/components/Login";

import Browse from "@/components/Browse";
import Index from "@/components/Index";

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {path: '/login', component: Login},
  {path: '/index', component: Index},
  {path: '/browse', component: Browse},
];

const router = new VueRouter({routes});

/*const store = new Vuex.Store({
  state: {

  },
  mutations: {

  },
  getters: {

  }
});*/

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
