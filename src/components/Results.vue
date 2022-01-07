<template>
  <div id="Results">
    <h2 v-if="results.channels && results.channels.length > 0">Channels</h2>
    <div class="container five">
      <div class="card"  v-for="channel in results.channels" :key="channel.id">
        {{ channel.title }}
        {{ channel.created_at }}
      </div>
    </div>

    <h2 v-if="results.blocks && results.blocks.length > 0">Blocks</h2>
    <div class="container five">
      <div class="card" v-for="block in results.blocks" :key="block.id">
        <span class="bold">{{ block.title }}</span>
        <br>
        {{ block.content_markdown }}
        {{ block.created_at }}
      </div>
    </div>

    <h2 v-if="results.users && results.users.length > 0">Users</h2>
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
