<template>
    <div class="login">
        <b-container>
            <IniciarSesion />
        </b-container>
        
    </div>
</template>

<script>
import IniciarSesion from '@/components/Login/IniciarSesion.vue'

export default {
  name: 'LoginView',
  components: {
      IniciarSesion
  }
}
</script>
<style scoped>

</style>