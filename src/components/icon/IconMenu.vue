<template>
  <box-icon :name="props.name"></box-icon>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: 'home-alt',
    required: true
  }
})
</script>
