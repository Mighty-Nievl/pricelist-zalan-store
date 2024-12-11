// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',
  router: {
    base: '/pricelist-zalan-store', // Ganti dengan nama repository GitHub Anda
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/public/main.css'],
  modules: ['@nuxtjs/sitemap', '@nuxtjs/color-mode'],
  nitro: {
    preset: 'github_pages'
  },
})