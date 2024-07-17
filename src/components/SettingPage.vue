<template>
  <div
    class="w-[240px] border h-[540px] bg-white shadow-lg rounded-md p-6 dark:bg-[#1D232A] space-y-3"
  >
    <h1 class="text-xl text-center">{{ $t('settings.title') }}</h1>
    <div class="flex justify-between h-9 items-center">
      <label>{{ $t('settings.theme') }}</label>
      <ThemeBtn />
    </div>
    <div class="flex justify-between h-9 items-center">
      <label>{{ $t('settings.language') }}</label>
      <select v-model="$i18n.locale" @change="updateBodyClass" class="border rounded-md p-1">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import ThemeBtn from '@/components/button/ThemeBtn.vue'

const { locale } = useI18n()

const updateBodyClass = () => {
  document.body.className = locale.value
}

onMounted(() => {
  updateBodyClass()
})

watch(locale, () => {
  updateBodyClass()
})
</script>

<style scoped>

</style>
