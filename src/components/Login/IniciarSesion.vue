<template>
     <div class="formulario">
        <form id="form" @submit="checkForm" action="" method="POST">
            <div class="datos">
                <label class="labelizq" for="correo">Correo Electronico:</label>
                <input id="correo" type="email" name="correo" placeholder="example@gmail.com" v-model="correo">
                
                <label for="password">Contraseña:</label>
                <input id="password" type="password" name="password" placeholder="contraseña" v-model="password">
                
                <button >Iniciar Sesión</button>
                <a href="" class="registrarse">Registrate</a>
            </div>
            <br>
        </form>
    </div>   
</template>
<script>

export default {
    name: 'IniciarSesion',
    data(){
        return{
            correo: "",
            password: ""
        }
    },
    methods: {

    }
}
</script>

<style scoped>
.formulario {
    border-style: solid;
    border-color: rgb(245, 47, 7);
    background-color: white;
    height: 200px;
    width: 800px;
    margin: 10% 100px;
}

.datos{
    position: relative;
    margin: 5% 5%;
}
.formulario label{
    margin: 20px 10px;
    font-size: sans-serif;
}
.formulario input{
    padding: 10px 10px;
    border-style: solid ;
}
.formulario button {
    padding: 10px 10px;
    position: relabative;
    margin-top: 10px;
    margin-left: 540px;
    background-color: rgb(245, 47, 7);
    border-color: black;
}
.registrarse {
    text-decoration: none;
    
}
    /*
*/
</style>