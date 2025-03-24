import tailwindcss from "@tailwindcss/vite";
import { ABOUT } from "./src/constants/about";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  srcDir: "./src",
  ssr: true,
  typescript: {
    typeCheck: true,
  },

  site: {
    url: "alfattarezqa.com",
    name: `${ABOUT.NAME} - ${ABOUT.JOBTITLE}`,
    trailingSlash: true,
  },

  sitemap: {
    defaults: {
      lastmod: new Date().toISOString(),
      priority: 0.5,
      changefreq: "daily",
    },
    exclude: [
      "/_**",
      "/__**"
    ]
  },

  imports: {
    dirs: ["./constants"],
  },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxtjs/robots", "@nuxtjs/sitemap", "@nuxt/content", "nuxt-og-image"],

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

  robots: {
    blockNonSeoBots: true,
    blockAiBots: true,
  },
});