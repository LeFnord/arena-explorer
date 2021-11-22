<template>
  <div id="Explore">
    <input type="text" v-model="term">
    <!-- <input type="button" value="explore" class="primary" @click="explore"> -->
    <!-- <input type="button" value="explore"> -->
    <input type="button" value="explore" class="accent" @click="explore">

    <Results :results="results"/>
  </div>
</template>

<script>
import SearchService from '@/services/SearchService.js'
import Results from '@/components/Results.vue'

export default {
  name: "Search",
  components: {
    Results
  },
  data() {
    return {
      term: null,
      results: {}
    }
  },
  methods: {
    explore() {
      SearchService.explore(this.term)
        .then(response => {
          this.results = response.data
          this.term = null
        })
        .catch(error => {
          console.log(error);
        })
    },
  }
}
</script>

<style scoped>
</style>
