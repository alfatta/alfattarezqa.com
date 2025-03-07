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
      htmlAttrs: {
        lang: "en",
      },
      title: "Alfatta Rezqa",
      link: [
        {
          rel: "apple-touch-icon-precomposed",
          href: "/img/apple-touch-icon-57x57.png",
          sizes: "57x57",
        },
        {
          rel: "apple-touch-icon-precomposed",
          href: "/img/apple-touch-icon-60x60.png",
          sizes: "60x60",
        },
        {
          rel: "apple-touch-icon-precomposed",
          href: "/img/apple-touch-icon-72x72.png",
          sizes: "72x72",
        },
        {
          rel: "apple-touch-icon-precomposed",
          href: "/img/apple-touch-icon-76x76.png",
          sizes: "76x76",
        },
        {
          rel: "apple-touch-icon-precomposed",
          href: "/img/apple-touch-icon-114x114.png",
          sizes: "114x114",
        },
        {
          rel: "apple-touch-icon-precomposed",
          href: "/img/apple-touch-icon-120x120.png",
          sizes: "120x120",
        },
        {
          rel: "apple-touch-icon-precomposed",
          href: "/img/apple-touch-icon-144x144.png",
          sizes: "144x144",
        },
        {
          rel: "apple-touch-icon-precomposed",
          href: "/img/apple-touch-icon-152x152.png",
          sizes: "152x152",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/img/favicon-196x196.png",
          sizes: "196x196",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/img/favicon-96x96.png",
          sizes: "96x96",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/img/favicon-32x32.png",
          sizes: "32x32",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/img/favicon-16x16.png",
          sizes: "16x16",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/img/favicon-128.png",
          sizes: "128",
        },
      ],
      meta: [
        { name: "application-name", content: "Alfatta Rezqa" },
        { name: "msapplication-TileColor", content: "#FFFFFF" },
        { name: "msapplication-TileImage", content: "/img/mstile-144x144.png" },
        {
          name: "msapplication-square70x70logo",
          content: "/img/mstile-70x70.png",
        },
        {
          name: "msapplication-square150x150logo",
          content: "/img/mstile-150x150.png",
        },
        {
          name: "msapplication-wide310x150logo",
          content: "/img/mstile-310x150.png",
        },
        {
          name: "msapplication-square310x310logo",
          content: "/img/mstile-310x310.png",
        },
        {
          name: "description",
          content:
            "Alfatta Rezqa is highly motivated software developer with >7 years of experience in designing and implementing software solutions. He's dedicated to build high-quality software.",
        },
      ],
    },
  },

  imports: {
    dirs: ["./constants"],
  },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxtjs/sitemap"],

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