import { createRouter, createWebHistory } from 'vue-router'; //createWebHashHistory

//import Contratos from '@/components/vendas/Contratos.vue';
// import Dashboard from '@/components/dashboard/Dashboard.vue';
// import DashboardRodape from '@/components/dashboard/DashboardRodape.vue';
// import Home from '@/views/Home.vue';
// import Indicadores from '@/components/servicos/Indicadores.vue';
// import Lead from '@/components/vendas/Lead.vue';
// import Leads from '@/components/vendas/Leads.vue';
// import Login from '@/views/Login.vue';
// import Opcoes from '@/components/servicos/Opcoes.vue';
// import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada.vue';
// import Servico from '@/components/servicos/Servico.vue';
// import Servicos from '@/components/servicos/Servicos.vue';
// import Site from '@/views/Site.vue';
// import Vendas from '@/components/vendas/Vendas.vue';
// import VendasPadrao from '@/components/vendas/VendasPadrao.vue';

//lazy loading (importacao tardia de componentes) //importacao dinâmica, ou seja, somente quando precisar desse componente, a rota for acessada, é que a importação será feita.
const Contratos = () => import(/* webpackChunkName: "vendas" */ '@/components/vendas/Contratos.vue'); //ao adicionar esse bloco comentado com o parametro webpackChunkName: "nomeDoChunck", o que acontece é que , os Componentes que possuem esse parametro ficam agrupados em um unico arquivo .js que é entregue sob demanda quando acionado algum componente daquele grupo.
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/components/dashboard/Dashboard.vue');
const DashboardRodape = () => import(/* webpackChunkName: "dashboard" */ '@/components/dashboard/DashboardRodape.vue');
const Home = () => import('@/views/Home.vue');
const Indicadores = () => import(/* webpackChunkName: "servicos" */ '@/components/servicos/Indicadores.vue');
const Lead = () => import(/* webpackChunkName: "vendas" */ '@/components/vendas/Lead.vue');
const Leads = () => import(/* webpackChunkName: "vendas" */ '@/components/vendas/Leads.vue');
const Login = () => import('@/views/Login.vue');
const Opcoes = () => import(/* webpackChunkName: "servicos" */ '@/components/servicos/Opcoes.vue');
const PaginaNaoEncontrada = () => import('@/views/PaginaNaoEncontrada.vue');
const Servico = () => import(/* webpackChunkName: "servicos" */ '@/components/servicos/Servico.vue');
const Servicos = () => import(/* webpackChunkName: "servicos" */ '@/components/servicos/Servicos.vue');
const Site = () => import('@/views/Site.vue');
const Vendas = () => import(/* webpackChunkName: "vendas" */ '@/components/vendas/Vendas.vue');
const VendasPadrao = () => import(/* webpackChunkName: "vendas" */ '@/components/vendas/VendasPadrao.vue');

const routes = [
    {
        path: '/', //localhost:8080/
        component: Site,
        meta: { requerAutorizacao: false }
    },
    {
        path: '/home', //localhost:8080/home
        meta: { requerAutorizacao: true },
        alias: '/app',
        component: Home,
        children: [
            { path: 'vendas', component: Vendas, children: 
                [
                    { 
                        path: 'leads', 
                        component: Leads, 
                        name: 'leads',
                        //beforeEnter(to, from, next) { // parametros, to, from, e next 
                        beforeEnter() { // parametros, to, from, e next 
                            //verificar se o user tem permissão de carregar a rota
                            console.log('Guarda de rota beforeEnter');
                        }
                    }, //localhost:8080/home/vendas/leads
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
        component: Login,
        meta: { requerAutorizacao: false, campo2: 'teste', campo3: 50 }
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
    scrollBehavior(to, from, savedPosition) { //manipulação de scroll automático de forma global. // aceita além dos conhecidos parametros:  parametro to ( pra onde estamos indo na rota), from( de onde estamos vindo), e outro parametro o savedPosition, que armazena as posicoes de hash acessadas pelo usuario
        //return { left: 0, top: 150 } //left = x, top = y 
        //console.log(to.hash);
        console.log(savedPosition);

        if(savedPosition) {
            return savedPosition; //a aplicacao performa melhor utilizando-se disto.
        }

        if(to.hash){
            return { el: to.hash } // to.hash deve corresponder a um id de elemento HTML
            //fragmento = #secao_1 => id = secao_1
        }

        return { left: 0, top: 0 }
    },
    routes: routes
    //routes   -- outra forma, somente assim pois tem o mesmo nome (chave e valor)
});

//guarda global
//router.beforeEach((to, from, next) => { //parametros: to, from e next, sendo que  next está sendo descontinuado na proxima versao do vue, Vue4
router.beforeEach(() => { 
    //console.log('Origem: ', from);
    //console.log('Destino: ', to);
    //verificar se o usuário está autorizado a acessar a rota.

    //console.log('Guarda de rota executado antes do acesso a rota destino');
    //console.log(to.meta);
    // if(to.meta.requerAutorizacao) {
    //     console.log('Validar o acesso');
    // } else {
    //     console.log('Apenas seguir a navegação');
    // }
    //console.log('Guarda Global beforeEach');
}); //método chamado antes de qualquer navegação, independente de que rota será acessada, é um guarda de rota global

//guarda global
//router.afterEach((to, from) => { //mesma ideia do beforeEach acima
router.afterEach(() => { 
    //console.log('Guarda de rota executado após a conclusão da navegação');
    //console.log('Origem: ', from);
    //console.log('Destino: ', to);
    //console.log('Guarda Global afterEach');
});

router.beforeResolve(() => {
    //console.log('Guarda global beforeResolve');
});


export default router;