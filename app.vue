<script setup lang="ts">
const { data } = await useAsyncData('count', () => $fetch('/api/count'))
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>