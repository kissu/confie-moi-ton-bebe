<script setup lang="ts">
</script>

<template>
  <div class="relative flex flex-col items-center pt-16 max-w-3xl mx-auto">
    <NuxtImg format="avif" src="/avatar.png" class="rounded-full absolute h-56 z-10" />
    <p class="font-painter uppercase text-[6.75rem] -rotate-[12deg] text-redish leading-[1.15]">
      Front-end <br>developer
    </p>

    <p class="text-4xl mt-36 text-orange-50">
      Mon massacre sur 💛 <span
        class="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">StackOverflow
      </span>
      <Icon name="mdi:hand-saw" class="bg-orange-400" />
    </p>

    <div id="bento-grid" class="text-4xl !max-w-none w-fit z-0 text-slate-950 mt-6">
      <Particles class="speed-block since bg-transparent">
        Commencé en 2021
      </Particles>
      <Particles class="speed-block nuxt bg-transparent">
        arrivé 1<sup class="mr-2 text-xl">er</sup>sur Nuxt
      </Particles>
      <Particles class="speed-block consecutive bg-transparent">
        850 jours back to back
      </Particles>
      <Particles class="speed-block millions bg-transparent text-[3rem] leading-tight">
        rendu 9 millions <br>de devs heureux
      </Particles>
      <Particles class="speed-block answers bg-transparent">
        1700 réponses
      </Particles>
      <Particles class="speed-block vue bg-transparent">
        <span class="rotate-90 transform p-4 m-4 inline leading-normal">
          7<sup class="mr-2 text-xl">ème</sup>sur VueJS
        </span>
      </Particles>
    </div>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere illum, exercitationem doloremque quo
    reprehenderit dolorem dolorum accusamus neque beatae? Dolorem officia minima amet quo voluptatibus magni aspernatur
    cumque natus.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere illum, exercitationem doloremque quo
    reprehenderit dolorem dolorum accusamus neque beatae? Dolorem officia minima amet quo voluptatibus magni aspernatur
    cumque natus.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis facere illum, exercitationem doloremque quo
    reprehenderit dolorem dolorum accusamus neque beatae? Dolorem officia minima amet quo voluptatibus magni aspernatur
    cumque natus.
    <!-- <Icon name="logos:stackoverflow-icon" /> -->
    <div
      class="relative flex flex-col size-full items-center justify-center overflow-hidden rounded-lg bg-background px-40 pt-8 md:pb-60 md:shadow-xl mt-24">
      <span
        class="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 max-lg:-mt-12">
        caché ici
      </span>
      <Globe class="mt-12" />
    </div>
  </div>
</template>

<style scoped>
::selection {
  @apply bg-redish bg-opacity-70;
}

#bento-grid {
  grid-template-columns: repeat(5, minmax(11rem, 1fr));
  grid-template-rows: repeat(7, minmax(3rem, 1fr));
  @apply relative gap-5 grid overflow-hidden;
}

#bento-grid .speed-block {
  clip-path: inset(0);
  @apply overflow-hidden p-2 border-t border-orange-400 pt-4;
}

#bento-grid .speed-block::selection {
  @apply bg-slate-100;
}

#bento-grid .speed-block:before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: #fad961;
  background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
  border-radius: 0 0 12px 12px;
}

#bento-grid .speed-block:hover:before {
  background: transparent;
}

#bento-grid .since {
  grid-area: 1 / 1 / 3 / 3;
}

#bento-grid .vue {
  grid-area: 1 / 5 / 8 / 7;
  /* Adjusted to span 5th column to 6th column */
}

#bento-grid .millions {
  grid-area: 3 / 2 / 6 / 5;
}

#bento-grid .nuxt {
  grid-area: 1 / 3 / 3 / 5;
}

#bento-grid .consecutive {
  grid-area: 3 / 1 / 8 / 2;
}

#bento-grid .answers {
  grid-area: 6 / 2 / 8 / 5;
}
</style>
