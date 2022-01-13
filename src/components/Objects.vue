<template>
  <div v-if="kind == 'multiple'">
    <div v-for="option in categories" class="item">
      <input type="checkbox" :id="option" v-model="choosen" v-bind:value="option">
      <label :for="option" class="title">{{ option }}</label>
    </div>
  </div>

  <div v-else-if="kind == 'single'">
    <select class="" v-model="selected">
      <option disabled value="">Sort option</option>
      <option v-for="option in categories">
        {{ option }}
      </option>
    </select>
  </div>

  <div v-else-if="kind == 'range'">
    <select class="" v-model="range.key">
      <option disabled value="">Range option</option>
      <option v-for="option in categories">
        {{ option }}
      </option>
    </select>

    <input type="date" v-model="range.start">
    <input type="date" v-model="range.ende">
  </div>
</template>

<script>
export default {
  name: "Objects",
  data() {
    return {
      choosen: this.categories,
      selected: '',
      range: {}
    }
  },
  props: {
    modelValue: [Object, Array, String],
    categories: Array,
    kind: String,
  },
  emits: ['update:modelValue'],
  watch: {
    choosen() {
      // let find = this.choosen.length == 0 ? this.categories : this.choosen
      this.$emit('update:modelValue', this.choosen)
    },
    selected() {
      this.$emit('update:modelValue', this.selected)
    },
    range: {
      handler() {
        this.$emit('update:modelValue', this.range)
      },
      deep: true
    },
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/app.scss';

.title {
  text-transform: capitalize;
}

.item {
  display: inline-block;
}
input[type="checkbox"] {
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
