<template>
  <div class="home" >
    <b-container class="bv-example-row contenedor" fluid>
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
      nombre: "bulbasaur",
      descripcion: "",
      habilidad: "",
      tipo: ""
      }
    }
  },  
  components: {
    PokemonCard,
	PokemonElection
  },

  methods: {
  async getPokemones(){
    var pokemonesList = [];
    let pokemonsName = [];
		const url_api_pokemon = "https://pokeapi.co/api/v2/pokemon/";
			try {
				await axios.get(url_api_pokemon).
				then( (response) => {
          pokemonesList = response.data.results;
          pokemonsName =  pokemonesList.map((pokemon) => {
            return pokemon.name;
          })
          console.log("lista" + pokemonsName);
				})	  
			} catch (error) {
				this.message = 'error'
			}
      return pokemonsName;
	},

	async getPokemon() {
		const url_pokemon = "https://pokeapi.co/api/v2/pokemon/";
		try {
      const nombrePokemones = await this.getPokemones();
      console.log("nombres" + nombrePokemones);
			var pokemonNombre = this.pokemon.nombre
			await axios.get(url_pokemon+pokemonNombre).
			then( (response) => {
        console.log("Axios name: " + response.data.name);
				this.pokemon.nombre = response.data.name;
				this.pokemon.habilidad = response.data.abilities[0].ability.name
				this.pokemon.tipo = response.data.types[0].type.name
			})
		} catch (error) {
			this.message = 'error'
		}
	}

  }

}
</script>

<style scoped>
.home{
  background-color: azure;
}
.contenedor{
  height: 750px;
}
.columnas{
  padding: 50px 50px;
  margin: 10px 10px;
}
</style>
