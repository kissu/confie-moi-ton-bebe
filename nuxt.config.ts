// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/icon', '@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/fonts'],
  css: ['~/assets/styles/fonts.css'],
  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      autoSubfolderIndex: false,
      crawlLinks: true,
    },
  },
});
