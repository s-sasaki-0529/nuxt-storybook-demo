// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true,
  },
  ssr: false,
  app: {
    baseURL: "/",
    buildAssetsDir: "/_nuxt/",
    head: {
      title: "Nuxt Storybook Demo",
    },
  },
  imports: {
    autoImport: true,
  },
});
