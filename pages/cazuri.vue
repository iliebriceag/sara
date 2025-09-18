<template>
  <div class="container py-5">
    <h1 class="section-title">Studii de caz</h1>
    <p class="text-secondary mb-4">Câteva exemple reprezentative (anonymizate) ale soluțiilor obținute.</p>
    <div class="row g-4">
      <div v-for="(c, i) in cases" :key="i" class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">{{ c.title }}</h5>
            <p class="small text-muted mb-2">{{ c.area }}</p>
            <p class="card-text">{{ c.summary }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({ title: 'Studii de caz — Cabinet Avocat' })

const cases = [
  { title: 'Anulare proces-verbal contravenție', area: 'Contravențional', summary: 'Am obținut anularea PV pentru vicii de procedură…' },
  { title: 'Recuperare creanță comercială', area: 'Comercial', summary: 'Hotărâre favorabilă cu cheltuieli de judecată…' },
  { title: 'Contestarea deciziei de concediere', area: 'Dreptul muncii', summary: 'Reintegrare + salarii compensatorii…' }
]
</script>
