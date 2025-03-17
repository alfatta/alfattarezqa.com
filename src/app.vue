<script setup lang="ts">
useSeoMeta({
  titleTemplate: (t?: string) => t ? `${t} - Alfatta Rezqa` : 'Alfatta Rezqa - Software Developer',
})
useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    { rel: "icon", type: "image/png", href: "/favicon-16x16.png", sizes: "16x16" },
    { rel: "icon", type: "image/png", href: "/favicon-32x32.png", sizes: "32x32" },
    { rel: "icon", type: "image/png", href: "/favicon-48x48.png", sizes: "48x48" },
    { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
    { rel: "icon", type: "image/png", href: "/favicon-128x128.png", sizes: "128x128" },
    { rel: "icon", type: "image/png", href: "/favicon-196x196.png", sizes: "196x196" },
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "icon", href: "/favicon.ico" },
  ],
  script: [
    {
      src: "https://cloud.umami.is/script.js",
      defer: "true",
      "data-website-id": "55da3b97-d37c-4a1c-b3d2-44a2d037e213",
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
