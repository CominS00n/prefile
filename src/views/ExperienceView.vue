<template>
  <EaseOut>
    <h1 class="text-5xl font-bold w-fit">
      {{ $t('experience.title') }}
    </h1>
    <!-- content english language -->
    <div v-if="locale === 'en'"  class="w-3/4 py-5 drop-shadow-lg">
      <ul
        class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
        v-for="(item, index) in experienceEn"
        :key="item.subtitle"
      >
        <li>
          <div class="timeline-middle">
            <box-icon
              v-if="index === experienceEn.length - 1"
              name="circle"
              class="dark:fill-slate-700"
            ></box-icon>
            <box-icon v-else name="check-circle" class="fill-green-400"></box-icon>
          </div>
          <div
            :class="
              index % 2 === 0
                ? 'timeline-start mb-10 md:text-end text-end grid items-end'
                : 'timeline-end mb-10 '
            "
          >
            <div
              class="timeline-start timeline-box w-fit dark:bg-black dark:border dark:border-slate-700"
            >
              <span>{{ item.optional }} {{ item.title }}</span>
            </div>
            <div class="text-md font-black">{{ item.subtitle }}</div>
            <p class="text-sm">{{ item.content }}</p>
          </div>
          <hr :class="index === experienceEn.length - 1 ? 'hidden' : 'bg-green-400'" />
        </li>
      </ul>
    </div>

    <!-- content thai language -->
    <div v-if="locale === 'th'"  class="w-3/4 py-5 drop-shadow-lg">
      <ul
        class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical"
        v-for="(item, index) in experienceDataTh"
        :key="item.subtitle"
      >
        <li>
          <div class="timeline-middle">
            <box-icon
              v-if="index === experienceEn.length - 1"
              name="circle"
              class="dark:fill-slate-700"
            ></box-icon>
            <box-icon v-else name="check-circle" class="fill-green-400"></box-icon>
          </div>
          <div
            :class="
              index % 2 === 0
                ? 'timeline-start mb-10 md:text-end text-end grid items-end'
                : 'timeline-end mb-10 '
            "
          >
            <div
              class="timeline-start timeline-box w-fit dark:bg-black dark:border dark:border-slate-700"
            >
              <span>{{ item.optional }} {{ item.title }}</span>
            </div>
            <div class="text-md font-black">{{ item.subtitle }}</div>
            <p class="text-sm">{{ item.content }}</p>
          </div>
          <hr :class="index === experienceEn.length - 1 ? 'hidden' : 'bg-green-400'" />
        </li>
      </ul>
    </div>
  </EaseOut>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { experienceDataEn, experienceDataTh } from '../mockupData/experience'

import EaseOut from '@/components/transitions/EaseOut.vue'

const { locale } = useI18n()

const experienceEn = experienceDataEn
</script>
