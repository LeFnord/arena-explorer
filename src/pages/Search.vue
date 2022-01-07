<template>
  <div id="Search">
    <!-- <Objects v-model="models"/> -->
    <input type="text" v-model="term" @keyup.enter="searching">
    <input type="button" value="page --" class="accent" @click="prev_page">
    <input type="button" value="page ++" class="accent" @click="next_page">
    {{ results.current_page }}/{{ results.total_pages }}

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
      results: {},
      page: 1
    }
  },

  methods: {
    next_page() {
      this.page++
      this.searchByTerm()
    },

    prev_page() {
      this.page--
      this.searchByTerm()
    },

    searching() {
      this.page = 1
      this.searchByTerm()
    },

    searchByTerm() {
      if (this.page > this.results.total_pages) {
        this.page--
        return
      } else if (this.page == 0) {
        this.page++
        return
      }
      let object_exp = new RegExp('^(c|b|C|B):\s*')
      if (this.term.startsWith('@')) {         // users
        this.q = this.term.substring(1)
        this.objectSearch('users')
      } else if (object_exp.test(this.term)) { // blocks or channels
        let foo = this.term.match(object_exp)[0]
        let object_type = foo.includes('b') || foo.includes('B') ? 'blocks' : 'channels'

        this.q = this.term.replace(object_exp, '')
        this.objectSearch(object_type)
      } else {                                // all
        this.q = this.term.replace(':', '')
        this.allSearch()
      }
    },

    objectSearch(object_type) {
      SearchService.others(object_type, this.q, this.page)
        .then(response => {
          this.results = response.data
        })
        .catch(error => {
          console.log(error);
        })
    },

    allSearch() {
      SearchService.all(this.q, this.page)
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
