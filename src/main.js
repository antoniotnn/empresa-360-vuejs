import { createApp } from 'vue'
import App from './App.vue'

// -- Início das Rotas
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';


const routes = [
    {
        path: '/home', //localhost:8080/home
        component: Home
    },
    {
        path: '/login', //localhost:8080/login
        component: Login
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
    //routes   -- outra forma, somente assim pois tem o mesmo nome (chave e valor)
});

// -- Fim das Rotas

const Vue = createApp(App);

// adicionando as configs de rotas a instancia de Vue
Vue.use(router);
Vue.mount('#app');

//createApp(App).mount('#app')
