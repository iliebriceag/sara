<template>
  <section class="contact-hero py-5">
    <div class="container">
      <div class="row align-items-start">
        <!-- Col stânga: informații -->
        <div class="col-lg-5">
          <h2 class="display-6 fw-bold mb-2">Hai să discutăm despre cazul tău</h2>
          <p class="text-muted mb-4">
            Trimite-ne câteva detalii și revenim rapid. Oferim consultanță juridică clară și practică.
          </p>

          <div class="d-flex flex-column gap-3">
            <!-- card info -->
            <div class="info-card d-flex align-items-center gap-3">
              <span class="ico"><i class="bi bi-geo-alt"></i></span>
              <div>
                <div class="label text-muted">Adresă</div>
                <a :href="mapsHref" target="_blank" class="value text-decoration-none">{{ address }}</a>
              </div>
            </div>
            <div class="info-card d-flex align-items-center gap-3">
              <span class="ico"><i class="bi bi-envelope"></i></span>
              <div>
                <div class="label text-muted">Email</div>
                <a :href="`mailto:${email}`" class="value text-decoration-none">{{ email }}</a>
              </div>
            </div>
            <div class="info-card d-flex align-items-center gap-3">
              <span class="ico"><i class="bi bi-telephone"></i></span>
              <div>
                <div class="label text-muted">Telefon</div>
                <a :href="`tel:${phone}`" class="value text-decoration-none">{{ phone }}</a>
              </div>
            </div>
            <div class="d-flex gap-2 mt-2">
              <a v-if="safePhone" :href="`https://wa.me/${safePhone}`" target="_blank" class="chip">
                <i class="bi bi-whatsapp"></i> WhatsApp
              </a>
              <a :href="`tel:${phone}`" class="chip">
                <i class="bi bi-telephone"></i> Sună acum
              </a>
            </div>

            <div class="d-flex gap-2 mt-3 socials">
              <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
              <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>

        <!-- Col dreapta: formular -->
        <div class="col-lg-7">
          <p class="text-muted mb-3">
            Suntem deschiși la discuții pentru consultanță, reprezentare sau colaborări.
          </p>
          <form class="contact-form" @submit.prevent="submit">
            <div class="row g-3">
              <div class="col-12">
                <label class="form-label small text-muted">Nume*</label>
                <input v-model.trim="form.name" type="text" class="form-control input-clean" required placeholder="Numele tău">
              </div>

              <div class="col-12">
                <label class="form-label small text-muted">Email*</label>
                <input v-model.trim="form.email" type="email" class="form-control input-clean" required placeholder="email@exemplu.ro">
              </div>

              <div class="col-12">
                <label class="form-label small text-muted">Localitate*</label>
                <input v-model.trim="form.location" type="text" class="form-control input-clean" required placeholder="Oraș / Localitate">
              </div>

              <div class="col-md-12">
                <label class="form-label small text-muted">Subiect*</label>
                <input v-model.trim="form.subject" type="text" class="form-control input-clean" required placeholder="Ex: acțiune în instanță">
              </div>

              <div class="col-12">
                <label class="form-label small text-muted">Mesaj*</label>
                <textarea v-model.trim="form.message" rows="5" class="form-control input-clean" required placeholder="Descrie pe scurt situația ta"></textarea>
              </div>

              <div class="col-12 d-flex align-items-center gap-3">
                <button class="btn btn-primary btn-cta" :disabled="loading">
                  <span v-if="!loading">Trimite</span>
                  <span v-else class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </button>
                <small v-if="ok" class="text-success"><i class="bi bi-check2-circle"></i> Mesaj trimis. Revenim rapid!</small>
                <small v-if="err" class="text-danger"><i class="bi bi-x-circle"></i> {{ err }}</small>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Hartă full-width -->
    <div class="map-wrap mt-5">
      <div class="container">
        <div class="map-card">
          <iframe
            :src="mapEmbed"
            style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'

