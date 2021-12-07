<template>
  {{ seconds }}<span class="blink">:</span>{{ milli_seconds }}
</template>

<script setup>
import { ref } from 'vue'

let seconds = ref(0)
let milli_seconds = ref(1)

setInterval(() => {
  if (milli_seconds.value == 99) {
    seconds.value++
    milli_seconds.value = 0
  } else {
    milli_seconds.value++
  }
}, 10)
</script>

<style lang="scss" scoped>
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
