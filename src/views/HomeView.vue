<template>
  <div class="home" >
    <b-container class="bv-example-row contenedor" fluid>
      <b-row >
        <b-col v-for="(pokemon, index) in pokemones" :key="index">
          <br>
          {{pokemon}}
          <PokemonCard :pokemon=pokemon />
          <br>
        </b-col>

        <b-col>
          <br>
          <PokemonElection />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonCard from '@/components/Home/PokemonCard.vue'
import PokemonElection from '@/components/Home/PokemonElection.vue'
import axios from 'axios'

export default {
  name: 'HomeView',
  data() {
    return {
      pokemones: [],
    }
  },  
  components: {
    PokemonCard,
    PokemonElection,
    
},

mounted() {
  this.getPokemones();
},

  methods: {
  async getPokemones(){
    var pokemonesList = [];
		const url_api_pokemon = "https://pokeapi.co/api/v2/pokemon/";
			try {
				await axios.get(url_api_pokemon).
				then( (response) => {
          pokemonesList = response.data.results;
          this.pokemones =  pokemonesList.map((pokemon) => {
            return pokemon.name;
          })
          console.log(this.pokemones);
				})	  
			} catch (error) {
				this.message = 'error'
			}
	},
  hola() {
    console.log("HOlitas de mar");
    console.log(this.pokemones.length)
  }
  }

}
</script>

<style scoped>
.home{
  background-color: azure;
}

.columnas{
  padding: 50px 50px;
  margin: 10px 10px;
}
</style>
