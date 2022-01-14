<template>
  <div id="Explore">
    <input type="text" v-model="term" @keyup.enter="explore">

    <Objects v-model="filters.scope" :categories="scopes" :kind="'multiple'"/>
    <Objects v-model="filters.sorting" :categories="sorts" :kind="'single'"/>
    <Objects v-model="filters.range" :categories="ranges" :kind="'range'"/>

    <input type="button" value="--" @click="prev_page">
    <input type="button" value="++" @click="next_page">
    <input type="button" value="explore" @click="exploring" class="primary">

      {{ this.results.current_page }}/{{ this.results.total_pages }}

    <Results :results="results" :filters="filters"/>
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
      // request params with defaults
      term: null,
      models: ['ALL'],
      filters: {},

      scopes: ['blocks', 'channels', 'users'],
      sorts: ['updated_at', 'created_at', 'random'],
      ranges: ['updated_at', 'created_at'],

      page: 1,
      timestamp: new Date(),
      sort: 'updated_at',

      // raw response
      results: {},
    }
  },
  watch: {
    sort() {
      this.page = 1
      this.explore()
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
    exploring() {
      this.page = 1
      this.explore()
    },
    explore() {
      if (this.page > this.results.total_pages) {
        this.page--
        return
      } else if (this.page == 0) {
        this.page++
        return
      }

      // seed: this.getRandomInt(1234567),
      // term: this.term,
      // models: this.models,
      // page: this.page,
      // timestamp: this.timestamp,
      // sorting: this.filters.sorting,
      let data = {
        sort_by: this.filters.sorting,
        page: this.page,
        seed: this.getRandomInt(1234567),
        timestamp: this.timestamp,
        object_type: this.filters.scope,
        sort: this.sorting,
        direction: 'desc'
      }

      SearchService.explore(data)
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
