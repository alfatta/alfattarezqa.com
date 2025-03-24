<script setup lang="ts">
import dayjs from 'dayjs'

const route = useRoute()
const { data } = await useAsyncData(route.path, () => {
  return queryCollection('blog')
    .path(route.path)
    .first()
})

const { data: surround } = await useAsyncData('surround', () => {
  return queryCollectionItemSurroundings('blog', route.path)
    .order('date', 'ASC')
})

const readingTime = computed(() => {
  if (!data.value || !data.value.meta.readingTime) return '0 min reading'
  return (data.value.meta.readingTime as { text: string }).text
})

const postTime = computed(() => {
  if (!data.value) return ''
  return dayjs(data.value.date).format('D MMM YYYY, HH:mm')
})

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
  articleModifiedTime: dayjs(data.value?.lastUpdate).toISOString(),
  ogTitle: data.value?.title,
  ogDescription: data.value?.description,
  twitterTitle: data.value?.title,
  twitterDescription: data.value?.description,
  twitterCreator: '@alfattarezqa',
  twitterCard: 'summary_large_image',
})

defineOgImageComponent('Base', {
  title: data.value?.title,
  description: 'Alfatta Rezqa',
  readingTime,
  postTime,
})
</script>

<template>
  <main class="mt-16">
    <template v-if="data">
      <h2 class="text-2xl font-medium">{{ data.title }}</h2>
      <p class="text-sm mt-2 text-slate-400">
        {{ postTime }} | {{ readingTime }}
      </p>
      <article class="prose prose-slate">
        <ContentRenderer :value="data" />
      </article>

      <div class="grid grid-cols-2 gap-4 mt-12" v-if="surround">
        <NuxtLink :to="surround[0].path + '/'" v-if="surround[0]"
          class="border border-slate-200 rounded-xl px-4 py-2 hover:bg-slate-50">
          <p class="text-slate-400 text-sm">Previous Post</p>
          <p>{{ surround[0].title }}</p>
        </NuxtLink>
        <div v-else></div>
        <NuxtLink :to="surround[1].path + '/'" v-if="surround[1]"
          class="border border-slate-200 rounded-xl px-4 py-2 hover:bg-slate-50">
          <p class="text-slate-400 text-right text-sm">Next Post</p>
          <p class="text-right">{{ surround[1].title }}</p>
        </NuxtLink>
        <div v-else></div>
      </div>
    </template>
    <template v-else>
      <div class="empty-page">
        <h1>Page Not Found</h1>
        <p>Oops! The content you're looking for doesn't exist.</p>
        <NuxtLink to="/">Go back home</NuxtLink>
      </div>
    </template>
  </main>
</template>