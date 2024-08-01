<template>
  <div class="fixed right-0 top-1/2 transform -translate-y-1/2 flex items-center z-[999]">
    <SettingPage />
  </div>
  <div class="flex h-screen w-screen px-16 py-10 space-x-8 items-center overflow-hidden">
    <div class="w-[480px]" :class="navBar ? 'block' : 'hidden'">
      <NavBar />
    </div>
    <div class="content w-full h-screen py-6">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import SettingPage from '@/components/SettingList.vue'

import configweb from '@/stores/configweb'

onMounted(() => {
  configweb()
})

const { navBar } = configweb()
</script>

<style scoped>
.content {
  scrollbar-width: none;
  -ms-overflow-style: none;
  overflow-y: auto;
}
</style>
