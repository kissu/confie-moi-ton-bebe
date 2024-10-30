<script setup lang="ts">
// @ts-expect-error not needed here
import { cn } from '@/lib/utils';

const placesIWorkedAt = ref([
  { id: 13, text: '3print' },
  { id: 12, text: 'Quorum' },
  { id: 11, text: 'Worklife' },
  { id: 10, text: 'Sleeping Baby' },
  { id: 9, text: 'TopCoat Data' },
  { id: 8, text: 'Heart for Health' },
  { id: 7, text: 'PassionatePeople' },
  { id: 6, text: 'ABN Amro' },
  { id: 5, text: 'Baserow' },
  { id: 4, text: 'Miele X' },
  { id: 3, text: 'WinningHunter' },
  { id: 2, text: 'ABN Amro' },
  { id: 1, text: 'LeWagon Amsterdam' },
]);

const testimonials = [
  {
    name: 'Elon Musk',
    username: '@musk',
    body: 'Ce mec ship tellement, j\'aimerai qu\'il s\'occupe de mes fusées!',
    img: 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1229892983-square.jpg',
  },
  {
    name: 'Benjamin Code',
    username: '@benji',
    body: 'Il surveille vachement bien de mon extracteur de jus quand je suis pas là!',
    img: 'https://sebdru.fr/BenjaminCodeFiver/assets/benjamincode-short.png',
  },
  {
    name: 'Francois Hollande',
    username: '@hollande',
    body: 'kissu à réussi à resolve les problèmes d\'hydration de la France, plus besoin de <ClientOnly>',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThtMmeFr8mGrzI0KwnRsxiaIiNNsiekgxDxg&s',
  },
  {
    name: 'Bailleur inconnu',
    username: '@yawn',
    body: 'J\'aimerai tellement qu\'il achète un appart à Malaga...',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Flag_of_M%C3%A1laga%2C_Spain.svg/640px-Flag_of_M%C3%A1laga%2C_Spain.svg.png',
  },
  {
    name: 'Jeff Bezos',
    username: '@bezos',
    body: 'J\'offre le Prime ET ma femme à kissu tellement il inspire confiance',
    img: 'https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds',
  },
  {
    name: 'Maman de kissu',
    username: '@kissu',
    body: 'Le meilleur développeur Nuxt que j\'ai vu quitter le foyer familial',
    img: 'https://i.insider.com/60661e04902281001950aa7e?width=300',
  },
];

// Split testimonials into two rows
const firstRow = ref(testimonials.slice(0, testimonials.length / 2));
const secondRow = ref(testimonials.slice(testimonials.length / 2));

const containerRef = ref(null);
const div1Ref = ref(null);
const div2Ref = ref(null);
const div3Ref = ref(null);
const div4Ref = ref(null);
const div5Ref = ref(null);
const div6Ref = ref(null);
const div7Ref = ref(null);
</script>

