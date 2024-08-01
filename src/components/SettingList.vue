<template>
  <div v-if="isSettings" @click="toggleSettings" class="relative bg-black opacity-50 h-svh w-svw"></div>

  <div class="fixed right-0 top-1/2 transform -translate-y-1/2 flex items-center z-[999]">
    <button
      v-if="!isSettings"
      class="h-fit [writing-mode:vertical-lr] !-rotate-180 bg-green-500 py-4 px-2 rounded-r-[10px] text-white z-[99]"
      @click="toggleSettings"
    >
      <box-icon name="cog" class="animate-spin fill-white"></box-icon>Setting
    </button>
  </div>
  <transition name="slide" tag="div">
    <div
      v-if="isSettings"
      class="absolute right-0 w-[240px] h-[540px] bg-white shadow-lg rounded-md p-6 rounded-tl-none dark:bg-[#1D232A] space-y-3 z-[999]"
    >
      <button
        @click="toggleSettings"
        class="absolute top-0 -left-10 bg-green-500 py-2 px-2 rounded-l-[10px]"
      >
        <box-icon name="x" color="white"></box-icon>
      </button>
      <div>
        <h1 class="text-xl text-center">{{ $t('settings.title') }}</h1>
        <div class="flex justify-between h-9 items-center">
          <label>{{ $t('settings.theme') }}</label>
          <ChangTheme />
        </div>
        <div class="flex justify-between h-9 items-center">
          <label>{{ $t('settings.language') }}</label>
          <select v-model="currentLocale" @change="updateBodyClass" class="border rounded-md p-1">
            <option
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              :value="locale"
            >
              {{ locale.toUpperCase() }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { onMounted, watch, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import configweb from '@/stores/configweb'
import ChangTheme from './buttons/ChangTheme.vue'

const { locale } = useI18n()
const currentLocale = ref(localStorage.getItem('locale') || locale.value)

const { toggleSettings, isSettings } = configweb()

const updateBodyClass = () => {
  document.body.className = currentLocale.value
  localStorage.setItem('locale', currentLocale.value)
}

onMounted(() => {
  updateBodyClass()
})

watch(currentLocale, (newLocale) => {
  locale.value = newLocale
  updateBodyClass()
})
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
</style>
