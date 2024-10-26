// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image'],
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  image: {
    cloudflare: {
      baseURL: 'https://confie-moi-ton-bebe.pages.dev/',
    },
  },
});
