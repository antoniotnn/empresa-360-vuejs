export default {
    data: () => ({
        dados: {}
    }),
    methods: {
        getDadosApi(url) {
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    //console.log(response)
                    this.dados = response;
                })
        }
    }
}