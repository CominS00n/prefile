<template>
  <div class="fixed right-0 top-1/2 transform -translate-y-1/2 flex items-center z-[999]">
    <SettingPage />
  </div>
  <div
    class="container mx-auto grid grid-cols-12 h-svh w-svw items-center overflow-hidden gap-x-8 py-5"
  >
    <div class="col-span-3 h-full">
      <NavBar />
    </div>
    <div class="content col-span-9 h-full overflow-y-auto">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import SettingPage from '@/components/SettingList.vue'
</script>

<style scoped>
.content {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>
