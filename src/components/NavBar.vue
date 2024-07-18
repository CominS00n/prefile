<template>
  <div class="flex justify-between h-full flex-col items-center space-y-16 px-6 pt-6 pb-3">
    <div>
      <img src="/image/image0.jpg" alt="" class="h-64 w-64 object-cover object-top rounded-3xl" />
      <h1 class="text-3xl mt-4 font-bold w-fit">{{ $t('home.title.name') }}</h1>
    </div>
    <div class="w-full">
      <ul v-for="item in menu_list" :key="item.link" class="space-y-2">
        <li
          :class="$route.path == item.link ? 'pl-2 bg-[#f3f4f6] rounded-md dark:bg-slate-700' : ''"
          class="dark:bg-inherit dark:hover:bg-slate-700"
        >
          <router-link :to="item.link" class="w-full h-full flex items-center gap-x-4">
            <icon-menu :name="item.icon" class="dark:fill-slate-400" />
            {{ $t(`menu.${item.title}`) }}</router-link
          >
        </li>
      </ul>
    </div>
    <div class="flex justify-around gap-x-3 w-full">
      <box-icon type="logo" name="github" class="dark:fill-[#E5E7EB]"></box-icon>
      <box-icon type="logo" name="facebook-circle" class="dark:fill-[#E5E7EB]"></box-icon>
      <box-icon name="instagram" type="logo" class="dark:fill-[#E5E7EB]"></box-icon>
      <box-icon type="logo" name="discord" class="dark:fill-[#E5E7EB]"></box-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'

import IconMenu from './icon/IconMenu.vue'
import { menu } from '@/stores/menu'

const menu_list = menu
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 6px;
  width: 100%;
  height: 48px;
}

li:hover {
  padding-left: 8px;
  background-color: #f3f4f6;
  border-radius: 6px;
}

li::before {
  content: '';
  position: absolute;
  display: inline-block;
  width: 4px;
  height: 100%;
  background-color: #22c55e;
  /* margin-right: 8px; */
  border-radius: 0 4px 4px 0;
  transform: scaleY(0);
  transform-origin: bottom;
  right: -5px;
}

li:hover::before {
  transform: scaleY(1);
  transition: all 0.2s linear;
}
</style>
