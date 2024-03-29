<script setup lang="ts">
import HomeHero from '@/components/HomeHero.vue'
import HomeAllNews from './components/HomeAllNews.vue'
import HomePopularNews from './components/HomePopularNews.vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
</script>

<template>
  <div
    class="flex h-full w-full flex-col items-center justify-center gap-6 tablet:gap-10 tablet:px-12 small:gap-12 small:px-14 large:gap-[4.125rem]"
  >
    <div v-if="width >= 1240" class="flex h-[630px] w-full flex-row gap-6">
      <HomeHero />
      <HomeAllNews />
    </div>
    <div v-else>
      <HomeHero />
    </div>
    <div class="flex h-full w-full flex-col gap-6 tablet:flex-row tablet:gap-8" v-if="width < 1240">
      <HomeAllNews />
      <HomePopularNews />
    </div>
  </div>
</template>
