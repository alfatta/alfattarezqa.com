import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  srcDir: "./src",
  ssr: true,
  typescript: {
    typeCheck: true,
  },

  site: { url: "alfattarezqa.com", name: "Alfatta Rezqa - Software Developer" },

  sitemap: {
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 0.5,
      changefreq: "weekly",
    },
  },

  imports: {
    dirs: ["./constants"],
  },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxtjs/sitemap", "@nuxt/content"],

  vite: {
    plugins: [tailwindcss()],
  },

  content: {
    build: {
      markdown: {
        remarkPlugins: {
          "remark-reading-time": {},
        },
      },
    },
  },
});
