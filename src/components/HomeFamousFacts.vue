<template>
  <div class="flex h-full w-full flex-col gap-4 rounded-[1.25rem] bg-white px-4 pb-6 pt-3">
    <h1 class="text-base text-[#1D2D35]">ცნობილი ფაქტები</h1>
    <swiper
      :modules="modules"
      :breakpoints="{
        500: { slidesPerView: 1.5 },
        768: { slidesPerView: 2.5 },
        1024: { slidesPerView: 3 },
        1440: { slidesPerView: 3.5 }
      }"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      class="w-full"
    >
      <swiper-slide class="w-full" v-for="item in FamousFactsConfig" :key="item.id">
        <div class="flex flex-row gap-4">
          <div
            class="flex h-full w-[312px] flex-col items-center justify-center gap-3 rounded-[1.25rem] bg-[#F5F8FF] px-3 pb-4 pt-3"
          >
            <div class="h-[7.5rem] w-full">
              <img class="h-full w-full" :src="item.image" />
            </div>
            <p class="line-clamp-5 text-[0.75rem] text-[#1D2D35]">
              {{ item.description }}
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import { FamousFactsConfig } from '@/config/FamousFactsConfig'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const modules = ref([Navigation, Pagination, Scrollbar])
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  display: none;
}
.swiper-scrollbar {
  display: none;
}
</style>
