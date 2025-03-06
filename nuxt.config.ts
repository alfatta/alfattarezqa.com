// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  srcDir: "./src",
  ssr: true,
  typescript: {
    typeCheck: true,
  },

  app: {
    head: {
      title: "Alfatta Rezqa",
    },
  },

  imports: {
    dirs: ["./constants"],
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],

  tailwindcss: {
    viewer: false,
    config: {
      theme: {
        fontFamily: {
          sans: ["IBM Plex Sans", "sans-serif"],
        },
      },
    },
  },

  googleFonts: {
    families: {
      "IBM Plex Sans": "100..700",
    },
  },
});
