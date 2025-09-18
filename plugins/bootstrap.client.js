export default defineNuxtPlugin(() => {
  // Importă bootstrap JS doar pe client
  if (process.client) {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }
})
