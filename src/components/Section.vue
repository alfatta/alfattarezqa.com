<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <section class="mt-12">
    <div class="flex justify-between items-center">
      <h3 v-if="title" class="mb-4 font-medium text-lg">
        {{ title }}
      </h3>
      <slot name="action"></slot>
    </div>
    <slot></slot>
  </section>
</template>