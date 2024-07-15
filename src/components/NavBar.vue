<template>
  <div class="flex justify-between h-full flex-col items-center space-y-16 px-6 pt-6 pb-3">
    <div>
      <img src="" alt="##" class="h-64 w-64 object-cover border" />
    </div>
    <div class="w-full">
      <ul class="space-y-2">
        <li>
          <router-link to="/" class="w-full flex items-center gap-x-4"
            ><box-icon name="home-alt-2" class="dark:fill-[#E5E7EB]" size="20px"></box-icon
            >Home</router-link
          >
        </li>
        <li>
          <router-link to="/test" class="w-full flex items-center gap-x-4"
            ><box-icon name="user-pin" class="dark:fill-[#E5E7EB]" size="20px"></box-icon
            >About</router-link
          >
        </li>
      </ul>
    </div>
    <div class="flex justify-around gap-x-3 w-full">
      <box-icon type="logo" name="github" class="dark:fill-[#E5E7EB]"></box-icon>
      <box-icon type='logo' name='facebook-circle' class="dark:fill-[#E5E7EB]"></box-icon>
      <box-icon name='instagram' type='logo' class="dark:fill-[#E5E7EB]"></box-icon>
      <box-icon type='logo' name='discord' class="dark:fill-[#E5E7EB]"></box-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
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
  transition: all 0.1s linear;
}

</style>
