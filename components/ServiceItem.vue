<template>
  <div class="col-md-6">
    <div class="p-4 border rounded-3 h-100">
      <h5 class="mb-2"><span class="bi bi-check2-circle"></span> {{ title }}</h5>
      <p class="text-secondary mb-0">{{ desc }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({ title: String, desc: String })
</script>
