<script setup lang="ts">
import { NewsConfig } from '@/config/NewsConfig'
import IconDate from '@/components/icons/IconDate.vue'
</script>

<template>
  <div
    class="flex h-[20.625rem] w-full flex-col  rounded-[1.25rem] bg-white px-4 pb-6 pt-3 small:h-full small:max-w-[20%]"
  >
    <h1 class="mb-5 text-base font-semibold text-[#1D2D35] tablet:text-xl">ყველა სიახლე</h1>
    <div class="news-scrollbar flex w-full flex-col overflow-y-scroll">
      <div class="flex h-full w-full flex-col gap-4 py-2" v-for="item in NewsConfig" :key="item.id">
        <div class="flex items-center gap-2">
          <IconDate />
          <p class="text-[0.75rem] font-bold text-[#585EE3]">{{ item.time }}</p>
        </div>
        <p class="text-sm text-[#1D2D35]">{{ item.description }}</p>
        <hr />
      </div>
    </div>
  </div>
</template>
