<template>
    <div>
        <h5>{{ dados.id }} - {{ dados.nome }}</h5>
        <!--{{ dados }}-->
        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">ID</label>
            <div class="col-sm-10">
                <input type="text" readonly class="form-control-plaintext" :value="dados.id">
            </div>
        </div>

        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">ID</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dados.nome">
            </div>
        </div>

        <div class="mb-3 row">
            <label class="col-sm-2 col-form-label">ID</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" :value="dados.telefone">
            </div>
        </div>

        <div class="col-auto d-flex justify-content-between">
            <button type="button" class="btn btn-warning" @click="$router.push({ name: 'leads' })">Voltar</button>
            <button type="button" class="btn btn-primary">Atualizar</button>
        </div>
    </div>
</template>

<script>
import ApiMixin from '@/mixins/ApiMixin.js';

export default {
    name: 'Lead',
    props: ['id', 'outroParametro'],
    mixins: [ApiMixin],
    created() {
        // console.log(this.$route.params);
        // console.log('--------------');
        //console.log(this.$props);
        // console.log(this.id, this.outroParametro);
        //this.getDadosApi(`http://localhost:3000/leads/${this.$route.params.id}`);
        this.getDadosApi(`http://localhost:3000/leads/${this.id}`);
    },
    //beforeRouteLeave(to, from, next) { // pode ser usado esses parametros, na versão 2 do vue, passaria o valor boolean para o next() , ex: next(confirmar)
    beforeRouteLeave() {
        const confirmar = window.confirm('Deseja sair deste formulário?');

        return confirmar;
    }
}
</script>