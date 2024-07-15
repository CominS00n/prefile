<template>
  <div class="w-[240px] border h-[540px] bg-white shadow-lg rounded-md p-6 dark:bg-[#1D232A]">
    <h1 class="text-xl text-center">Settings</h1>
    <div class="flex justify-between h-9 items-center">
      <label>Dark Mode</label>
      <ThemeBtn />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ThemeBtn from './button/ThemeBtn.vue'
</script>
