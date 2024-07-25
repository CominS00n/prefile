<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item last:text-gray-400" v-for="(breadcrumb, index) in breadcrumbs" :key="index" :disabled="index === breadcrumbs.length">
        <router-link :to="breadcrumb.path">{{ breadcrumb.name }}</router-link>
        <p>{{ index }}</p>
        <p>{{ (index-1) === breadcrumbs.length }}</p>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const breadcrumbs = computed(() => {
  const matchedRoutes = route.matched

  return matchedRoutes.map((routeRecord, index) => {
    const path = matchedRoutes.slice(0, index + 1).reduce((acc, current) => {
      return acc + (current.path.startsWith('/') ? current.path : '/' + current.path)
    }, '')
    return {
      name: routeRecord.meta.breadcrumb || routeRecord.name || 'Home',
      path: path || '/'
    }
  })
})
</script>

<style scoped>
.breadcrumb {
  display: flex;
  list-style: none;
  padding: 0;
}
.breadcrumb-item {
  margin-right: 0.5rem;
}
</style>
