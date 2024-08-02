<template>
  <TransitionRoot
    appear
    :show="true"
    enter="transform transition ease-in-out duration-500 sm:duration-700"
    enterFrom="translate-x-full"
    enterTo="translate-x-0"
    leave="transform transition ease-in-out duration-500 sm:duration-700"
    leaveFrom="translate-x-0"
    leaveTo="translate-x-full"
  >
    <slot></slot>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { TransitionRoot } from '@headlessui/vue'
</script>
