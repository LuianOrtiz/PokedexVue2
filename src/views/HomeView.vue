<template>
  <div class="home">
    <b-container class="bv-example-row" fluid>
      <b-row>
        <b-col>
          <br>
          <PokemonCard />
          <br>
        </b-col>
        <b-col>
          <br>
          <PokemonCard />
          <br>
        </b-col>
        <b-col>
          <br>
          <PokemonCard />
          <br>
        </b-col>
        <b-col>
          djaslkjdklasjkdlasjdlkjaslkjjdlkajsdlk
          sadjaslkdjaslk
          <br>asjdklasjdlkas
          <br>
          sadkljaksdjasldjsa
          brasjrasbrsajdkaslk
          <br>lsjdlkas
          asbr
          sad

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonCard from '@/components/Home/PokemonCard.vue'
export default {
  name: 'HomeView',
  components: {
    PokemonCard
  }
}
</script>

<style scoped>
.home{
  background-image: url('@/assets/background-home.jpg');
}
.columnas{
  padding: 50px 50px;
  margin: 10px 10px;
}
</style>
