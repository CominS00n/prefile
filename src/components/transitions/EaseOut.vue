<template>
  <TransitionRoot
    appear
    :show="porps.show"
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

<script setup>
import { defineProps } from 'vue'
import { TransitionRoot } from '@headlessui/vue'

const porps = defineProps({
    show: {
        type: Boolean,
        default: true,
        rqeuired: true
    }
})
</script>
