<script setup lang="ts">
const { data: blogs } = await useAsyncData(() => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .all()
})

useSeoMeta({
  title: 'Blog'
})

defineOgImageComponent('Base', {
  title: 'Blog',
  description: "Explore Alfatta Rezqa's blog for insightful articles on programming, devOps, etc. Learn from detailed guides and tutorials.",
  ogTitle: 'Blog - Alfatta Rezqa',
  ogDescription: "Explore Alfatta Rezqa's blog for insightful articles on programming, devOps, etc. Learn from detailed guides and tutorials.",
  twitterTitle: 'Blog - Alfatta Rezqa',
  twitterDescription: "Explore Alfatta Rezqa's blog for insightful articles on programming, devOps, etc. Learn from detailed guides and tutorials.",
  twitterCreator: '@alfattarezqa',
  twitterCard: 'summary_large_image',
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