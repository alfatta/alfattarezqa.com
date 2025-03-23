<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  readingTime?: string
  postTime?: string
}>()
</script>

<template>
  <div class="font-sans h-full w-full flex items-start justify-start bg-white border-l-8 border-neutral-700">
    <div class="flex items-start justify-start h-full">
      <div class="flex flex-col justify-between w-full h-full">
        <div class="flex flex-col p-20">
          <h1 class="text-7xl">
            {{ title }}
          </h1>
          <p class="text-2xl">
            <span>{{ description }}</span>
            <span v-if="postTime"> - {{ postTime }}</span>
            <span v-if="readingTime"> - {{ readingTime }}</span>
          </p>
        </div>
        <p class="text-2xl pb-10 px-20 font-thin">
          alfattarezqa.com
        </p>
      </div>
    </div>
  </div>
</template>
