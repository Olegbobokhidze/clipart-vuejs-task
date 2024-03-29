<script setup lang="ts">
import { NewsConfig } from '@/config/NewsConfig'

const PopularNews = NewsConfig.filter((item) => item.category === 'popular')
</script>

<template>
  <div
    class="flex h-[20.625rem] w-full flex-col rounded-[1.25rem] bg-white px-4 pb-6 pt-3 small:h-[39rem] small:w-[350px]"
  >
    <h1 class="mb-5 text-base font-semibold text-[#1D2D35] tablet:text-xl">პოპულარული</h1>
    <div class="news-scrollbar flex w-full flex-col overflow-y-scroll">
      <div
        class="flex h-full w-full flex-row items-center gap-2 py-2"
        v-for="item in PopularNews"
        :key="item.id"
      >
        <div class="h-[6rem] min-w-[6rem]">
          <img class="h-full w-full" :src="item.image" />
        </div>
        <p class="line-clamp-5 text-[0.75rem] text-[#1D2D35] mobile:text-sm small:text-sm">
          {{ item.description }}
        </p>
        <hr />
      </div>
    </div>
  </div>
</template>
