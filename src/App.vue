<template>
  <div class="min-h-screen">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <div>
          <component :is="Component" />
        </div>
      </Transition>
    </RouterView>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

body {
  @apply bg-pink-500;
}
</style>
