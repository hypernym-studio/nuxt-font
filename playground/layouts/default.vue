<template>
  <div id="__default">
    <NavMain />
    <slot />
  </div>
</template>

<script setup lang="ts">
useFont([
  {
    src: '/fonts/AspektaVF.woff2',
    family: 'Aspekta Variable',
    weight: '100 900'
  }
])
</script>

<style>
body {
  font-family: 'Aspekta Variable', sans-serif;
  font-variation-settings: 'wght' 400;
  background: #111;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-variation-settings: 'wght' 600;
}

a,
a:hover,
a:visited {
  color: #fff;
  text-decoration: none;
}
</style>
