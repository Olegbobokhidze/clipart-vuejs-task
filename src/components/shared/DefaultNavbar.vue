<script lang="ts" setup>
import { useWindowSize } from '@vueuse/core'
import { NavbarConfig } from '@/config/NavbarConfig'

import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import IconLogo from '@/components/icons/IconLogo.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconBurgerMenu from '@/components/icons/IconBurgerMenu.vue'

import useBurgerMenu from '@/composables/useBurgerMenu'
const { width } = useWindowSize()

const { isMenuOpen, toggleMenu } = useBurgerMenu()
</script>

<template>
  <div
    class="fixed top-0 z-50 flex h-[5rem] w-full items-center justify-between bg-white px-4 tablet:px-14"
  >
    <div class="flex w-[7rem] sm:w-fit"><IconLogo /></div>
    <div class="flex gap-2">
      <div v-if="width >= 1024" class="flex  items-center justify-center gap-2">
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F8FF]">
            <IconInstagram />
          </div>
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F8FF]">
            <IconFacebook />
          </div>
        </div>
      <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F8FF]">
        <IconSearch />
      </div>
      <div
        @click="toggleMenu"
        class="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F8FF]"
      >
        <IconBurgerMenu />
      </div>
    </div>
    <teleport to="div" v-if="width < 1240">
      <div
        class="fixed left-0 z-[49] h-screen w-full bg-white px-4 pt-[7.25rem] duration-300 ease-in tablet:px-14"
        :class="isMenuOpen ? 'top-0' : 'top-[-100%]'"
      >
        <ul class="mb-9 flex flex-col gap-8 font-semibold text-[#657178]">
          <li v-for="item in NavbarConfig" :key="item.id">{{ item.title }}</li>
        </ul>
        <div v-if="width < 1024" class="flex w-full items-center justify-center gap-2">
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F8FF]">
            <IconInstagram />
          </div>
          <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#F5F8FF]">
            <IconFacebook />
          </div>
        </div>
      </div>
    </teleport>
  </div>
</template>
