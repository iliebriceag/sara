<template>
<section class="hero py-5">
  <div class="container">
    <div class="row align-items-center g-4">
      <!-- Col stânga -->
      <div class="col-lg-7">
        <h1 class="display-5 fw-bold">Apărarea drepturilor tale, cu seriozitate și rezultate.</h1>
        <p class="lead text-secondary">
          Consultanță juridică rapidă, reprezentare și soluții practice în litigii civile, comerciale,
          dreptul muncii și contravențional.
        </p>
        <div class="d-flex gap-2">
          <NuxtLink to="/contact" class="btn btn-primary btn-lg">
            <span class="bi bi-calendar-check"></span> Programează o consultanță
          </NuxtLink>
          <NuxtLink to="/servicii" class="btn btn-outline-primary btn-lg">
            <span class="bi bi-card-list"></span> Vezi serviciile
          </NuxtLink>
        </div>
        <div class="mt-3">
          <span class="badge badge-soft me-2 mb-2"><span class="bi bi-shield-lock"></span> Confidențialitate</span>
          <span class="badge badge-soft me-2 mb-2"><span class="bi bi-stopwatch"></span> Răspuns rapid</span>
          <span class="badge badge-soft mb-2"><span class="bi bi-trophy"></span> Cazuri câștigate</span>
        </div>

        <!-- Cardurile moderne în partea stângă -->
        <div class="row g-3 mt-4">
          <div class="col-6">
            <div class="info-card h-100">
              <i class="bi bi-award ico"></i>
              <h6 class="fw-bold mt-2">10+ ani</h6>
              <p class="text-muted small">Experiență solidă în consultanță juridică.</p>
            </div>
          </div>
          <div class="col-6">
            <div class="info-card h-100">
              <i class="bi bi-people ico"></i>
              <h6 class="fw-bold mt-2">500+ clienți</h6>
              <p class="text-muted small">Sute de cazuri rezolvate cu succes.</p>
            </div>
          </div>
          <div class="col-6">
            <div class="info-card h-100">
              <i class="bi bi-trophy ico"></i>
              <h6 class="fw-bold mt-2">Rezultate</h6>
              <p class="text-muted small">Procent ridicat de cazuri câștigate.</p>
            </div>
          </div>
          <div class="col-6">
            <div class="info-card h-100">
              <i class="bi bi-shield-check ico"></i>
              <h6 class="fw-bold mt-2">Membru Barou</h6>
              <p class="text-muted small">Respectăm standardele profesionale.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Col dreapta: imagine -->
      <div class="col-lg-5">
        <img class="img-fluid rounded shadow" src="../assets/img/sara.jpg" alt="Cabinet avocat">
      </div>
    </div>
  </div>
</section>

  <section class="py-5">
    <div class="container">
      <h2 class="section-title">Domenii de practică</h2>
      <div class="row g-4">
        <PracticeCard icon="bi-file-earmark-text" title="Drept civil" desc="Contracte, pretenții, succesiuni, răspundere civilă delictuală."/>
        <PracticeCard icon="bi-building" title="Drept comercial" desc="Societăți, due diligence, litigii comerciale."/>
        <PracticeCard icon="bi-people" title="Dreptul muncii" desc="Concedieri, conflicte de muncă, negocieri colective."/>
        <PracticeCard icon="bi-exclamation-octagon" title="Contravențional" desc="Contestații procese-verbale, amenzi."/>
      </div>
    </div>
  </section>

  <section class="py-5 bg-light">
    <div class="container">
      <div class="row align-items-center g-4">
        <div class="col-lg-7">
          <h3 class="fw-bold mb-2">Ai un caz urgent?</h3>
          <p class="mb-3 text-secondary">Trimite detaliile pe scurt și revenim în aceeași zi lucrătoare.</p>
        </div>
        <div class="col-lg-5 text-lg-end">
          <NuxtLink to="/contact" class="btn btn-primary btn-lg">
            <span class="bi bi-send"></span> Contact rapid
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  script: [{
    type: 'application/ld+json',
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": useRuntimeConfig().public.firmName,
      "address": useRuntimeConfig().public.address,
      "telephone": useRuntimeConfig().public.phone,
      "email": useRuntimeConfig().public.email,
      "areaServed": "Romania",
      "url": "https://exemplu.ro/"
    })
  }]
})
</script>
<style scoped>
.badge-soft {
  background: #e9f2ff;
  color: #0d6efd;
  font-weight: 500;
  border-radius: 30px;
  padding: .35rem .75rem;
}

/* carduri moderne */
.info-card {
  text-align: center;
  padding: 1.5rem 1rem;
  border: 1px solid #eef0f4;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 4px 14px rgba(16,24,40,.06);
  transition: transform .25s ease, box-shadow .25s ease;
}
.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 26px rgba(13,110,253,.18);
}
.info-card .ico {
  font-size: 1.8rem;
  color: #0d6efd;
}

/*  */
/* Desktop normal */
.btn span.bi {
  margin-right: .4rem;
}

/* Pe mobil iconul se pune deasupra textului */
@media (max-width: 767.98px) {
  .btn {
    display: flex;
    flex-direction: column; /* icon sus, text jos */
    align-items: center;
    justify-content: center;
    gap: .3rem; /* spațiu între icon și text */
    min-width: 120px; /* să nu devină prea mici */
    text-align: center;
    padding: .7rem 1rem;
  }

  .btn span.bi {
    margin-right: 0;   /* scoatem marginea din desktop */
    font-size: 1.5rem; /* icon puțin mai mare */
  }

  .d-flex.gap-2 {
    flex-wrap: wrap; /* ca să nu se suprapună dacă spațiul e mic */
    justify-content: center;
  }
}

</style>