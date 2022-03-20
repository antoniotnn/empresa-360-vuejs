<template>
    <div class="card">
        <div class="card-header bg-primary text-white">{{ dados.servico }}</div>
        <div class="card-body">
            <p class="card-text">{{ dados.descricao }}</p>
        </div>
    </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin.js';

export default {
    name: 'Servico',
    mixins: [ApiMixin],
    created() {
        //console.log(this.$route.params);
        console.log('Componente Serviço Criado');
        this.getDadosApi(`http://localhost:3000/servicos/${this.$route.params.id}`);
    },
    watch: {
        //$route(novovalor, valorAntigo) { //convenção diz para usar os nomes to, from (para onde foi na rota, e veio de onde; to = novoValor, from = valorAntigo)
        $route(to) { 
            //console.log(to.params);
            this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`);
        }
    }
}
</script>