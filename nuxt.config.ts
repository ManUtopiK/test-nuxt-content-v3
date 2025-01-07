// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['manutopiknuxt-content-v3'],

  content: {
    studio: {
      enabled: true
    }
  },

  devtools: { enabled: true }
})