import { createApp } from 'vue'
import App from './App.vue'


import{createRouter, createWebHistory} from 'vue-router'
import HomeComponent from './page/home.vue'
import RestaurantComponent from './page/restaurant.vue'

const routes = [
    {path: '/', component: HomeComponent},
    {name:'RestaurantComponent' ,path: '/restaurant/:name', component: RestaurantComponent},
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

const VueApp = createApp(App);
VueApp.use(router);

VueApp.mount('#app');
