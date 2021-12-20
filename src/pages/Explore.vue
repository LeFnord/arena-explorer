<template>
  <div id="Explore">
    <!-- <Objects v-model="models"/> -->
    <input type="text" v-model="term" @keyup.enter="explore">
    <input type="button" value="page ++" class="accent" @click="next_page">
    <input type="button" value="page --" class="accent" @click="prev_page">
    <input type="button" value="explore" class="accent" @click="explore">
    <!-- {{ models }} -->
    <!-- {{ page }} -->
    <Results :results="results"/>
  </div>
</template>

<script>
import SearchService from '@/services/SearchService.js'

import Objects from '@/components/Objects.vue'
import Results from '@/components/Results.vue'

export default {
  name: "Search",
  components: {
    Objects,
    Results
  },
  data() {
    return {
      term: null,
      models: ['ALL'],
      results: {},
      page: 1
    }
  },
  methods: {
    next_page() {
      this.page++
      this.explore()
    },
    prev_page() {
      this.page--
      this.explore()
    },

    explore() {
      let seed = this.getRandomInt(1234567)

      SearchService.explore(this.term, seed, this.models, this.page)
        .then(response => {
          this.results = response.data
          this.term = null
        })
        .catch(error => {
          console.log(error);
        })
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
  }
}
</script>

<style scoped>
</style>
