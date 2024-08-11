<template>
  <div class="flex flex-col justify-between p-6 shadow-lg border rounded-2xl h-full">
    <div class="w-full flex flex-col items-center">
      <img src="/image/image0.jpg" alt="" class="h-64 w-64 object-cover object-top rounded-3xl" />
      <h1 class="text-3xl mt-4 font-bold w-fit">{{ $t('home.title.name') }}</h1>
    </div>
    <div class="w-full">
      <ul v-for="item in menu_list" :key="item.link">
        <li
          :class="
            $route.path == item.link
              ? 'pl-2 bg-[#f3f4f6] rounded-md dark:bg-slate-700 text-green-500'
              : ''
          "
          class="dark:bg-inherit dark:hover:bg-slate-700 mt-2"
        >
          <router-link :to="item.link" class="w-full h-full flex items-center gap-x-4">
            <icon-menu
              :name="item.icon"
              class="dark:fill-slate-400"
              :class="$route.path == item.link ? 'fill-green-500' : ''"
            />
            {{ $t(`menu.${item.title}`) }}</router-link
          >
        </li>
      </ul>
    </div>
    <div class="flex justify-around gap-x-3 w-full">
      <a href="https://github.com/CominS00n/" target="_blank"
        ><box-icon type="logo" name="github" class="dark:fill-[#E5E7EB]"></box-icon
      ></a>
      <a href="https://facebook.com/sitthichai.puckpoo/" target="_blank"
        ><box-icon type="logo" name="facebook-circle" class="dark:fill-[#E5E7EB]"></box-icon
      ></a>
      <a href="https://instagram.com/comings00n" target="_blank"
        ><box-icon type="logo" name="instagram" class="dark:fill-[#E5E7EB]"></box-icon
      ></a>
      <!-- <a href="" target="_blank"><box-icon type="logo" name="discord" class="dark:fill-[#E5E7EB]"></box-icon></a> -->
    </div>
    <ChangTheme class="hidden" />
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'

import IconMenu from './icon/IconMenu.vue'
import { menu } from '@/stores/menu'
import ChangTheme from './buttons/ChangTheme.vue'
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
