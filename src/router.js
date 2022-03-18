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

export default router;