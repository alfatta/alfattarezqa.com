<script setup lang="ts">
const { data: blogs } = await useAsyncData(() => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .all()
})

useSeoMeta({
  title: 'Blog'
})
</script>

<template>
  <main class="mt-16">
    <Section title="Blog">
      <div class="space-y-4">
        <CardBlog v-for="(blog, i) in blogs" :key="i" :data="blog" />
      </div>
    </Section>
  </main>
</template>