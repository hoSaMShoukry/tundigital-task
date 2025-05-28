// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
   app: {
    pageTransition: { name: 'fade', mode: 'out-in' }
  },
  devtools: { enabled: true }
})
