<template>
  <footer class="footer-modern">
    <div class="container py-5">
      <!-- Badges de încredere -->
      <div class="trust-row d-flex flex-wrap gap-2 gap-md-3 mb-4" aria-label="Asigurări de încredere">
        <span class="badge-soft"><i class="bi bi-shield-check me-1"></i> Membru Barou</span>
        <span class="badge-soft"><i class="bi bi-award me-1"></i> 10+ ani experiență</span>
        <span class="badge-soft"><i class="bi bi-lightning-charge me-1"></i> Răspuns în aceeași zi</span>
        <span class="badge-soft"><i class="bi bi-people me-1"></i> Client-first</span>
      </div>

      <div class="row footer-grid">
        <!-- 1) Cabinet -->
        <div class="col-lg-4">
          <NuxtLink to="/" aria-label="Acasă" class="d-inline-block">
            <img src="/logo.png" alt="Sara Mahmoud - Logo" class="brand-logo" />
          </NuxtLink>
          <p class="text-muted small mt-3">
            Oferim consultanță și reprezentare profesionistă, cu soluții clare și rapide în drept civil,
            comercial, muncii și contravențional.
          </p>
          <div class="d-flex gap-2 mt-3 socials" aria-label="Rețele sociale">
            <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
            <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
          </div>
        </div>

        <!-- 2) Domenii de practică + Linkuri utile -->
        <div class="col-6 col-lg-4">
          <h6 class="fw-bold mb-3">Domenii de practică</h6>
          <ul class="list-unstyled small practica-grid m-0" role="list">
            <li><NuxtLink to="/servicii#penal">Drept penal</NuxtLink></li>
            <li><NuxtLink to="/servicii#civil">Drept civil</NuxtLink></li>
            <li><NuxtLink to="/servicii#comercial">Drept comercial</NuxtLink></li>
            <li><NuxtLink to="/servicii#munca">Dreptul muncii</NuxtLink></li>
            <li><NuxtLink to="/servicii#contraventional">Contravențional</NuxtLink></li>
            <li><NuxtLink to="/servicii#executare">Executare silită</NuxtLink></li>
            <li><NuxtLink to="/servicii#imobiliar">Imobiliar</NuxtLink></li>
          </ul>

          <h6 class="fw-bold mt-4 mb-2">Linkuri utile</h6>
          <ul class="list-unstyled small m-0" role="list">
            <li><NuxtLink to="/">Acasă</NuxtLink></li>
            <li><NuxtLink to="/despre">Despre</NuxtLink></li>
            <li><NuxtLink to="/cazuri">Cazuri</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            <li><NuxtLink to="/politica-confidentialitate">Politica de confidențialitate</NuxtLink></li>
            <li><NuxtLink to="/termeni-conditii">Termeni și condiții</NuxtLink></li>
          </ul>
        </div>

        <!-- 3) Contact extins -->
        <div class="col-6 col-lg-4">
          <h6 class="fw-bold mb-3">Contact</h6>
          <ul class="list-unstyled small" role="list">
            <li class="mb-2 d-flex align-items-start">
              <i class="bi bi-geo-alt text-primary me-2"></i>
              <a :href="mapsHref" target="_blank" rel="noopener" class="text-decoration-none">{{ address }}</a>
            </li>
            <li class="mb-2 d-flex align-items-center">
              <i class="bi bi-telephone text-primary me-2"></i>
              <a :href="`tel:${phone}`" class="text-decoration-none">{{ phone }}</a>
            </li>
            <li class="mb-2 d-flex align-items-center">
              <i class="bi bi-envelope text-primary me-2"></i>
              <a :href="`mailto:${email}`" class="text-decoration-none">{{ email }}</a>
            </li>
            <li class="mb-2 d-flex align-items-start">
              <i class="bi bi-clock text-primary me-2"></i>
              <span>
                Luni – Vineri: 09:00 – 18:00<br />
                Sâmbătă – Duminică: Închis
              </span>
            </li>
            <li class="mb-2 d-flex align-items-start">
              <i class="bi bi-translate text-primary me-2"></i>
              <span>Română, Engleză (EN), Arabă (AR)</span>
            </li>
            <li class="d-flex align-items-start">
              <i class="bi bi-info-circle text-primary me-2"></i>
              <span>Prin programare. Consultații online disponibile.</span>
            </li>
          </ul>

          <div class="d-flex gap-2 mt-2 flex-wrap">
            <NuxtLink to="/contact" class="btn btn-primary btn-sm pill shadow-sm">
              <i class="bi bi-calendar-check me-1"></i> Programează
            </NuxtLink>
            <a v-if="safePhone" :href="`https://wa.me/${safePhone}`" target="_blank" rel="noopener" class="btn btn-outline-primary btn-sm pill">
              <i class="bi bi-whatsapp me-1"></i> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <!-- separator fade -->
      <div class="fade-sep my-4" aria-hidden="true"></div>

      <!-- sub-footer -->
      <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 small text-muted">
        <span>© {{ new Date().getFullYear() }} {{ firmName }} — Toate drepturile rezervate</span>
        <div class="d-flex align-items-center gap-3">
          <span class="lll">###</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
