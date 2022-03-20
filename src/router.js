import { createRouter, createWebHistory } from 'vue-router'; //createWebHashHistory

import Contratos from '@/components/vendas/Contratos.vue';
import Dashboard from '@/components/dashboard/Dashboard.vue';
import Home from '@/views/Home.vue';
import Indicadores from '@/components/servicos/Indicadores.vue';
import Lead from '@/components/vendas/Lead.vue';
import Leads from '@/components/vendas/Leads.vue';
import Login from '@/views/Login.vue';
import Opcoes from '@/components/servicos/Opcoes.vue';
import Servico from '@/components/servicos/Servico.vue';
import Servicos from '@/components/servicos/Servicos.vue';
import Site from '@/views/Site.vue';
import Vendas from '@/components/vendas/Vendas.vue';
import VendasPadrao from '@/components/vendas/VendasPadrao.vue';

const routes = [
    {
        path: '/', //localhost:8080/
        component: Site
    },
    {
        path: '/home', //localhost:8080/home
        component: Home,
        children: [
            { path: 'vendas', component: Vendas, children: 
                [
                    { path: 'leads', component: Leads, name: 'leads' }, //localhost:8080/home/vendas/leads
                    { path: 'leads/:id', component: Lead, name: 'lead' }, //localhost:8080/home/vendas/leads/id
                    { path: 'contratos', component: Contratos, name: 'contratos' }, //localhost:8080/home/vendas/contratos
                    { path: '', component: VendasPadrao } //localhost:8080/home/vendas/  (componente padrao na rota raiz, com path em branco)
                ] 
            }, //localhost:8080/home/vendas (obs, na declaração, não iniciar com / pois se fizer isso o vue vai entender que partirá da raiz, ou seja localhost:8080/ . Sem colocar a barra, já entende-se q é uma rota filha, de dentro de /home)
            { path: 'servicos', component: Servicos, name: 'servicos', children: 
                [
                    { path: ':id', name: 'servico', components: 
                        {
                            default: Servico,
                            indicadores: Indicadores,
                            opcoes: Opcoes
                        }
                    } //localhost:8080/home/servicos/5
                ] 
            }, //localhost:8080/home/servicos
            { path: 'dashboard', component: Dashboard } //localhost:8080/home/dashboard
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