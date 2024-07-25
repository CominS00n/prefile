<template>
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt, recusandae, velit ut
      aperiam beatae quibusdam nulla exercitationem impedit qui officiis suscipit asperiores,
      explicabo voluptatum laborum ratione nesciunt iste ad?F
    </p>

    <RouterLink to="blog" class="p-3 bg-green-500">go</RouterLink>

    <BreadcrumbItems />
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import BreadcrumbItems from '@/components/Breadcrumbs/BreadcrumbItems.vue'

</script>
