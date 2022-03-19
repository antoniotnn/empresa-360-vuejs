<template>
    <div>
        <h5>Leads</h5>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NOME</th>
                    <th scope="col">TELEFONE</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="d in dados" :key="d.id">
                    <td>{{ d.id }}</td>
                    <td>{{ d.nome }}</td>
                    <td>{{ d.telefone }}</td>
                    <td>
                        <router-link class="btn btn-sm btn-primary" to="/home/vendas/leads">
                            <i class="bi bi-pencil-square" style="cursor: pointer"></i>
                        </router-link>
                    </td>
                </tr>
                <!-- OU v-for DA FORMA ABAIXO --
                <tr v-for="d in dados" :key="d">
                    <td v-for="value in d" :key="value.id">{{value}}</td>
                </tr>
                -->
            </tbody>
        </table>
        <!--{{ dados }}-->
    </div>
</template>

<script>
export default {
    name: 'Leads',
    data: () => ({
        dados: null
    }),
    methods: {
        getDadosApi() {
            fetch('http://localhost:3000/leads')
                .then(response => response.json())
                .then(response => {
                    //console.log(response)
                    this.dados = response;
                })
        }
    },
    created() {
        this.getDadosApi();
    }
}
</script>