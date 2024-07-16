<template>
  <main class="container mx-auto">
    <h3 class="text-2xl mt-10">{{ $t('home.hello') }}</h3>
    <h1 class="relative text-5xl mt-10 font-bold w-fit">
      I'm <span class="text-green-500">Programmer</span>
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
          :key="icon"
        >
          <box-icon type="logo" :name="icon" size="40px" class="dark:fill-[#f3f3f3]"></box-icon>
        </li>
      </ul>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const icon_name = ref(['typescript', 'javascript', 'vuejs', 'python', 'tailwind-css'])
</script>

<style scoped></style>
