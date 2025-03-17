<script setup lang="ts">
const { data: blogs } = await useAsyncData(() => {
  return queryCollection('blog')
    .order('date', 'DESC')
    .limit(3)
    .all()
})
</script>

<template>
  <main class="mt-16">
    <p class="text-slate-500 mt-8">
      Highly motivated software developer with +7 years of experience in designing and implementing software solutions
      with dedication to build high-quality software
    </p>

    <Section title="Tech Stack">
      <div class="flex gap-1.5 flex-wrap">
        <img v-for="({ img, title }, i) in techStacks" :key="i" :src="img" :alt="title" width="40" height="40"
          class="h-10 w-10 grayscale hover:grayscale-0 duration-300 transition-all cursor-pointer" />
      </div>
    </Section>

    <Section title="Work Experience">
      <ul class="space-y-4">
        <li
          class="sm:flex sm:justify-between text-slate-500 rounded-xl border border-slate-200 px-4 py-4 cursor-pointer hover:bg-slate-50 duration-300 transition-all"
          v-for="({ title, company, date }, i) in workExperiences" :key="i">
          <div>
            <p>{{ title }}</p>
            <p class="text-sm">{{ company }}</p>
          </div>
          <p class="text-sm">{{ date }}</p>
        </li>
      </ul>
    </Section>

    <Section title="Latest Blog">
      <template #action>
        <NuxtLink to="/blog" class="text-xs text-slate-500 hover:text-slate-600">
          See More →
        </NuxtLink>
      </template>
      <div class="space-y-4">
        <CardBlog v-for="(blog, i) in blogs" :key="i" :data="blog" />
      </div>
    </Section>

    <Section title="Contact">
      <div class="flex gap-3">
        <a href="https://linkedin.com/in/alfattarezqa" target="_blank"
          class="rounded-full bg-slate-200 hover:bg-slate-400 px-4 py-1 text-sm duration-300 transition-all">
          LinkedIn
        </a>
        <a href="https://instagram.com/alfattarezqa" target="_blank"
          class="rounded-full bg-slate-200 hover:bg-slate-400 px-4 py-1 text-sm duration-300 transition-all">
          Instagram
        </a>
        <a href="https://x.com/alfattarezqa" target="_blank"
          class="rounded-full bg-slate-200 hover:bg-slate-400 px-4 py-1 text-sm duration-300 transition-all">
          X
        </a>
        <a href="mailto:hi@alfattarezqa.com" target="_blank"
          class="rounded-full bg-slate-200 hover:bg-slate-400 px-4 py-1 text-sm duration-300 transition-all">
          Mail
        </a>
      </div>
    </Section>
  </main>
</template>