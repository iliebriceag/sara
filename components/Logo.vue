<template>
  <div class="logo-monogram">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" height="100" preserveAspectRatio="xMidYMid meet" aria-label="SM monogram">
      <defs>
        <!-- Gradient brand -->
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0d6efd"/>
          <stop offset="100%" stop-color="#0a58ca"/>
        </linearGradient>
        <!-- Decupaj pentru S (negative space) -->
        <clipPath id="cutS">
          <path d="
            M 65,60
            C 65,45 80,35 100,35
            C 120,35 135,45 135,58
            C 135,66 130,72 120,76
            C 108,80 92,82 84,86
            C 74,90 70,96 70,104
            C 70,120 86,130 106,130
            C 124,130 140,122 140,110
            L 140,108
            C 138,118 122,126 106,126
            C 90,126 78,120 78,110
            C 78,103 83,99 96,95
            C 110,90 128,88 136,82
            C 146,74 148,66 148,58
            C 148,40 126,28 100,28
            C 76,28 57,41 57,58 Z"
          />
        </clipPath>
      </defs>

      <!-- Cerc de fundal -->
      <circle cx="100" cy="100" r="90" fill="url(#g)"/>

      <!-- M geometric alb -->
      <path d="M45 140 L45 70 L70 110 L100 70 L130 110 L155 70 L155 140"
            fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>

      <!-- „S” negativ: decupăm din cerc -->
      <g clip-path="url(#cutS)">
        <rect x="40" y="20" width="120" height="120" fill="#ffffff"/>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.logo-monogram svg {
  display: block;
  max-height: 100px;
  filter: drop-shadow(0 3px 8px rgba(0,0,0,.2));
  transition: transform .3s ease, filter .3s ease;
}
.logo-monogram svg:hover {
  transform: scale(1.06);
  filter: drop-shadow(0 6px 16px rgba(13,110,253,.35));
}
</style>
