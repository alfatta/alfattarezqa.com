<script setup lang="ts">
import type { BlogCollectionItem } from '@nuxt/content';
import dayjs from 'dayjs';

const { data } = defineProps<{
  data: BlogCollectionItem,
}>()

const readingTime = computed(() => {
  if (!data || !data.meta.readingTime) return '0 min reading'
  return (data.meta.readingTime as { text: string }).text
})

const postTime = computed(() => {
  if (!data) return ''
  return dayjs(data.date).format('D MMM')
})
</script>

<template>
  <NuxtLink :to="data.path"
    class="flex items-start group gap-4 text-slate-500 rounded-xl border border-slate-200 px-4 py-4 cursor-pointer hover:bg-slate-50 duration-300 transition-all">
    <img :src="data.image"
      class="h-20 w-20 rounded object-cover grayscale group-hover:grayscale-0 pointer-coarse:grayscale-0" />
    <div class="space-y-1.5">
      <p>{{ data.title }}</p>
      <p class="text-xs">
        {{ postTime }} | {{ readingTime }}
      </p>
      <p class="text-sm line-clamp-2">{{ data.description }}</p>
    </div>
  </NuxtLink>
</template>