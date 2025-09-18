export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      htmlAttrs: { lang: 'ro' },
      title: 'Sara Mahmoud | Avocat',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Asistență și reprezentare juridică. Drept civil, comercial, muncii, contravențional.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Cabinet Avocat' },
        { property: 'og:description', content: 'Consultanță juridică rapidă și profesionistă.' }
      ],
      link: [{ rel: 'canonical', href: 'https://exemplu.ro/' }]
    }
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '~/assets/css/main.css'
  ],
  plugins: [
    '~/plugins/bootstrap.client.js'
  ]
})