const cfg = useRuntimeConfig().public

const firmName = cfg.firmName || 'Sara Mahmoud'
const phone    = cfg.phone    || '+40 728 608 060'
const email    = cfg.email    || 'contact@saramahmoud.ro'
const address  = cfg.address  || 'Str. Exemplu 10, București'

const safePhone = computed(() => (phone ? phone.replace(/\D/g, '') : ''))
const mapsHref  = computed(() =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
)
</script>

<style scoped>
.footer-modern{
  background:#fff;
  box-shadow: 0 -10px 28px rgba(0,0,0,.06);
  border-top: 1px solid rgba(0,0,0,.05);
}

/* badges trust */
.trust-row .badge-soft{
  display:inline-flex; align-items:center; gap:.35rem;
  padding:.35rem .6rem; border:1px solid #e9edf3; border-radius:999px;
  background:#fff; color:#0d6efd; font-weight:600; font-size:.8rem;
  box-shadow: 0 1px 2px rgba(16,24,40,.06);
}

/* brand */
.brand-logo{ height:80px; border-radius:14px; box-shadow: 0 8px 20px rgba(13,110,253,.15) }

/* linkuri */
.footer-modern a{ color:#495057; text-decoration:none; transition: color .2s ease, transform .2s ease }
.footer-modern a:hover{ color:#0d6efd; transform: translateX(1px) }

/* social glossy */
.socials a{
  width: 38px; height: 38px; display:flex; align-items:center; justify-content:center;
  border-radius: 12px; border:1px solid #e9edf3; color:#444; background:#fff;
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease, color .2s ease;
}
.socials a:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(13,110,253,.2);
  border-color:#0d6efd; color:#0d6efd;
}

/* butoane */
.pill{ border-radius: 999px }
.btn-primary{
  background: linear-gradient(180deg,#0d6efd,#0b5ed7); border:0;
  box-shadow: 0 8px 18px rgba(13,110,253,.2);
}
.btn-primary:hover{ filter: brightness(1.07) }
.btn-outline-primary{ border-color: rgba(13,110,253,.45); color:#0d6efd }
.btn-outline-primary:hover{ background: rgba(13,110,253,.08); border-color:#0b5ed7; color:#0b5ed7 }

/* separator fade (aliniat pe container) */
.fade-sep{
  height:1px; margin-left:auto; margin-right:auto; width:min(100%,1140px);
  background: linear-gradient(to right,
    rgba(108,117,125,0) 0%,
    rgba(108,117,125,.5) 15%,
    rgba(108,117,125,.5) 85%,
    rgba(108,117,125,0) 100%
  );
}

/* metode de plată – chipuri simple */
.lll{
  display:inline-flex; align-items:center; justify-content:center;
  padding:.25rem .5rem; border:1px solid #e9edf3; border-radius:8px;
  background:#fff; color:#6c757d; font-weight:600; font-size:.8rem;
}

/* ===== Responsive „first row: Cabinet + Contact” ===== */

/* Desktop (≥992px): clasic 3 coloane */
@media (min-width: 992px){
  .brand-logo{ height: 84px }
}

/* Tablet & mobil (<992px): două coloane pe primul rând (Cabinet + Contact), apoi Domenii+Linkuri full-width */
@media (max-width: 991.98px){
  .brand-logo{ height: 64px }
  .footer-grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem 1rem;
  }
  .footer-grid > .col-lg-4:nth-child(1){ order: 1 }            /* Cabinet */
  .footer-grid > .col-lg-4:nth-child(3){ order: 2 }            /* Contact */
  .footer-grid > .col-lg-4:nth-child(2){ order: 3; grid-column: span 2 } /* Domenii + Linkuri */
}

/* XS (<576px): o coloană, elemente stivuite frumos */
@media (max-width: 575.98px){
  .brand-logo{ height: 56px }
  .footer-modern{ box-shadow: 0 -6px 18px rgba(0,0,0,.05) }
  .footer-grid{
    grid-template-columns: 1fr;
  }
  .footer-grid > .col-lg-4:nth-child(2){ grid-column: auto }
  .fade-sep{ width: 100% }
}

/* Domenii de practică – grid stabil (înlocuiește columns) */
.practica-grid{
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: .35rem .9rem;
}
@media (max-width: 575.98px){
  .practica-grid{ grid-template-columns: 1fr }
}

/* Accesibilitate */
.footer-modern a:focus-visible{
  outline: 2px solid rgba(13,110,253,.35);
  outline-offset: 2px;
  border-radius: 6px;
}

/* Trust-row: devine scroll orizontal dacă nu încape pe mobil */
@media (max-width: 767.98px){
  .trust-row{
    gap: .5rem; margin-bottom: 1.25rem;
    overflow-x: auto; -webkit-overflow-scrolling: touch; scroll-snap-type: x mandatory;
    padding-bottom: .25rem;
  }
  .trust-row .badge-soft{ white-space: nowrap; scroll-snap-align: start }
}
</style>
