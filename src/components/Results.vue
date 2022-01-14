<template>
  <div id="Results">
    {{ filters }}
    <div
      class="container five"
      v-for="scope in filters.scope"
      :key="scope.key"
      >
      <h2 class="title">{{ scope }}</h2>
      <div class="card"  v-for="result in results[scope]" :key="result.id">
        <span class="bold">{{ result.title }}</span>
        <br>
        {{ result.updated_at }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Results",
  props: {
    results: Object,
    filters: Object
  },
  data() {
    return {
      message: 'Results',
      channels: this.results.channels,
      blocks: this.results.blocks,
      users: this.results.users
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/app.scss';
</style>
