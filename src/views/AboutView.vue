<template>
  <div class="about">
    <h1>This is an about page</h1>
    <PokemonCard />
  </div>
</template>
<script>
import PokemonCard from '@/components/Home/PokemonCard.vue'

export default {
  name: 'AboutView',
  components: {
    PokemonCard
  }
}
</script>

