<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <section class="mt-12">
    <div class="flex justify-between items-center mb-4">
      <h2 v-if="title" class="font-medium text-lg">
        {{ title }}
      </h2>
      <slot name="action"></slot>
    </div>
    <slot></slot>
  </section>
</template>