<template>
  <div class="flex justify-center items-center w-full h-[500px]">
    <div class="absolute flex flex-col items-center justify-center">
      <p
        class="font-painter uppercase text-[6.75rem] -rotate-[12deg] text-redish leading-[1.15] text-center mt-4 opacity-0 animate-fade-in delay-1000">
        Front-end <br>developer
      </p>
      <NuxtImg format="avif" src="/avatar.png"
        class="absolute rounded-full h-48 mt-36 z-10 opacity-0 animate-fade-in delay-2000" />
    </div>

    <Pattern :class="cn(
      'translate-y-10 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]',
    )" />
  </div>

  <div class="relative flex flex-col items-center pt-72 max-w-3xl mx-auto">
    <h2 class="text-5xl font-bold opacity-0 animate-fade-in delay-4000">
      J'y ai fait un
      <TextHighlight :delay="5000" class="bg-gradient-to-r from-pink-500 to-redish rounded-xl">
        boulot mortel
      </TextHighlight>
    </h2>

    <LazyInfiniteScroll class="mt-8 max-w-none border-t border-b border-redish border-opacity-50"
      :items="placesIWorkedAt" />

    <h2 class="text-4xl font-bold mt-72 text-transparent bg-gradient-to-r from-emerald-300 to-green-600 bg-clip-text">
      Moi et la communauté
    </h2>

    <p class="text-xl mt-6 text-center max-w-xl">
      Je contribue à pas mal d'endroits: que ce soit du mentoring, de l'organizationel de meetups/conférences en tant
      que public speaker, commitee, MC etc...
    </p>

    <ClientOnly>
      <div ref="containerRef"
        class="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-background -mt-16 md:shadow-xl">
        <div class="flex size-full flex-col max-w-lg max-h-[200px] items-stretch justify-between gap-10">
          <div class="flex flex-row items-center justify-between">
            <div ref="div1Ref"
              class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black">
              <Icon name="devicon:vuejs" class="text-6xl" />
            </div>
            <div ref="div5Ref"
              class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
              <Icon name="devicon:nuxtjs" class="text-6xl" />
            </div>
          </div>
          <div class="flex flex-row items-center justify-between">
            <div ref="div2Ref"
              class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black">
              <img src="/wtm.png">
            </div>
            <!-- 🎯🎯 middle is here -->
            <div ref="div4Ref"
              class="z-10 flex size-16 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
              <Icon name="mdi:cards-heart" class="bg-green-400 text-4xl" />
            </div>
            <div ref="div6Ref"
              class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
              <img src="/lewagon.svg">
            </div>
          </div>
          <div class="flex flex-row items-center justify-between">
            <div ref="div3Ref"
              class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black">
              <Icon name="devicon:stackoverflow" class="text-4xl" />
            </div>
            <div ref="div7Ref"
              class="z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]">
              <img src="/gitnation.png" class="h-24 object-contain">
            </div>
          </div>
        </div>

        <AnimatedBeam :container-ref="containerRef" :from-ref="div1Ref" :to-ref="div4Ref" :curvature="-75"
          :end-y-offset="-10" />
        <AnimatedBeam :container-ref="containerRef" :from-ref="div2Ref" :to-ref="div4Ref" />
        <AnimatedBeam :container-ref="containerRef" :from-ref="div3Ref" :to-ref="div4Ref" :curvature="75"
          :end-y-offset="10" />
        <AnimatedBeam :container-ref="containerRef" :from-ref="div5Ref" :to-ref="div4Ref" :curvature="-75"
          :end-y-offset="-10" :reverse="true" />
        <AnimatedBeam :container-ref="containerRef" :from-ref="div6Ref" :to-ref="div4Ref" :reverse="true" />
        <AnimatedBeam :container-ref="containerRef" :from-ref="div7Ref" :to-ref="div4Ref" :curvature="75"
          :end-y-offset="10" :reverse="true" />
      </div>
    </ClientOnly>

    <h2 class="text-4xl font-bold mt-72">
      Mon massacre sur <span class="ml-2">💛</span> <span
        class="text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">StackOverflow
      </span>
      <Icon name="mdi:hand-saw" class="bg-orange-400" />
    </h2>

    <div id="bento-grid" class="text-4xl !max-w-none w-fit z-30 text-slate-950 mt-8">
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

    <h2 class="text-4xl font-bold mt-72 text-transparent bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text">
      Les Testi-monials
    </h2>

    <div class="relative flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-lg mt-6">
      <Marquee pause-on-hover class="[--duration:30s]">
        <ReviewCard v-for="review in firstRow" :key="review.username" :img="review.img" :name="review.name"
          :username="review.username" :body="review.body" />
      </Marquee>

      <Marquee reverse pause-on-hover class="[--duration:30s]">
        <ReviewCard v-for="review in secondRow" :key="review.username" :img="review.img" :name="review.name"
          :username="review.username" :body="review.body" />
      </Marquee>

      <div class="pointer-events-none absolute inset-y-0 left-0 w-1/3" />

      <div class="pointer-events-none absolute inset-y-0 right-0 w-1/3" />
    </div>

    <div
      class="relative flex flex-col size-full items-center justify-center overflow-hidden rounded-lg bg-background px-40 pt-8 md:pb-60 md:shadow-xl mt-72">
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

@media (max-width: 800px) {
  #bento-grid {
    border: 1px solid red;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  #bento-grid .since,
  #bento-grid .vue,
  #bento-grid .millions,
  #bento-grid .nuxt,
  #bento-grid .consecutive,
  #bento-grid .answers {
    grid-area: auto;
    /* Reset grid-area for stacking */
  }
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
