<template>
  Gblh
</template>

<script>
export default {
  data() {
    return {
      searchResults: [],
    }
  },
  mounted() {
    this.getPokemonById();
    this.getPokemonName();
  },
  watch: {
    '$route.params.id': function() {
      this.getPokemonById();
    },
  },
  methods: {
    search() {
      this.$router.push(`/pokemon/${this.pokemon_id}`);
    },
    getPokemonById(){
    this.pokemon_id = Math.floor(Math.random() * 1018);
    },
    getPokemonName() {
      const pokemonId = this.$route.params.id;
      if (pokemonId) {
        this.$axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
          .then(response => {
            this.searchResults = response.data;
            this.experience = response.data.base_experience;
            this.charge = response.data.types[0].type.name;
            this.height = response.data.height;
            this.weight = response.data.weight;
            this.img = response.data.sprites.front_default;
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
  },
}
</script>