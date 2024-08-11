<template>
  <EaseOut>
    <h3 class="text-2xl">{{ $t('home.hello') }}</h3>
    <h1 class="text-5xl font-bold w-fit flex gap-x-3">
      I'm
      <span class="text-green-500">
        <!-- <VueWriter v-if="locale === 'en'" :array="position_en" :typeSpeed="70" :delay="5000" />
        <VueWriter v-if="locale === 'th'" :array="position_th" :typeSpeed="70" :delay="5000" /> -->
      </span>
    </h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit laboriosam tenetur voluptatum!
      Fugiat, dolorem culpa sequi voluptatibus et quia corrupti?
    </p>

    <div>
      <ul class="grid grid-cols-5">
        <li
          class="flex items-center justify-center h-20 border-r last:border-none"
          v-for="icon in icon_name"
          :key="icon.name"
        >
          <box-icon type="logo" :name="icon.name" size="40px" :color="icon.color"></box-icon>
        </li>
      </ul>
    </div>
  </EaseOut>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import EaseOut from '@/components/transitions/EaseOut.vue'

const position_en = ref(['Software Developer', 'Programmer', 'Web Developer'])
const position_th = ref(['นักพัฒนาซอฟต์แวร์', 'โปรแกรมเมอร์', 'นักพัฒนาเว็บ'])
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const icon_name = ref([
  { name: 'typescript', color: '#0076C6' },
  { name: 'javascript', color: '#F7D800' },
  { name: 'vuejs', color: '#41B883' },
  { name: 'python', color: '#3776AB' },
  { name: 'tailwind-css', color: '#38B2AC' }
])
</script>
