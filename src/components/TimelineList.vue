<template>
  <div>
    <ul
      class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
      v-for="(item, index) in timeline"
      :key="item.subtitle"
    >
      <li>
        <div class="timeline-middle">
          <box-icon v-if="index === timeline.length - 1" name="circle" class="dark:fill-slate-700"></box-icon>
          <box-icon v-else name="check-circle" class="fill-green-400"></box-icon>
        </div>
        <div :class="index % 2 === 0 ? 'timeline-start mb-10 md:text-end text-end grid items-end' : 'timeline-end mb-10 '">
          <div class="timeline-start timeline-box w-fit dark:bg-black dark:border dark:border-slate-700">{{ item.title }}</div>
          <div class="text-md font-black">{{ item.subtitle }}</div>
          <p class="text-sm">{{ item.content }}</p>
        </div>
        <hr :class="index === timeline.length - 1 ? 'hidden' : 'bg-green-400'" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { timelineData } from '../mockupData/timeline'

const timeline = timelineData
</script>
