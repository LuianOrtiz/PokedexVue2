<template>
  <div class="home" >
    <b-container class="bv-example-row contenedor" fluid>
      <b-row cols="4" >
        <b-col v-for="(pokemon, index) in pokemones" :key="index">
          <br>
          <PokemonCard :pokemon=pokemon />
          <br>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import PokemonCard from '@/components/Home/PokemonCard.vue'
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
.columnas{
  padding: 50px 50px;
  margin: 10px 10px;
}
</style>
