<template>
    <div>
        <h5>Leads</h5>
        {{ dados }}
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