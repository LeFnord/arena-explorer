<template>
  <div id="Search">
    <!-- <Objects v-model="models"/> -->
    <input type="text" v-model="term" @keyup.enter="handleTerm">
    <!-- {{ models }} -->
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
      term: '',
      q: '',
      models: ['ALL'],
      results: {}
    }
  },
  methods: {
    handleTerm() {
      let object_exp = new RegExp('^(c|b|C|B):\s*')
      if (this.term.startsWith('@')) {         // users
        this.q = this.term.substring(1)
        this.userSearch()
      } else if (object_exp.test(this.term)) { // blocks or channels
        let foo = this.term.match(object_exp)[0]
        let object_type = foo.includes('b') || foo.includes('B') ? 'blocks' : 'channels'

        this.q = this.term.replace(object_exp, '')
        this.othersSearch(object_type)
      } else {                                // all
        this.q = this.term.replace(':', '')
        this.allSearch()
      }
    },
    userSearch() {
      SearchService.users(this.q)
        .then(response => {
          this.results = response.data
        })
        .catch(error => {
          console.log(error);
        })
    },
    othersSearch(object_type) {
      SearchService.others(object_type, this.q)
        .then(response => {
          this.results = response.data
        })
        .catch(error => {
          console.log(error);
        })
    },
    allSearch() {
      SearchService.all(this.q)
        .then(response => {
          this.results = response.data
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
