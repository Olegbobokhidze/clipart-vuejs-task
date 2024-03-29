<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

import HomeHero from '@/components/HomeHero.vue'
import HomeAllNews from './components/HomeAllNews.vue'
import HomePopularNews from './components/HomePopularNews.vue'
import HomeFamousFacts from './components/HomeFamousFacts.vue'
import HomeBlogs from './components/HomeBlogs.vue'
import DefaultNavbar from './components/shared/DefaultNavbar.vue'

const { width } = useWindowSize()
</script>

<template>
  <div
    class="flex h-full w-full flex-col items-center justify-center gap-6 pb-24 tablet:gap-10 tablet:px-12 small:gap-12 small:px-14 large:gap-[4.125rem]"
  >
    <DefaultNavbar />
    <div v-if="width >= 1240" class="mt-[8.125rem] flex h-[630px] w-full flex-row gap-6">
      <HomeHero />
      <HomeAllNews />
    </div>
    <div v-else class="mt-[6rem]">
      <HomeHero />
    </div>

    <div class="flex h-full w-full flex-col gap-6 tablet:flex-row tablet:gap-8" v-if="width < 1240">
      <HomeAllNews />
      <HomePopularNews />
    </div>

    <div v-if="width >= 1240" class="flex h-full w-full flex-row gap-6">
      <div class="flex h-full w-full flex-col gap-6 small:gap-12 large:gap-[4.125rem]">
        <HomeFamousFacts />
        <HomeBlogs />
      </div>
      <HomePopularNews />
    </div>
    <div v-else class="flex h-full w-full flex-col gap-6 small:gap-12 large:gap-[4.125rem]">
      <HomeFamousFacts />
      <HomeBlogs />
    </div>
  </div>
</template>
