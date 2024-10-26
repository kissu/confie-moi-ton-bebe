<script setup lang="ts">
console.log('working ?');
const test = 'nice meme';
</script>

<template>
  <div>
    <div> hello there mate! :3</div>
    <NuxtImg provider="cloudflare" src="/avatar.jpg" :modifiers="{ grayscale: true, tint: '#00DC82' }" />
  </div>
</template>
