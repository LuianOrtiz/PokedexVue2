<template>
    <div class="formulario">
        <b-form inline>
            <label class="sr-only" for="inline-form-input-name">Correo</label>
            <b-form-input id="inline-form-input-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="example@gmail.com"></b-form-input>
            <label class="sr-only" for="inline-form-input-username">Contraseña</label>
            <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
            <b-form-input id="inline-form-input-username" placeholder="Username"></b-form-input>
            </b-input-group>
            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Recordar Sesion</b-form-checkbox>
            <b-button variant="primary">Iniciar Sesión</b-button>
        </b-form>
    </div> 
</template>