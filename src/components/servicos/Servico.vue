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
        this.getDadosApi(`http://localhost:3000/servicos/${this.$route.params.id}`);
    }
}
</script>