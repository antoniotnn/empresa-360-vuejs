<template>
    <div>
        <h5>Componente Opções</h5>
        <p>Poderíamos recuperar as opções do serviço id {{id}}</p>
    </div>
</template>

<script>
export default {
    name: 'Opcoes',
    props: ['id'],
    created() {
        //console.log('Opcoes', this.$route.params.id);
        //console.log('Parâmetro via props', this.id);
    },
    //beforeRouteUpdate(to, from) { // pode usar parametros to, from
    beforeRouteUpdate() { // pode usar parametros to, from
        console.log('Guarda de Componente beforeRouteUpdate');
    }
}
</script>