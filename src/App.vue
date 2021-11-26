<template>
  <header v-if="$route.meta.title">
    <h1 @click="counter = 0">
      {{ $route.meta.title }} / {{ counter }}<span class="blink">:</span>{{ counter_q }}
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

let counter_q = ref(1)

setInterval(() => {
  if (counter_q.value == 99) {
    counter_q.value = 0
  } else {
    counter_q.value++
  }
}, 10)
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
