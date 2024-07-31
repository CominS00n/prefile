<template>
  <div class="fixed right-0 top-1/2 transform -translate-y-1/2 flex items-center z-[999]">
    <button
      @click="toggleSettings"
      class="h-fit [writing-mode:vertical-lr] !-rotate-180 bg-green-500 py-4 px-2 rounded-r-[10px] text-white z-[99]"
      :class="isSettings ? 'block animate-fade-in-left' : ''"
    >
      <box-icon name="cog" class="animate-spin fill-white"></box-icon>Setting
    </button>
    <div class="setting" :class="isSettings ? 'block animate-fade-in-left' : 'hidden'">
      <SettingPage />
    </div>
  </div>
  <div class="flex h-screen w-screen px-16 py-6 space-x-8 items-center overflow-hidden">
    <div class="w-[480px]" :class="navBar ? 'block' : 'hidden'">
      <NavBar />
    </div>
    <div class="content w-full h-screen">
      <RouterView />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import SettingPage from '@/components/SettingList.vue'

import configweb from '@/stores/configweb'

onMounted(() => {
  configweb()
})

const { navBar, toggleSettings, isSettings } = configweb()
</script>

<style scoped>

</style>
