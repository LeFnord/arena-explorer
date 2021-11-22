<template>
  <div id="Results">
    <h2>Channels</h2>
    <div class="container five">
      <div class="card"  v-for="channel in results.channels" :key="channel.id">
        {{ channel.title }}
      </div>
    </div>
    <hr>
    <h2>Blocks</h2>
    <div class="container five">
      <div class="card" v-for="block in results.blocks" :key="block.id">
        <bold>{{ block.title }}</bold>
        <br>
        {{ block.content_markdown }}
      </div>
    </div>
    <hr>
    <h2>Users</h2>
    <div class="container five">
      <div class="card" v-for="user in results.users" :key="user.id">
        {{ user.username }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Results",
  props: {
    results: {
      type: Object
    }
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