const cfg = useRuntimeConfig().public
const firmName = cfg.firmName || 'Cabinet Avocat'
const phone = cfg.phone || '+40 728 608 060'
const email = cfg.email || 'contact@saramahmoud.ro'
const address = cfg.address || 'Str. Exemplu 10, București'

// sanitizare pentru WhatsApp (doar cifre)
const safePhone = computed(() => (phone ? phone.replace(/\D/g, '') : ''))
const mapsHref = computed(() =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
)
// Embed Google Maps (poți înlocui cu embed-ul exact al locației tale)
const mapEmbed = computed(() =>
  `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`
)

// formular simplu (demo)
const form = reactive({
  name: '',
  email: '',
  location: '',
  budget: '',
  subject: '',
  message: ''
})
const loading = ref(false)
const ok = ref(false)
const err = ref('')

const submit = async () => {
  loading.value = true; ok.value = false; err.value = ''
  try {
    // aici pui integrarea reală (Formspree/Mail API/backend)
    await new Promise(r => setTimeout(r, 800))
    ok.value = true
    Object.keys(form).forEach(k => form[k] = '')
  } catch (e) {
    err.value = 'A apărut o eroare. Încearcă din nou.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* fundal luminos cu „spotlight” albastru din stânga sus */
.contact-hero {
  background:
    radial-gradient(1200px 800px at -20% -20%, rgba(13,110,253,0.18), rgba(13,110,253,0.06) 40%, transparent 70%),
    linear-gradient(180deg,#ffffff 0%, #f8faff 100%);
}

/* carduri info stânga */
.info-card{
  padding: 12px 14px;
  border: 1px solid #eef0f4;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 4px 14px rgba(16,24,40,.06);
}
.info-card .ico{
  width: 42px; height: 42px; border-radius: 12px;
  background: rgba(13,110,253,.12);
  color: #0d6efd; display:flex; align-items:center; justify-content:center;
  font-size: 1.1rem;
}
.info-card .label{ font-size:.85rem }
.info-card .value{ color:#0d1b2a; font-weight:600 }

/* chip acțiuni */
.chip{
  display:inline-flex; align-items:center; gap:.4rem; padding:.45rem .7rem;
  border:1px solid #e9edf3; border-radius:999px; background:#fff; color:#212529; text-decoration:none;
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease, color .2s ease;
}
.chip:hover{
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(13,110,253,.16);
  border-color:#0d6efd; color:#0d6efd;
}

/* socials */
.socials a{
  width: 36px; height: 36px; display:flex; align-items:center; justify-content:center;
  border-radius: 10px; border:1px solid #e9edf3; color:#444; background:#fff;
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease, color .2s ease;
}
.socials a:hover{ transform: translateY(-2px); box-shadow: 0 8px 18px rgba(0,0,0,.08); border-color:#0d6efd; color:#0d6efd }

/* formular clean (linii subtile) */
.contact-form{
  background: #fff;
  border: 1px solid #eef0f4;
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 6px 18px rgba(16,24,40,.06);
}
.input-clean{
  border: 0;
  border-bottom: 1px solid #e9edf3;
  border-radius: 0;
  padding-left: 0;
  background: transparent;
}
.input-clean:focus{
  border-color: #0d6efd;
  box-shadow: 0 2px 0 0 #0d6efd;
}

/* buton CTA modern */
.btn-cta{
  border: 0;
  padding: .6rem 1.1rem;
  border-radius: 12px;
  background: linear-gradient(180deg,#0d6efd,#0b5ed7);
  box-shadow: 0 10px 22px rgba(13,110,253,.25);
}
.btn-cta:hover{ filter: brightness(1.06) }

/* hartă full-width în container, 100% pe lățime */
.map-card{
  border: 1px solid #eef0f4;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 26px rgba(16,24,40,.08);
}
.map-card iframe{
  width: 100%;
  height: 420px;
  display: block;
}

/* responsive fine-tune */
@media (max-width: 991.98px){
  .contact-form{ padding: 14px }
}


</style>
