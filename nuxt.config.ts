// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    rootId: 'cottage',
    rootTag: 'div',
    buildAssetsDir: 'build',
    // Global page headers
    head: {
      title: 'Коттеджи',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [],
      style: [],
      script: [],
      noscript: []
    }
  },

  // Global CSS
  css: ['~/assets/sass/bootstrap.sass'],

  // Plugins to run before rendering page
  plugins: [
    { src: '~/plugins/bootstrap.client.ts', mode: 'client' }
  ],

  // Auto import components
  components: {
    global: true,
    dirs: ['~/components']
  },

  // Modules
  modules: [
    // Simple usage
    '@nuxtjs/eslint-module',
    // With options
    ['@nuxtjs/eslint-module', { /* module options */ }]
  ]
})
