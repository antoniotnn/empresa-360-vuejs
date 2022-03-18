import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

const Vue = createApp(App);

// adicionando as configs de rotas a instancia de Vue
Vue.use(router);
Vue.mount('#app');

//createApp(App).mount('#app')
