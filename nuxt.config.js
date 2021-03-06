export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'synapse-info-demo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/common.js',
    '~/plugins/day.js',
    '~/plugins/constants.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-microcms-module"],
  microcms: {
    options: {
      serviceDomain: "syninfo",
      apiKey: "9e3dcedc971b4d03a93e7b70e810395c7cc0",
    },
    mode: process.env.NODE_ENV === "production" ? "server" : "all",
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/info/page/:p',
        component: resolve(__dirname, 'pages/info/index.vue'),
        name: 'information list page',
      })
      routes.push({
        path: '/info/archives/:yearMonth/page/:p',
        component: resolve(__dirname, 'pages/info/archives/_yearMonth.vue'),
        name: 'information month archive list page',
      })
      routes.push({
        path: '/info/maintenance/page/:p',
        component: resolve(__dirname, 'pages/info/maintenance/index.vue'),
        name: 'maintenance list page',
      })
      routes.push({
        path: '/info/maintenance/archives/:yearMonth/page/:p',
        component: resolve(__dirname, 'pages/info/maintenance/archives/_yearMonth.vue'),
        name: 'maintenance month archive list page',
      })
    },
  },
}
