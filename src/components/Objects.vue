<template>
  <div id="Objects">
    <div v-for="option in available" class="item">
      <input type="checkbox" :id="option" v-model="choosen" v-bind:value="option">
      <label :for="option">{{ option }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Objects",
  data() {
    return {
      all: 'All',
      choosen: [],
      available: ['Block', 'Channel', 'User', 'Group']
    }
  },
  props: {
    modelValue: Array
  },
  emits: ['update:modelValue'],
  watch: {
    choosen() {
      let find = this.choosen.length == 0 ? ['ALL'] : this.choosen
      this.$emit('update:modelValue', find)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/app.scss';

div#Objects {
  display: block;
  margin-bottom: 1rem;
}
.item {
  display: inline-block;
}
input {
  position: absolute;
  left: -9999px;
}

label {
  font-size: 80%;
  font-weight: normal;
  display: inline;
  position: relative;
  margin: 1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  height: $line-height-computed;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: all .2s;
}

label::before {
  content: '';
  display: block;
  position: absolute;
  top: 0.5rem;
  bottom: 0.5rem;
  left: 0.5rem;
  border: 1px solid $color;
}

label:hover, input:focus + label {
  box-shadow: $shadow;
}

input:checked + label {
  color: $color;
  background-color: $accent-color;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 0;
}

input:checked + label::before {
  content: '✓';
  font-size: 200%;
  width: 1.25rem;
  height: 1.25rem;
  font-weight: bolder;
  border: 1px solid $color;
  background-color: $bg;
}

@media (prefers-color-scheme: dark) {
  label::before {
    border: 1px solid $bg;
  }
}
</style>
