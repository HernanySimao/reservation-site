// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Reserva de Restaurante",
      meta: [
        { charset: "utf-8" },
        { name: "author", content: "Hernany Simão" },
        { name: "keyword", content: "Reserva de Restaurante" },
        { name: "description", content: "Reserva de Restaurante" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'og:title', property: 'og:title', content: 'Reserva de Restaurante' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Reserva de Restaurante' },
        { property: 'og:description', content: 'Reserva de Restaurante' },
        { hid: 'og:url', property: 'og:url', content: './' },
        { hid: 'og:image', property: 'og:image', content: `./favicon.ico` },
        { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: `./favicon.ico` },
        { property: 'og:locale', content: 'pt_AO' }
      ],
      link: [
        { rel: "icon", href: "/logo.ico" }
      ],
      script: [
        {
          type: "text/javascript",
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        },
      ]
    },
  },

  css: [
    '~/assets/sass/main.sass'
  ],

  modules: [
    "@nuxt/image",
    "@nuxt/content",
  ],

  runtimeConfig: {
    app: {
      API: process.env.API_URL + '/api/v1/',
    }
  },

  devtools: { enabled: true },
  ssr: false,
  compatibilityDate: '2025-01-15',
})