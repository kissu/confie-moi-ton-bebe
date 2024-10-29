<script setup lang='ts'>
const props = defineProps<{
  items: { id: number; text: string }[];
}>();
</script>

<template>
  <div class="flex items-center">
    <div class="relative w-full max-w-screen-lg h-full overflow-hidden" :style="{
      maskComposite: 'intersect',
      maskImage: `
          linear-gradient(to right,  red, black 5rem),
          linear-gradient(to left,   red, black 5rem),
          linear-gradient(to bottom, red, black 5rem),
          linear-gradient(to top,    red, black 5rem)
        `,
    }">
      <div class="mx-auto grid animate-skew-scroll grid-cols-1 gap-5 sm:grid-cols-2">
        <div v-for="item in props.items" :key="item.id">
          <div :key="item.id"
            class="flex w-72 p-6 items-center space-x-2 rounded-md border border-gray-100 dark:border-gray-800 px-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl hover:border-redish duration-300">
            <Icon name="mdi:sparkles-outline" class="bg-yellow-400" />
            <p class="text-gray-400">
              {{ item.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
