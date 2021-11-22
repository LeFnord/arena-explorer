<template>
  <header v-if="$route.meta.title">
    <h1 @click="counter = 0">
      {{ $route.meta.title }} / {{ counter }}
    </h1>
  </header>
  <main>
    <nav class="container twelve">
      <div v-for="route in $router.options.routes" :key="route.key">
        <router-link v-if="route.path != '/:path(.*)'" :to="route.path">{{ route.meta.title }}</router-link>
      </div>
    </nav>
    <div class="content">
      <router-view />
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

let counter = ref(0)

setInterval(() => {
  counter.value++
}, 1000)
</script>

<style lang='sass'>
@import '@/assets/app.scss'
</style>
