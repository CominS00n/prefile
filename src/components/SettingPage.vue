<template>
  <div class="w-[240px] border h-[540px] bg-white shadow-lg rounded-md p-6 dark:bg-[#1D232A] space-y-3">
    <h1 class="text-xl text-center">Settings</h1>
    <div class="flex justify-between h-9 items-center">
      <label>Dark Mode</label>
      <ThemeBtn />
    </div>
    <div class="flex justify-between h-9 items-center">
      <label>Language</label>
      <select class="border rounded-md p-1">
        <option>English</option>
        <option>Thailand</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ThemeBtn from './button/ThemeBtn.vue'
</script>
