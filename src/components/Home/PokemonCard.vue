<template>
    <b-card border-variant="danger" class="overflow-hidden" style="max-width: 440px;">
        <b-row>
            <b-col md="6">
            <b-card-img :src="pokemons.imagen" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body>
                    <b-card-text>
                        <!--Description -->
                        <p> <b> {{pokemons.nombre.toUpperCase()}} </b> </p> 
                        {{pokemons.descripcion}}
                        <p> <b> Habilidad: </b> {{pokemons.habilidad}} </p>
                        <p> <b> Tipo: </b> {{pokemons.tipo}} </p>
                    </b-card-text>
                </b-card-body>
            </b-col>
        </b-row>
            <b-button variant="outline-primary" size="sm" class="buttons" @click="hola()">Escoger Pokemon </b-button>
            <b-button variant="outline-warning" size="sm" class="buttons">Ver detalles </b-button>
    </b-card>
</template>

<script>
import axios from 'axios'
export default {
    name: 'PokemonCard',
    data(){
        return {
          pokemons: {
            nombre: "",
            imagen: "",
            descripcion: "",
            habilidad: "",
            tipo: ""
            }  
        }
    },
    
    props: {
        pokemon: [],
    },
    mounted(){
         this.getPokemon()
       
    },

    methods: {
        async hola(){
            console.log(this.pokemon);
        },
        async getPokemon() {
            const url_pokemon = "https://pokeapi.co/api/v2/pokemon/";
            try {
                console.log(this.pokemon);
            await axios.get(url_pokemon+this.pokemon).
            then( (response) => {
            //console.log(response.data);
            this.pokemons.nombre = response.data.name;
            this.pokemons.imagen = response.data.sprites.front_default;
            this.pokemons.habilidad = response.data.abilities[0].ability.name
            this.pokemons.tipo = response.data.types[0].type.name
            this.getDescriptionPokemon(response.data.species.url)
            })
            } catch (error) {
                this.message = 'error'
            }
        },

        async getDescriptionPokemon(urldata) {
            try {
            await axios.get(urldata).
            then( (response) => {
                this.pokemons.descripcion = response.data.flavor_text_entries[26].flavor_text;
            })
            } catch (error) {
            this.message = 'error'
            }
        }
    }
}
</script>


<style scoped>

.buttons {
    padding: 0 10px;
    margin: 0 40px;
}
</style>
