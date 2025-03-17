<script setup lang="ts">
useSeoMeta({
  titleTemplate: (t?: string) => t ? `${t} | Alfatta Rezqa` : 'Alfatta Rezqa - Software Developer',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
