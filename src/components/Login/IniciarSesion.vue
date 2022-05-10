<template>
    <div class="formulario">
        <b-form inline class="form" @submit.prevent="login">

            <label class="sr-only" for="inline-form-input-name">Correo</label>
            <b-form-input  v-model="email" type="email" id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="example@gmail.com"></b-form-input>
            
            <label class="sr-only" for="inline-form-input-username">Contraseña</label>
            <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input v-model="password" type="password" id="inline-form-input-username" placeholder="contraseña" ></b-form-input>
            </b-input-group>
            <br>
            
            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Recordar Sesion</b-form-checkbox>
            <div class="botones">
                <b-button type="submit" variant="primary" value="Acceder">Iniciar Sesión</b-button>
            </div>
                <router-link to="/registrar">Registrarse</router-link>
        </b-form>
    </div> 
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
    
    name: 'IniciarSesion',
    data(){
        return{
            email: "",
            password: ""
        }
    },
    methods: {
        login: function() {
           const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                this.$router.replace('home')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
            });
        }
        
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