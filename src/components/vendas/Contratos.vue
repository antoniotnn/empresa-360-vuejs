<template>
    <div>
        <h5>Contratos</h5>

        <router-link class="btn btn-primary" :to="{ name: 'contratos', query: { leadId_like: 1 } }">LeadId = 1</router-link>
        <router-link class="btn btn-primary" to="/home/vendas/contratos?servicoId_like=2">ServicoId = 2</router-link>

        <router-link class="btn btn-success" :to="{ name: 'contratos', query: { leadId_like: 1, servicoId_like: 2 } }">LeadId = 1 e ServicoId = 2</router-link>
        <router-link class="btn btn-success" to="/home/vendas/contratos?servicoId_like=2&leadId_like=2">ServicoId = 2 e LeadId = 2</router-link>

        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">LEAD</th>
                    <th scope="col">SERVIÇO</th>
                    <th scope="col">DATA INÍCIO</th>
                    <th scope="col">DATA FIM</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="d in dados" :key="d.id">
                    <td>{{ d.id }}</td>
                    <td>{{ d.lead.nome }}</td>
                    <td>{{ d.servico.servico }}</td>
                    <td>{{ d.data_inicio }}</td>
                    <td>{{ d.data_fim }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin.js';

export default {
    name: 'Contratos',
    mixins: [ApiMixin],
    data: () => ({
        parametrosDerelacionamento: '_expand=lead&_expand=servico'
    }),
    created() {
        this.getDadosApi(`http://localhost:3000/contratos?${this.parametrosDerelacionamento}`);
    },
    beforeRouteUpdate(to, from, next) {
        
        console.log(to.query); //objeto => URLSearchParams (há necessidade de converter o to.query para esse tipo de obj URLSearchParams, para que se adeque a escrita, modo de passagem de parametros via url)

        const queryParams = new URLSearchParams(to.query).toString(); //Criando obj URLSearchParams e convertendo o to.query para tal, e convertendo para String., Esse URLSearchParams converte todos os query params nao importam quantos estejam.
        const url = `http://localhost:3000/contratos?${this.parametrosDerelacionamento}&${queryParams}`;

        console.log(queryParams);
        //console.log(url);

        this.getDadosApi(url);

        next();
    }
}
</script>