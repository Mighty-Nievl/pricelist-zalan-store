// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/public/main.css'],
  modules: ['@nuxtjs/sitemap', '@nuxtjs/color-mode'],
  nitro: {
    preset: 'github_pages'
  },
  devServer: {
    host: 'https://mighty-nievl.github.io/pricelist-zalan-store', // Ganti dengan alamat yang diinginkan
  }
})