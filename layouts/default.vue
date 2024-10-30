<template>
  <main class="flex flex-col items-center min-h-screen font-sans text-white bg-slate-900">
    <ClientOnly>
      <div class="fixed top-1/3 right-0 transform ml-12 rotate-90 z-20 opacity-0 animate-fade-in delay-10000">
        <Dock :magnification="0">
          <a href="https://x.com/kissu_io" target="_blank" class="h-24 w-24">
            <DockIcon>
              <Icon name="mdi:twitter" class="-rotate-90 hover:bg-sky-500 duration-300 w-full h-full" />
            </DockIcon>
          </a>
          <a href="https://github.com/kissu" target="_blank" class="h-24 w-24">
            <DockIcon>
              <Icon name="mdi:github" class="-rotate-90 hover:bg-gray-400 duration-300 w-full h-full" />
            </DockIcon>
          </a>
          <a href="https://stackoverflow.com/users/8816585/kissu?tab=topactivity" target="_blank" class="h-24 w-24">
            <DockIcon>
              <Icon name="mdi:stackoverflow" class="-rotate-90 hover:bg-orange-500 duration-300 w-full h-full" />
            </DockIcon>
          </a>
          <a href="https://www.linkedin.com/in/kissu/" target="_blank" class="h-24 w-24">
            <DockIcon>
              <Icon name="mdi:linkedin" class="-rotate-90 hover:bg-sky-700 duration-300 w-full h-full" />
            </DockIcon>
          </a>
        </Dock>
      </div>
    </ClientOnly>
    <slot />
  </main>
</template>

<style>
html,
body {
  @apply bg-zinc-900;
}
</style>
