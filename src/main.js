import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Browse from "./components/Browse";
import Login from "./components/Login";
import Index from "./components/Index";
import axios from "axios";


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex)


const routes = [
  {path: '/', component: Login},
  {path: '/index', component: Index},
  {path: '/browse', component: Browse},
];

const router = new VueRouter({routes});

const store = new Vuex.Store({
    state: {

    },
    mutations: {
    },
    getters: {
        getProfiles: function (){
            const response = axios ({
                url: "https://private-anon-35a9ef575f-wad20postit.apiary-mock.com/profiles",
                method: "GET"
            })
            console.log(response.data)
            return response.data
        },
        getPosts: function (){
            const response = axios ({
                url: "https://private-anon-35a9ef575f-wad20postit.apiary-mock.com/posts",
                method: "GET"
            })
            console.log(response.data)
            return response.data
        },
        getTest: function (){
            return "test"
        }
    }
});


new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
