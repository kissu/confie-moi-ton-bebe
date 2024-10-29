<script lang="ts" setup>
defineProps({
  img: { type: String, required: true },
  name: { type: String, required: true },
  body: { type: String, required: true },
});
</script>

<template>
  <figure class="relative w-72 !rounded-lg border p-4 border-gray-700 bg-slate-950">
    <div class="flex flex-row items-center gap-2">
      <NuxtImg :src="img" class="rounded-full" width="32" height="32" alt="random placeholder image" />
      <div class="flex flex-col">
        <span class="text-sm font-medium dark:text-white">
          {{ name }}
        </span>
      </div>
    </div>
    <blockquote class="mt-2 text-xl">
      {{ body }}
    </blockquote>
  </figure>
</template>
