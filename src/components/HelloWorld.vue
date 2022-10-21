<script setup lang="ts">
const count = $ref(0)
</script>

<template>
  <div>{{ count }}</div>
  <button @click="count += 1">add</button>
</template>

<style scoped></style>
