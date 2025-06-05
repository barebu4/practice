import svgLoader from 'vite-svg-loader'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/scripts',
    'nuxt-svgo']
    ,
  svgo: {
    svgoConfig: {
      plugins: [
        { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
        { name: 'removeDimensions', active: true }, // Убирает width/height
      ]
    }
  },
  vite: {
    plugins: [svgLoader()]
  },

  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  css: [
  '@@/node_modules/bootstrap/dist/css/bootstrap.min.css'],

  scripts: [
  { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js', body: true }
  ],
})