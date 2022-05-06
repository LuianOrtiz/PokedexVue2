<template>
    <b-card  class="overflow-hidden" style="max-width: 440px;">
        <b-row>
            <b-col md="6">
            <b-card-img :src="pokemon.imagen" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body>
                    <b-card-text>
                        <!--Description -->
                        <p> {{pokemon.nombre}} </p> 
                        {{pokemon.descripcion}}
                        <p> Habilidad: {{pokemon.habilidad}} </p>
                        <p> Tipo: {{pokemon.tipo}} </p>
                    </b-card-text>
                </b-card-body>
            </b-col>
        </b-row>
            <b-button variant="outline-primary" size="sm" class="buttons" @click="hola()">Escoger Pokemon </b-button>
            <b-button variant="outline-warning" size="sm" class="buttons">Ver detalles </b-button>
    </b-card>
</template>

<script>
export default {
    name: 'PokemonCard',
    data(){
        return {
            
        }
    },

    props: {
        pokemon: {
            nombre: "",
            imagen: "",
            descripcion: "",
            habilidad: "",
            tipo: ""
            }
        
    },

    methods: {
        hola(){
            console.log(this.pokemon);
        }
    }
}
</script>


<style scoped>

.buttons {
    padding: 0 10px;
    margin-right: 60px;
}
</style>
