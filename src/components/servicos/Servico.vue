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
    props: ['id'],
    created() {
        //console.log('Servico', this.$route.params.id);
        //console.log('Via props', this.$props);
        //console.log(this.$route.params);
        //console.log('Componente Serviço Criado');
        //this.getDadosApi(`http://localhost:3000/servicos/${this.$route.params.id}`);
        this.getDadosApi(`http://localhost:3000/servicos/${this.id}`);
    },
    beforeRouteUpdate(to, from, next) { //metodo para fazer tratativa antes de atualizar uma rota. Alternativa para a abordagem watch, comentada abaixo.
        //to = $route para onde estamos indo
        //from = $route de onde estamos vindo
        //next faz com que o fluxo de navegação siga em frente

        //console.log(to.params.id);
        if(to.params.id != undefined) this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`);
        //console.log(from.params.id);
        next();

    }
    /*watch: {
        //$route(novovalor, valorAntigo) { //convenção diz para usar os nomes to, from (para onde foi na rota, e veio de onde; to = novoValor, from = valorAntigo)
        $route(to) { 
            //console.log(to.params);
            if(to.params.id != undefined) this.getDadosApi(`http://localhost:3000/servicos/${to.params.id}`);
        }
    }*/

}
</script>