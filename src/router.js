import { createRouter, createWebHistory } from 'vue-router'; //createWebHashHistory

import Contratos from '@/components/vendas/Contratos.vue';
import Dashboard from '@/components/dashboard/Dashboard.vue';
import DashboardRodape from '@/components/dashboard/DashboardRodape.vue';
import Home from '@/views/Home.vue';
import Indicadores from '@/components/servicos/Indicadores.vue';
import Lead from '@/components/vendas/Lead.vue';
import Leads from '@/components/vendas/Leads.vue';
import Login from '@/views/Login.vue';
import Opcoes from '@/components/servicos/Opcoes.vue';
import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada.vue';
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
        alias: '/app',
        component: Home,
        children: [
            { path: 'vendas', component: Vendas, children: 
                [
                    { path: 'leads', component: Leads, name: 'leads' }, //localhost:8080/home/vendas/leads
                    { 
                        path: 'leads/:id/:outroParametro',
                        props: true,
                        /*
                        props: {
                            id: 4,
                            outroParametro: 'pt-br'
                        },
                        */
                        /*
                        props: route => {
                            console.log('rota ativa: ', route);
                            
                            let teste = route.query.idioma ? route.query.idioma : route.params.outroParametro;

                            // implementando uma lógica para definir as props que serão submetidas para o componente roteado.
                            return {
                                id: parseInt(route.params.id) +1,
                                outroParametro: teste
                            }
                        },
                        */
                        component: Lead, 
                        name: 'lead', 
                        alias: [
                            '/l/:id/:outroParametro', 
                            '/pessoa/:id/:outroParametro', 
                            '/:id/:outroParametro'
                        ] 
                    }, //localhost:8080/home/vendas/leads/id, alias: são apelidos para rotas.
                    { path: 'contratos', component: Contratos, name: 'contratos' }, //localhost:8080/home/vendas/contratos
                    { path: '', component: VendasPadrao, name: 'vendas' } //localhost:8080/home/vendas/  (componente padrao na rota raiz, com path em branco)
                ] 
            }, //localhost:8080/home/vendas (obs, na declaração, não iniciar com / pois se fizer isso o vue vai entender que partirá da raiz, ou seja localhost:8080/ . Sem colocar a barra, já entende-se q é uma rota filha, de dentro de /home)
            { path: 'servicos', component: Servicos, name: 'servicos', children: 
                [
                    { 
                        path: ':id', 
                        props: {
                            default: true,
                            indicadores: true,
                            opcoes: true
                        },
                        alias: '/s/:id', 
                        name: 'servico', 
                        components: 
                        {
                            default: Servico,
                            indicadores: Indicadores,
                            opcoes: Opcoes
                        }
                    } //localhost:8080/home/servicos/5
                ] 
            }, //localhost:8080/home/servicos
            { path: 'dashboard', components: 
                {
                    default: Dashboard,
                    rodape: DashboardRodape
                } 
            } //localhost:8080/home/dashboard
        ]
    },
    {
        path: '/login', //localhost:8080/login
        component: Login
    },
    { path: '/redirecionamento-1', redirect: '/home/servicos' }, // apenas um redirecionamento, e não uma rota alternativa
    { path: '/redirecionamento-2', redirect: { name: 'leads' } }, // outra forma, apontando pra outro lugar, pelo name
    { path: '/redirecionamento-3', redirect: '/home/vendas' },
    { path: '/redirecionamento-4', redirect: { name: 'vendas' } },
    { path: '/redirecionamento-5', redirect: to => {
            //podemos programar algo antes do redirecionamento ser efetivado
            console.log(to)

            //return '/home/vendas';
            return { name: 'vendas' }
        }
    },
    //{ path: '/:catchAll(.*)*', redirect: '/' } // rota pega tudo (para quando a rota não existe, redirecionar pra ela. Interessante para criar uma rota erro 404).  No Vue2 = * , No Vue3 = expressão regular. Vue3 = '/:catchAll(.*)*'
    { path: '/:catchAll(.*)*', component: PaginaNaoEncontrada }
];

const router = createRouter({
    //history: createWebHashHistory(), //seta o modo hash, na navegação
    history: createWebHistory(), //seta o modo History, na navegação
    routes: routes
    //routes   -- outra forma, somente assim pois tem o mesmo nome (chave e valor)
});

router.beforeEach((to, from) => { //parametros: to, from e next, sendo que  next está sendo descontinuado na proxima versao do vue, Vue4
    console.log('Origem: ', from);
    console.log('Destino: ', to);
    //verificar se o usuário está autorizado a acessar a rota.

    console.log('Método executado antes do acesso a rota destino');
}); //método chamado antes de qualquer navegação, independente de que rota será acessada, é um guarda de rota global

export default router;