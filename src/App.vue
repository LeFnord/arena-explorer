<template>
  <header v-if="$route.meta.title">
    <h1>{{ $route.meta.title }} /</h1>
    <!-- <Counter /> -->
  </header>

  <main>
    <nav class="container twelve">
      <div v-for="route in $router.options.routes" :key="route.key">
        <router-link v-if="route.path != '/:path(.*)'" :to="route.path">{{ route.meta.title }}</router-link>
      </div>
    </nav>
    <router-view />
  </main>
</template>

<script>
import Counter from '@/components/Counter.vue'

export default {
  components: {
    Counter
  }
}
</script>

<style lang='scss'>
@import '@/assets/app.scss';

.blink {
  animation: blinker 2s infinite
}

@keyframes blinker {
    from { opacity: 1.0; }
    25% { opacity: 0.25; }
    50% { opacity: 0.0; }
    to { opacity: 1.0; }
}
</style>
