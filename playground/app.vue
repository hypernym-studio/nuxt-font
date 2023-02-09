<template>
  <div>
    <h1 class="font-aspekta">Nuxt Fonty</h1>
  </div>
</template>

<script setup lang="ts">
import { useFont } from '../src/runtime/composables'

useFont([
  {
    src: '/fonts/AspektaVF.woff2',
    family: 'Aspekta Variable',
    fallback: ['sans-serif'],
    weight: '100 900',
    class: 'font-aspekta'
  }
])
</script>

<style>
body {
  background: #111;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
