<template>
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
</template>

<style scoped>
main { min-height: 60vh; }
</style>
