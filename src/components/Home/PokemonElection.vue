<template>
    <div>
        <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
</template>

<script>
export default {
    name: 'PokemonElection',
    data(){
        return {
            fields: ['Nombre', 'Habilidad', 'Accion'],
            items: [
                { Nombre: "uwu", Habilidad: 'Dickerson', Accion: 'Quitar' },
                { Nombre: "40", Habilidad: 'Dickerson', Accion: 'Quitar' },
                { Nombre: "4654", Habilidad: 'Dickerson', Accion: 'Quitar' },
                { Nombre: "Charizar", Habilidad: 'Dickerson', Accion: 'Quitar' },                
            ] 
        }
    },

    methods: {    
        quitarPokemon() {

        }
    }
}
</script>

<style scoped>

</style>
