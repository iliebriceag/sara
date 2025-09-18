<template>
  <header :class="[{ 'is-scrolled': scrolled }]">
    <!-- Top info -->
    <div class="top-info text-white">
      <div class="container d-flex justify-content-center align-items-center gap-2 py-1">
        <i class="bi bi-broadcast-pin"></i>
        <div class="ticker" aria-live="polite">
          <span class="ticker-text">
            Consultanță juridică prioritară · Răspuns garantat în aceeași zi · Prima discuție introductivă gratuită* · Expertiză dovedită în drept civil, comercial și al muncii · Soluții juridice clare și eficiente · Reprezentare profesionistă în instanță și mediere *
          </span>
        </div>
      </div>
    </div>

    <!-- Top contact -->
    <div class="top-contact">
      <div class="container d-flex justify-content-between align-items-center py-2 small flex-wrap gap-2">
        <div class="d-flex align-items-center flex-wrap gap-2 gap-md-3">
          <span class="chip"><i class="bi bi-telephone me-1"></i><a :href="`tel:${phone}`" class="text-decoration-none">{{ phone }}</a></span>
          <span class="chip d-none d-sm-inline"><i class="bi bi-envelope me-1"></i><a :href="`mailto:${email}`" class="text-decoration-none">{{ email }}</a></span>
          <span class="chip d-none d-md-inline"><i class="bi bi-geo-alt me-1"></i>{{ address }}</span>
        </div>
        <div class="d-flex align-items-center gap-2">
          <a href="#" class="social" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="social" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
          <a href="#" class="social" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
    </div>

    <!-- NAV -->
    <nav class="navbar navbar-expand-lg bg-white sticky-top modern-navbar">
      <div class="container">
        <NuxtLink class="navbar-brand fw-bold d-flex align-items-center gap-2" to="/" aria-label="Acasă">
          <img src="/logo.png" alt="Sara Mahmoud — Logo" class="brand-logo">
        </NuxtLink>

        <!-- Toggler custom (hamburger -> X) -->
        <button
          class="navbar-toggler nv-toggler d-block d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
          aria-controls="nav"
          aria-expanded="false"
          aria-label="Deschide meniul"
        >
          <span class="lines">
            <span></span><span></span><span></span>
          </span>
        </button>

        <div id="nav" class="collapse navbar-collapse">
          <!-- DESKTOP links + CTA -->
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center d-none d-lg-flex">
            <li class="nav-item"><NuxtLink class="nav-link" to="/">Acasă</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/servicii">Servicii</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/cazuri">Cazuri</NuxtLink></li>
            <li class="nav-item"><NuxtLink class="nav-link" to="/despre">Despre</NuxtLink></li>
            <li class="nav-item me-lg-2"><NuxtLink class="nav-link" to="/contact">Contact</NuxtLink></li>
          </ul>
          <div class="d-none d-lg-flex ms-lg-2 gap-2">
            <a :href="`tel:${phone}`" class="btn btn-outline-primary btn-sm"><i class="bi bi-telephone"></i> Sună</a>
            <NuxtLink to="/contact" class="btn btn-primary btn-sm btn-cta"><i class="bi bi-calendar-check"></i> Programează</NuxtLink>
          </div>

          <!-- MOBILE PANEL -->
          <div class="nv-mobile d-lg-none">
            <!-- linkuri in 2 coloane (jumătate/jumătate) -->
            <div class="nv-grid">
              <NuxtLink to="/" class="m-link" @click="closeNav"><i class="bi bi-house"></i> Acasă</NuxtLink>
              <NuxtLink to="/servicii" class="m-link" @click="closeNav"><i class="bi bi-card-list"></i> Servicii</NuxtLink>
              <NuxtLink to="/cazuri" class="m-link" @click="closeNav"><i class="bi bi-briefcase"></i> Cazuri</NuxtLink>
              <NuxtLink to="/despre" class="m-link" @click="closeNav"><i class="bi bi-person-lines-fill"></i> Despre</NuxtLink>
              <NuxtLink to="/contact" class="m-link" @click="closeNav"><i class="bi bi-envelope-open"></i> Contact</NuxtLink>
              <a :href="`tel:${phone}`" class="m-link" @click="closeNav"><i class="bi bi-telephone"></i> Sună</a>
            </div>

            <!-- separator -->
            <div class="nv-sep"></div>

            <!-- Contact & social jos în meniu -->
            <div class="nv-contact">
              <a :href="`tel:${phone}`" class="chip w-100"><i class="bi bi-telephone me-1"></i>{{ phone }}</a>
              <a :href="`mailto:${email}`" class="chip w-100"><i class="bi bi-envelope me-1"></i>{{ email }}</a>
              <div class="addr small text-muted d-flex align-items-start gap-2 mt-2">
                <i class="bi bi-geo-alt text-primary"></i><span>{{ address }}</span>
              </div>
              <div class="d-flex gap-2 mt-2">
                <a href="#" class="social"><i class="bi bi-facebook"></i></a>
                <a href="#" class="social"><i class="bi bi-linkedin"></i></a>
                <a href="#" class="social"><i class="bi bi-instagram"></i></a>
              </div>
            </div>

            <!-- CTA mare pe mobil -->
            <NuxtLink to="/contact" class="btn btn-primary w-100 mt-3 pill" @click="closeNav">
              <i class="bi bi-calendar-check"></i> Programează consultanță
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
const cfg = useRuntimeConfig().public
const phone = cfg.phone || '+40 728 608 060'
const email = cfg.email || 'contact@saramahmoud.ro'
const address = cfg.address || 'Str. Exemplu 10, București'

