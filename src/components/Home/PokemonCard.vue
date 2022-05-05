<template>
    <b-card  class="overflow-hidden" style="max-width: 540px;">
        <b-row>
            <b-col md="6">
            <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
            <b-card-body title="Nombre">
                <b-card-text>
                <!--Description -->
                This is a wider card with supporting text as a natural lead-in to additional content.
                <div class="skills">
                    <p> Habilidades:  </p>
                    <p> Tipo: </p>
                </div>
                </b-card-text>
            </b-card-body>
            </b-col>
        </b-row>
        <div class="buttons">
            <b-button variant="outline-primary" size="sm">Escoger Pokemon </b-button>
            <b-button variant="outline-warning" size="sm">Ver detalles </b-button>
        </div>
    </b-card>
</template>

<script>
export default {
    name: 'PokemonCard'
}
</script>
<style scoped>
.skills {
    margin-left: -100px;
}
</style>
