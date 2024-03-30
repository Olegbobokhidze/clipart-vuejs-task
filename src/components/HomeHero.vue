<script lang="ts">
import { ref } from 'vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { HomeHeroConfig } from '@/config/HomeHeroConfig'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const SliderImg = ref(null)

    return {
      SliderImg,
      HomeHeroConfig,
      modules: [Navigation, Pagination, Scrollbar, A11y]
    }
  }
}
</script>
<template>
  <div
    class="flex h-full w-full flex-col gap-4 rounded-[1.25rem] bg-white px-4 pb-6 pt-3 small:max-w-[80%]"
  >
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      navigation
      :pagination="{ clickable: true }"
      class="w-full"
    >
      <swiper-slide class="w-full" v-bind:key="item.id" v-for="item in HomeHeroConfig">
        <div class="h-full w-full">
          <img
            :src="item.image"
            alt="home-hero-image"
            class="max-h-[25.375rem] w-full rounded-[1.25rem]"
          />
        </div>
      </swiper-slide>
    </swiper>
    <div class="flex flex-col gap-4">
      <div class="flex gap-1">
        <div
          class="flex items-center justify-center rounded-2xl bg-[#F5F8FF] px-2 py-[0.375rem] text-[0.75rem] text-[#1D2D35]"
        >
          <p>12.08.2023</p>
        </div>
        <div
          class="flex items-center justify-center rounded-2xl bg-[#F5F8FF] px-2 py-[0.375rem] text-[0.75rem] text-[#1D2D35]"
        >
          <p>პოლიტიკა</p>
        </div>
      </div>
      <h1 class="text-xl font-semibold text-[#1D2D35] tablet:text-2xl">
        ქვემო ქართლის რეგიონში 20 მლნ ლარამდე ღირებულების ინფრასტრუქტურული პროექტები დაიწყება
      </h1>
      <p class="hidden text-base text-[#657178] tablet:flex">
        განთავსების (ლისტინგის) ორგანიზატორი სომხეთის ბანკი სს “არდშიბანკია”. ობლიგაციის ნომინალი -
        1000 USD
      </p>
    </div>
  </div>
</template>
<style>
.swiper-pagination-bullet {
  background-color: white;
  width: 10px;
  height: 10px;
}

.swiper-button-next,
.swiper-button-prev {
  background-color: white;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  color: black;
  transform: translateY(-50%);
  margin: 0 20px 0 20px;
}

@media only screen and (max-width: 1024px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }

  .swiper-pagination {
    transform: translateY(0%) !important;
  }
}

.swiper {
  margin: 0;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  font-size: 16px;
}

.swiper-pagination-bullet-active {
  background-color: white;
  width: 30px;
  border-radius: 4px;
}

.swiper-pagination {
  transform: translateY(0%);
}
</style>
