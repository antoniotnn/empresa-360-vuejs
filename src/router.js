import { createRouter, createWebHistory } from 'vue-router'; //createWebHashHistory
import Vendas from '@/components/vendas/Vendas.vue';
import Servicos from '@/components/servicos/Servicos.vue';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Site from '@/views/Site.vue';

const routes = [
    {
        path: '/', //localhost:8080/
        component: Site
    },
    {
        path: '/home', //localhost:8080/home
        component: Home,
        children: [
            { path: 'vendas', component: Vendas }, //localhost:8080/home/vendas (obs, na declaração, não iniciar com / pois se fizer isso o vue vai entender que partirá da raiz, ou seja localhost:8080/ . Sem colocar a barra, já entende-se q é uma rota filha, de dentro de /home)
            { path: 'servicos', component: Servicos }
        ]
    },
    {
        path: '/login', //localhost:8080/login
        component: Login
    }
];

const router = createRouter({
    //history: createWebHashHistory(), //seta o modo hash, na navegação
    history: createWebHistory(), //seta o modo History, na navegação
    routes: routes
    //routes   -- outra forma, somente assim pois tem o mesmo nome (chave e valor)
});

export default router;