const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 8 }

const closeNav = () => {
  const el = document.getElementById('nav')
  if (!el) return
  try {
    const bs = window.bootstrap
    if (bs?.Collapse) {
      const inst = bs.Collapse.getInstance(el) || new bs.Collapse(el, { toggle: false })
      inst.hide()
    } else {
      // fallback: scoatem clasa show
      el.classList.remove('show')
      document.querySelector('[data-bs-target="#nav"]')?.setAttribute('aria-expanded','false')
    }
  } catch {}
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

// expunem pentru template
defineExpose({ closeNav })
</script>

<style scoped>
:root{
  --brand:#0d6efd; --brand-600:#0b5ed7; --ink:#0d1b2a; --muted:#667085; --stroke:#e6e9ef;
  --glass: blur(10px) saturate(120%); --shadow-sm: 0 1px 2px rgba(16,24,40,.06);
  --shadow-md: 0 10px 24px rgba(16,24,40,.10), 0 2px 8px rgba(16,24,40,.06);
}
/* scoatem conturul și shadow-ul default Bootstrap la toggler */
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler:focus-visible {
  outline: none !important;
  box-shadow: none !important;
}

/* --- top info & ticker (existente) --- */
.top-info{ background: linear-gradient(90deg,#0d6efd,#0a58ca,#0d6efd); background-size:200% 100%; animation:gradMove 18s ease-in-out infinite; font-size:.92rem }
@keyframes gradMove{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.ticker{ overflow:hidden; width: min(100%,1270px); white-space: nowrap }
.ticker-text{ display:inline-block; padding-left:100%; animation:ticker 36s linear infinite }
@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-100%)}}
@media (prefers-reduced-motion: reduce){ .top-info{animation:none} .ticker-text{animation:none; padding-left:0} }

/* contact bar */
.top-contact{ position:relative; backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);}
.top-contact::after{
  content:""; position:absolute; bottom:0; left:50%; transform:translateX(-50%);
  width:min(100%,1340px); height:1px;
  background:linear-gradient(to right, rgba(108,117,125,0) 0%, rgba(108,117,125,.2) 15%, rgba(108,117,125,.2) 85%, rgba(108,117,125,0) 100%);
  pointer-events:none;
}
.chip{ display:inline-flex; align-items:center; gap:.35rem; padding:.35rem .6rem; border:1px solid var(--stroke); border-radius:999px; background:#fff; box-shadow:var(--shadow-sm) }
.chip i{ color:var(--brand) }
.social{ display:inline-flex; align-items:center; justify-content:center; width:34px; height:34px; border-radius:10px; border:1px solid var(--stroke); background:#fff; color:#111; transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease }
.social:hover{ transform:translateY(-2px); box-shadow:var(--shadow-md); border-color:rgba(13,110,253,.35); color:var(--brand) }

/* navbar */
.modern-navbar{ backdrop-filter: var(--glass); -webkit-backdrop-filter: var(--glass); background: rgba(255,255,255,.85)!important; transition: box-shadow .25s ease, background .25s ease, transform .25s ease }
.brand-logo{ max-height:50px }
.nav-link{ font-weight:600; color:#344054 !important; border-radius:10px; padding:.5rem .75rem !important; transition: color .2s, background .2s, transform .2s }
.nav-link:hover{ background: rgba(13,110,253,.08); color:var(--brand) !important; transform: translateY(-1px) }
.is-scrolled .modern-navbar{ box-shadow: 0 6px 24px rgba(16,24,40,.12); background: rgba(255,255,255,.92)!important }

/* --- TOGGLER modern (hamburger -> X) --- */
/* Buton toggler */
.nv-toggler {
  border: none;
  padding: .6rem;
  border-radius: 12px;
  background: transparent;
  transition: background .25s ease, transform .25s ease;
  display: flex;              /* facem flex */
  align-items: center;        /* centrare verticală */
  justify-content: center;    /* centrare orizontală */
  width: 44px;                /* dimensiuni fixe elegante */
  height: 44px;
}

/* Hover & active */
.nv-toggler:hover {
  background: rgba(13,110,253,.08);
  transform: scale(1.05);
}
.nv-toggler:active {
  background: rgba(13,110,253,.15);
  transform: scale(0.95);
}

/* Ascundem iconul default */
.nv-toggler .navbar-toggler-icon { display: none }

/* Container linii */
.nv-toggler .lines {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 24px;
  height: 18px;
}

/* Liniile propriu-zise */
.nv-toggler .lines span {
  display: block;
  height: 3px;
  width: 100%;
  background: linear-gradient(90deg, #0d6efd, #0b5ed7);
  border-radius: 3px;
  transition: transform .35s cubic-bezier(.68,-0.55,.27,1.55),
              opacity .25s ease,
              width .25s ease;
}

/* Animația burger -> X */
.nv-toggler[aria-expanded="true"] .lines span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.nv-toggler[aria-expanded="true"] .lines span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.nv-toggler[aria-expanded="true"] .lines span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}


/* --- PANOU MOBIL --- */
.nv-mobile{
  width:100%; margin-top: .75rem;
  background: rgba(255,255,255,.9);
  backdrop-filter: blur(10px) saturate(120%);
  -webkit-backdrop-filter: blur(10px) saturate(120%);
  border: 1px solid #e9edf3;
  border-radius: 16px;
  padding: 14px;
  box-shadow: 0 16px 34px rgba(16,24,40,.12);
}

/* grid 2 coloane pentru linkuri mobile */
.nv-grid{
  display:grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: .6rem;
}
.m-link{
  display:flex; align-items:center; gap:.5rem; padding:.7rem .85rem;
  border:1px solid #eef0f4; border-radius:12px; background:#fff; color:#0d1b2a; text-decoration:none;
  font-weight:600;
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease, color .2s ease;
}
.m-link i{ color:#0d6efd }
.m-link:hover{ transform: translateY(-2px); box-shadow: 0 8px 18px rgba(13,110,253,.14); border-color:#0d6efd; color:#0d6efd }

/* separator si contact in panou */
.nv-sep{ height:1px; margin: 12px 0; background: linear-gradient(to right, rgba(108,117,125,0), rgba(108,117,125,.35), rgba(108,117,125,0)) }
.nv-contact .chip{ margin-top: .4rem }

/* CTA mobil */
.pill{ border-radius:999px }

/* mici ajustări */
@media (max-width: 991.98px){
  .ticker{ width: 100% }
}
</style>
