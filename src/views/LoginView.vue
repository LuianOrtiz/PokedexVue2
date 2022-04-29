<template>
    <div class="login">
        <IniciarSesion />
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
