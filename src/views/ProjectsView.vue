<template>
  <div>
    {{ route.params.value }}
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque repellendus provident tenetur
      ullam deserunt animi expedita natus hic magni voluptates.
    </p>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const value = route.params.value
console.log(value)
</script>
