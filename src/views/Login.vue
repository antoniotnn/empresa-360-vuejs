<template>
    <div>
        <nav class="navbar navbar-light bg-light menu-superior">
            <div class="container">
                <a class="navbar-brand" href="#">Empresa 360</a>
                <div class="navbar-nav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Voltar</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="row mt-5">
            <div class="col-6 offset-3">
                <div class="card">
                    <p class="card-header">Entrar</p>
                    <div class="card-body">
                        <div class="mb-3">
                            <input type="email" class="form-control" placeholder="E-mail">
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" placeholder="Senha">
                        </div>
                        <button @click="navegarPara()" class="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    methods: {
        navegarPara() {
            //console.log(this.$router); //obj de roteamento

            //coletar os dados de email e senha
            //realizar uma requisição http de autenticação
            //receber o token de autorização

            this.$router.push('/home'); //add entrada no histórico de navegação do browser
            //this.$router.push({ path: '/home' }); //outra forma

            //this.$router.replace('/home'); //diferença deste para o push, é que este não adiciona entrada no histórico de nafegação.
            //this.$router.replace({ path: '/home' }); //outra forma

            //this.$router.forward(); //avançar no histórico de rotas do navegador
            //this.$router.back(); //retornar no histórico de rotas do navegador

            //this.$router.go(2); //avançar ou retornar no histórico de rotas do navegador, passando um valor inteiro por parametro (quantidade de passos)
            //this.$router.go(-2); //valor inteiro positivo, avança, valor inteiro negativo, retrocede
        }
    }
}
</script>