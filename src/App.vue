<template>
  <div class="flex px-16 pt-14 h-screen space-x-2">
    <div class="fixed right-0 top-1/2 transform -translate-y-1/2 flex items-center">
      <button
        @click="isSetting = !isSetting"
        class="h-fit [writing-mode:vertical-lr] -rotate-180 bg-green-500 py-4 px-2 rounded-r-[10px] text-white z-[99] "
      >
        <box-icon name="cog" class="animate-spin fill-white"></box-icon>Setting
      </button>
      <div class="setting" :class="isSetting ? 'block' : 'hidden'">
        <SettingPage />
      </div>
    </div>
    <aside class="w-2/5 border">
      <NavBar />
    </aside>
    <main class="border w-full p-6 h-fit">
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import SettingPage from '@/components/SettingPage.vue'

const isSetting = ref(false)
</script>

<style scoped></style>
