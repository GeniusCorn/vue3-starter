<script setup lang="ts"></script>

<template>
  <div flex justify-between gap-4 text-xl>
    <a
      icon-btn
      href="https://vue3-starter.nicecorn.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div i-tabler-network />
    </a>

    <a icon-btn href="mailto:hi@nicecorn.com">
      <div i-tabler-mail />
    </a>

    <a
      icon-btn
      rel="noreferrer"
      target="_blank"
      href="https://github.com/GeniusCorn/vue3-starter
    "
    >
      <div i-tabler-brand-github />
    </a>
  </div>

  <div text-xs text-slate-500>
    <span>
      Powered by
      <a text-slate-500 hover:opacity-50 href="https://github.com/GeniusCorn"
        >GeniusCorn
      </a></span
    >
  </div>
</template>

<style scoped></style>
