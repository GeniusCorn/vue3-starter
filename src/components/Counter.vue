<script setup lang="ts">
const props = defineProps<{
  count: number
}>()

const count = ref(props.count)

function increment() {
  count.value = count.value + 1
}
</script>

<template>
  <div flex="~ row" gap-4>
    <div data-test="counter">
      count: {{ count }}
    </div>
    <button @click="increment">
      add
    </button>
  </div>
</template>

<style scoped></style>
