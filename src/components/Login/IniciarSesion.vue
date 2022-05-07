<template>
    <div class="formulario">
        <b-form inline class="form">
            <label class="sr-only" for="inline-form-input-name">Correo</label>
            <b-form-input type="email" id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="example@gmail.com"></b-form-input>
            <label class="sr-only" for="inline-form-input-username">Contraseña</label>
            <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input type="password" id="inline-form-input-username" placeholder="contraseña"></b-form-input>
            </b-input-group>
            <br>
            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Recordar Sesion</b-form-checkbox>
            <div class="botones">
                <b-button type="submit" variant="primary">Iniciar Sesión</b-button>
            </div>
                <b-button variant="link">Registrarse</b-button>
        </b-form>
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
    border-color: rgb(253, 216, 2);
    padding: 30px 30px;
    background-color: rgba(30, 46, 64, 0.357);
}
.botones{
    margin: 30px 30px;
}
</style>