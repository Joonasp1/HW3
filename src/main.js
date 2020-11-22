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

function getPosts(){
    return axios ({
        url: "https://private-anon-35a9ef575f-wad20postit.apiary-mock.com/posts",
        method: "GET"
    }).then(info => {return Promise.resolve(info.data)})
}
function getProfiles(){
    return axios ({
        url: "https://private-anon-35a9ef575f-wad20postit.apiary-mock.com/profiles",
        method: "GET"
    }).then(info => {return info.data})
}


const store = new Vuex.Store({
    state: {
    },
    mutations: {
    },
    getters: {
        postGetter: function (){
            return getPosts()
        },
        profileGetter: function (){
            return getProfiles()
        }
    }
});
console.log(getPosts())


new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
