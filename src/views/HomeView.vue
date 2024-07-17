<template>
  <main class="container mx-auto">
    <h3 class="text-2xl mt-10">{{ $t('home.hello') }}</h3>
    <h1 class="text-5xl mt-10 font-bold w-fit">
      I'm <span class="text-green-500">{{ $t('home.title.name') }}</span>
    </h1>
    <h1 class="text-5xl mt-10 font-bold w-fit" v-for="(position, index) in $t('home.title.position')" :key="index">
      {{ position }}
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
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

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

<style scoped></style>
