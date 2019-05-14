module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'test_job',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Test for work' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }      
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.2.5/polyfill.min.js' }
    ]
  },
  /*
  ** CSS chunks
  */
  css: [
    {src: "~/assets/styles/reset.css", lang: 'css'}, // reset and global styles
    {src: "~/assets/styles/mq_320.css", lang: 'css'}, 
    {src: "~/assets/styles/mq_480.css", lang: 'css'}, 
    {src: "~/assets/styles/mq_600.css", lang: 'css'}, 
    {src: "~/assets/styles/mq_800.css", lang: 'css'}, 
    {src: "~/assets/styles/mq_960.css", lang: 'css'}, 
    {src: "~/assets/styles/mq_1024.css", lang: 'css'}, 
    {src: "~/assets/styles/mq_1280.css", lang: 'css'} 
  ],
  /*
  ** Customize the progress bar color
  */  
  loading: { color: '#F16536' },
  
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/router',
    '@nuxtjs/axios',
    [
      'nuxt-mq',
      {
        // Default breakpoint for SSR
        defaultBreakpoint: 'm320',
        breakpoints: {
          m320: 480,
          m480: 600,
          m600: 800,
          m800: 960,
          m960: 1024,
          m1024: 1280,
          large: Infinity
        }
      }
    ]
  ],
  build: {

    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
  
}

