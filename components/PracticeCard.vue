<template>
  <div class="col-md-6 col-lg-3">
    <div class="card h-100 shadow-sm">
      <div class="card-body">
        <div class="display-6 mb-3"><span :class="`bi ${icon}`"></span></div>
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text text-secondary">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true }
})
</script>
