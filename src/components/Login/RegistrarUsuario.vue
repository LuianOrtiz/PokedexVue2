<template>
    <div class="formulario">
        <b-form inline @submit.prevent="createuser">
            <label class="sr-only" for="inline-form-input-name">Correo</label>
            <b-form-input v-model="email" type="email" id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="example@gmail.com"></b-form-input>
            <label class="sr-only" for="inline-form-input-username">Contraseña</label>
            <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input v-model="password" type="password" id="inline-form-input-username" placeholder="contraseña"></b-form-input>
            </b-input-group>
            <b-button type="submit" variant="primary">Registrar Usuario</b-button>
        </b-form>
    </div> 
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
    name: 'RegistrarUsuario',
    data(){
        return{
            email: "",
            password: "",
        }
    },

    methods: {
        createuser(){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                this.$router.replace('home')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                console.log(errorCode);
                const errorMessage = error.message;
                console.log(errorMessage);

                // ..
            });
        }
    }
}
</script>