<template>
    <h3 class="text-2xl ">{{ $t('home.hello') }}</h3>
    <h1 class="text-5xl font-bold w-fit">
      I'm
      <span class="text-green-500">
        {{ $t(`home.title.position.${currentPosition}`) }}
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
    <Timeline />
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

import Timeline from '@/components/TimelineList.vue'

const position = ref(['developer', 'programmer', 'web'])
const currentPosition = ref(position.value[0])

let interval: number

onMounted(() => {
  let index = 0
  interval = setInterval(() => {
    index = (index + 1) % position.value.length
    currentPosition.value = position.value[index]
  }, 5000)
})

onUnmounted(() => {
  clearInterval(interval)
})

const icon_name = ref([
  {
    name: 'typescript',
    color: '#0076C6'
  },
  {
    name: 'javascript',
    color: '#F7D800'
  },
  {
    name: 'vuejs',
    color: '#41B883'
  },
  {
    name: 'python',
    color: '#3776AB'
  },
  {
    name: 'tailwind-css',
    color: '#38B2AC'
  }
])
</script>
