<script setup lang="ts">
import { FamousFactsConfig } from '@/config/FamousFactsConfig'
</script>

<template>
  <div class="flex h-full w-full flex-col gap-4 rounded-[1.25rem] bg-white px-4 pb-6 pt-3">
    <h1 class="text-base text-[#1D2D35]">ცნობილი ფაქტები</h1>
    <div class="flex flex-row gap-4">
      <div
        class="flex h-full w-[312px] flex-col items-center justify-center gap-3 rounded-[1.25rem] bg-[#F5F8FF] px-3 pb-4 pt-3"
      >
        <div class="h-[7.5rem] w-full">
          <img class="h-full w-full" src="@/assets/images/home-famous-facts-image.png" />
        </div>
        <p class="line-clamp-5 text-[0.75rem] text-[#1D2D35]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita placeat facere mollitia
          aspernatur neque veritatis deleniti, quae porro vel eveniet dolorum ea repellendus! Rerum
          similique aliquam optio fuga accusamus et.
        </p>
      </div>
    </div>
  </div>
</template>
