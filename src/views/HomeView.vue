<template>
  <div class="home">
    <b-container class="bv-example-row" fluid>
      <b-row>
        <b-col>
          <br>
          <PokemonCard :pokemon=this.pokemon />
          <br>
        </b-col>
        <b-col>
          <br>
          <PokemonCard :pokemon=this.pokemon />
          <br>
        </b-col>
        <b-col>
          <br>
          <PokemonCard :pokemon=this.pokemon />
          <br>
        </b-col>
        <b-col>
          <br>
          <PokemonElection />
        </b-col>
      </b-row>
    </b-container>
	<button @click="getPokemon">boton</button>
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
      pokemon: {
		imagen: "",
        nombre: "",
        descripcion: "",
        habilidad: ["",""],
        tipo: ["", ""]
      }
    }
  },  
  components: {
    PokemonCard,
	PokemonElection
  },

  methods: {
	async getPokemones(){
		const url_api_pokemon = "https://pokeapi.co/api/v2/pokemon/";
			try {
				await axios.get(url_api_pokemon).
				then( (response) => {
					console.log(response.data.results[0]);
					}
				)	  
			} catch (error) {
				this.message = 'error'
			}
	},

	async getPokemon() {
		const url_pokemon = "https://pokeapi.co/api/v2/pokemon/";
		try {
			var pokemonNombre = this.pokemon.nombre
			await axios.get(url_pokemon+pokemonNombre).
			then( (response) => {
				this.pokemon.nombre = response.data.name;
				this.pokemon.habilidad[0] = response.data.abilities[0].ability.name
				this.pokemon.habilidad[1] = response.data.abilities[1].ability.name
				this.pokemon.tipo[0] = response.data.types[0].type.name
				this.pokemon.tipo[1] = response.data.types[1].type.name
			}

			)
		} catch (error) {
			this.message = 'error'
		}
	}

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
